# SIPM Website

This repository contains the official website for the **International Society of Phytomedicine** (SIPM), built with Vue.js 3, Vite, and vite-ssg for static site generation.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
├── src/
│   ├── main.js              # ViteSSG entry point
│   ├── App.vue              # Root component
│   ├── router/              # Vue Router configuration
│   ├── components/          # Vue components
│   │   ├── layout/          # Header, Footer, etc.
│   │   ├── ui/              # Reusable UI components
│   │   └── content/         # Content-specific components
│   ├── composables/         # Vue composables
│   ├── utils/               # Utility functions
│   ├── views/               # Page components
│   ├── content/             # MD/YAML content files
│   ├── styles/              # CSS styles
│   └── assets/              # Static assets
├── public/                  # Public static files
└── .github/workflows/       # GitHub Actions
```

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

## License

© 2025 International Society of Phytomedicine. All rights reserved.
