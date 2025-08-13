import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
  images: {
    domains: [
      "images.pexels.com",
      "img.youtube.com",
      "upload.wikimedia.org",
      "ecobricks.org",
      "journal.com.ph",
      "i.ytimg.com",
      "media.greenmatters.com",
      "static1.xdaimages.com",
      "center3dprint.com",
      "img.favpng.com",
    ],
  },
};

export default nextConfig;
