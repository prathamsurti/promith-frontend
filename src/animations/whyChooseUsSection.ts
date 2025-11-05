import type { Variants, Transition } from 'framer-motion';

/**
 * Animation variants for WhyChooseUsSection
 */

// Card entrance animation with spring physics
export const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 60,
      mass: 1,
    },
  },
};

// Reusable spring transition for smooth, bouncy animations
export const springTransition: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 40,
  mass: 1,
};

// Gauge needle rotation transition
export const needleTransition: Transition = {
  duration: 0.6,
  ease: [0.4, 0, 0.2, 1],
};

// Decorative dot floating animation
export const dotFloatVariants: Variants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Decorative dot floating animation with delay
export const dotFloatDelayedVariants: Variants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: 0.3,
    },
  },
};

// Section header fade in from bottom
export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// Tags fade in animation
export const tagsVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.8 },
};

// Sync Graphic Animations

// Left circle animation
export const syncCircleLeftVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

export const syncCircleLeftTransition: Transition = {
  delay: 0.2,
  type: 'spring',
  stiffness: 300,
  damping: 20,
};

// Right circle animation
export const syncCircleRightVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

export const syncCircleRightTransition: Transition = {
  delay: 0.4,
  type: 'spring',
  stiffness: 300,
  damping: 20,
};

// Connecting line animation
export const syncLineVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1 },
};

export const syncLineTransition: Transition = {
  delay: 0.6,
  duration: 0.5,
};

// Arrow animation
export const syncArrowVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1 },
};

export const syncArrowTransition: Transition = {
  delay: 0.8,
  duration: 0.3,
};

// Decorative Dot Animations (for Analytics graphic)

// Dot appearance with spring
export const dotAppearanceVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};

export const dotAppearanceLeftTransition: Transition = {
  type: 'spring',
  stiffness: 320,
  damping: 60,
  delay: 0.5,
};

export const dotAppearanceRightTransition: Transition = {
  type: 'spring',
  stiffness: 320,
  damping: 60,
  delay: 0.1,
};
