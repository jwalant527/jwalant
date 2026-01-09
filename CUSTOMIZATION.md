# Customization Guide

Complete guide to personalizing your portfolio website.

## 🎨 Color Scheme

### Primary Colors

Edit [tailwind.config.ts](tailwind.config.ts:16-26):

```typescript
primary: {
  500: '#0ea5e9',  // Main brand color
  600: '#0284c7',  // Hover states
  // ... customize all shades
}
```

### Dark Mode Colors

```typescript
dark: {
  900: '#0f172a',  // Dark background
  800: '#1e293b',  // Card backgrounds
  // ... customize dark theme
}
```

### Gradient Backgrounds

```typescript
backgroundImage: {
  'gradient-hero': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  // Add your custom gradients
}
```

## ✍️ Typography

### Font Family

Edit [app/layout.tsx](app/layout.tsx:5):

```typescript
import { Inter } from 'next/font/google';
// Change to: Poppins, Roboto, Montserrat, etc.
```

Browse fonts at [Google Fonts](https://fonts.google.com/)

### Font Sizes

Tailwind uses a default scale. Override in [tailwind.config.ts](tailwind.config.ts):

```typescript
theme: {
  extend: {
    fontSize: {
      'hero': '6rem',  // Custom sizes
    }
  }
}
```

## 🖼️ Images & Icons

### Profile Photo

Replace emoji in [components/Hero.tsx](components/Hero.tsx:132-136):

```typescript
// Before (emoji)
<div className="...">👤</div>

// After (image)
<Image
  src="/profile.jpg"
  alt="Profile"
  width={400}
  height={400}
  className="rounded-full"
/>
```

### Project Images

Add images to `public/projects/` folder:

```typescript
// In components/Projects.tsx
{
  title: 'My Project',
  image: '/projects/project1.jpg',  // Instead of emoji
  // ...
}
```

### Tech Stack Icons

Options for [components/Skills.tsx](components/Skills.tsx:133-146):

1. **Keep Emojis** (current)
2. **Use react-icons**:
```typescript
import { SiReact, SiNextdotjs } from 'react-icons/si';
{ name: 'React', icon: <SiReact /> }
```

3. **Use SVG Images**:
```typescript
{ name: 'React', icon: '/icons/react.svg' }
```

## 📝 Content Updates

### Hero Section

[components/Hero.tsx](components/Hero.tsx):

```typescript
// Line 7: Your roles
const roles = ['Full Stack Developer', 'UI/UX Enthusiast'];

// Line 82: Your name
<h1>John Doe</h1>

// Line 103: Your tagline
<p>Your personal tagline here...</p>
```

### About Section

[components/About.tsx](components/About.tsx):

```typescript
// Lines 25-30: Your stats
const stats = [
  { label: 'Years Experience', value: '5+', ... },
  // Customize all stats
];

// Lines 10-23: Your technologies
const technologies = [
  { name: 'React', category: 'frontend' },
  // Add your tech stack
];

// Lines 67-85: Your bio
<p>Your bio paragraph 1...</p>
<p>Your bio paragraph 2...</p>
```

### Experience Timeline

[components/Experience.tsx](components/Experience.tsx:8-47):

```typescript
const experiences = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    period: '2022 - Present',
    description: 'What you did...',
    technologies: ['Tech1', 'Tech2'],
  },
  // Add all your jobs
];
```

### Projects Grid

[components/Projects.tsx](components/Projects.tsx:8-64):

```typescript
const projects = [
  {
    title: 'Project Name',
    description: 'Project description...',
    image: '🚀',  // Or image path
    technologies: ['Next.js', 'TypeScript'],
    githubUrl: 'https://github.com/username/repo',
    liveUrl: 'https://project-demo.com',
  },
  // Add all your projects
];
```

### Skills Section

[components/Skills.tsx](components/Skills.tsx:8-33):

```typescript
const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React/Next.js', level: 95 },  // 0-100
      // Add your skills
    ],
  },
  // Add more categories
];
```

### Contact Information

[components/Contact.tsx](components/Contact.tsx:8-30):

```typescript
const contactInfo = [
  {
    icon: FiMail,
    title: 'Email',
    value: 'your@email.com',
    href: 'mailto:your@email.com',
  },
  // Update all contact info
];

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
  // Update social links
];
```

## 🎭 Animations

### Animation Speed

Edit [tailwind.config.ts](tailwind.config.ts:30-39):

```typescript
animation: {
  'float': 'float 6s ease-in-out infinite',  // Change duration
  // Modify timing
}
```

### Disable Animations

For reduced motion preference, animations respect system settings. To fully disable:

```typescript
// In component
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
<motion.div animate={!prefersReducedMotion ? { ... } : {}}>
```

### Custom Animations

Add to [tailwind.config.ts](tailwind.config.ts:40-60):

```typescript
keyframes: {
  'my-animation': {
    '0%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.1)' },
    '100%': { transform: 'scale(1)' },
  },
}
```

## 🎯 Layout Adjustments

### Section Padding

Global spacing in each component:

```typescript
// Before
className="py-20 md:py-32"

// After (more compact)
className="py-12 md:py-20"
```

### Max Width

Change container width in components:

```typescript
// Before
className="max-w-7xl mx-auto"

// After (wider)
className="max-w-[1400px] mx-auto"
```

### Grid Layouts

Projects grid [components/Projects.tsx](components/Projects.tsx:281):

```typescript
// Before (3 columns)
className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"

// After (2 columns)
className="grid lg:grid-cols-2 gap-8"
```

## 🌐 SEO Optimization

### Meta Tags

[app/layout.tsx](app/layout.tsx:10-14):

```typescript
export const metadata: Metadata = {
  title: 'Your Name - Your Title',
  description: 'Your description...',
  keywords: 'your, keywords, here',
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Your Name Portfolio',
    description: 'Your description',
    images: ['/og-image.jpg'],
  },
};
```

### Add Structured Data

Create [app/page.tsx](app/page.tsx) with JSON-LD:

```typescript
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "url": "https://yourwebsite.com",
  "sameAs": [
    "https://github.com/yourusername",
    "https://linkedin.com/in/yourusername"
  ]
}
</script>
```

## 🔧 Advanced Customization

### Add New Section

1. Create component in `components/NewSection.tsx`
2. Import in [app/page.tsx](app/page.tsx)
3. Add navigation link in [components/Navbar.tsx](components/Navbar.tsx:10-17)

### Custom Cursor Styles

Edit [components/CustomCursor.tsx](components/CustomCursor.tsx:37-46):

```typescript
variants: {
  default: {
    scale: 1,
    // Customize appearance
  },
}
```

### Particle Settings

Edit [components/ParticleBackground.tsx](components/ParticleBackground.tsx:20):

```typescript
const particleCount = 80;  // Reduce for better performance
```

### Form Backend

Replace alert in [components/Contact.tsx](components/Contact.tsx:42-51):

```typescript
// With EmailJS
import emailjs from '@emailjs/browser';

const handleSubmit = async (e) => {
  e.preventDefault();
  await emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    formData,
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  );
};
```

## 🚀 Performance Optimization

### Image Optimization

Always use Next.js Image:

```typescript
import Image from 'next/image';

<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  placeholder="blur"  // Add blur placeholder
/>
```

### Reduce Bundle Size

Remove unused dependencies:

```bash
npm uninstall unused-package
```

### Lazy Loading

For heavy components:

```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});
```

## 📱 Mobile Optimization

### Adjust Mobile Spacing

```typescript
// More mobile-friendly
className="px-4 py-8 md:px-8 md:py-16"
```

### Mobile-Specific Animations

```typescript
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  // Skip on mobile
  {...(isMobile ? {} : { whileHover: { scale: 1.1 } })}
>
```

## 🎨 Pre-made Color Schemes

### Ocean Blue (Current)
```
Primary: #0ea5e9
Accent: #764ba2
```

### Forest Green
```
Primary: #10b981
Accent: #059669
```

### Sunset Orange
```
Primary: #f97316
Accent: #ea580c
```

### Purple Reign
```
Primary: #8b5cf6
Accent: #7c3aed
```

### Monochrome
```
Primary: #374151
Accent: #1f2937
```

---

Need more help? Check [README.md](README.md) or [QUICKSTART.md](QUICKSTART.md)!
