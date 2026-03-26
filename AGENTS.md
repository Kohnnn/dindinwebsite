# Agent Guidelines for Personal Website Repository

This document provides guidelines for AI agents working on this Next.js personal portfolio website repository.

## Build, Lint, and Test Commands

### Available Scripts
- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint on all files

### Running Tests
Currently, this repository does not have a testing framework configured. To run a single test when tests are added:
- With Jest: `npm test -- -t "test name"`
- With Vitest: `npx vitest run -t "test name"`

### Code Formatting
- Uses ESLint with Next.js TypeScript configuration
- Formatting can be run with: `npx eslint . --fix`
- No separate formatter like Prettier is configured

## Code Style Guidelines

### File Organization
- Follow Next.js 14 App Router conventions
- Components in `/src/components`
- Page files in `/src/app`
- Shared utilities in `/src/lib`
- Data files in `/src/data`
- Styles in `/src/app/globals.css` or module CSS files

### TypeScript Usage
- Use strict typing as enforced by `tsconfig.json`
- Prefer interfaces for object shapes, types for unions/maps
- Avoid `any` type; use `unknown` when type is uncertain
- Define explicit return types for functions
- Use React.FC for component types when appropriate

### Import Conventions
1. React imports first
2. Next.js imports second
3. Third-party library imports third
4. Internal imports last (absolute paths preferred)
5. Sort imports alphabetically within each group
6. Use `@/` alias for absolute imports from src root

Example:
```typescript
import React from 'react';
import Link from 'next/link';
import framerMotion from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useResume } from '@/lib/hooks/use-resume';
```

### Component Structure
- Use functional components with arrow functions or regular function declarations
- Export components as default or named exports
- Use TypeScript props interfaces
- Destructure props in function parameters
- Keep components small and focused
- Use early returns for conditional rendering

### Styling Guidelines
- Uses Tailwind CSS for utility-first styling
- Apply utility classes in logical order: layout, spacing, typography, visual effects
- Use Tailwind's `@apply` directive sparingly for component extraction
- For complex styles, consider CSS modules or styled-jsx
- Maintain consistent spacing using Tailwind's spacing scale (4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64)
- Use semantic color names from Tailwind config when available

### Naming Conventions
- Components: PascalCase (e.g., `SkillMarquee.tsx`)
- Functions and variables: camelCase (e.g., `handleFormSubmit`)
- Constants: UPPER_SNAKE_CASE (e.g., `MAX_ITEMS`)
- Files: kebab-case for non-component files (e.g., `utils.ts`)
- Component files: PascalCase (e.g., `Nav.tsx`)
- Types and interfaces: PascalCase (e.g., `ExperienceItem`)

### Error Handling
- Use try/catch for asynchronous operations
- Handle promise rejections appropriately
- Display user-friendly error messages in UI
- Log errors to console in development only
- Use React Error Boundaries for component-level error handling (consider implementing)
- Validate form inputs and API responses

### Performance Considerations
- Use `React.memo()` for expensive components that re-render frequently
- Implement `useCallback` and `useMemo` for performance optimization
- Lazy load components with `next/dynamic` when appropriate
- Optimize images using Next.js Image component
- Limit use of barrel exports (`index.js` files)

### Git Practices
- Make small, focused commits
- Write clear commit messages in present tense
- Reference issues in commit messages when applicable
- Keep commits atomic (one logical change per commit)
- Avoid committing generated files (like .next/, node_modules/)

### Documentation
- Comment complex logic or non-obvious solutions
- Use JSDoc for exported functions and components
- Update README.md when adding significant features
- Document environment variables in README.md
- Keep code self-documenting with clear naming

### Specific to This Project
- Tailwind configuration: Review `tailwind.config.ts` for custom colors and plugins
- Font loading: Uses Next.js font optimization with Be Vietnam Pro
- Animation library: Uses Framer Motion for animations
- Email service: Uses Resend for sending emails (see Contact component)
- Icons: Uses Lucide React for icons

## Additional Notes

This portfolio website follows modern Next.js practices with:
- App Router for routing and layouts
- Server Components by default
- Client Components marked with "use client"
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations

When making changes:
1. Ensure responsive design works on mobile and desktop
2. Check accessibility (color contrast, alt text, semantic HTML)
3. Verify performance isn't degraded
4. Test in development mode before building
5. Run linting before submitting changes