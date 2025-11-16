// 檔案路徑: src/content/config.ts (已加入食譜欄位)

import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    // --- 這是您原有的欄位 ---
    title: z.string(),
    description: z.string(),
    publishDate: z.date(), // 我們維持它是 date 型別
    category: z.array(z.string()),
    previewImage: z.string(),
    heroImage: z.string().optional(), // 這是你新增的欄位，設為選填
    tags: z.array(z.string()).optional(),
    
    // --- ▼▼▼ 請加入以下 4 個新欄位 (設為 optional) ▼▼▼ ---
    isRecipe: z.boolean().optional(),
    recipeCategory: z.string().optional(),
    recipeIngredients: z.array(z.string()).optional(),
    recipeInstructions: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};
