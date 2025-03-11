import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure `pageExtensions` to include markdown and MDX files
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    // Redirect /docs to installation
    async redirects() {
        return [
            {
                source: '/docs',
                destination: '/docs/installation',
                permanent: true, // Set to false if it's a temporary redirect
            },
        ];
    },
};

const withMDX = createMDX({
    // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
