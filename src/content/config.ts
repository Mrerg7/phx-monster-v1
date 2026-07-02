import { defineCollection, z } from 'astro:content';

const facts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    order: z.number(),
  }),
});

export const collections = { facts };
