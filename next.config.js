/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'openweathermap.org',
          },
        ],
      }, 
      env:{
        API_KEY: process.env.API_KEY
      }
}

module.exports = nextConfig
