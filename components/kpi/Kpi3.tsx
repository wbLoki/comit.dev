import { Line, LineChart, ResponsiveContainer } from '@node_modules/recharts';
import { Card, CardBody } from '@heroui/react';

type KpiProps = {
    title: string;
    value: number;
    chart: number[];
};

export default function Kpi3({ data }: { data: KpiProps }) {
    const { title, value, chart } = data;
    const formattedData = chart.map((value, index) => ({
        name: `Point ${index + 1}`,
        value,
    }));
    return (
        <Card className='border border-default-100' fullWidth>
            <CardBody>
                <div className='flex flex-nowrap justify-between'>
                    <div className='flex flex-col justify-between gap-y-2 p-4'>
                        <div className='flex flex-col gap-y-4'>
                            <span className='text-sm font-medium text-default-600'>
                                {title}
                            </span>
                            <span className='text-3xl font-semibold'>
                                {value}
                            </span>
                        </div>
                    </div>
                    <div className='min-h-24 w-36 min-w-[140px] shrink-0'>
                        <ResponsiveContainer>
                            <LineChart
                                width={400}
                                height={400}
                                data={formattedData}
                                margin={{
                                    top: 20,
                                    right: 20,
                                    left: 10,
                                }}
                            >
                                <Line
                                    dataKey='value'
                                    dot={false}
                                    // stroke='#ff7300'
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}
