import type { NextConfig } from "next";

const pagesBuild = process.env.PAGES_BUILD === "1";

const nextConfig: NextConfig = pagesBuild
  ? {
      output: "export",
      images: { unoptimized: true },
      typescript: { tsconfigPath: "tsconfig.pages.json" },
    }
  : {};

export default nextConfig;
