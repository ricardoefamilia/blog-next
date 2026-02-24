import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   /* desconsiderando o svdor Next para criar páginas html */
//   // output: "export",
//   // images: {
//   //   unoptimized: true,
//   // },
//   // exemplo de cacheLife e cacheTag
//   cacheLife: {
//     seconds: {
//       stale: 1,
//       revalidate: 10,
//       expire: 10,
//     },
//   },
//   experimental: {
//     useCache: true,
//   },
// };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
        search: "",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
        search: "",
      },
    ],
  },
};
