export const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    publishDate: z.string(),  // 改成 string
    previewImage: z.string().optional(),
    heroImage: z.string().optional(),
    category: z.array(z.string()).optional(),
    description: z.string().optional(),
  }),
});

