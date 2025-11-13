const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    category: z.string(), // 這是你文章的「分類」
    previewImage: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});
