'use client';
import styles from '@/styles/style';
import { Business } from '@components/Business';
import { Footer } from '@components/Footer';
import { Hero } from '@components/Hero';
import { Navbar } from '@components/Navbar';
const Home: React.FC = () => {
    return (
        <>
            <div className='w-full overflow-hidden'>
                <div className='flex flex-col min-h-screen'>
                    {/* Hero Section */}
                    <div className='flex-1 flex items-center justify-center bg-transparent'>
                        <div className='max-w-7xl w-full'>
                            <Hero />
                        </div>
                    </div>
                </div>

                {/* Other Sections */}
                <div className='px-6 flex justify-center'>
                    <div className='max-w-7xl w-full'>
                        <Business />
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
