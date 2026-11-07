import { config } from "dotenv";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

import { defineConfig, env } from "prisma/config";

const envPath = fileURLToPath(new URL("../../.env", import.meta.url));

if (existsSync(envPath)) {
  config({ path: envPath });
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
