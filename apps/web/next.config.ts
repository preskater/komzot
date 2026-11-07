import { config as loadEnv } from "dotenv";
import type { NextConfig } from "next";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const envPath = fileURLToPath(new URL("../../.env", import.meta.url));

if (existsSync(envPath)) {
  loadEnv({ path: envPath });
}

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  serverExternalPackages: ["@prisma/client", "@prisma/adapter-pg", "pg"],
  transpilePackages: ["@komzot/auth", "@komzot/db", "@komzot/ui"],
};

export default nextConfig;
