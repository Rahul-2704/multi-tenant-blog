import { defineConfig } from "drizzle-kit";
import { blogTable } from "./db/schema";

export default defineConfig({
  dialect: "postgresql",
  schema: "./db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});

export type CreateBlogType = typeof blogTable.$inferInsert;
export type SelectBlogType = typeof blogTable.$inferSelect;
