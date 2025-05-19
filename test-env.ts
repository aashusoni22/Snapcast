import { config } from "dotenv";
import * as path from "path";

// Load environment variables
config({ path: path.resolve(process.cwd(), ".env") });

console.log("DATABASE_URL_POSTGRES:", process.env.DATABASE_URL_POSTGRES);
