/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      hostname: 'vignette.wikia.nocookie.net',
      protocol: "https"
    }]
  }
}

module.exports = nextConfig
