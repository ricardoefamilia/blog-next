import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pgTable, text, boolean, timestamp } from "drizzle-orm/pg-core";

export const postsTable = pgTable("posts", {
  id: text("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  author: text("author").notNull(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  coverImageUrl: text("cover_image_url").notNull(),
  // PostgreSQL tem tipo boolean nativo
  published: boolean("published").notNull(),
  // Melhor usar timestamp em vez de text
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export type PostsTableSelectMode = InferSelectModel<typeof postsTable>;
export type PostsTableInsertMode = InferInsertModel<typeof postsTable>;
