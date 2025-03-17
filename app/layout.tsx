'use client';

import '@/styles/globals.css';
import { HeroUIProvider } from '@heroui/react';
export const metadata = {
    title: 'Comit',
    description:
        'an AI-powered tool for generating meaningful commit messages and providing coding assistance',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html className='dark' lang='en'>
            <body>
                <HeroUIProvider>{children}</HeroUIProvider>
            </body>
        </html>
    );
};

export default RootLayout;
