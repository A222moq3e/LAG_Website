---
applyTo: '**'
---
# Coding Guidelines
- use tailwindcss for styling. All styles should be defined in the `tailwind.config.js` file. Use utility classes in your components instead of writing custom CSS.
- use shadcn/ui components for UI elements. here's how to add a new component:
```bash
pnpx shadcn@latest add button
```
- Use `pnpm` for all package management tasks. This includes installing, updating, and removing packages. Always use `pnpm` commands instead of `npm` or `yarn`.
- Never Edit the `package.json` file directly. Always use `pnpm` commands to manage dependencies.
