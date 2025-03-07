import '@/styles/globals.css';
export const metadata = {
    title: 'Comit',
    description:
        'an AI-powered tool for generating meaningful commit messages and providing coding assistance',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
