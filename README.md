# Easy Pay - Fintech Payment Application

A modern, secure, and user-friendly fintech landing page built with Next.js 16, featuring smooth animations, responsive design, and comprehensive information about payment solutions.

### Key Features

- Responsive design optimized for all devices
- Animated sections with scroll-triggered effects
- Interactive pricing comparison
- Automated testimonial carousel
- Comprehensive FAQ with collapsible accordion
- Educational insights/blog section
- Mobile-friendly navigation with hamburger menu

## Tech Stack

### Core Technologies
- **Framework:** [Next.js 16.0.0](https://nextjs.org/) - React framework with App Router
- **React:** 19.2.0 - UI library
- **TypeScript:** ^5 - Type safety and better developer experience
- **Tailwind CSS:** ^4 - Utility-first CSS framework
- **Motion (Framer Motion):** ^12.23.24 - Smooth, professional animations
- **Embla Carousel:** ^8.6.0 - Testimonial carousel functionality


## Project Structure

- **`app/`** - Next.js 16 App Router with file-based routing
- **`components/common/`** - Shared components used across multiple pages (navbar, footer, logo)
- **`components/modules/`** - Landing page sections, each in its own module for better organization
- **`components/ui/`** - Base UI components that can be reused across the application
- **`data/`** - Centralized data management for features, FAQs, pricing, insights, etc.
- **`public/images/`** - All static image assets organized by section
- **`types/`** - TypeScript type definitions and interfaces

## How to Run Locally

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js:** Version 18.x or higher ([Download](https://nodejs.org/))
- **pnpm:** Package manager (or you can use npm/yarn)

To install pnpm globally:
```bash
npm install -g pnpm
```

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/hazzaz-am/easypay-fintech
   cd easypay-fintech
   ```

2. **Install dependencies**

   Using pnpm (recommended):
   ```bash
   pnpm install
   ```

   Or using npm:
   ```bash
   npm install
   ```

   Or using yarn:
   ```bash
   yarn install
   ```

3. **Run the development server**

   Using pnpm:
   ```bash
   pnpm dev
   ```

   Or using npm:
   ```bash
   npm run dev
   ```

   Or using yarn:
   ```bash
   yarn dev
   ```

4. **Open in browser**

   Navigate to [http://localhost:3000](http://localhost:3000) in your browser to see the application.

   The page will automatically reload when you make changes to the code.

### Available Scripts

- **`pnpm dev`** - Starts the development server on port 3000
- **`pnpm build`** - Creates an optimized production build
- **`pnpm start`** - Starts the production server (run `build` first)
- **`pnpm lint`** - Runs ESLint to check code quality

### Build for Production

To create a production-ready build:

```bash
# Build the application
pnpm build

# Start the production server
pnpm start
```

The optimized production build will be created in the `.next` directory.

## Features Implemented

### 1. Animations
- Scroll-triggered animations using Motion (Framer Motion)
- Staggered entrance effects for lists and cards
- Smooth transitions with professional timing (0.4s-0.8s)

### 2. Hover Effects
- Navigation links with underline animation
- Button scale and opacity changes
- Card lift effects with shadow elevation
- Interactive FAQ items with color transitions

### 3. Sections
- **Banner:** Hero section with CTAs and app download links
- **Features:** Core platform features with animated cards
- **Working Steps:** Step-by-step guide on using the platform
- **Security:** Security features and compliance information
- **Pricing:** Three-tier pricing comparison
- **Testimonials:** Auto-rotating customer testimonials
- **FAQ:** Collapsible accordion with 6 common questions
- **Insights:** Educational articles on fintech topics
- **Call-to-Action:** Final conversion push
- **Footer:** Links, resources, and legal information

### 4. Responsive Design
- Mobile-first approach
- Hamburger menu for mobile navigation
- Responsive images and layouts

## Performance Optimizations

- Next.js automatic code splitting
- Image optimization with Next.js Image component

## Contact

For questions or support, please refer to the project documentation or contact the development team.

---

