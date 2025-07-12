import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';

const postsDirectory = path.join(process.cwd(), 'content/blog');

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

export function getSortedPostsData() {
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

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

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
    },
    components: blogComponents
  });

  return {
    id,
    content: result.content,
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
  content: React.ReactNode; // Or a more specific type for MDX content
}; 