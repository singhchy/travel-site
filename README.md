# VietnamTravel - Premium Travel Agency Landing Page

A modern, high-conversion travel agency landing page built with Next.js, Tailwind CSS, and Framer Motion. This project features cinematic animations, parallax effects, and a fully responsive design inspired by premium travel brands.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## ✨ Features

### Hero Section
- Full-screen immersive background with Ken Burns effect
- Animated text reveal (word-by-word stagger)
- Floating particle effects
- Glassmorphism search bar with smooth animations
- Parallax scroll effects

### Popular Destinations
- 3D tilt effect on hover
- Staggered fade-in animations
- Image zoom on hover
- Rating badges and pricing cards

### Stats Section
- Animated counters with easing
- Split layout with image and content
- Bounce-in icon animations
- Floating decorative elements

### Services Section
- Icon rotation and scaling on hover
- Gradient background transitions
- Morphing card effects
- Arrow reveal on hover

### Tour Exploration Grid
- Masonry-style card layout
- Image zoom on hover
- Overlay fade with blur effect
- Featured tour badges

### Booking Steps
- Vertical timeline with animated connectors
- Sequential fade-in animations
- Step number badges
- Hover lift effects

### Testimonials
- Auto-playing carousel
- Smooth slide transitions
- Avatar zoom on active testimonial
- Navigation dots and arrows

### Call to Action Banner
- Parallax background movement
- Floating particles
- Glowing button effects
- Trust badges

### Footer
- Multi-column layout
- Social icons with ripple effects
- Smooth fade-up animations
- Back to top button

## 🎨 Design System

### Color Palette
- **Forest Green**: `#2d5a27`
- **Jungle Green**: `#1a3d16`
- **Leaf Light Green**: `#7cb342`
- **Sunrise Gold**: `#ffb74d`
- **Clay Orange**: `#e65100`
- **Ivory**: `#fffff0`
- **Stone Gray**: `#78909c`
- **Charcoal**: `#263238`

### Animation Principles
- **Page Transitions**: Fade + upward movement (0.6-1.2s)
- **Scroll Animations**: Trigger on viewport enter with stagger
- **Micro Interactions**: Scale(1.05) + shadow glow on hover
- **Parallax Effects**: Different scroll speeds for depth

## 📁 Project Structure

```
travel-landing/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and custom CSS
│   │   ├── layout.tsx           # Root layout with metadata
│   │   └── page.tsx             # Main page component
│   ├── components/
│   │   ├── animations/
│   │   │   ├── FadeIn.tsx       # Fade-in animation wrapper
│   │   │   ├── StaggerChildren.tsx  # Staggered children animations
│   │   │   ├── Parallax.tsx     # Parallax scroll effect
│   │   │   └── TextReveal.tsx   # Text reveal animation
│   │   └── sections/
│   │       ├── Hero.tsx          # Hero section
│   │       ├── PopularDestinations.tsx
│   │       ├── Stats.tsx
│   │       ├── Services.tsx
│   │       ├── TourGrid.tsx
│   │       ├── BookingSteps.tsx
│   │       ├── Testimonials.tsx
│   │       ├── CTABanner.tsx
│   │       └── Footer.tsx
│   └── lib/
│       └── utils.ts             # Utility functions
├── public/                     # Static assets
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd travel-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Performance Optimizations

- GPU-friendly transforms (translate, opacity, scale)
- Lazy loading for images
- Optimized animation timing
- Reduced re-renders during scroll
- Intersection Observer for scroll triggers

## 📱 Responsive Design

The landing page is fully responsive with a mobile-first approach:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎬 Animation Components

### FadeIn
Reusable fade-in animation with configurable direction, delay, and duration.

```tsx
<FadeIn delay={0.2} direction="up">
  <YourContent />
</FadeIn>
```

### StaggerChildren
Container for staggered child animations.

```tsx
<StaggerChildren staggerDelay={0.1}>
  <motion.div variants={itemVariants}>Item 1</motion.div>
  <motion.div variants={itemVariants}>Item 2</motion.div>
</StaggerChildren>
```

### Parallax
Parallax scroll effect wrapper.

```tsx
<Parallax offset={50}>
  <YourContent />
</Parallax>
```

### TextReveal
Word-by-word text reveal animation.

```tsx
<TextReveal delay={0.3}>
  Your animated text here
</TextReveal>
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion
