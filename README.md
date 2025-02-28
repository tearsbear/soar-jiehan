# Project Information

A modern, responsive dashboard page built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- React 18.3
- TypeScript 5.4
- Vite 5.4
- Tailwind CSS 3.4
- React Hook Form with Zod validation
- React Router DOM 6.22

## Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

## Setup Instructions

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open http://localhost:5173 in your browser

## Build for Production

```bash
npm run build
# or
yarn build
```

## Development Assumptions & Design Decisions

1. **Form Validation**

   - Used Zod for type-safe schema validation
   - Required fields for all personal info and address fields
   - Password requires minimum 8 characters, uppercase, lowercase, and number

2. **UI/UX**

   - Mobile-first responsive design
   - Modern rounded corners and subtle shadows
   - Loading states with skeleton screens
   - Success notifications for form submissions
   - Animated transitions for better user feedback
   - Card Drawer to show all cards
   - Transfer amount simulation

3. **State Management**

   - Local state management using React hooks
   - Form state handled by React Hook Form
   - Mock data for initial form values

4. **TypeScript**

   - Strict type checking enabled
   - Type inference from Zod schemas
   - Proper type definitions for all components

5. **Performance**
   - Code splitting via React Router
   - Fast refresh enabled for development
   - SVG optimization with SVGR

## Project Structure

```
src/
  ├── components/      # Reusable UI components
  ├── pages/          # Page components
  ├── schemas/        # Zod validation schemas
  ├── data/          # Mock data
  └── routes/        # Route definitions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
