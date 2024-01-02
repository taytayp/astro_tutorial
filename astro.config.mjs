import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://tay-astro-tuto.netlify.app/",
  integrations: [preact()]
});