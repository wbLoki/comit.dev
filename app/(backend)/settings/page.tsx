'use client';

import React from 'react';
import { Tabs, Tab } from '@heroui/react';
import { Account, Comit } from './tabs';

type Props = {};

const page = (props: Props) => {
    return (
        <div className='flex flex-col w-full p-6 md:p-10 gap-4 lg:gap-8'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-lg'>Settings</h1>
                <h2 className='text-sm text-default-600'>
                    You can update your account and AI preferences.
                </h2>
            </div>

            <div className='w-full max-w-lg self-center'>
                <Tabs
                    color='secondary'
                    aria-label='Options'
                    size='md'
                    classNames={{
                        base: 'w-full',
                        tabList: 'bg-primary-700 w-full max-w-lg',
                    }}
                >
                    <Tab key='account' title='Account'>
                        <Account />
                    </Tab>
                    <Tab key='comit' title='Comit'>
                        <Comit />
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
};

export default page;
