import { defineConfig } from "vitest/config";

export default defineConfig({
  test: { environment: "jsdom", globals: true },
  //   testMatch: ["**/*.test.ts"],
  //   transform: {
  //     "^.+\\.tsx?$": "ts-jest",
  //   },
});
