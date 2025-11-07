import axios from 'axios';
import type { AxiosInstance } from 'axios';

// Environment variables
const CMS_URL = import.meta.env.VITE_CMS_URL;
const CMS_TOKEN = import.meta.env.VITE_CMS_TOKEN;
const PREVIEW_ENABLED = import.meta.env.VITE_CMS_PREVIEW_ENABLED === 'true';

// Create axios instance with base configuration
const api: AxiosInstance = axios.create({
  baseURL: CMS_URL,
  headers: {
    'Content-Type': 'application/json',
    ...(CMS_TOKEN ? { Authorization: `Bearer ${CMS_TOKEN}` } : {}),
  },
});

// Add request interceptor for preview mode
api.interceptors.request.use((config) => {
  // Check if preview mode is enabled and requested
  if (PREVIEW_ENABLED && typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    const isPreview = urlParams.get('preview') === 'true';

    if (isPreview) {
      config.headers['X-Preview-Mode'] = 'true';
    }
  }

  return config;
});

// CMS Service - Strapi API wrapper
export const cmsService = {
  // Hero Section
  getHero: () => api.get('/hero-section'),

  // Benefits (Why Choose Us section)
  getBenefits: () => api.get('/benefits?sort=order:asc'),

  // Features (Feature Grid section)
  getFeatures: () => api.get('/features?sort=order:asc'),

  // Process Steps
  getProcessSteps: () => api.get('/process-steps?sort=stepNumber:asc'),

  // Testimonials
  getTestimonials: () => api.get('/testimonials?sort=order:asc'),

  // Navigation Links
  getNavLinks: () => api.get('/navigation-links?sort=order:asc'),

  // Footer Links
  getFooterLinks: () => api.get('/footer-links?sort=order:asc'),

  // Social Links
  getSocialLinks: () => api.get('/social-links'),

  // Site Settings (optional - for global config)
  getSiteSettings: () => api.get('/site-settings'),

  // Generic content fetcher (for dynamic content types)
  getContent: (contentType: string, params?: Record<string, unknown>) => {
    const queryString = params ? `?${new URLSearchParams(params as Record<string, string>)}` : '';
    return api.get(`/${contentType}${queryString}`);
  },
};

// Export the axios instance for advanced usage
export { api as cmsApi };

// Helper to check if CMS is configured
export const isCmsConfigured = (): boolean => {
  return Boolean(CMS_URL && CMS_TOKEN);
};

// Helper to get CMS status
export const getCmsStatus = () => ({
  url: CMS_URL,
  hasToken: Boolean(CMS_TOKEN),
  previewEnabled: PREVIEW_ENABLED,
  configured: isCmsConfigured(),
});