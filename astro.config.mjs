// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import cloudflare from "@astrojs/cloudflare";

// Disable dev toolbar for cleaner footer
export default defineConfig({
  site: 'https://dockai.pages.dev',

  devToolbar: {
    enabled: false
  },

  integrations: [mdx()],
  adapter: cloudflare()
});