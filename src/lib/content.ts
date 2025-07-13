import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';

const postsDirectory = path.join(process.cwd(), 'content/blog');

// Types for Table of Contents
export interface TocItem {
  id: string;
  text: string;
  level: number;
  children?: TocItem[];
}

export interface TocConfig {
  minLevel?: number;
  maxLevel?: number;
  enabled?: boolean;
}

// Function to extract headers from MDX content
function extractHeaders(content: string, config: TocConfig = {}): TocItem[] {
  const { minLevel = 2, maxLevel = 4 } = config;
  const headers: TocItem[] = [];
  
  // Split content into lines and find headers
  const lines = content.split('\n');
  
  lines.forEach((line, index) => {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)$/);
    if (headerMatch) {
      const level = headerMatch[1].length;
      
      // Only include headers within the specified range
      if (level >= minLevel && level <= maxLevel) {
        const text = headerMatch[2].trim();
        const id = generateHeaderId(text);
        
        headers.push({
          id,
          text,
          level,
        });
      }
    }
  });
  
  return headers;
}

// Function to generate a URL-friendly ID from header text
// This matches the logic used by rehype-slug
function generateHeaderId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters except hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
}

// Function to automatically import all blog components
async function getBlogComponents() {
  const componentsDir = path.join(process.cwd(), 'src/components/blog-components');
  const components: Record<string, any> = {};

  try {
    // Read all directories in the blog-components folder
    const componentFolders = fs.readdirSync(componentsDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('.'))
      .map(dirent => dirent.name);

    // Import each component
    for (const folderName of componentFolders) {
      try {
        // Import the component from its index file
        const componentModule = await import(`@/components/blog-components/${folderName}`);
        const Component = componentModule.default;
        
        if (Component) {
          // Use the folder name as the component name (PascalCase)
          const componentName = folderName
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join('');
          
          components[componentName] = Component;
        }
      } catch (error) {
        console.warn(`Failed to import component from ${folderName}:`, error);
      }
    }
  } catch (error) {
    console.warn('Failed to read blog-components directory:', error);
  }

  return components;
}

export function getSortedPostsData(): PostListItem[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get id
    const id = fileName.replace(/\.mdx$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as { 
        date: string; 
        title: string; 
        description?: string; 
        tags?: string[];
        category?: string;
      }),
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(id: string, defaultTocConfig?: TocConfig) {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Get ToC config from frontmatter or use defaults
  const frontmatterData = matterResult.data as {
    date: string;
    title: string;
    description?: string;
    tags?: string[];
    category?: string;
    tocConfig?: TocConfig;
  };

  const tocConfig = {
    minLevel: 2,
    maxLevel: 4,
    enabled: true,
    ...defaultTocConfig,
    ...frontmatterData.tocConfig,
  };

  // Extract headers for table of contents
  const toc = tocConfig.enabled ? extractHeaders(matterResult.content, tocConfig) : [];

  // Get all available blog components
  const blogComponents = await getBlogComponents();

  const result = await compileMDX<{
    title: string;
    date: string;
    description?: string;
    tags?: string[];
    category?: string;
  }>({
    source: matterResult.content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [rehypeSlug],
      },
    },
    components: blogComponents
  });

  return {
    id,
    content: result.content,
    toc,
    tocConfig,
    ...(result.frontmatter),
  };
}

// This type definition is a basic example. You might want to create a more detailed one.
export type PostData = {
  id: string;
  date: string;
  title: string;
  description?: string;
  tags?: string[];
  category?: string;
  tocConfig?: TocConfig;
  content: React.ReactNode; // Or a more specific type for MDX content
  toc: TocItem[];
};

// Type for blog list (without content and toc)
export type PostListItem = Omit<PostData, 'content' | 'toc'>; 