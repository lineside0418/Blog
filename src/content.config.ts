import { defineCollection, z } from 'astro:content';

const spec = defineCollection({
  // 必要に応じてスキーマを定義できます
  // schema: z.object({
  //   title: z.string(),
  //   description: z.string(),
  //   // その他のフィールド
  // })
});

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = {
  'spec': spec,
  'posts': posts,
};
