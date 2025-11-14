import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url'; // 👈 1. 加入這行

export default defineConfig({
  // ...您其他的 Astro 設定，例如 site, base 等...

  // 👇 2. 加入這個 vite 區塊
  vite: {
    resolve: {
      alias: {
        '@src': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
});
