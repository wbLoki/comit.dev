import { Card, CardBody, Progress } from '@heroui/react';
import { Icon } from '@iconify/react';

type KpiProps = {
    title: string;
    value: number;
};

export default function Kpi4({ data }: { data: KpiProps }) {
    const { title, value } = data;
    return (
        <Card className='border p-4 border-default-100'>
            <CardBody>
                <div className='flex flex-col'>
                    <div className='flex items-center justify-between'>
                        <div className='flex h-8 w-8 items-center justify-center rounded-md border p-0.5 bg-danger-50 border-danger-100'>
                            <Icon
                                className='text-success-500'
                                icon='solar:server-square-linear'
                                width={20}
                            />
                        </div>
                    </div>

                    <div className='pt-1'>
                        <dt className='my-2 text-sm font-medium text-default-600'>
                            {title}
                        </dt>
                        <dd className='text-3xl font-semibold'>{value}</dd>
                    </div>
                </div>
                <Progress
                    aria-label='status'
                    className='mt-2 self-end'
                    color='success'
                    value={value}
                />
            </CardBody>
        </Card>
    );
}
