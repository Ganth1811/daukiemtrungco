import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // Vũ khí / mảng kỹ thuật bài viết đề cập
    weapon: z
      .enum(['truong-kiem', 'kiem-mot-tay', 'dao-gam', 'vat', 'khac'])
      .optional(),
    // Nguồn tài liệu lịch sử (Liechtenauer, Fiore dei Liberi, I.33...)
    source: z.string().optional(),
    level: z.enum(['co-ban', 'trung-cap', 'nang-cao']).optional(),
    // Nếu bài nằm trong một chuỗi bài giảng có thứ tự, điền số thứ tự tại đây
    lessonNumber: z.number().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
