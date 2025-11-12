// src/content/config.ts
// 這裡定義你的 .md 檔案「必須」包含哪些欄位 (Front Matter)

import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    category: z.string(), // 這是你文章的「分類」
    previewImage: z.string(), // 這是首頁 1:1 預覽圖的路徑
    tags: z.array(z.string()).optional(), // 新增：tags 欄位是選用的 (optional)
  }),
});

export const collections = {
  'blog': blogCollection,
};
