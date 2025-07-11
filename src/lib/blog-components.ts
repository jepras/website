import fs from 'fs';
import path from 'path';

// Type for blog components
export type BlogComponents = Record<string, React.ComponentType<any>>;

// Function to dynamically import all components from the blog-components directory
export async function getBlogComponents(): Promise<BlogComponents> {
  const componentsDir = path.join(process.cwd(), 'src/components/blog-components');
  const components: BlogComponents = {};

  try {
    // Read all directories in the blog-components folder
    const componentFolders = fs.readdirSync(componentsDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('.'))
      .map(dirent => dirent.name);

    // Import each component
    for (const folderName of componentFolders) {
      try {
        console.log(`Attempting to import component from: ${folderName}`);
        
        // Try to import the component from its index file
        const componentModule = await import(`@/components/blog-components/${folderName}`);
        const Component = componentModule.default;
        
        if (Component) {
          // Use the folder name as the component name (PascalCase)
          const componentName = folderName
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join('');
          
          console.log(`Successfully imported component: ${componentName}`);
          components[componentName] = Component;
        } else {
          console.warn(`Component ${folderName} has no default export`);
        }
      } catch (error) {
        console.error(`Failed to import component from ${folderName}:`, error);
      }
    }
  } catch (error) {
    console.warn('Failed to read blog-components directory:', error);
  }

  return components;
}

// Alternative: Static imports for better TypeScript support
// You can add your components here as you create them
export const staticBlogComponents: BlogComponents = {
  // Components will be added here automatically when you create them
  // Example:
  // AnimatedSystemDiagram: (await import('@/components/blog-components/AnimatedSystemDiagram')).default,
}; 