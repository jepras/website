# Blog Components

This directory contains reusable components that can be used in MDX blog posts. Each component should be in its own folder.

## Structure

```
blog-components/
├── AnimatedSystemDiagram/
│   ├── AnimatedSystemDiagram.tsx      # Main component
│   ├── AnimatedSystemDiagram.module.css # Styles
│   └── index.ts                       # Export file
├── AnotherComponent/
│   ├── AnotherComponent.tsx
│   ├── AnotherComponent.module.css
│   └── index.ts
└── README.md
```

## How to Add a New Component

1. **Create a new folder** in `src/components/blog-components/` with your component name (kebab-case)
2. **Create the component files**:
   - `ComponentName.tsx` - Your React component
   - `ComponentName.module.css` - Your styles (optional)
   - `index.ts` - Export file

3. **Example index.ts**:
   ```typescript
   export { default } from './ComponentName';
   ```

4. **That's it!** The component will be automatically available in all MDX blog posts.

## Usage in MDX

Once you create a component, you can use it in any MDX file like this:

```mdx
# My Blog Post

Here's some content...

<AnimatedSystemDiagram />

More content...
```

## Component Naming

- **Folder name**: Use kebab-case (e.g., `animated-system-diagram`)
- **Component name in MDX**: Automatically converted to PascalCase (e.g., `<AnimatedSystemDiagram />`)

## Example Component Structure

```
AnimatedSystemDiagram/
├── AnimatedSystemDiagram.tsx
├── AnimatedSystemDiagram.module.css
└── index.ts
```

The system automatically discovers all components in this directory and makes them available in your MDX files without any manual configuration needed! 