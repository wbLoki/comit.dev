const Sidebar: React.FC = () => {
    return (
        <div className='relative col-start-1 row-span-full row-start-1 max-lg:hidden'>
            <div className='absolute inset-0'>
                <div className='sticky top-14 bottom-0 left-0 h-full max-h-[calc(100dvh-(var(--spacing)*14.25))] w-2xs overflow-y-auto p-6'>
                    <div>
                        <nav className='flex flex-col gap-8'>
                            <div className='flex flex-col gap-3'>
                                <h3 className='font-mono text-sm/6 font-medium tracking-widest text-gray-500 uppercase sm:text-xs/6 dark:text-gray-400'>
                                    Getting Started
                                </h3>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
