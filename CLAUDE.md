# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 website showcasing DSpace consulting and development services. It's a multilingual single-page application with internationalization support for 10+ languages (en, pl, de, fr, cs, sk, uk, lv, es, pt).

**Tech Stack:**
- Next.js 14 with App Router
- TypeScript
- Tailwind CSS v4
- shadcn/ui components (New York style)
- React Hook Form with Zod validation
- Vercel Analytics & Plausible Analytics

## Common Commands

```bash
# Development
npm run dev          # Start development server (default: http://localhost:3000)

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint (note: errors ignored during builds per next.config.mjs)
```

## Architecture

### Internationalization System

The project uses a **custom i18n implementation** (not next-intl or next-i18next):

- **Translation storage**: All translations in `/lib/translations.ts` as a nested object structure
- **Language detection**: Automatic browser language detection via `LanguageContext`
- **State management**: Client-side React Context (`/lib/language-context.tsx`) with localStorage persistence
- **Language switching**: `LanguageSwitcher` component allows manual language selection

**How to add a new language:**
1. Add language code to the `langMap` in `/lib/language-context.tsx`
2. Add complete translation object to `/lib/translations.ts` following existing structure
3. Update metadata `alternateLocale` in `/app/layout.tsx`

### Component Structure

**Page-level components** (in `/components/`)
- All major sections are separate components imported into `/app/page.tsx`
- Each component uses `useLanguage()` hook to access translations
- Components follow pattern: `{Section}Section.tsx` (e.g., `hero-section.tsx`, `services-section.tsx`)

**UI components** (in `/components/ui/`)
- shadcn/ui components (button, card, etc.)
- Installed via shadcn CLI, customized for project needs
- Path alias: `@/components/ui`

### Path Aliases

Defined in `tsconfig.json`:
- `@/*` → root directory (e.g., `@/components`, `@/lib`)

### Styling

- **Global styles**: `/app/globals.css` (also symlinked from `/styles/globals.css`)
- **Tailwind config**: Uses Tailwind CSS v4 with PostCSS
- **CSS variables**: Defined in globals.css for theming
- **Component styling**: Tailwind utility classes with `cn()` helper from `/lib/utils.ts`

## Build Configuration

**Important**: The project has **relaxed build constraints** in `next.config.mjs`:
- `eslint.ignoreDuringBuilds: true`
- `typescript.ignoreBuildErrors: true`
- `images.unoptimized: true`

This means TypeScript and ESLint errors won't block builds, but you should still fix them for code quality.

## Analytics

Two analytics systems are configured:
1. **Vercel Analytics**: Imported in `/app/layout.tsx`
2. **Plausible**: Script loaded for domain `dspace.iplweb.pl`

## SEO Configuration

- **Metadata**: Comprehensive metadata in `/app/layout.tsx` including OpenGraph, Twitter cards, robots directives
- **Structured data**: JSON-LD schema for ProfessionalService
- **Sitemap**: Static reference in `/public/robots.txt` pointing to `https://dspace.iplweb.pl/sitemap.xml`
- **Important**: Google verification code placeholder needs replacement (line 92 in layout.tsx)

## Deployment Notes

- Target platform: Vercel (based on analytics and config)
- Static export not enabled (uses server features like Suspense)
- Domain: `dspace.iplweb.pl`

## Adding New Translations

When adding content that needs translation:
1. Add the English version to `/lib/translations.ts` under `en` object
2. Add corresponding translations to ALL language objects (pl, de, fr, cs, sk, uk, lv, es, pt)
3. Use the `useLanguage()` hook in components: `const { language } = useLanguage()`
4. Access via: `translations[language].section.key`
