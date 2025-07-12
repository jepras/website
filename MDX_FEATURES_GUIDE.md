# Advanced MDX Features Guide

This guide explains how to implement and use advanced MDX features in your blog to create engaging, interactive content.

## 🎯 Features Overview

1. **Toggle Lists** - Collapsible sections for organizing content
2. **Hover Cards** - Additional context on hover
3. **Callout Boxes** - Highlighted information boxes
4. **Table of Contents** - Auto-generated navigation
5. **Blog Introductions** - Engaging post starters
6. **Styled Subheaders** - Visual hierarchy components

## 📦 Components Created

### 1. CollapsibleSection
**Purpose**: Create expandable/collapsible content sections

**Usage in MDX**:
```mdx
<CollapsibleSection title="Section Title" defaultOpen={false}>
  Your content here...
  
  You can include:
  - Markdown content
  - Other components
  - Code blocks
  - Lists
</CollapsibleSection>
```

**Props**:
- `title` (string): The clickable header text
- `defaultOpen` (boolean): Whether section starts expanded
- `className` (string): Additional CSS classes

### 2. BlogHoverCard
**Purpose**: Show additional information on hover

**Usage in MDX**:
```mdx
<BlogHoverCard 
  trigger={
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium border border-emerald-500/30">
      i
    </span>
  }
>
  <div className="space-y-2">
    <h4 className="font-semibold text-white">Title</h4>
    <p className="text-sm text-gray-300">
      Additional information appears here when hovering.
    </p>
  </div>
</BlogHoverCard>
```

**Props**:
- `trigger` (ReactNode): Element that triggers the hover card
- `children` (ReactNode): Content to show in the hover card
- `className` (string): Additional CSS classes for the card
- `triggerClassName` (string): Additional CSS classes for the trigger

### 3. CalloutBox
**Purpose**: Highlight important information with different styles

**Usage in MDX**:
```mdx
<CalloutBox type="info" title="Information">
  This is an informational callout box.
</CalloutBox>

<CalloutBox type="warning" title="Warning">
  This is a warning callout box.
</CalloutBox>

<CalloutBox type="success" title="Success">
  This is a success callout box.
</CalloutBox>

<CalloutBox type="error" title="Error">
  This is an error callout box.
</CalloutBox>
```

**Props**:
- `type` ('info' | 'warning' | 'success' | 'error'): Visual style
- `title` (string): Optional title for the callout
- `children` (ReactNode): Content of the callout
- `className` (string): Additional CSS classes

### 4. TableOfContents
**Purpose**: Auto-generated navigation from headings

**Usage in MDX**:
```mdx
<TableOfContents 
  headings={[
    { id: "introduction", text: "Introduction", level: 2 },
    { id: "getting-started", text: "Getting Started", level: 2 },
    { id: "advanced-features", text: "Advanced Features", level: 2 },
    { id: "conclusion", text: "Conclusion", level: 2 }
  ]}
  title="Table of Contents"
/>
```

**Props**:
- `headings` (array): Array of heading objects with id, text, and level
- `title` (string): Title for the TOC (default: "Table of Contents")
- `className` (string): Additional CSS classes

### 5. BlogIntro
**Purpose**: Create engaging blog post introductions

**Usage in MDX**:
```mdx
<BlogIntro 
  title="Your Blog Post Title"
  description="A compelling description of your post"
  readTime="5 min"
  author="Your Name"
  tags={["tag1", "tag2", "tag3"]}
  date="2024-01-15"
  variant="featured"
/>
```

**Props**:
- `title` (string): Post title
- `description` (string): Post description
- `readTime` (string): Estimated reading time
- `author` (string): Author name
- `tags` (string[]): Array of tags
- `date` (string): Publication date
- `variant` ('default' | 'featured' | 'minimal'): Visual style
- `className` (string): Additional CSS classes

### 6. Subheader
**Purpose**: Create styled section headers

**Usage in MDX**:
```mdx
<Subheader level={2} variant="gradient">Gradient Subheader</Subheader>
<Subheader level={3} variant="accent">Accent Subheader</Subheader>
<Subheader level={4} variant="subtle">Subtle Subheader</Subheader>
```

**Props**:
- `level` (1-6): Heading level (h1-h6)
- `variant` ('default' | 'accent' | 'subtle' | 'gradient'): Visual style
- `children` (ReactNode): Header text
- `className` (string): Additional CSS classes
- `id` (string): HTML id attribute

## 🎨 Styling and Customization

### Color Scheme
All components use a dark theme with:
- Background: `bg-black` (main), `bg-gray-900` (components)
- Text: `text-white` (primary), `text-gray-400` (secondary)
- Accent: `text-emerald-400` (brand color)
- Borders: `border-gray-700` (default), `border-emerald-500/20` (accent)

### Responsive Design
Components are built with responsive design in mind:
- Mobile-first approach
- Flexible layouts that adapt to screen size
- Touch-friendly interactions

### Accessibility
All components include:
- Proper ARIA labels
- Keyboard navigation support
- Focus management
- Screen reader compatibility

## 🚀 Implementation Tips

### 1. Content Organization
- Use collapsible sections for detailed explanations
- Implement hover cards for contextual information
- Use callout boxes to highlight important points
- Create visual hierarchy with styled subheaders

### 2. Performance Considerations
- Lazy load heavy components
- Use proper image optimization
- Implement code splitting for large components
- Consider the impact on Core Web Vitals

### 3. Best Practices
- Don't overuse interactive elements
- Ensure content is accessible without JavaScript
- Test on different devices and browsers
- Maintain consistent styling across components

## 📝 Example Blog Post Structure

```mdx
---
title: "Your Blog Post"
date: "2024-01-15"
description: "Description"
tags: ["tag1", "tag2"]
---

<BlogIntro 
  title="Your Blog Post"
  description="Description"
  readTime="5 min"
  author="Your Name"
  tags={["tag1", "tag2"]}
  date="2024-01-15"
/>

## Introduction

<TableOfContents 
  headings={[
    { id: "intro", text: "Introduction", level: 2 },
    { id: "main", text: "Main Content", level: 2 }
  ]}
/>

## Main Content

<Subheader level={2} variant="gradient">Main Section</Subheader>

<CalloutBox type="info" title="Important">
  Key information here.
</CalloutBox>

<CollapsibleSection title="Details">
  Detailed information here.
</CollapsibleSection>

<BlogHoverCard 
  trigger={<span className="text-emerald-400 underline">term</span>}
>
  Definition of the term.
</BlogHoverCard>
```

## 🔧 Technical Implementation

### Component Registration
Components are automatically registered in `src/lib/blog-components.ts` and made available to MDX files.

### Styling
All components use Tailwind CSS classes and are styled to match your existing design system.

### State Management
Interactive components use React hooks for state management:
- `useState` for local component state
- `useEffect` for side effects and lifecycle management

## 🎯 Use Cases

### Educational Content
- Use collapsible sections for step-by-step tutorials
- Implement hover cards for term definitions
- Use callout boxes for tips and warnings

### Technical Documentation
- Create table of contents for long articles
- Use callout boxes for code examples
- Implement hover cards for API references

### Interactive Stories
- Use blog intros for engaging starts
- Implement collapsible sections for story branches
- Use hover cards for character information

## 🚀 Next Steps

1. **Start Simple**: Begin with basic components like callout boxes
2. **Experiment**: Try different combinations and styles
3. **Customize**: Adapt components to match your brand
4. **Extend**: Create new components based on your needs

Remember, the goal is to enhance the reading experience, not to overwhelm it. Use these features thoughtfully and always prioritize content quality over flashy interactions. 