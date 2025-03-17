'use client';
import { useState } from 'react';
import { close, darkLogo, menu } from '@/public/assets';
import { navLinks } from '@/constants';
import Button from './Button';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@hooks/useAuth';
import UserMenu from './UserMenu';

const Navbar: React.FC = () => {
    const [toggle, setToggle] = useState(false);
    const { isAuthenticated } = useAuth();
    return (
        <nav className='w-full flex py-6 justify-between items-center navbar'>
            <Image src={darkLogo} alt='comit.dev' width={124} height={32} />
            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                {navLinks.map((nav, index) => (
                    <Link
                        key={nav.id}
                        className='font-poppins font-normal cursor-pointer text-[16px] text-white mr-10'
                        href={nav.href}
                    >
                        {nav.title}
                    </Link>
                ))}
                {isAuthenticated ? (
                    <UserMenu />
                ) : (
                    <Link href='/login'>
                        <Button text='Login' size='md' />
                    </Link>
                )}
            </ul>
            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <Image
                    src={toggle ? close : menu}
                    alt='menu'
                    className='object-contain'
                    width={28}
                    height={28}
                    onClick={() => setToggle((prev) => !prev)}
                />
                <div
                    className={`${toggle ? 'flex' : 'hidden'}
            p-6 bg-black-gradient absolute top-20 ring-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                    <ul className='list-none flex flex-col justify-end items-center flex-1'>
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className='font-poppins font-normal cursor-pointer text-[16px] text-white mb-4'
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                        <Link href='/login'>
                            <Button text='Login' size='md' />
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
