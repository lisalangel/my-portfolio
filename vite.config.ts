// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages serves the site from a subfolder, so page and asset URLs need that prefix.
// Change if the repository is renamed.
const PAGES_BASE = "/my-portfolio/";

// Every page that should exist as a real HTML file on GitHub Pages.
const PAGES_ROUTES = [
  "/",
  "/about",
  "/prompt-library",
  "/skills-library",
  "/playbooks",
  "/case-studies",
  "/substack",
  "/contact",
];

// Only the GitHub Actions deploy sets PAGES_BUILD. Lovable's own build ignores
// this block, so the preview and the published site are unaffected.
const isPagesBuild = process.env.PAGES_BUILD === "1";

export default defineConfig({
  vite: isPagesBuild ? { base: PAGES_BASE } : {},
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(isPagesBuild
      ? {
          router: { basepath: PAGES_BASE },
          client: { base: PAGES_BASE },
          pages: PAGES_ROUTES.map((path) => ({
            path,
          })),
          prerender: { enabled: true, autoStaticPathsDiscovery: false },
        }
      : {}),
  },
});
