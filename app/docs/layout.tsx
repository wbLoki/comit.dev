import { Footer, Navbar, Sidebar } from '@components';
import styles from '@styles/style';
import Link from 'next/link';

export default function DocumentationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='w-full overflow-hidden'>
            <div className='fixed inset-x-0 top-0 z-10 border-b border-gray-950/5 dark:border-white/10'>
                <div className='flex h-14 items-center justify-between gap-8 px-4 sm:px-6'>
                    <Navbar />
                </div>
            </div>
            <div className='grid min-h-dvh grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] pt-24 lg:grid-cols-[var(--container-2xs)_2.5rem_minmax(0,1fr)_2.5rem] lg:pt-14 xl:grid-cols-[var(--container-2xs)_2.5rem_minmax(0,1fr)_2.5rem]'>
                <Sidebar />
                <div className='relative row-start-1 grid grid-cols-subgrid lg:col-start-3'>
                    {children}
                </div>
            </div>
            {/* <aside className='w-64 p-4 border-r'>
                <nav>
                    <ul>
                        <li>
                            <Link href='/docs/sections/introduction'>
                                Introduction
                            </Link>
                        </li>
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
                </nav>
            </aside> */}
            <div className={`${styles.boxWidth}`}>
                <Footer />
            </div>
        </div>
    );
}
