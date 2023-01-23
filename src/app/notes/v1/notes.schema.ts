import { z } from "zod";

export const notesSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1).max(140),
  description: z.string().min(0).max(400),
  hidden: z.boolean().default(false),
  status: z.enum(["published", "archived"]),
});

export type Note = z.infer<typeof notesSchema>;
