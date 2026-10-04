import type { NextConfig } from "next";

const pagesBuild = process.env.PAGES_BUILD === "1";

const nextConfig: NextConfig = pagesBuild
  ? {
      output: "export",
      basePath: "/portfolio_source_with_comments",
      images: { unoptimized: true },
      typescript: { tsconfigPath: "tsconfig.pages.json" },
    }
  : {};

export default nextConfig;
