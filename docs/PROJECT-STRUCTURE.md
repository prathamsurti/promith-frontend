# Orbai React App - Project Structure

## 📁 Overview

This is a professionally structured React application built with TypeScript, Vite, Tailwind CSS v4, and Framer Motion. The architecture emphasizes modularity, reusability, and maintainability.

## 🏗️ Directory Structure

```
orbai-react-app/
├── public/                      # Static assets
├── src/
│   ├── animations/              # ✨ Centralized animation variants
│   │   ├── index.ts            # Barrel export for all animations
│   │   └── whyChooseUsSection.ts
│   │
│   ├── assets/                  # Images, fonts, icons
│   │   └── images/
│   │
│   ├── components/              # React components
│   │   ├── icons/              # SVG icon components
│   │   ├── layout/             # Layout components (Header, Footer)
│   │   ├── sections/           # Page section components
│   │   │   ├── WhyChooseUs/   # 📦 Modular component example
│   │   │   │   ├── index.tsx           # Barrel export
│   │   │   │   ├── WhyChooseUsSection.tsx  # Main component
│   │   │   │   ├── animations.ts       # Animation re-exports
│   │   │   │   ├── types.ts            # Type definitions
│   │   │   │   ├── styles.css          # Component styles
│   │   │   │   ├── README.md           # Component documentation
│   │   │   │   └── components/         # Sub-components
│   │   │   │       ├── index.ts
│   │   │   │       ├── BenefitCard.tsx
│   │   │   │       ├── DefaultBenefitCard.tsx
│   │   │   │       ├── GrowthBenefitCard.tsx
│   │   │   │       ├── AnalyticsGraphic.tsx
│   │   │   │       └── SyncGraphic.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   └── CTASection.tsx
│   │   │
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Textarea.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Badge.tsx
│   │   │
│   │   └── ErrorBoundary.tsx   # Error boundary component
│   │
│   ├── data/                    # Static data, constants
│   ├── hooks/                   # Custom React hooks
│   ├── layouts/                 # Page layouts
│   ├── pages/                   # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   │
│   ├── router/                  # Routing configuration
│   ├── styles/                  # Global styles
│   ├── types/                   # Global TypeScript types
│   ├── utils/                   # Utility functions
│   │
│   ├── App.tsx                  # Root App component
│   ├── App.css                  # App-specific styles
│   ├── index.css                # Global styles with Tailwind
│   └── main.tsx                 # Application entry point
│
├── docs/                        # Project documentation
├── .gitignore
├── eslint.config.js            # ESLint configuration
├── index.html                   # HTML entry point
├── package.json                 # Dependencies and scripts
├── postcss.config.js           # PostCSS configuration
├── README.md                    # Main project README
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── tsconfig.app.json           # App TypeScript config
├── tsconfig.node.json          # Node TypeScript config
└── vite.config.ts              # Vite configuration
```

## 🎨 Design System

### Colors
- **Base**: `#f5f5f5` (Neumorphism)
- **Primary**: `#8855ff` (Purple)
- **Shadows**: `#d1d1d1` (dark), `#ffffff` (light)

### Typography
- **Headings**: Bold, gradient text effects
- **Body**: Gray-600 for descriptions
- **Sizes**: Responsive with Tailwind (text-4xl → text-6xl)

### Animations
- **Library**: Framer Motion
- **Style**: Spring physics, smooth transitions
- **Performance**: `useInView` for optimization

## 📦 Component Architecture

### Modular Component Structure (Best Practice)

For complex components, use this structure:

```
ComponentName/
├── index.tsx                    # Barrel export: export { default } from './ComponentName';
├── ComponentName.tsx            # Main component logic
├── animations.ts                # Animation re-exports from /src/animations
├── types.ts                     # TypeScript interfaces/types
├── styles.css                   # Component-specific styles
├── README.md                    # Component documentation
└── components/                  # Sub-components
    ├── index.ts                 # Barrel export for sub-components
    ├── SubComponent1.tsx
    ├── SubComponent2.tsx
    └── SubComponent3.tsx
```

### Simple Component Structure

For simple components:

```
ComponentName.tsx                # Single file with all logic
```

## 🔧 Tech Stack

- **React**: 19.1.1
- **TypeScript**: 5.9.3
- **Vite**: 7.1.7
- **Tailwind CSS**: 4.1.16
- **Framer Motion**: 12.23.24
- **React Router**: (version TBD)

## 📝 Naming Conventions

### Files
- **Components**: PascalCase (`HeroSection.tsx`)
- **Utilities**: camelCase (`formatDate.ts`)
- **Types**: PascalCase (`User.ts`)
- **Styles**: kebab-case or matching component (`HeroSection.css` or `styles.css`)

### Code
- **Components**: PascalCase (`const HeroSection = () => {}`)
- **Functions**: camelCase (`const handleClick = () => {}`)
- **Constants**: UPPER_SNAKE_CASE (`const MAX_ITEMS = 10`)
- **Interfaces/Types**: PascalCase (`interface UserProps {}`)

## 🎯 Import Organization

```tsx
// 1. External libraries
import { motion } from 'framer-motion';
import { useState } from 'react';

// 2. Internal utilities/hooks
import { useAuth } from '@/hooks/useAuth';

// 3. Components
import { Button } from '@/components/ui/Button';

// 4. Types
import type { User } from '@/types/User';

// 5. Styles
import './styles.css';

// 6. Local imports (relative)
import { SubComponent } from './components/SubComponent.js';
```

## 🚀 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
```

## 📚 Best Practices

### 1. Separation of Concerns
- **Logic**: TypeScript files
- **Styles**: CSS files
- **Animations**: Animation files
- **Types**: Type definition files

### 2. Component Organization
- Keep components small and focused
- Extract complex logic into custom hooks
- Use TypeScript for type safety
- Document complex components with README

### 3. Performance
- Use `React.memo` for expensive components
- Lazy load routes and heavy components
- Optimize animations with `useInView`
- Use proper key props in lists

### 4. Accessibility
- Use semantic HTML
- Include ARIA labels
- Ensure keyboard navigation
- Test with screen readers

### 5. Code Style
- Use ESLint and Prettier
- Follow TypeScript strict mode
- Write descriptive variable names
- Add JSDoc comments for complex functions

## 🔄 State Management

- **Local State**: useState, useReducer
- **Global State**: (TBD - Context API, Zustand, or Redux)
- **Server State**: (TBD - React Query or SWR)

## 🧪 Testing

(TBD - Vitest, React Testing Library)

## 📖 Documentation

Each major component should have:
- README.md with usage examples
- JSDoc comments for props
- Type definitions in separate file
- Inline comments for complex logic

## 🤝 Contributing

1. Follow the established directory structure
2. Use TypeScript for all new files
3. Add proper type definitions
4. Document complex components
5. Test in multiple browsers
6. Ensure responsive design

## 📄 License

(TBD)
