import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/adelaide-site",
  env: { NEXT_PUBLIC_BASE_PATH: "/adelaide-site" },
  images: { unoptimized: true },
};

export default nextConfig;
