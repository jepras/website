# Personal Blog - Project Planning

## Project Overview
Building a modern, feature-rich personal blog inspired by Josh W. Comeau's approach, focusing on content creation, developer experience, and interactive elements.

## Goals & Scope

### Primary Goals
- Create a platform for publishing technical blog posts with rich interactive content
- Implement MDX for combining markdown with React components
- Build a performant, accessible, and SEO-friendly blog
- Establish a foundation for future content creation and expansion

### Content Strategy
- Technical articles with interactive demos and code examples
- Tutorial-style posts with embedded playgrounds
- Personal projects and case studies

## Tech Stack

### Core Framework
- **Next.js 15** - React framework with App Router
- **React 19** - UI library with Server Components
- **TypeScript** - Type safety and developer experience
- **MDX 3.x** - Markdown + React components for content

### Styling & Design
- **Tailwind CSS** - Utility-first CSS framework (simpler alternative to Linaria)
- **CSS Modules** - Component-scoped styles when needed
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library for micro-interactions

### Content & Code
- **next-mdx-remote** - MDX processing
- **Gray Matter** - Frontmatter parsing

### Development & Build
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Vercel** - Deployment platform

### Optional Future Additions
- **Fathom/Plausible** - Privacy-focused analytics
- **React Spring** - Additional animation capabilities
- **PartyKit** - Real-time features (if needed)

## Architecture & Structure

### File Organization
```
src/
├── app/                    # Next.js App Router
│   ├── blog/              # Blog routes
│   ├── about/             # About page
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── mdx/              # MDX-specific components
│   ├── ui/               # Base UI components
│   └── blog/             # Blog-specific components
├── content/              # Blog post MDX files
│   └── blog/
├── lib/                  # Utilities and helpers
├── styles/              # CSS modules and theme
└── types/               # TypeScript definitions
```

### Content Management
- **File-based**: Blog posts stored as MDX files in `/content/blog/`
- **Frontmatter**: Metadata (title, date, description, tags) in YAML
- **Git workflow**: Version control for content and code together
- **Build-time processing**: Static generation for performance

### Component Strategy
- **Server Components by default**: Leverage React Server Components
- **Client Components when needed**: Interactivity and animations
- **MDX Components**: Custom components for rich content
- **Design System**: Consistent, reusable UI components

## Performance & SEO

### Performance Strategy
- Static Site Generation (SSG) for blog posts
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Minimal client-side JavaScript bundle

### SEO Optimization
- Semantic HTML structure
- Open Graph and Twitter Card meta tags
- JSON-LD structured data
- XML sitemap generation
- RSS feed
- Optimized page titles and descriptions

## Accessibility

### Standards
- WCAG 2.1 AA compliance
- Semantic HTML elements
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Screen reader compatibility

### Implementation
- rem-based media queries
- Focus management
- Color contrast compliance
- Skip links
- ARIA labels where needed

## Development Phases

### Phase 1: Foundation (MVP)
- Basic Next.js setup with TypeScript
- MDX integration and blog post rendering
- Core layout and navigation
- Basic styling with Tailwind
- Essential pages (home, blog, about)

### Phase 2: Content Features
- MDX components for rich content
- Blog post listing and pagination
- Tags and categorization
- RSS feed generation

### Phase 3: Enhanced Experience
- Interactive demos and widgets
- Code playgrounds with Sandpack
- Advanced animations
- Search functionality
- Performance optimization

### Phase 4: Polish & Features
- Advanced MDX components
- Newsletter signup
- Comment system (if desired)
- Analytics integration
- Advanced SEO features

## Deployment & Infrastructure

### Hosting
- **Vercel** - Primary hosting platform
- Automatic deployments from Git
- Preview deployments for PRs
- Edge functions for API routes

### Domain & SSL
- Custom domain setup
- Automatic SSL certificates
- CDN distribution

### Monitoring
- Core Web Vitals tracking
- Error monitoring
- Performance metrics
- Analytics (privacy-focused)

## Success Metrics

### Technical Metrics
- Lighthouse score > 95
- First Contentful Paint < 1.5s
- Cumulative Layout Shift < 0.1
- Time to Interactive < 3s

### Content Metrics
- Regular publishing schedule
- Reader engagement
- Social sharing
- SEO rankings for target keywords

## Risk Mitigation

### Technical Risks
- **App Router stability**: Monitor Next.js updates and community feedback
- **MDX complexity**: Start simple, gradually add features
- **Performance regression**: Regular auditing and monitoring

### Content Risks
- **Writing consistency**: Establish content calendar and workflow
- **Technical accuracy**: Peer review and testing of code examples
- **Maintenance burden**: Keep dependencies minimal and updated

## Future Considerations

### Potential Expansions
- Newsletter platform integration
- Course or tutorial series
- Community features
- Multi-language support
- Mobile app or PWA

### Technology Evolution
- React Server Components adoption
- New animation libraries
- Improved MDX tooling
- AI-powered features

---

*This planning document should be reviewed and updated as the project evolves and requirements change.*

## Own added
- The website always need to be responsive for both mobile and different web screen sizes.
- The website need to tank very well in Lighthouse tests. 
- The code should use global variables at all times, so that we easily can test new colours. 
 