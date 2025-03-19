'use client';

import { Kpi3, Kpi4 } from '@components';
// import { Code } from '@components';
import { Snippet, Tooltip } from '@heroui/react';
import { useAuth } from '@hooks/useAuth';

export default function Page() {
    const { user } = useAuth();
    const token = '23412324ER3214325242E2';

    return (
        <div className='flex flex-col w-full p-6 md:p-10 gap-4 lg:gap-8'>
            <h2 className='text-lg'>Dashboard</h2>
            <div className='flex justify-between'>
                <h1 className='text-2xl capitalize'>Welcome {user}</h1>
                <div className='flex flex-col'>
                    <span className='text-sm'>Login Token</span>
                    <Snippet
                        className='text-default-foreground'
                        size='sm'
                        hideSymbol
                    >
                        {token}
                    </Snippet>
                    <Tooltip placement='bottom' content='I am a tooltip'>
                        <span className='text-sm text-right mt-2 cursor-pointer'>
                            How to use ?
                        </span>
                    </Tooltip>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 w-fit'>
                <Kpi3
                    data={{
                        title: 'Usage graph per time',
                        value: 270,
                        chart: [24, 12, 4, 15, 8, 35],
                    }}
                />
                <Kpi4
                    data={{
                        title: 'Tokens usage graph',
                        value: 78,
                    }}
                />
            </div>
        </div>
    );
}
