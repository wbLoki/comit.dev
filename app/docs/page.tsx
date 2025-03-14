'use client';
import styles from '@/styles/style';
import Link from 'next/link';

const Home: React.FC = () => {
    return (
        <div className='flex flex-col flex-1 text-primary gap-8'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-4xl'>Welcome to Comit Docs</h1>
                <h3 className='text-lg text-dim-white'>
                    Comit is an app that helps you stay accountable with your
                    tasks. This documentation will guide you through the
                    features and API.
                </h3>
            </div>
            <div id='features' className='flex flex-col gap-4'>
                <h2 className='text-3xl'>Features</h2>
                <ul className='list-disc ml-8'>
                    <li>Task tracking</li>
                    <li>Friend accountability</li>
                    <li>Progress insights</li>
                </ul>
            </div>
        </div>
    );
};

export default Home;
