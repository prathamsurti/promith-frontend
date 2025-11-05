# Design System

## 🎨 Color Palette

### Primary Colors
```typescript
const colors = {
  primary: {
    DEFAULT: '#8855ff',
    50: '#f5f0ff',
    100: '#ede5ff',
    200: '#dcd0ff',
    300: '#c4a8ff',
    400: '#a77aff',
    500: '#8855ff',    // Main primary
    600: '#7833ff',
    700: '#6820e8',
    800: '#5719c2',
    900: '#47179f',
  },
  
  secondary: {
    DEFAULT: '#6366f1',
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',    // Main secondary
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
  },
  
  dark: {
    DEFAULT: '#0a0a0a',
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#0a0a0a',    // Main dark
  },
  
  light: {
    DEFAULT: '#f5f5f5',
    50: '#fafafa',
    100: '#f5f5f5',    // Main light
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
  },
};
```

### Semantic Colors
```typescript
const semantic = {
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
};
```

---

## ✍️ Typography

### Font Families
```css
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-display: 'Plus Jakarta Sans', 'Inter', sans-serif;
--font-body: 'Satoshi', 'Inter', sans-serif;
--font-mono: 'Fira Code', 'Courier New', monospace;
```

### Font Sizes
```typescript
const fontSize = {
  xs: ['0.75rem', { lineHeight: '1rem' }],      // 12px
  sm: ['0.875rem', { lineHeight: '1.25rem' }],  // 14px
  base: ['1rem', { lineHeight: '1.5rem' }],     // 16px
  lg: ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
  xl: ['1.25rem', { lineHeight: '1.75rem' }],   // 20px
  '2xl': ['1.5rem', { lineHeight: '2rem' }],    // 24px
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
  '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px
  '5xl': ['3rem', { lineHeight: '1' }],          // 48px
  '6xl': ['3.75rem', { lineHeight: '1' }],       // 60px
  '7xl': ['4.5rem', { lineHeight: '1' }],        // 72px
};
```

### Font Weights
```typescript
const fontWeight = {
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
};
```

### Text Styles
```typescript
// Headings
const headings = {
  h1: 'font-display text-6xl font-bold',
  h2: 'font-display text-5xl font-bold',
  h3: 'font-display text-4xl font-semibold',
  h4: 'font-display text-3xl font-semibold',
  h5: 'font-display text-2xl font-medium',
  h6: 'font-display text-xl font-medium',
};

// Body text
const body = {
  large: 'font-body text-lg',
  base: 'font-body text-base',
  small: 'font-body text-sm',
};
```

---

## 📏 Spacing

### Spacing Scale
```typescript
const spacing = {
  0: '0',
  0.5: '0.125rem',   // 2px
  1: '0.25rem',      // 4px
  1.5: '0.375rem',   // 6px
  2: '0.5rem',       // 8px
  2.5: '0.625rem',   // 10px
  3: '0.75rem',      // 12px
  3.5: '0.875rem',   // 14px
  4: '1rem',         // 16px
  5: '1.25rem',      // 20px
  6: '1.5rem',       // 24px
  7: '1.75rem',      // 28px
  8: '2rem',         // 32px
  9: '2.25rem',      // 36px
  10: '2.5rem',      // 40px
  12: '3rem',        // 48px
  14: '3.5rem',      // 56px
  16: '4rem',        // 64px
  20: '5rem',        // 80px
  24: '6rem',        // 96px
  28: '7rem',        // 112px
  32: '8rem',        // 128px
};
```

### Container Widths
```typescript
const container = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};
```

---

## 📱 Breakpoints

```typescript
const screens = {
  xs: '320px',    // Mobile small
  sm: '640px',    // Mobile
  md: '768px',    // Tablet
  lg: '1024px',   // Desktop
  xl: '1280px',   // Desktop large
  '2xl': '1536px', // Desktop XL
};
```

### Usage in Tailwind
```html
<!-- Mobile first approach -->
<div class="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

---

## 🎭 Shadows

```typescript
const boxShadow = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
};
```

---

## 🎬 Animations

### Transitions
```typescript
const transitionDuration = {
  fast: '150ms',
  base: '300ms',
  slow: '500ms',
  slower: '700ms',
};

const transitionTimingFunction = {
  ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
};
```

### Framer Motion Variants
```typescript
// Fade animations
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3 }
  },
};

// Slide animations
export const slideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  },
};

export const slideDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  },
};

// Scale animations
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.3 }
  },
};

// Stagger animations
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};
```

---

## 🔘 Border Radius

```typescript
const borderRadius = {
  none: '0',
  sm: '0.125rem',    // 2px
  DEFAULT: '0.25rem', // 4px
  md: '0.375rem',    // 6px
  lg: '0.5rem',      // 8px
  xl: '0.75rem',     // 12px
  '2xl': '1rem',     // 16px
  '3xl': '1.5rem',   // 24px
  full: '9999px',
};
```

---

## 🎯 Z-Index Scale

```typescript
const zIndex = {
  auto: 'auto',
  0: '0',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
  dropdown: '1000',
  sticky: '1020',
  fixed: '1030',
  modalBackdrop: '1040',
  modal: '1050',
  popover: '1060',
  tooltip: '1070',
  toast: '1080',
};
```

---

## 🎨 Component Variants

### Button Styles
```typescript
const buttonVariants = {
  primary: 'bg-primary text-white hover:bg-primary/90',
  secondary: 'bg-secondary text-white hover:bg-secondary/90',
  outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  ghost: 'text-primary hover:bg-primary/10',
  link: 'text-primary underline-offset-4 hover:underline',
};

const buttonSizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};
```

### Card Styles
```typescript
const cardVariants = {
  default: 'bg-white border border-gray-200',
  bordered: 'bg-white border-2 border-gray-300',
  elevated: 'bg-white shadow-lg',
  glass: 'bg-white/80 backdrop-blur-md border border-white/20',
};
```

### Badge Styles
```typescript
const badgeVariants = {
  default: 'bg-gray-100 text-gray-800',
  primary: 'bg-primary/10 text-primary',
  success: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
  error: 'bg-red-100 text-red-800',
  info: 'bg-blue-100 text-blue-800',
};
```

---

## 📐 Layout Patterns

### Container
```html
<div class="container mx-auto px-4 sm:px-6 lg:px-8">
  <!-- Content -->
</div>
```

### Section
```html
<section class="py-16 md:py-24 lg:py-32">
  <div class="container mx-auto px-4">
    <!-- Section content -->
  </div>
</section>
```

### Grid Layout
```html
<!-- 3-column grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Grid items -->
</div>
```

### Flex Layout
```html
<div class="flex flex-col md:flex-row items-center justify-between gap-4">
  <!-- Flex items -->
</div>
```

---

## ♿ Accessibility

### Focus States
```css
focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
```

### Screen Reader Only
```css
sr-only
```

### ARIA Labels
```html
<button aria-label="Close menu">
  <CloseIcon />
</button>
```

---

## 🎭 Dark Mode (Optional)

```typescript
// Tailwind config
module.exports = {
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0a0a',
          text: '#f5f5f5',
        }
      }
    }
  }
}

// Usage
<div class="bg-white dark:bg-dark text-gray-900 dark:text-gray-100">
```

---

**Last Updated**: October 31, 2025  
**Version**: 1.0.0
