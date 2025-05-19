import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";
import * as path from "path";

// Load environment variables from .env file
config({ path: path.resolve(process.cwd(), ".env") });

if (!process.env.DATABASE_URL_POSTGRES) {
  throw new Error("DATABASE_URL_POSTGRES environment variable is not set");
}

export default defineConfig({
  schema: "./drizzle/schema.ts",
  out: "./drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL_POSTGRES!,
  },
});
