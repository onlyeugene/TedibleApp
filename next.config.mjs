/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",  // Existing Google-hosted images
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",  // Cloudinary images
        pathname: "/dso3xmspt/**",  // Replace 'your-cloud-name' with your actual Cloudinary cloud name
      },
    ],
  },
};

export default nextConfig;
