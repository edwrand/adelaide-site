import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/adelaide-site",
  images: { unoptimized: true },
};

export default nextConfig;
