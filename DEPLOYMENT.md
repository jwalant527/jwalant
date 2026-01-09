# Deployment Guide

Step-by-step instructions for deploying your portfolio to various platforms.

## 🚀 Quick Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications and is made by the creators of Next.js.

### Method 1: GitHub Integration (Easiest)

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"
   - Done! 🎉

3. **Custom Domain** (Optional):
   - Go to your project settings
   - Add your custom domain
   - Update DNS records as instructed

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

**Advantages**:
- Zero configuration
- Automatic HTTPS
- Global CDN
- Preview deployments for PRs
- Free for personal projects

---

## 🎯 Netlify Deployment

### Via Git

1. **Push to GitHub/GitLab/Bitbucket**

2. **Deploy on Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy"

### Via Drag & Drop

```bash
# Build the project
npm run build

# Deploy the .next folder on Netlify's drag & drop interface
```

### Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy --prod
```

---

## ☁️ AWS Amplify

1. **Push to GitHub**

2. **Deploy on Amplify**:
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
   - Click "New app" → "Host web app"
   - Connect your GitHub repository
   - Configure settings:
     - Build command: `npm run build`
     - Output directory: `.next`
   - Save and deploy

3. **Configure Next.js** (if needed):
   - Amplify auto-detects Next.js
   - Custom build settings in `amplify.yml` (optional)

---

## 🌊 DigitalOcean App Platform

1. **Push to GitHub**

2. **Deploy**:
   - Go to [DigitalOcean Apps](https://cloud.digitalocean.com/apps)
   - Click "Create App"
   - Choose GitHub as source
   - Select your repository
   - DigitalOcean auto-detects Next.js
   - Review and create

**Cost**: Starting at $5/month

---

## 🚂 Railway

1. **Push to GitHub**

2. **Deploy**:
   - Go to [railway.app](https://railway.app)
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Railway auto-detects Next.js
   - Deploy

**Free Tier**: Available with credit hours

---

## 🐳 Docker Deployment

### Dockerfile

Create [Dockerfile](Dockerfile):

```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

### Build & Run

```bash
# Build image
docker build -t portfolio .

# Run container
docker run -p 3000:3000 portfolio
```

### Deploy to Docker Hub

```bash
# Tag image
docker tag portfolio yourusername/portfolio

# Push to Docker Hub
docker push yourusername/portfolio
```

---

## ☸️ Kubernetes Deployment

### Basic Deployment

Create `k8s-deployment.yaml`:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: portfolio
spec:
  replicas: 3
  selector:
    matchLabels:
      app: portfolio
  template:
    metadata:
      labels:
        app: portfolio
    spec:
      containers:
      - name: portfolio
        image: yourusername/portfolio:latest
        ports:
        - containerPort: 3000
---
apiVersion: v1
kind: Service
metadata:
  name: portfolio-service
spec:
  selector:
    app: portfolio
  ports:
  - port: 80
    targetPort: 3000
  type: LoadBalancer
```

### Deploy

```bash
kubectl apply -f k8s-deployment.yaml
```

---

## 🔧 Custom VPS (Ubuntu/Debian)

### Prerequisites
- VPS with Ubuntu 20.04+
- Domain name pointed to your VPS

### Setup

1. **Install Node.js**:
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

2. **Install PM2**:
```bash
sudo npm install -g pm2
```

3. **Clone and Build**:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
npm install
npm run build
```

4. **Start with PM2**:
```bash
pm2 start npm --name "portfolio" -- start
pm2 startup
pm2 save
```

5. **Setup Nginx** (reverse proxy):
```bash
sudo apt install nginx

# Create Nginx config
sudo nano /etc/nginx/sites-available/portfolio
```

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

6. **Setup SSL with Let's Encrypt**:
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

---

## 🔒 Environment Variables

### Vercel/Netlify

Add in dashboard:
- Go to Project Settings
- Environment Variables
- Add your variables

### Docker

```bash
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_API_URL=your_value \
  portfolio
```

### VPS

Create `.env.local`:
```bash
cd portfolio
nano .env.local
# Add your variables
```

---

## ✅ Pre-Deployment Checklist

- [ ] Update all personal information
- [ ] Replace Lorem Ipsum text
- [ ] Add real project links
- [ ] Update contact information
- [ ] Test contact form
- [ ] Add actual images (replace emojis)
- [ ] Update meta tags for SEO
- [ ] Add Google Analytics (optional)
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Run `npm run build` locally to check for errors
- [ ] Set up environment variables
- [ ] Add custom domain
- [ ] Enable SSL/HTTPS
- [ ] Test loading speed
- [ ] Submit to Google Search Console

---

## 🔍 Post-Deployment

### Analytics

Add Google Analytics in [app/layout.tsx](app/layout.tsx):

```typescript
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}
```

### Performance Monitoring

- Use [Vercel Analytics](https://vercel.com/analytics)
- Or [Google PageSpeed Insights](https://pagespeed.web.dev/)
- Monitor with [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### SEO

1. Submit sitemap to Google Search Console
2. Add robots.txt
3. Generate sitemap.xml
4. Add Open Graph images

---

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules .next package-lock.json
npm install
npm run build
```

### Environment Variables Not Working

- Restart the dev server
- For client-side variables, use `NEXT_PUBLIC_` prefix
- Check .env.local is not committed to Git

### Styling Issues

- Check Tailwind config
- Clear .next folder
- Verify all CSS imports

### 404 on Refresh

For static hosting, add `next.config.mjs`:
```javascript
const nextConfig = {
  output: 'export', // For static export
};
```

---

## 📊 Performance Tips

1. **Optimize Images**: Use Next.js Image component
2. **Code Splitting**: Use dynamic imports for heavy components
3. **Reduce Bundle Size**: Analyze with `npm run build`
4. **Enable Caching**: Configure cache headers
5. **Use CDN**: Vercel/Netlify include CDN by default

---

## 🆘 Support

- **Vercel**: [Documentation](https://vercel.com/docs)
- **Netlify**: [Documentation](https://docs.netlify.com)
- **Next.js**: [Deployment Docs](https://nextjs.org/docs/deployment)

---

**Congratulations!** 🎉 Your portfolio is now live!

Share it with the world:
- LinkedIn
- Twitter
- GitHub profile
- Resume

Don't forget to update it regularly with new projects and skills!
