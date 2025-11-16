// 檔案路徑: src/content/config.ts (已加入食譜欄位)

import { defineCollection, z } from 'astro:content';

// 1. 定義 'blog' 集合的結構
const blogCollection = defineCollection({
  // 結構 (Schema)
  schema: z.object({
    // --- 這是您原有的欄位 ---
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    category: z.array(z.string()),
    tags: z.array(z.string()).optional(),
    previewImage: z.string().optional(),
    heroImage: z.string().optional(),
    slug: z.string().optional(),
    
    // --- ▼▼▼ 請加入以下 4 個新欄位 (設為 optional) ▼▼▼ ---
    isRecipe: z.boolean().optional(),
    recipeCategory: z.string().optional(),
    recipeIngredients: z.array(z.string()).optional(),
    recipeInstructions: z.array(z.string()).optional(),
  })
});

// 2. 匯出集合
export const collections = {
  'blog': blogCollection,
};
