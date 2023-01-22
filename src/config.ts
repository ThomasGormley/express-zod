import { z } from "zod";

const appConfigSchema = z.object({
  appName: z.string(),
  databaseUrl: z.string(),
  port: z.coerce.number().optional().default(3000),
  env: z.string(),
});

export const config = appConfigSchema.parse(process.env);
