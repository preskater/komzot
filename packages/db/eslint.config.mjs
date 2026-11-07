import base from "@komzot/eslint-config/base";

export default [
  ...base,
  {
    ignores: ["src/generated/**"],
  },
];
