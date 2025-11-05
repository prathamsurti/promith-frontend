# Phase 1: Core Infrastructure

## 🎯 Objectives
- Set up routing with React Router
- Create main layout components (Header & Footer)
- Implement theme system and global styles
- Create error boundaries
- Set up utility functions and constants

## 📋 Tasks Breakdown

### 1. Global Styles & Theme Setup

#### `src/styles/globals.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom CSS Variables */
@layer base {
  :root {
    /* Colors */
    --color-primary: #8855ff;
    --color-secondary: #6366f1;
    --color-dark: #0a0a0a;
    --color-light: #f5f5f5;
    
    /* Spacing */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    
    /* Typography */
    --font-sans: 'Inter', sans-serif;
    --font-display: 'Plus Jakarta Sans', sans-serif;
    --font-body: 'Satoshi', sans-serif;
    
    /* Transitions */
    --transition-fast: 150ms ease;
    --transition-base: 300ms ease;
    --transition-slow: 500ms ease;
  }
}

/* Base styles */
@layer base {
  * {
    @apply border-border;
  }
  
  body {
    @apply bg-white text-gray-900 font-sans antialiased;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-display font-bold;
  }
}
```

### 2. Routing Configuration

#### `src/App.tsx`
```typescript
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Changelog from './pages/Changelog';
import ChangelogDetail from './pages/ChangelogDetail';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="changelog" element={<Changelog />} />
          <Route path="changelog/:id" element={<ChangelogDetail />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### 3. Layout Components

#### `src/layouts/MainLayout.tsx`
```typescript
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
```

#### `src/layouts/Header.tsx`
```typescript
interface NavLink {
  label: string;
  href: string;
}

const Header = () => {
  const navLinks: NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/#services' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-display font-bold text-primary">
          Orbai
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
```

#### `src/layouts/Footer.tsx`
```typescript
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">Orbai</h3>
            <p className="text-gray-400">
              AI-powered automation solutions for modern businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/team" className="hover:text-white transition-colors">Team</a></li>
              <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/changelog" className="hover:text-white transition-colors">Changelog</a></li>
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>hello@orbai.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Orbai. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

### 4. Type Definitions

#### `src/types/index.ts`
```typescript
// Common Types
export interface NavLink {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export interface SocialLink {
  platform: 'twitter' | 'linkedin' | 'github' | 'instagram';
  url: string;
}

export interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
}

// Page Data Types
export interface MetaData {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}
```

### 5. Utility Functions

#### `src/utils/constants.ts`
```typescript
// Breakpoints
export const BREAKPOINTS = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Colors
export const COLORS = {
  primary: '#8855ff',
  secondary: '#6366f1',
  dark: '#0a0a0a',
  light: '#f5f5f5',
} as const;

// Transitions
export const TRANSITIONS = {
  fast: 150,
  base: 300,
  slow: 500,
} as const;

// Z-Index
export const Z_INDEX = {
  dropdown: 1000,
  modal: 2000,
  toast: 3000,
  tooltip: 4000,
} as const;
```

#### `src/utils/helpers.ts`
```typescript
// Class name utility
export const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

// Debounce function
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

// Format date
export const formatDate = (date: Date | string): string => {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// Clamp number
export const clamp = (num: number, min: number, max: number): number => {
  return Math.min(Math.max(num, min), max);
};
```

#### `src/utils/animations.ts`
```typescript
import { Variants } from 'framer-motion';

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Slide up animation
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Scale animation
export const scale: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

// Stagger children
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
```

### 6. Error Boundary

#### `src/components/ErrorBoundary.tsx`
```typescript
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-600 mb-8">
              {this.state.error?.message || 'An unexpected error occurred'}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-primary text-white px-6 py-3 rounded-lg"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

## ✅ Checklist

### Configuration
- [ ] Update `src/styles/globals.css` with Tailwind directives
- [ ] Add custom CSS variables
- [ ] Import Google Fonts (Inter, Plus Jakarta Sans)

### Routing
- [ ] Set up React Router in `App.tsx`
- [ ] Create route definitions
- [ ] Test navigation between pages

### Layouts
- [ ] Create `MainLayout` component
- [ ] Build `Header` with navigation
- [ ] Build `Footer` with links
- [ ] Add mobile menu functionality

### Types
- [ ] Define common interfaces in `types/index.ts`
- [ ] Create component prop types
- [ ] Add page data types

### Utils
- [ ] Create constants file
- [ ] Add helper functions
- [ ] Create animation variants
- [ ] Add error boundary

### Testing
- [ ] Test routing works
- [ ] Check responsive layout
- [ ] Verify header/footer display
- [ ] Test mobile menu (when added)

## 🚀 Next Steps (Phase 2)

After completing Phase 1, move to Phase 2: UI Component Library
- Button component with variants
- Input/Textarea components
- Card component
- Badge/Tag components
- Loading spinner
- Icon components

---

**Estimated Time**: 4-6 hours  
**Priority**: High  
**Dependencies**: Phase 0 (Setup) ✅
