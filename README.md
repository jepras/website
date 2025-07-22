# Jeppe Rasmussen - Personal Website

A modern, responsive personal website and blog built with Next.js, TypeScript, and Tailwind CSS. This project showcases my work, thoughts on AI and software development, and serves as a digital portfolio.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, TypeScript, and Tailwind CSS
- **MDX Blog**: Rich content authoring with MDX support for interactive components
- **Custom Components**: Extensive library of reusable UI components including:
  - Interactive charts and diagrams
  - Animated system diagrams
  - Tech stack bento grid
  - Accordions and collapsible sections
  - Code blocks with syntax highlighting
  - Table of contents
  - Hover cards and tooltips
- **Responsive Design**: Mobile-first design with dark mode support
- **Performance Optimized**: Fast loading with Next.js optimizations
- **SEO Friendly**: Built-in SEO features and metadata management

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with custom styling
- **Content**: MDX with next-mdx-remote
- **Icons**: Lucide React
- **Package Manager**: pnpm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
website/
├── content/
│   └── blog/                 # MDX blog posts
├── public/                   # Static assets
├── src/
│   ├── app/                  # Next.js app router pages
│   │   ├── about/           # About page
│   │   ├── blog/            # Blog listing and individual posts
│   │   └── layout.tsx       # Root layout
│   ├── components/
│   │   ├── blog-components/ # Custom MDX components
│   │   ├── ui/              # Reusable UI components
│   │   ├── Header.tsx       # Site header
│   │   └── Footer.tsx       # Site footer
│   ├── lib/                 # Utility functions
│   └── types/               # TypeScript type definitions
├── tailwind.config.js       # Tailwind configuration
└── next.config.js           # Next.js configuration
```

## 📝 Writing Blog Posts

Blog posts are written in MDX format and stored in the `content/blog/` directory. Each post can use custom components from `src/components/blog-components/`.

### Example Blog Post Structure

```mdx
---
title: "My Blog Post"
date: "2024-01-01"
description: "A brief description of the post"
---

# My Blog Post

This is a regular markdown post with support for custom components.

<CalloutBox type="info">
  This is a custom callout component!
</CalloutBox>

<AnimatedSystemDiagram />
```

### Available Custom Components

- `<CalloutBox>` - Highlighted information boxes
- `<AnimatedSystemDiagram>` - Interactive system diagrams
- `<TechStackBento>` - Technology showcase grid
- `<CodeBlock>` - Syntax-highlighted code blocks
- `<TableOfContents>` - Auto-generated table of contents
- `<Accordion>` - Collapsible content sections
- `<MermaidDiagram>` - Mermaid.js diagrams
- `<InteractiveChart>` - Interactive data visualizations

## 🎨 Customization

### Styling

The project uses a custom design system built on top of Tailwind CSS. Custom styling should be added to the `/ui` folder components rather than individual blog components to maintain consistency.

### Colors and Theme

The color scheme is defined in `tailwind.config.js` using CSS custom properties for easy theming.

### Adding New Components

1. Create your component in `src/components/blog-components/`
2. Export it from the component's `index.ts`
3. Import and use it in your MDX files

## 📜 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🌐 Deployment

This project can be deployed to any platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **Railway**
- **AWS Amplify**

## 🤝 Contributing

This is a personal project, but if you find any issues or have suggestions, feel free to open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **LinkedIn**: [linkedin.com/in/jepras](https://linkedin.com/in/jepras)
- **GitHub**: [github.com/jepras](https://github.com/jepras)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS 