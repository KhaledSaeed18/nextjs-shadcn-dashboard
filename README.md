# 📊 Next.js Dashboard Template

A modern, responsive dashboard template built with Next.js, shadcn/ui, and Tailwind CSS. This template provides a solid foundation for building administrative interfaces, data visualization applications, and control panels.

## Features

- 🚀 Built with Next.js 15 and React 19
- 🎨 Styled with Tailwind CSS
- 🌓 Light/Dark mode with next-themes
- 📊 Data visualization with Recharts
- 📋 Data tables with TanStack Table
- 🧩 UI components from shadcn/ui
- 🔍 Fully responsive design
- ⚡ Fast performance with Turbopack

## Tech Stack

### Core

- [Next.js](https://nextjs.org/) - React framework
- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety

### UI & Styling

- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Radix UI](https://www.radix-ui.com/) - Headless UI primitives
- [Lucide React](https://lucide.dev/) - Icon library
- [class-variance-authority](https://cva.style/docs) - Component variant management
- [tailwind-merge](https://github.com/dcastil/tailwind-merge) - Merge Tailwind classes

### Data & Visualization

- [TanStack Table](https://tanstack.com/table) - Headless table management
- [Recharts](https://recharts.org/) - Chart library

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn or pnpm

### Installation

1. Clone the repository

```bash
git clone https://github.com/KhaledSaeed18/nextjs-shadcn-dashboard.git
cd nextjs-dashboard-template
```

2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Theming

This template uses next-themes for theme management. You can customize the themes in the `tailwind.config.js` file.

### Components

The UI components are built with shadcn/ui, which provides a collection of accessible and customizable components. You can modify them to fit your needs or add new components.

### Adding Pages

Create new pages by adding files to the `app` directory. Next.js 15 uses the App Router for routing.
