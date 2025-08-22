# Annie (Ari) Gonyora Portfolio Website

## Overview

This is a modern, professional portfolio website for Annie (Ari) Gonyora, a Zimbabwean changemaker, mother of 3, visionary leader, fashion designer, and Minister of Education at the Marine Foundation. The website showcases her leadership roles, projects, and impact across education, technology, and social initiatives. Built as a full-stack application with a React frontend and Express backend, the site features a sophisticated design with Zimbabwean-inspired branding and comprehensive contact functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React Single Page Application (SPA)** with TypeScript for type safety
- **Component-based architecture** using functional components with hooks
- **Routing handled by Wouter** for lightweight client-side navigation
- **Responsive design** built with Tailwind CSS and shadcn/ui component library
- **State management** via React Query for server state and React Context for global UI state
- **Theme system** supporting dark/light modes with CSS custom properties

### Backend Architecture
- **Express.js server** with TypeScript for API endpoints
- **RESTful API design** with structured error handling and request logging
- **In-memory storage** using Map data structures for development/demo purposes
- **Form validation** using Zod schemas for type-safe data validation
- **Contact form system** with message persistence and retrieval endpoints

### Styling and Design System
- **Tailwind CSS** for utility-first styling with custom design tokens
- **shadcn/ui component library** providing consistent, accessible UI components
- **Custom CSS variables** for Zimbabwean flag colors (green, gold, red, black, white)
- **Typography system** using Inter and Playfair Display fonts
- **Responsive breakpoints** with mobile-first design approach

### Database Schema
- **Users table** with id, username, and password fields
- **Contact messages table** storing form submissions with timestamp
- **Drizzle ORM** configured for PostgreSQL with schema validation
- **Database migrations** managed through Drizzle Kit

### Development and Build System
- **Vite** for fast development server and optimized production builds
- **TypeScript** throughout the stack for type safety
- **Path aliases** for clean imports (@/, @shared/, @assets/)
- **Hot module replacement** in development with error overlay
- **Production build** combines frontend assets and server bundle

## External Dependencies

### UI and Styling
- **Radix UI** - Accessible component primitives for complex UI elements
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Lucide React** - Icon library for consistent iconography
- **class-variance-authority** - Utility for managing component variants

### State Management and Data Fetching
- **TanStack React Query** - Server state management and caching
- **React Hook Form** - Form state management with validation
- **Zod** - Schema validation for type-safe data handling

### Database and ORM
- **Drizzle ORM** - Type-safe SQL query builder and ORM
- **@neondatabase/serverless** - Serverless PostgreSQL driver
- **connect-pg-simple** - PostgreSQL session store for Express

### Development Tools
- **Vite** - Build tool and development server
- **TypeScript** - Static type checking
- **ESBuild** - Fast JavaScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal** - Enhanced error reporting in development

### Fonts and Assets
- **Google Fonts** - Inter and Playfair Display for typography
- **Unsplash images** - High-quality stock photography for content sections