# Source Directory Structure

## Overview

This directory contains all the source code for the Oralyn dental website.

## Directory Structure

```
src/
├── components/          # Reusable React components
│   ├── Header/         # Navigation header component
│   ├── Home/           # Homepage hero section
│   ├── Analysis/       # Statistics and analysis section
│   └── index.ts        # Component exports
├── styles/             # Global styles
│   └── global.css      # Global CSS styles
├── types/              # TypeScript type definitions
│   └── vite-env.d.ts   # Vite environment types
├── App.tsx             # Main application component
└── main.tsx            # Application entry point
```

## Component Organization

- Each component has its own directory with the component file and styles
- Components are exported through `components/index.ts` for clean imports
- CSS files are co-located with their respective components

## Naming Conventions

- Components: PascalCase (e.g., `Header`, `Home`)
- Files: PascalCase for components, camelCase for utilities
- Directories: PascalCase for components, lowercase for utilities
