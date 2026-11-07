import { defineConfig, globalIgnores } from "eslint/config";
import expoFlat from "eslint-config-expo/flat.js";

import base from "./base.js";

export default defineConfig([
  ...base,
  ...expoFlat,
  globalIgnores([".expo/**", "dist/**", "web-build/**", "expo-env.d.ts"]),
]);
