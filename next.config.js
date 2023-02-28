/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    trailingSlash: true,
    async redirects() {
        return [
            { source: '/tutor', destination: '/tutor/home', permanent: true },
            {
                source: '/developer',
                destination: '/developer/home',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
