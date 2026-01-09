# Quick Start Guide

Get your portfolio website up and running in 5 minutes!

## 1️⃣ Install Dependencies

```bash
npm install
```

## 2️⃣ Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 3️⃣ Customize Your Content

### Essential Changes

1. **Personal Info** - Open `components/Hero.tsx`:
   ```typescript
   // Line ~82: Update your name
   John Doe → Your Name

   // Line ~53-54: Update roles array
   const roles = ['Your Role 1', 'Your Role 2', ...];
   ```

2. **About Section** - Open `components/About.tsx`:
   - Update bio text (lines ~67-85)
   - Update stats (lines ~25-30)
   - Update technologies (lines ~10-23)

3. **Experience** - Open `components/Experience.tsx`:
   - Replace the experiences array with your work history (lines ~8-47)

4. **Projects** - Open `components/Projects.tsx`:
   - Replace the projects array with your projects (lines ~8-64)

5. **Contact Info** - Open `components/Contact.tsx`:
   - Update email, phone, location (lines ~8-24)
   - Update social links (lines ~26-30)

6. **Metadata** - Open `app/layout.tsx`:
   - Update title and description (lines ~10-14)

## 4️⃣ Replace Placeholder Images

Currently using emoji placeholders. For production:

1. Add your photos to the `public` folder
2. Update image sources in components
3. Use Next.js Image component for optimization

## 5️⃣ Connect Contact Form (Optional)

The contact form currently shows an alert. To make it functional:

### Option A: EmailJS (Easiest)
```bash
npm install @emailjs/browser
```

Then update `components/Contact.tsx` to use EmailJS.

### Option B: Your Backend
Create an API route in `app/api/contact/route.ts` and update the form submission.

## 6️⃣ Deploy

### Vercel (Recommended - 1 Click)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy! ✨

### Other Platforms
```bash
npm run build  # Build for production
npm run start  # Test production build locally
```

## 🎨 Quick Theme Customization

Want to change colors? Edit `tailwind.config.ts`:

```typescript
// Change primary color (currently blue)
primary: {
  500: '#your-color-here',
  // ... other shades
}
```

## 📱 Mobile Testing

The site is fully responsive! Test on mobile:
- Use Chrome DevTools (F12 → Device Toolbar)
- Or visit from your phone using your local IP

## ⚡ Performance Tips

- The particle background animates ~80 particles
- Custom cursor is desktop-only for better mobile UX
- All animations use Framer Motion for GPU acceleration

## 🆘 Troubleshooting

**"Module not found" errors?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Styling not working?**
- Restart dev server
- Clear `.next` folder: `rm -rf .next`

## 📚 Learn More

- [Full README](README.md) - Detailed documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

---

Need help? Check the README.md or open an issue on GitHub!
