// src/content/config.ts
// 這裡定義你的 .md 檔案「必須」包含哪些欄位 (Front Matter)

import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    category: z.string(),
    previewImage: z.string(), // 首頁預覽圖的路徑
  }),
});

export const collections = {
  'blog': blogCollection,
};
