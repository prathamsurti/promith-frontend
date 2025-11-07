# Strapi CMS Setup Guide

This guide will help you set up Strapi CMS for the Promith website to enable dynamic content management.

## 🚀 Quick Start

### 1. Install Strapi

```bash
# Create a new Strapi project
npx create-strapi-app@latest cms --quickstart

# Or use Docker (recommended for production)
docker run -p 1337:1337 -v "$(pwd)/cms:/app" strapi/strapi
```

### 2. Configure Environment

Copy the example environment file and fill in your values:

```bash
cp .env.example .env
```

Edit `.env` with your Strapi details:
```
VITE_CMS_URL=http://localhost:1337/api
VITE_CMS_TOKEN=your_api_token_here
```

### 3. Create Content Types

In your Strapi admin panel (http://localhost:1337/admin), create these content types:

#### Hero Section
- **Collection Type**: `hero-section` (single entry)
- **Fields**:
  - `title` (Text)
  - `subtitle` (Text)
  - `ctaButtons` (JSON - for button array)

#### Benefits
- **Collection Type**: `benefits`
- **Fields**:
  - `title` (Text)
  - `description` (Text)
  - `graphic` (Enumeration: analytics, growth, sync)
  - `order` (Number)

#### Features
- **Collection Type**: `features`
- **Fields**:
  - `title` (Text)
  - `description` (Text)
  - `icon` (Text)
  - `order` (Number)

#### Process Steps
- **Collection Type**: `process-steps`
- **Fields**:
  - `title` (Text)
  - `description` (Text)
  - `stepNumber` (Number)
  - `icon` (Text)

#### Testimonials
- **Collection Type**: `testimonials`
- **Fields**:
  - `quote` (Text)
  - `author` (Text)
  - `role` (Text)
  - `company` (Text)
  - `avatar` (Media)
  - `rating` (Number)
  - `order` (Number)

#### Navigation Links
- **Collection Type**: `navigation-links`
- **Fields**:
  - `label` (Text)
  - `href` (Text)
  - `order` (Number)
  - `isExternal` (Boolean)

#### Footer Links
- **Collection Type**: `footer-links`
- **Fields**:
  - `label` (Text)
  - `href` (Text)
  - `order` (Number)

#### Social Links
- **Collection Type**: `social-links`
- **Fields**:
  - `platform` (Text)
  - `url` (Text)

### 4. Generate API Token

1. Go to Settings → API Tokens in Strapi admin
2. Create a new token with read permissions for all content types
3. Copy the token to your `.env` file

### 5. Add Sample Content

Create sample entries for each content type in the Strapi admin panel.

### 6. Test Integration

Start your development server:

```bash
npm run dev
```

The app will now fetch content from Strapi instead of using hardcoded data.

## 🔧 Configuration Options

### Preview Mode

Enable preview mode by setting:
```
VITE_CMS_PREVIEW_ENABLED=true
```

Then visit your site with `?preview=true` to see draft content.

### Caching

Adjust cache settings in `docs/cms.config.example.json`:
```json
{
  "cache": {
    "staleTime": 300000,  // 5 minutes
    "cacheTime": 600000   // 10 minutes
  }
}
```

## 🐛 Troubleshooting

### Common Issues

1. **CORS Errors**: Configure CORS in Strapi settings
2. **API Token Issues**: Ensure token has correct permissions
3. **Content Not Loading**: Check network tab for API errors
4. **Type Errors**: Ensure Strapi content types match expected schema

### Debug Mode

Check CMS status in browser console:
```javascript
import { getCmsStatus } from './src/services/cms';
console.log(getCmsStatus());
```

## 📚 API Reference

### Available Hooks

- `useHero()` - Hero section content
- `useBenefits()` - Benefits list
- `useFeatures()` - Features list
- `useProcessSteps()` - Process steps
- `useTestimonials()` - Testimonials
- `useNavLinks()` - Navigation links
- `useFooterLinks()` - Footer links
- `useSocialLinks()` - Social media links
- `useGlobalContent()` - All global content

### Manual API Usage

```typescript
import { cmsService } from './src/services/cms';

// Get hero content
const hero = await cmsService.getHero();

// Get benefits with custom params
const benefits = await cmsService.getBenefits('?sort=title:asc');
```

## 🚀 Production Deployment

### Strapi Deployment

1. **Railway**: Easy deployment with database
2. **Heroku**: Traditional hosting
3. **DigitalOcean**: VPS with Docker
4. **Vercel**: For serverless (limited)

### Environment Variables

Set production environment variables:
```
VITE_CMS_URL=https://your-strapi-instance.com/api
VITE_CMS_TOKEN=your_production_token
```

## 📝 Migration from Static to Dynamic

To migrate existing components:

1. Replace hardcoded data with hooks
2. Add loading states
3. Handle error states
4. Test with sample CMS data

Example migration:

```tsx
// Before (static)
const testimonials = [/* hardcoded data */];

// After (dynamic)
const { data: testimonials, isLoading, error } = useTestimonials();

if (isLoading) return <LoadingSpinner />;
if (error) return <ErrorMessage error={error} />;
```

## 🔒 Security Notes

- Never commit API tokens to version control
- Use different tokens for development and production
- Regularly rotate API tokens
- Limit token permissions to read-only where possible
- Enable CORS only for your domain in production

## 📞 Support

If you encounter issues:
1. Check the browser network tab for API errors
2. Verify Strapi is running and accessible
3. Ensure API token has correct permissions
4. Check console for detailed error messages