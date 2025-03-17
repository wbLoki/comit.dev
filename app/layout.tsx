import '../styles/globals.css';
import Providers from './Providers';
export const metadata = {
    title: 'Comit',

    description:
        'an AI-powered tool for generating meaningful commit messages and providing coding assistance',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html className='dark' lang='en'>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
};

export default RootLayout;
