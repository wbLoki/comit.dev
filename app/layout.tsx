import '@/styles/globals.css';
import { Navbar } from '@components/Navbar';
import styles from '@styles/style';

export const metadata = {
    title: 'Comit',
    description:
        'An AI-powered tool for generating meaningful commit messages and providing coding assistance',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang='en'>
            <body>
                {/* Navbar added here */}
                <div
                    className={`${styles.paddingX} ${styles.flexCenter} absolute w-full`}
                >
                    <div className={`${styles.boxWidth}`}>
                        <Navbar />
                    </div>
                </div>

                {/* Main content */}
                <main>{children}</main>
            </body>
        </html>
    );
};

export default RootLayout;
