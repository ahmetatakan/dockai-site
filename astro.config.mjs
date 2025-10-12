// @ts-check
import { defineConfig } from 'astro/config';

// Disable dev toolbar for cleaner footer
export default defineConfig({
  site: 'https://dockai.pages.dev',
  devToolbar: {
    enabled: false
  },
  integrations: [],
});
