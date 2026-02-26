# Copilot Instructions

## Build & Development

```bash
npm install          # Install dependencies
npm run dev          # Start dev server at http://localhost:1234
npm run build        # Production build
npm run lint         # Run ESLint
```

## Architecture

This is a **Primer React prototyping app** using Vite and file-based routing via `@generouted/react-router`.

### Routing

Routes are auto-generated from the file structure in `src/pages/`:
- `src/pages/index.jsx` → `/`
- `src/pages/Overview.jsx` → `/Overview`
- `src/pages/Issues.jsx` → `/Issues`

To create a new page, add a `.jsx` file to `src/pages/` and it will automatically be available at the corresponding URL path.

### Component Organization

- **`src/pages/`** - Route components (each file = one route)
- **`src/components/`** - Reusable UI components (GlobalNavigation, SidebarNavigation, etc.)
- **`src/templates/`** - Page layout templates (e.g., `Application` template with header + sidebar)

### Layout Pattern

Pages typically use the `Application` template which provides:
- Global navigation header with customizable `topnav` items
- Optional `sidenav` sidebar navigation
- Main content area via `children`

```jsx
<Application title="Primer" subtitle="React" topnav={topnav} sidenav={sidenav}>
  {/* Page content */}
</Application>
```

## Key Conventions

- Use **Primer React** components from `@primer/react` for all UI elements
- Use **Primer Octicons** from `@primer/octicons-react` for icons
- Use **CSS Modules** (`*.module.css`) for component-specific styles
- Default theme is `night` mode with `dark_dimmed` scheme (configured in `src/index.jsx`)
