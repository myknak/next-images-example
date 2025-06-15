# Technical Context: Universal Website Generation Guide

## Technology Stack

This template uses a modern React ecosystem optimized for performance and developer experience:

### Core Technologies
- **Next.js 14.2.25**: App Router with TypeScript support
- **React 18.3.1**: Component-based UI library
- **TypeScript 5.8.2**: Type-safe JavaScript
- **Tailwind CSS 3.4.17**: Utility-first CSS framework
- **Framer Motion 10.18.0**: Animation library
- **GSAP 3.12.7**: High-performance animations
- **Radix UI**: Accessible component primitives
- **i18next**: Internationalization framework

### Development Tools
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Autoprefixer**: CSS vendor prefixes
- **Critters**: Critical CSS inlining

## Project Structure & File Organization

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Homepage component
├── components/            # React components
│   ├── sections/          # Page sections (Hero, Services, etc.)
│   ├── ui/               # UI components (Button, Card, etc.)
│   └── index.ts          # Barrel exports
├── lib/                  # Utility functions
│   ├── i18n.ts          # Internationalization config
│   ├── theme.ts         # Theme configuration
│   └── utils.ts         # Helper functions
└── styles/
    └── globals.css      # Global styles and Tailwind imports
```

## Code Generation Rules

### File Creation Guidelines

**Component Files**:
- Page sections: `src/components/sections/[SectionName].tsx`
- UI components: `src/components/ui/[ComponentName].tsx`
- Always use PascalCase for component names
- Always use `.tsx` extension for React components
- Always use `.ts` extension for TypeScript utilities

**File Structure Pattern**:
```typescript
// Component file template
import { ComponentProps } from 'react'
import { motion } from 'framer-motion'

interface [ComponentName]Props {
  // Props interface here
}

const [ComponentName] = ({ ...props }: [ComponentName]Props) => {
  return (
    <div>
      {/* Component JSX */}
    </div>
  )
}

export default [ComponentName]
```

### Pattern: dynamic route page (server) + interactive UI (client)

**Rule →** *Files that export `generateStaticParams` stay on the **server**, so they **must not** begin with `"use client"`.*

---

#### `app/[slug]/page.tsx`  *(Server Component)*

```tsx
// No "use client" here

import Client from './Client';

/** Pre-generate every route at build time */
export async function generateStaticParams() {
  const slugs = await fetchRoutes();           // your data source
  return slugs.map(slug => ({ slug }));
}

export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  const content = await fetchContent(params.slug); // server-side fetch
  if (!content) return notFound();

  return <Client content={content} />;
}
```

---

#### `app/[slug]/Client.tsx`  *(Client Component)*

```tsx
'use client';

import { useState } from 'react';

export default function Client({
  content,
}: {
  content: { title: string; body: string };
}) {
  const [likes, setLikes] = useState(0);

  return (
    <main>
      <h1>{content.title}</h1>
      <article>{content.body}</article>
      <button onClick={() => setLikes(l => l + 1)}>
        👍 {likes}
      </button>
    </main>
  );
}
```

**Why split?**

* `generateStaticParams` lets Next.js prerender each slug at build time for speed and SEO.
* The client file can now use hooks and browser APIs without triggering the “`generateStaticParams` is not allowed in a Client Component” error.


### Import Path Conventions

**Always use these import patterns**:
```typescript
// Next.js imports
import Link from 'next/link'

// React imports
import { useState, useEffect } from 'react'

// Component imports (use barrel exports)
import { Button, Card } from '@/components/ui'
import { Hero, Services } from '@/components/sections'

// Library imports
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { clsx } from 'clsx'

// Utility imports
import { cn } from '@/lib/utils'
```

**Path Alias Rules**:
- Use `@/` for all src directory imports
- Never use relative imports like `../` or `./` for src files
- Always import from barrel exports when available

### Component Architecture Patterns

#### 1. Page Section Components
```typescript
// Example: src/components/sections/Hero.tsx
import { motion } from 'framer-motion'
import { Button } from '@/components/ui'

interface HeroProps {
  title: string
  subtitle: string
  backgroundImage: string
  ctaText: string
  ctaLink: string
}

const Hero = ({ title, subtitle, backgroundImage, ctaText, ctaLink }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8">
          {subtitle}
        </p>
        <Button href={ctaLink} size="lg">
          {ctaText}
        </Button>
      </motion.div>
    </section>
  )
}

export default Hero
```

#### 2. UI Components
```typescript
// Example: src/components/ui/Button.tsx
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const Button = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className
}: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 hover:scale-105"

  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-600 hover:bg-gray-700 text-white",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }

  const classes = cn(baseClasses, variants[variant], sizes[size], className)

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={classes}
    >
      {children}
    </motion.button>
  )
}

export default Button
```

### TypeScript Requirements

#### Interface Naming Convention
```typescript
// Component props interfaces
interface HeroProps {
  title: string
  subtitle: string
}

// Data interfaces
interface ProjectData {
  id: string
  title: string
  description: string
}

// Event handler types
interface FormProps {
  onSubmit: (data: FormData) => void
  onChange: (field: string, value: string) => void
}
```

#### Common Type Patterns
```typescript
// Children prop
children: React.ReactNode

// Optional string prop
title?: string

// Event handlers
onClick?: () => void
onSubmit?: (event: React.FormEvent) => void

// Class name prop
className?: string

// Image props
src: string
alt: string

// Array of objects
items: Array<{
  id: string
  title: string
  description: string
}>
```

### Styling System

#### Tailwind CSS Usage
```typescript
// Responsive design pattern
className="text-sm md:text-base lg:text-lg"

// Color system (always use blue as primary)
className="bg-blue-600 hover:bg-blue-700 text-white"

// Spacing system
className="px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4"

// Layout patterns
className="flex items-center justify-center"
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
```

#### Navigation Menu Requirements

##### Navigation Contrast & Visibility (CRITICAL)
Navigation must ALWAYS be visible regardless of background color or image. This is a critical UX requirement.

```typescript
// Option 1: Light navigation with semi-transparent background (for dark backgrounds)
const NavigationLight = () => {
  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-200/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-gray-900 font-bold text-xl hover:text-blue-600 transition-colors">
            Logo
          </Link>
          <div className="flex items-center space-x-8">
            <Link href="/about" className="text-gray-800 font-medium hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-800 font-medium hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-gray-800 font-medium hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Option 2: Dark navigation with semi-transparent background (for light backgrounds)
const NavigationDark = () => {
  return (
    <nav className="bg-gray-900/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white font-bold text-xl hover:text-blue-400 transition-colors">
            Logo
          </Link>
          <div className="flex items-center space-x-8">
            <Link href="/about" className="text-gray-100 font-medium hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-100 font-medium hover:text-blue-400 transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-gray-100 font-medium hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Option 3: Transparent navigation with enhanced contrast (for hero sections)
const NavigationTransparent = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent h-32"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 pt-6">
          {/* Text with shadow for guaranteed visibility */}
          <Link
            href="/"
            className="text-white font-bold text-xl hover:text-blue-300 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)]"
          >
            Logo
          </Link>
          <div className="flex items-center space-x-8">
            <Link
              href="/about"
              className="text-white font-semibold hover:text-blue-300 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:1px_1px_3px_rgba(0,0,0,0.9)]"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-white font-semibold hover:text-blue-300 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:1px_1px_3px_rgba(0,0,0,0.9)]"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-white font-semibold hover:text-blue-300 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:1px_1px_3px_rgba(0,0,0,0.9)]"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

// CRITICAL: Navigation Contrast Rules
// 1. ALWAYS ensure navigation text has sufficient contrast (WCAG AA minimum 4.5:1)
// 2. Use semi-transparent backgrounds with backdrop-blur for optimal readability
// 3. Add text shadows when navigation overlaps images or unknown backgrounds
// 4. Provide hover states with color changes for better UX
// 5. Test navigation visibility against both light and dark backgrounds
// 6. Use border separators to enhance visual distinction
```

##### Mobile Navigation Requirements
```typescript
// Mobile navigation must also maintain contrast
const MobileNavigation = () => {
  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-gray-900 font-bold text-xl">
            Logo
          </Link>
          {/* Hamburger menu with proper contrast */}
          <button className="text-gray-900 p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
```

#### Custom Scrollbar (Required)
```css
/* Add to globals.css */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #3b82f6;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #2563eb;
}
```

### Animation Patterns

#### Framer Motion (Preferred for UI animations)
```typescript
// Fade in animation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {content}
</motion.div>

// Scroll-triggered animation
<motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  {content}
</motion.section>

// Hover animations
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  {content}
</motion.div>
```

#### GSAP (For complex animations)
```typescript
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

const AnimatedComponent = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(ref.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      )
    }
  }, [])

  return <div ref={ref}>{content}</div>
}
```

### Page Structure Pattern

#### Layout Component (app/layout.tsx)
```typescript
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Website Title',
  description: 'Website description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
```

#### Page Component (app/page.tsx)
```typescript
import { Hero, Services, About, Contact } from '@/components/sections'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Page Title"
        subtitle="Page subtitle"
        backgroundImage="/hero-bg.jpg"
        ctaText="Get Started"
        ctaLink="#services"
      />
      <Services />
      <About />
      <Contact />
    </main>
  )
}
```

## Client vs Server Components - Critical Guide

### When to Use 'use client' (REQUIRED for these features):
- `useState`, `useEffect`, `useContext`, or any React hooks
- `createContext` or Context providers
- `onClick`, `onChange`, or any event handlers
- Framer Motion animations (`motion.div`)
- Browser APIs (`window`, `document`, `localStorage`)

### Simple Rule:
**If it's interactive or uses hooks → add 'use client' at the top**

### Examples:

#### ❌ WRONG - Will cause createContext error
```typescript
import { createContext, useState } from 'react'

const MyContext = createContext({})

const MyComponent = () => {
  const [state, setState] = useState()
  return <div onClick={() => {}}>Content</div>
}
```

#### ✅ CORRECT - With 'use client'
```typescript
'use client'

import { createContext, useState } from 'react'

const MyContext = createContext({})

const MyComponent = () => {
  const [state, setState] = useState()
  return <div onClick={() => {}}>Content</div>
}
```

#### ✅ Server Component (No 'use client' needed)
```typescript
// Static content only - no hooks, no interactivity
const StaticComponent = () => {
  return (
    <div>
      <h1>Static Title</h1>
      <p>Static content</p>
    </div>
  )
}
```

### Image Handling Rules

#### Always Use Regular img Tags (NEVER use next/image)
```typescript
// Correct: Use regular img with CSS classes for sizing
<img
  src="/image.jpg"
  alt="Description"
  className="w-full h-full object-cover"
/>

// Correct: With CSS sizing
<img
  src="/image.jpg"
  alt="Description"
  className="w-96 h-60 rounded-lg object-cover"
/>

// NEVER use HTML width/height attributes on img tags
// WRONG: <img src="/image.jpg" width="400" height="600" />

// NEVER use Next.js Image component
// WRONG: import Image from 'next/image'
// WRONG: <Image src="/image.jpg" alt="Description" width={400} height={600} />
```

### Icon Guidelines

#### Always Create Custom SVG Icons (NEVER use external icon libraries)
```typescript
// Correct: Custom SVG icon inline
const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

// Correct: Custom icon component
const MenuIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

// NEVER use external icon libraries
// WRONG: import { ChevronRight } from 'lucide-react'
// WRONG: import { FaArrow } from 'react-icons/fa'
// WRONG: import { HiMenu } from '@heroicons/react/24/outline'
```

### Color System Requirements

#### Always Use Hex Colors
```typescript
// Correct: Hex colors
const colors = {
  primary: '#3b82f6',
  secondary: '#6b7280',
  accent: '#10b981'
}

// WRONG: RGB colors
// const colors = { primary: 'rgb(59, 130, 246)' }
```

### Barrel Export Pattern

#### Component Index Files
```typescript
// src/components/sections/index.ts
export { default as Hero } from './Hero'
export { default as Services } from './Services'
export { default as About } from './About'
export { default as Contact } from './Contact'

// src/components/ui/index.ts
export { default as Button } from './Button'
export { default as Card } from './Card'
export { default as Modal } from './Modal'
```

### Common Section Templates

#### Services/Features Section
```typescript
const Services = () => {
  const services = [
    {
      id: 1,
      title: "Service 1",
      description: "Service description",
      image: "/service1.jpg"
    },
    // ... more services
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Description of services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: service.id * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

#### Contact Section
```typescript
const Contact = () => {
  return (
    <section className="py-20 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact description
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="mailto:contact@example.com"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-900"
            >
              Email Us
            </Button>
            <Button
              href="tel:+1234567890"
              variant="primary"
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50"
            >
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
```

## Development Guidelines Summary

### Must Do:
- Always use TypeScript with proper interfaces
- Use Tailwind CSS for all styling
- Include animations with Framer Motion
- Use regular img tags for all images (NEVER next/image)
- Size images with CSS, never HTML attributes
- Use hex colors only
- Create navigation with sufficient contrast (WCAG AA minimum 4.5:1)
- Use semi-transparent backgrounds with backdrop-blur for navigation
- Add text shadows when navigation overlaps images
- Style custom scrollbar in globals.css
- Account for navigation height in layout
- Use barrel exports for components
- Use `@/` import alias
- Add 'use client' for interactive components
- Create custom SVG icons only (NEVER external icon libraries)

### Never Do:
- Don't use Next.js Image component
- Don't use external icon libraries (lucide-react, react-icons, heroicons, etc.)
- Don't use RGB colors
- Don't use HTML width/height on images
- Don't create trivial animations
- Don't create navigation without proper contrast/visibility
- Don't forget text shadows for transparent navigation
- Don't use relative imports for src files
- Don't create components without TypeScript interfaces
- Don't forget 'use client' for hooks/interactivity

This technical context ensures any AI can generate syntactically correct, build-ready code that follows the template's established patterns and conventions.
