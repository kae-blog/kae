import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(), // 我們維持它是 date 型別
    category: z.array(z.string()),
    previewImage: z.string(),
    heroImage: z.string().optional(), // 這是你新增的欄位，設為選填
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};
