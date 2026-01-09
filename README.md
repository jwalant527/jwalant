# Modern Portfolio Website

A stunning, modern portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features smooth animations, dark/light mode, and a fully responsive design.

![Portfolio Preview](https://via.placeholder.com/1200x600/0ea5e9/ffffff?text=Modern+Portfolio+Website)

## ✨ Features

- **Modern Design**: Clean, minimal design with generous white space and professional typography
- **Smooth Animations**: Framer Motion powered animations throughout the site
- **Dark/Light Mode**: Seamless theme switching with smooth transitions
- **Interactive Elements**:
  - Custom cursor effect (desktop)
  - Animated particle background
  - Typewriter effect in hero section
  - 3D tilt effect on project cards
  - Animated skill progress bars
  - Scroll-triggered animations
- **Responsive Design**: Fully responsive with mobile-friendly hamburger menu
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **Type Safe**: Written in TypeScript for better developer experience

## 📋 Sections

1. **Hero Section** - Eye-catching introduction with animated text and floating profile image
2. **About Me** - Brief bio with animated statistics and technology badges
3. **Experience** - Timeline-style work history with smooth animations
4. **Projects** - Grid layout with 3D hover effects showcasing your work
5. **Skills** - Interactive skill bars and tech stack visualization
6. **Contact** - Functional contact form with social media links

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone or navigate to the project directory**:
```bash
cd portfolio-website
```

2. **Install dependencies**:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Intersection Observer**: [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer)

## 📁 Project Structure

```
portfolio-website/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── About.tsx           # About section with stats
│   ├── Contact.tsx         # Contact form and info
│   ├── CustomCursor.tsx    # Custom cursor component
│   ├── Experience.tsx      # Work experience timeline
│   ├── Footer.tsx          # Footer component
│   ├── Hero.tsx            # Hero section with typewriter effect
│   ├── Navbar.tsx          # Navigation bar with theme toggle
│   ├── ParticleBackground.tsx  # Animated particle background
│   ├── Projects.tsx        # Projects grid with 3D tilt
│   └── Skills.tsx          # Skills visualization
├── contexts/
│   └── ThemeContext.tsx    # Theme context for dark/light mode
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.mjs         # Next.js configuration
└── package.json            # Project dependencies
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** ([components/Hero.tsx](components/Hero.tsx)):
   - Update name, roles, and tagline
   - Replace the placeholder emoji with your photo

2. **About Section** ([components/About.tsx](components/About.tsx)):
   - Update bio text
   - Modify statistics and technologies

3. **Experience Section** ([components/Experience.tsx](components/Experience.tsx)):
   - Add your work experience
   - Update job titles, companies, and descriptions

4. **Projects Section** ([components/Projects.tsx](components/Projects.tsx)):
   - Add your projects
   - Update titles, descriptions, tech stacks, and links

5. **Skills Section** ([components/Skills.tsx](components/Skills.tsx)):
   - Update skill levels and categories
   - Modify tech stack icons

6. **Contact Section** ([components/Contact.tsx](components/Contact.tsx)):
   - Update contact information
   - Connect form to your email service (e.g., EmailJS, SendGrid)
   - Update social media links

### Theme Customization

Edit [tailwind.config.ts](tailwind.config.ts) to customize:
- Color palette
- Fonts
- Animations
- Spacing and breakpoints

### Color Scheme

The default color scheme uses a blue/purple gradient:
- Primary: Blue (#0ea5e9)
- Accent: Purple (#764ba2)
- Dark: Navy/Gray tones

To change colors, update the `colors` section in `tailwind.config.ts`.

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `.next` folder to Netlify

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- AWS Amplify
- Railway
- DigitalOcean App Platform
- Heroku (with buildpack)

## 📝 Environment Variables

If you plan to connect the contact form to a backend service, create a `.env.local` file:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🐛 Known Issues & Tips

- **Custom Cursor**: Only visible on desktop devices (hidden on mobile for better UX)
- **Particle Background**: Disabled on low-end devices for performance
- **Form Submission**: Currently shows an alert (demo). Connect to a backend service for production
- **Images**: Replace emoji placeholders with actual images for production

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 👨‍💻 Author

**John Doe**
- Website: [johndoe.com](#)
- GitHub: [@johndoe](#)
- LinkedIn: [@johndoe](#)

## 🌟 Show your support

Give a ⭐️ if you like this project!

## 📸 Screenshots

### Light Mode
![Light Mode](https://via.placeholder.com/1200x600/ffffff/0ea5e9?text=Light+Mode)

### Dark Mode
![Dark Mode](https://via.placeholder.com/1200x600/0f172a/0ea5e9?text=Dark+Mode)

---

Made with ❤️ using Next.js, TypeScript, and Tailwind CSS
