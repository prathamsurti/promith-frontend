import { useQuery } from '@tanstack/react-query';
import { cmsService } from '../services/cms';

// Query keys for React Query
export const queryKeys = {
  hero: ['hero'] as const,
  benefits: ['benefits'] as const,
  features: ['features'] as const,
  processSteps: ['process-steps'] as const,
  testimonials: ['testimonials'] as const,
  navLinks: ['nav-links'] as const,
  footerLinks: ['footer-links'] as const,
  socialLinks: ['social-links'] as const,
  siteSettings: ['site-settings'] as const,
};

// Hero Section Hook
export const useHero = () => {
  return useQuery({
    queryKey: queryKeys.hero,
    queryFn: async () => {
      const response = await cmsService.getHero();
      return response.data.data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    enabled: true, // Always enabled for now
  });
};

// Benefits Hook (Why Choose Us section)
export const useBenefits = () => {
  return useQuery({
    queryKey: queryKeys.benefits,
    queryFn: async () => {
      const response = await cmsService.getBenefits();
      return response.data.data;
    },
    staleTime: 5 * 60 * 1000,
  });
};

// Features Hook (Feature Grid section)
export const useFeatures = () => {
  return useQuery({
    queryKey: queryKeys.features,
    queryFn: async () => {
      const response = await cmsService.getFeatures();
      return response.data.data;
    },
    staleTime: 5 * 60 * 1000,
  });
};

// Process Steps Hook
export const useProcessSteps = () => {
  return useQuery({
    queryKey: queryKeys.processSteps,
    queryFn: async () => {
      const response = await cmsService.getProcessSteps();
      return response.data.data;
    },
    staleTime: 5 * 60 * 1000,
  });
};

// Testimonials Hook
export const useTestimonials = () => {
  return useQuery({
    queryKey: queryKeys.testimonials,
    queryFn: async () => {
      const response = await cmsService.getTestimonials();
      return response.data.data;
    },
    staleTime: 5 * 60 * 1000,
  });
};

// Navigation Links Hook
export const useNavLinks = () => {
  return useQuery({
    queryKey: queryKeys.navLinks,
    queryFn: async () => {
      const response = await cmsService.getNavLinks();
      return response.data.data;
    },
    staleTime: 10 * 60 * 1000, // 10 minutes (nav changes less frequently)
  });
};

// Footer Links Hook
export const useFooterLinks = () => {
  return useQuery({
    queryKey: queryKeys.footerLinks,
    queryFn: async () => {
      const response = await cmsService.getFooterLinks();
      return response.data.data;
    },
    staleTime: 10 * 60 * 1000,
  });
};

// Social Links Hook
export const useSocialLinks = () => {
  return useQuery({
    queryKey: queryKeys.socialLinks,
    queryFn: async () => {
      const response = await cmsService.getSocialLinks();
      return response.data.data;
    },
    staleTime: 10 * 60 * 1000,
  });
};

// Site Settings Hook (optional)
export const useSiteSettings = () => {
  return useQuery({
    queryKey: queryKeys.siteSettings,
    queryFn: async () => {
      const response = await cmsService.getSiteSettings();
      return response.data.data;
    },
    staleTime: 15 * 60 * 1000, // 15 minutes (settings change rarely)
  });
};

// Combined hook for all global content (nav, footer, social, settings)
export const useGlobalContent = () => {
  const navLinks = useNavLinks();
  const footerLinks = useFooterLinks();
  const socialLinks = useSocialLinks();
  const siteSettings = useSiteSettings();

  return {
    navLinks,
    footerLinks,
    socialLinks,
    siteSettings,
    isLoading: navLinks.isLoading || footerLinks.isLoading || socialLinks.isLoading || siteSettings.isLoading,
    error: navLinks.error || footerLinks.error || socialLinks.error || siteSettings.error,
  };
};