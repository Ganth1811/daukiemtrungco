import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Đổi "site" thành domain thật của bạn trước khi deploy (giúp sitemap.xml đúng URL)
export default defineConfig({
  site: 'https://hema-vn.example.com',
  integrations: [mdx(), sitemap()],
});
