# DS Education - Global Education Consulting Platform

<div align="center">

![DS Education](https://img.shields.io/badge/DS-Education-0f172a?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?style=for-the-badge&logo=vite)

**Your Gateway to Global Education**

[Live Demo](https://dseducation.com) · [Report Bug](https://github.com/sakkol-git/pixel-perfect-clone/issues) · [Request Feature](https://github.com/sakkol-git/pixel-perfect-clone/issues)

</div>

---

## 🎓 About DS Education

DS Education is a premium overseas education consulting platform helping students in Cambodia and Southeast Asia achieve their dreams of studying abroad. With expertise spanning **9+ countries** and a **98% success rate**, we provide end-to-end support from university selection to visa approval.

### 🌟 Key Features

- 🌍 **Multi-Country Coverage**: Singapore, UK, Australia, USA, Canada, South Korea, China, Switzerland, Vietnam
- 💼 **Free Consultation**: Expert guidance with no hidden fees
- 🎯 **98% Success Rate**: Proven track record with 500+ students placed
- 🌐 **Bilingual Support**: Full English & Khmer language support
- 📱 **Mobile-First Design**: Responsive across all devices
- ⚡ **Premium Animations**: World-class UI with framer-motion
- 🔍 **SEO Optimized**: Comprehensive SEO strategy for maximum visibility

---

## 🚀 Tech Stack

### Core Technologies
- **React 18.3.1** - Modern UI library with hooks
- **TypeScript 5.8.3** - Type-safe development
- **Vite 7.3.1** - Lightning-fast build tool
- **Tailwind CSS 3.4.17** - Utility-first styling

### Animation & UX
- **framer-motion** - Production-ready animations
- Custom animation library (600+ lines)
- Premium micro-interactions
- GPU-accelerated transforms

### Internationalization
- **react-i18next** - EN/KH translations
- **Kantumruy Pro** - Khmer typography
- RTL support ready

### SEO & Performance
- **react-helmet-async** - Dynamic meta tags
- Structured data (Schema.org)
- XML sitemap generation
- Image optimization

---

## 📦 Project Structure

```
pixel-perfect-clone/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
├── src/
│   ├── assets/          # Images and static files
│   ├── components/
│   │   ├── home/        # Homepage sections
│   │   ├── layout/      # Header, Footer, Layout
│   │   ├── ui/          # Reusable UI components
│   │   └── SEO.tsx      # SEO meta tag manager
│   ├── hooks/
│   │   ├── use-scroll-animation.ts
│   │   └── use-mobile.tsx
│   ├── lib/
│   │   ├── animations.ts     # 600+ lines animation library
│   │   ├── i18n.ts           # i18n configuration
│   │   └── utils.ts
│   ├── pages/           # Route pages
│   ├── index.css        # Global styles + animations
│   └── main.tsx
├── BRAND_SEO_GUIDE.md   # Complete branding & SEO strategy
├── MOTION_SYSTEM_GUIDE.md
└── ANIMATION_IMPROVEMENTS.md
```

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ & npm
- Git

### Quick Start

```bash
# Clone the repository
git clone https://github.com/sakkol-git/pixel-perfect-clone.git

# Navigate to project directory
cd pixel-perfect-clone

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Variables
Create a `.env` file in the root:
```env
VITE_SITE_URL=https://dseducation.com
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_FB_PIXEL_ID=XXXXXXXXXXXXXX
```

---

## 🎨 Brand Guidelines

### Brand Colors
```css
--primary: #0f172a;      /* Navy Blue - Trust & Professionalism */
--accent: #f59e0b;       /* Amber - Success & Achievement */
--muted: #64748b;        /* Gray - Secondary Text */
```

### Typography
- **Headings**: Bold, professional
- **Body (EN)**: Inter
- **Body (KH)**: Kantumruy Pro
- **Line Heights**: Enhanced for Khmer readability

### Logo Usage
- Primary: DS Education with graduation cap icon
- Tagline: "Your Gateway to Global Education"
- Colors: Navy Blue (#0f172a) + Amber (#f59e0b)

---

## 🔍 SEO Implementation

### Features Implemented
✅ **Meta Tags**
- Dynamic title/description per page
- Open Graph (Facebook/LinkedIn)
- Twitter Cards
- Canonical URLs
- Hreflang tags (EN/KH)

✅ **Structured Data**
- Organization schema
- EducationalOrganization schema
- Service schema
- AggregateRating schema
- Breadcrumb schema

✅ **Technical SEO**
- XML Sitemap
- Robots.txt optimization
- Image alt tags
- Semantic HTML5
- Mobile-first indexing

✅ **Performance**
- Lazy loading images
- Code splitting
- Preconnect to external domains
- Optimized bundle size

### SEO Component Usage
```tsx
import SEO from "@/components/SEO";

<SEO 
  title="Your Custom Title"
  description="Your custom description"
  keywords="keyword1, keyword2"
  url="/your-page"
  structuredData={yourSchemaObject}
/>
```

---

## 🎭 Animation System

### Premium Features
- **Scroll-based reveals** with viewport detection
- **Stagger animations** for lists and grids
- **3D transforms** with perspective
- **Spring physics** for natural movement
- **Micro-interactions** on all interactive elements
- **GPU acceleration** for 60fps performance

### Usage Example
```tsx
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={staggerContainer()}
>
  <motion.h1 variants={fadeInUp}>Hello World</motion.h1>
</motion.div>
```

---

## 📱 Responsive Design

- **Mobile**: 320px - 768px
- **Tablet**: 769px - 1024px
- **Desktop**: 1025px+
- **4K**: Optimized layouts

All components are fully responsive with touch-optimized interactions.

---

## 🌐 Internationalization

### Supported Languages
- 🇬🇧 English (en)
- 🇰🇭 Khmer (kh)

### Adding Translations
1. Add keys to `public/locales/[lang]/translation.json`
2. Use `t()` function in components:
```tsx
const { t } = useTranslation();
<h1>{t("hero.title")}</h1>
```

---

## 📊 Analytics & Tracking

### Integrated Tools (Ready for Setup)
- Google Analytics 4
- Facebook Pixel
- Google Tag Manager
- Search Console integration

---

## 🚢 Deployment

### Quick Deploy to Vercel (Recommended)

**One-Click Deploy:**
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sakkol-git/pixel-perfect-clone)

**Manual Deploy:**
```bash
# Option 1: Use deployment helper script
./deploy.sh

# Option 2: Vercel CLI
npm install -g vercel
vercel --prod

# Option 3: GitHub + Vercel Dashboard
# 1. Push to GitHub: git push origin main
# 2. Import project at vercel.com/new
# 3. Click Deploy!
```

### Complete Deployment Guides
- 📘 **[VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)** - Complete step-by-step guide
- ✅ **[DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)** - Pre/post deployment checklist
- 🔧 **[deploy.sh](./deploy.sh)** - Automated deployment script

### Deployment Configuration
All necessary files are already configured:
- ✅ `vercel.json` - Vercel configuration with SPA routing & security headers
- ✅ `vite.config.ts` - Optimized build with code splitting
- ✅ `.env.example` - Environment variables template
- ✅ `.vercelignore` - Files excluded from deployment

### Build Optimization
The project includes advanced build optimization:
- **Code Splitting**: Separate chunks for React, UI components, animations, i18n
- **Minification**: esbuild for fast, efficient minification
- **Tree Shaking**: Automatic removal of unused code
- **Asset Optimization**: Images and fonts optimized for web

### Other Deployment Platforms
- **Netlify**: `npm run build` → Deploy `dist` folder
- **Cloudflare Pages**: Auto-detected Vite settings
- **AWS Amplify**: Configure build settings in console
- **GitHub Pages**: Use with `vite-plugin-gh-pages`

---

## 📈 Performance Metrics

- **Lighthouse Score**: 95+ (All categories)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.0s
- **Cumulative Layout Shift**: < 0.1

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is proprietary and confidential. © 2026 DS Education. All rights reserved.

---

## 📞 Contact & Support

**DS Education**
- 🌐 Website: [dseducation.com](https://dseducation.com)
- 📧 Email: info@dseducation.com
- 📱 WhatsApp: +65 9159 3287
- 📞 Cambodia: +855 87741 78
- 📞 Jakarta: +62 817 665 4900

**Social Media**
- [Facebook](https://facebook.com/dseducation)
- [Instagram](https://instagram.com/dseducation)
- [LinkedIn](https://linkedin.com/company/dseducation)
- [Telegram](https://t.me/dseducation)

---

## 🙏 Acknowledgments

- UI/UX Design inspired by modern education platforms
- Animation principles from Motion Design best practices
- SEO strategy based on Google's guidelines
- i18n support for Cambodia and Southeast Asia markets

---

<div align="center">

**Made with ❤️ by the DS Education Team**

*Empowering students to achieve their global education dreams*

[Back to Top](#ds-education---global-education-consulting-platform)

</div>
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
