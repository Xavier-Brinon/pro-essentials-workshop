import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		include: ["src/**/*{problem,solution,explainer}*.{ts,tsx}"],
		passWithNoTests: true,
		environment: "jsdom",
	},
	plugins: [tsconfigPaths()],
});
