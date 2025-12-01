# Apple Clone

![Apple Clone Preview](https://imgix.cosmicjs.com/72979920-ce62-11f0-8729-d509e104938b-photo-1592750475338-74b7b21085ab-1764558267185.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A pixel-perfect recreation of Apple's iconic website built with Next.js 16 and powered by Cosmic CMS. Features Apple's signature minimalist design with dynamic product showcases, entertainment content, and promotional banners.

## Features

- 🍎 **Apple-Inspired Design** - Clean, minimalist aesthetic with elegant typography
- 📱 **Product Showcase** - Hero sections featuring flagship products with CTAs
- 🎬 **Entertainment Grid** - Apple TV+, Music, Arcade, and Fitness+ content display
- 🎁 **Promotional Banners** - Dynamic promotional content from Cosmic CMS
- 📱 **Fully Responsive** - Optimized for all device sizes
- ⚡ **Server Components** - Fast page loads with Next.js 16 App Router
- 🎨 **Tailwind CSS** - Utility-first styling with custom Apple-themed colors

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=692d04df16e5f2fdbb99e2c9&clone_repository=692d071916e5f2fdbb99e2e9)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Clone the Apple website"

### Code Generation Prompt

> "Based on the content model I created for 'Clone the Apple website', now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Cosmic](https://www.cosmicjs.com/docs) - Headless CMS for content management
- [Bun](https://bun.sh/) - Fast JavaScript runtime and package manager

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with the Apple Clone bucket

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd apple-clone
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Cosmic credentials to `.env.local`:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

5. Run the development server:
```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Cosmic SDK Examples

### Fetching Products
```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: products } = await cosmic.objects
  .find({ type: 'products' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Entertainment Content
```typescript
const { objects: entertainment } = await cosmic.objects
  .find({ type: 'entertainment' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This application uses three content types from Cosmic:

- **Products** - iPhone, iPad, Mac, Watch, AirPods with hero images and taglines
- **Entertainment** - Apple TV+, Music, Arcade, and Fitness+ content
- **Promotions** - Shopping events, trade-in offers, and other promotional content

## Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Netlify

1. Push your code to GitHub
2. Import the project in Netlify
3. Set build command: `bun run build`
4. Set publish directory: `.next`
5. Add environment variables
6. Deploy
<!-- README_END -->