# Orbai React App - Why Choose Us Section

This project contains the "Why Choose Us" section recreated from the Orbai Framer template.

## ✨ What's Included

### WhyChooseUsSection Component

A fully animated section featuring three benefit cards:

1. **Real-Time Analytics** - Animated rotating gauge/dial
2. **AI-Driven Growth** - Animated chart with bars showing "80% Automation" and "10% Cost"
3. **Sync in real time** - Animated connecting circles icon

## 🎨 Features

- ✅ Exact styling matching the Framer template
- ✅ Smooth scroll-triggered animations using Framer Motion
- ✅ Responsive design with Tailwind CSS
- ✅ TypeScript for type safety
- ✅ Animated graphics (gauge, chart, sync icon)
- ✅ Neumorphic design with custom shadows
- ✅ Bottom tags/pills section

## 📁 File Structure

```
src/
├── components/
│   └── sections/
│       └── WhyChooseUsSection.tsx    # Main component
├── pages/
│   └── DemoPage.tsx                   # Demo page showing the component
└── App.tsx                            # Updated to show demo page
```

## 🚀 Running the Project

1. **Navigate to project directory:**
   ```bash
   cd orbai-react-app
   ```

2. **Install dependencies (if not already done):**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open browser:**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 🎯 Component Usage

```tsx
import WhyChooseUsSection from './components/sections/WhyChooseUsSection';

function YourPage() {
  return (
    <div>
      {/* Your content */}
      <WhyChooseUsSection />
      {/* More content */}
    </div>
  );
}
```

## 🎨 Customization

### Changing Card Content

Edit the `benefits` array in `WhyChooseUsSection.tsx`:

```tsx
const benefits = [
  {
    title: 'Your Title',
    description: 'Your description',
    graphic: 'analytics' | 'growth' | 'sync',
  },
  // ... more benefits
];
```

### Changing Colors

Update the Tailwind classes or edit `tailwind.config.js` for brand colors.

### Animations

All animations are defined using Framer Motion. Adjust timing, easing, and delays in the component file.

## 🔧 Technical Details

- **React** 18.3.1
- **TypeScript** 5.6+
- **Vite** 6.0+ (build tool)
- **Framer Motion** 11.11+ (animations)
- **Tailwind CSS** 3.4+ (styling)

## 📝 Notes

- The component uses `useInView` hook to trigger animations when scrolled into view
- Graphics are created with pure CSS and Framer Motion (no external images needed)
- Shadows and depth effects use the same neumorphic design as the original Framer template
- Component is fully responsive with mobile, tablet, and desktop breakpoints

## 🐛 Troubleshooting

If animations aren't working:
- Make sure Framer Motion is installed (`npm install framer-motion`)
- Check browser console for errors
- Verify Tailwind CSS is configured correctly

If styles aren't applied:
- Ensure `index.css` imports Tailwind directives
- Run `npm run dev` to rebuild

## 📸 Preview

The section includes:
- Section header with badge and gradient text
- 3 animated benefit cards in a responsive grid
- Interactive bottom tags
- Smooth scroll animations

---

**Created:** October 31, 2025  
**Based on:** Orbai AI Agency Template (Framer)
