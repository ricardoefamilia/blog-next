import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { postsTable } from "./schemas";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const drizzleDb = drizzle(pool, {
  schema: {
    posts: postsTable,
  },
  logger: false, // Ative/desativar o logger para ver/não ver as queries geradas
});
