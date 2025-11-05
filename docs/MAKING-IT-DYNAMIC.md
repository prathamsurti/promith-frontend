# Making the Website Dynamic - Developer's Guide

## 📋 Overview

This document outlines the steps to transform the current static Promith website into a fully dynamic, CMS-driven application. The goal is to enable non-technical users to manage content without touching code.

---

## 🎯 Current State Analysis

### Static Content Locations:

1. **Hero Section** (`src/pages/Home.tsx`)
   - Title: "Promith" (hardcoded)
   - Subtitle: "AI-powered automation solutions..." (hardcoded)
   - CTA buttons (hardcoded)

2. **Why Choose Us Section** (`src/components/sections/WhyChooseUs/WhyChooseUsSection.tsx`)
   - Benefits data (hardcoded array)
   - Marquee tags (hardcoded array)

3. **Feature Grid** (`src/components/sections/FeatureGrid.tsx`)
   - Feature cards (hardcoded)
   - CTA buttons (hardcoded)

4. **Process Section** (`src/components/sections/ProcessSection.tsx`)
   - Process steps (hardcoded)

5. **Testimonials** (`src/pages/Home.tsx`)
   - Testimonial data (hardcoded array)

6. **Footer** (`src/layouts/Footer.tsx`)
   - Links (hardcoded)
   - Social media links (hardcoded)
   - Copyright text (hardcoded)

7. **Navigation** (`src/utils/constants.ts`)
   - Nav links (hardcoded)

---

## 🛠️ Implementation Plan

### Phase 1: Choose a Backend/CMS Solution

#### Option A: Headless CMS (Recommended for Non-Technical Users)
**Best choices:**
- **Strapi** (Open source, self-hosted)
- **Contentful** (Managed service)
- **Sanity** (Real-time, structured content)
- **Payload CMS** (Code-first, TypeScript)

#### Option B: Custom API + Database
**Stack:**
- Backend: Node.js + Express / Next.js API Routes
- Database: PostgreSQL / MongoDB
- Admin Panel: Custom React Admin / Retool

---

### Phase 2: Data Structure Design

#### 2.1 Create Content Types/Models

```typescript
// Content Models to Create:

1. SiteSettings
   - siteName: string
   - siteDescription: string
   - logo: Image
   - favicon: Image
   - primaryColor: string
   - secondaryColor: string

2. HeroSection
   - title: string
   - subtitle: string
   - backgroundVideo: string (URL)
   - ctaButtons: Array<{
       label: string
       href: string
       variant: 'primary' | 'outline' | 'cta'
     }>

3. Benefit (for Why Choose Us)
   - title: string
   - description: string
   - graphic: 'analytics' | 'growth' | 'sync'
   - order: number

4. MarqueeTag
   - text: string
   - icon: string
   - order: number

5. Feature
   - title: string
   - description: string
   - icon: string
   - order: number

6. ProcessStep
   - title: string
   - description: string
   - stepNumber: number
   - icon: string

7. Testimonial
   - quote: string
   - author: string
   - role: string
   - company: string
   - avatar: Image
   - rating: number
   - order: number

8. NavigationLink
   - label: string
   - href: string
   - order: number
   - isExternal: boolean

9. SocialLink
   - platform: 'twitter' | 'instagram' | 'linkedin'
   - url: string

10. FooterLink
    - label: string
    - href: string
    - order: number
```

---

### Phase 3: API Integration Layer

#### 3.1 Create API Service

**File:** `src/services/api.ts`

```typescript
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:1337/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API Methods
export const apiService = {
  // Site Settings
  getSiteSettings: () => api.get('/site-settings'),
  
  // Hero Section
  getHeroSection: () => api.get('/hero-section'),
  
  // Benefits
  getBenefits: () => api.get('/benefits?sort=order:asc'),
  
  // Marquee Tags
  getMarqueeTags: () => api.get('/marquee-tags?sort=order:asc'),
  
  // Features
  getFeatures: () => api.get('/features?sort=order:asc'),
  
  // Process Steps
  getProcessSteps: () => api.get('/process-steps?sort=stepNumber:asc'),
  
  // Testimonials
  getTestimonials: () => api.get('/testimonials?sort=order:asc'),
  
  // Navigation
  getNavLinks: () => api.get('/navigation-links?sort=order:asc'),
  
  // Footer
  getFooterLinks: () => api.get('/footer-links?sort=order:asc'),
  getSocialLinks: () => api.get('/social-links'),
};
```

#### 3.2 Create Custom Hooks

**File:** `src/hooks/useContent.ts`

```typescript
import { useState, useEffect } from 'react';
import { apiService } from '../services/api';

export const useHeroContent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.getHeroSection();
        setData(response.data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };
};

export const useBenefits = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.getBenefits();
        setData(response.data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };
};

// Similar hooks for other content types...
```

#### 3.3 Create Context for Global Data

**File:** `src/context/ContentContext.tsx`

```typescript
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { apiService } from '../services/api';

interface ContentContextType {
  siteSettings: any;
  navLinks: any[];
  socialLinks: any[];
  loading: boolean;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider = ({ children }: { children: ReactNode }) => {
  const [siteSettings, setSiteSettings] = useState(null);
  const [navLinks, setNavLinks] = useState([]);
  const [socialLinks, setSocialLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGlobalData = async () => {
      try {
        const [settingsRes, navRes, socialRes] = await Promise.all([
          apiService.getSiteSettings(),
          apiService.getNavLinks(),
          apiService.getSocialLinks(),
        ]);

        setSiteSettings(settingsRes.data.data);
        setNavLinks(navRes.data.data);
        setSocialLinks(socialRes.data.data);
      } catch (error) {
        console.error('Error fetching global data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGlobalData();
  }, []);

  return (
    <ContentContext.Provider value={{ siteSettings, navLinks, socialLinks, loading }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within ContentProvider');
  }
  return context;
};
```

---

### Phase 4: Update Components to Use Dynamic Data

#### 4.1 Update Home Page

**File:** `src/pages/Home.tsx`

```typescript
import { useHeroContent, useBenefits, useTestimonials } from '../hooks/useContent';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ErrorMessage from '../components/ui/ErrorMessage';

const Home = () => {
  const { data: heroData, loading: heroLoading, error: heroError } = useHeroContent();
  const { data: testimonials, loading: testimonialsLoading } = useTestimonials();

  if (heroLoading) return <LoadingSpinner />;
  if (heroError) return <ErrorMessage error={heroError} />;

  return (
    <div className="min-h-screen">
      <HeroSection
        title={heroData?.title}
        subtitle={heroData?.subtitle}
        ctaButtons={heroData?.ctaButtons}
      />
      
      {/* Other sections... */}
    </div>
  );
};
```

#### 4.2 Update WhyChooseUsSection

**File:** `src/components/sections/WhyChooseUs/WhyChooseUsSection.tsx`

```typescript
import { useBenefits, useMarqueeTags } from '../../../hooks/useContent';

const WhyChooseUsSection = () => {
  const { data: benefits, loading: benefitsLoading } = useBenefits();
  const { data: marqueeTags, loading: tagsLoading } = useMarqueeTags();

  if (benefitsLoading || tagsLoading) return <LoadingSpinner />;

  return (
    <section className="why-choose-section">
      {/* Render benefits dynamically */}
      <div className="grid">
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={benefit.id}
            title={benefit.title}
            description={benefit.description}
            graphic={benefit.graphic}
          />
        ))}
      </div>

      {/* Render marquee tags dynamically */}
      <div className="marquee-content">
        {marqueeTags.map((tag) => (
          <span key={tag.id} className="tag-pill">
            {tag.text}
          </span>
        ))}
      </div>
    </section>
  );
};
```

#### 4.3 Update Header with Dynamic Nav

**File:** `src/layouts/Header.tsx`

```typescript
import { useContent } from '../context/ContentContext';

const Header = () => {
  const { navLinks, loading } = useContent();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (loading) return null; // Or skeleton

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <Link to="/" className="logo">Orbai</Link>

          <nav className={`navbar ${isMobileMenuOpen ? 'active' : ''}`}>
            {navLinks.map((link) => {
              const isInternalRoute = link.href.startsWith('/') && !link.href.includes('#');
              
              if (isInternalRoute) {
                return (
                  <Link key={link.id} to={link.href}>
                    {link.label}
                  </Link>
                );
              }
              
              return (
                <a key={link.id} href={link.href}>
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};
```

---

### Phase 5: Environment Setup

#### 5.1 Add Environment Variables

**File:** `.env`

```bash
# API Configuration
VITE_API_URL=http://localhost:1337/api
VITE_API_TOKEN=your_api_token_here

# CMS Configuration (if using Strapi)
VITE_CMS_URL=http://localhost:1337
```

**File:** `.env.production`

```bash
VITE_API_URL=https://api.promith.com/api
VITE_API_TOKEN=your_production_token
VITE_CMS_URL=https://cms.promith.com
```

#### 5.2 Update TypeScript Types

**File:** `src/types/content.ts`

```typescript
export interface HeroContent {
  id: number;
  title: string;
  subtitle: string;
  ctaButtons: CTAButton[];
  backgroundVideo?: string;
}

export interface CTAButton {
  label: string;
  href: string;
  variant: 'primary' | 'outline' | 'cta';
}

export interface Benefit {
  id: number;
  title: string;
  description: string;
  graphic: 'analytics' | 'growth' | 'sync';
  order: number;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  order: number;
}

export interface NavigationLink {
  id: number;
  label: string;
  href: string;
  order: number;
  isExternal: boolean;
}
```

---

### Phase 6: Caching & Performance

#### 6.1 Implement React Query

**Install:**
```bash
npm install @tanstack/react-query
```

**Setup:** `src/main.tsx`

```typescript
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContentProvider>
        <App />
      </ContentProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
```

**Update Hooks:** `src/hooks/useContent.ts`

```typescript
import { useQuery } from '@tanstack/react-query';

export const useHeroContent = () => {
  return useQuery({
    queryKey: ['hero'],
    queryFn: async () => {
      const response = await apiService.getHeroSection();
      return response.data.data;
    },
  });
};

export const useBenefits = () => {
  return useQuery({
    queryKey: ['benefits'],
    queryFn: async () => {
      const response = await apiService.getBenefits();
      return response.data.data;
    },
  });
};
```

---

### Phase 7: Admin Panel Setup (Strapi Example)

#### 7.1 Install Strapi

```bash
# In a separate folder
npx create-strapi-app@latest cms --quickstart
```

#### 7.2 Create Content Types in Strapi

1. Go to Content-Type Builder
2. Create each collection type based on the models above
3. Configure fields and relationships
4. Enable public access or set up authentication

#### 7.3 Add Sample Data

Use Strapi admin panel to add initial content

---

### Phase 8: Loading States & Error Handling

#### 8.1 Create UI Components

**File:** `src/components/ui/LoadingSpinner.tsx`

```typescript
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

export default LoadingSpinner;
```

**File:** `src/components/ui/ErrorMessage.tsx`

```typescript
interface ErrorMessageProps {
  error: Error;
  retry?: () => void;
}

const ErrorMessage = ({ error, retry }: ErrorMessageProps) => (
  <div className="flex flex-col items-center justify-center min-h-screen">
    <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
    <p className="text-gray-600 mb-4">{error.message}</p>
    {retry && (
      <button onClick={retry} className="px-4 py-2 bg-primary text-white rounded">
        Try Again
      </button>
    )}
  </div>
);

export default ErrorMessage;
```

---

### Phase 9: SEO & Metadata Management

#### 9.1 Dynamic Meta Tags

**File:** `src/components/SEO.tsx`

```typescript
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export const SEO = ({ title, description, image, url }: SEOProps) => {
  const siteTitle = title ? `${title} | Promith` : 'Promith - AI-Powered Automation';
  const siteDescription = description || 'Transform your workflow with intelligent automation';
  
  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
    </Helmet>
  );
};
```

---

### Phase 10: Preview Mode (Optional)

#### 10.1 Add Draft/Preview Functionality

```typescript
// Enable preview mode with query param
const usePreviewMode = () => {
  const [searchParams] = useSearchParams();
  return searchParams.get('preview') === 'true';
};

// In API service, add preview header
if (isPreviewMode) {
  api.defaults.headers['X-Preview-Mode'] = 'true';
}
```

---

## 🚀 Deployment Checklist

- [ ] CMS deployed (Strapi/Contentful/etc.)
- [ ] Database configured and migrated
- [ ] API endpoints tested
- [ ] Environment variables set
- [ ] CORS configured for frontend domain
- [ ] CDN configured for images/assets
- [ ] Cache strategy implemented
- [ ] Error tracking (Sentry/LogRocket)
- [ ] Analytics (Google Analytics/Plausible)
- [ ] Content populated in CMS
- [ ] Frontend deployed with API connection

---

## 📚 Additional Resources

### Recommended Packages:
```json
{
  "@tanstack/react-query": "^5.0.0",
  "axios": "^1.6.0",
  "react-helmet-async": "^2.0.0",
  "zod": "^3.22.0" // For API response validation
}
```

### Useful Links:
- [Strapi Documentation](https://docs.strapi.io/)
- [React Query Documentation](https://tanstack.com/query/latest)
- [Contentful Documentation](https://www.contentful.com/developers/docs/)
- [Sanity Documentation](https://www.sanity.io/docs)

---

## 🔒 Security Considerations

1. **API Authentication:**
   - Use JWT tokens for CMS access
   - Implement rate limiting
   - Validate all inputs

2. **Environment Variables:**
   - Never commit `.env` files
   - Use different tokens for dev/staging/prod

3. **CORS:**
   - Restrict to specific domains
   - Don't use wildcard (*) in production

4. **Content Sanitization:**
   - Sanitize HTML content
   - Validate URLs
   - Escape user inputs

---

## 📝 Migration Steps Summary

1. ✅ Choose and set up CMS
2. ✅ Design content models
3. ✅ Create API service layer
4. ✅ Build custom hooks
5. ✅ Update components to use hooks
6. ✅ Add loading/error states
7. ✅ Implement caching
8. ✅ Set up environment variables
9. ✅ Test thoroughly
10. ✅ Deploy CMS and frontend

---

## 🎯 Expected Timeline

- **Phase 1-3:** 1-2 days (Setup & Data Modeling)
- **Phase 4-5:** 2-3 days (Component Updates)
- **Phase 6-7:** 1-2 days (CMS Setup)
- **Phase 8-9:** 1 day (Polish & SEO)
- **Phase 10:** 1 day (Testing & Deployment)

**Total: 6-9 days**

---

## ✨ Benefits of Dynamic Content

- ✅ Non-technical users can update content
- ✅ A/B testing capabilities
- ✅ Multi-language support (future)
- ✅ Content scheduling
- ✅ Version history
- ✅ Team collaboration
- ✅ Asset management
- ✅ SEO optimization
- ✅ Faster content updates
- ✅ Reduced developer dependency

---

**Last Updated:** November 4, 2025  
**Maintainer:** Development Team
