'use client';
import styles from '@/styles/style';
import {
    Hero,
    // Stats,
    Business,
    // CTA,
    Footer,
    Navbar,
} from '@/components';
const Home: React.FC = () => {
    return (
        <>
            <div className='w-full overflow-hidden'>
                <div className='flex flex-col min-h-screen'>
                    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                        <div className={`${styles.boxWidth}`}>
                            <Navbar />
                        </div>
                    </div>
                    <div className={`flex-1 items-center ${styles.flexStart}`}>
                        <div className={`${styles.boxWidth}`}>
                            <Hero />
                        </div>
                    </div>
                </div>
                <div className={`${styles.paddingX} ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                        {/* <Stats /> */}
                        <Business />
                        {/* <CTA /> */}
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
