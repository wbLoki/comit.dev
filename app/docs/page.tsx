'use client';
import styles from '@/styles/style';
import { Footer, Navbar } from '@/components';
import Link from 'next/link';

const Home: React.FC = () => {
    return (
        <div className='w-full overflow-hidden'>
            <div className='flex flex-col min-h-screen'>
                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}></div>
                </div>
                <div
                    className={`flex-1 items-center text-white ${styles.flexStart}`}
                >
                    <h1 className='text-3xl font-bold'>Comit Documentation</h1>
                    <ul className='mt-4 space-y-2'>
                        <Link href='/docs/sections/introduction'>
                            Introduction
                        </Link>
                        <li>
                            <Link href='/docs/sections/getting-started'>
                                Getting Started
                            </Link>
                        </li>
                        <li>
                            <Link href='/docs/sections/api-reference'>
                                API Reference
                            </Link>
                        </li>
                        <li>
                            <Link href='/docs/sections/faq'>FAQ</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`${styles.paddingX} ${styles.flexStart}`}>
                {/* <div className=''> */}

                {/* </div> */}
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Home;
