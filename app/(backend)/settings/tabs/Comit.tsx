import React, { useState } from 'react';
import { Button, Form, Select, SelectItem } from '@heroui/react';

type Props = {};

const models = [
    {
        key: 'gpt',
        label: 'chatGPT',
    },
    {
        key: 'claude',
        label: 'Claude AI',
    },
];

const versions: Record<string, { key: string; label: string }[]> = {
    gpt: [
        { key: 'gpt-3.5', label: 'GPT-3.5' },
        { key: 'gpt-4', label: 'GPT-4' },
    ],
    claude: [
        { key: 'claude-1', label: 'Claude 1' },
        { key: 'claude-2', label: 'Claude 2' },
    ],
};

const Comit = () => {
    const [loading, setLoading] = useState(false);
    const [selectedModel, setSelectedModel] = useState<string | null>(null);
    const [selectedVersion, setSelectedVersion] = useState<string | null>(null);

    console.log(selectedModel);
    return (
        <Form className='w-full max-w-lg gap-4' onSubmit={() => {}}>
            <Select
                className='max-w-xs'
                items={models}
                color='default'
                label='AI model'
                placeholder='Select a model'
                variant='underlined'
                selectionMode='single'
                onSelectionChange={(keys) => {
                    const selectedKey = Array.from(keys)[0] as string;
                    setSelectedModel(selectedKey);
                    setSelectedVersion(null);
                }}
            >
                {(model) => (
                    <SelectItem key={model.key}>{model.label}</SelectItem>
                )}
            </Select>

            {/* Model version selection */}
            <Select
                className='max-w-xs'
                items={selectedModel ? versions[selectedModel] || [] : []}
                color='default'
                label='Model version'
                placeholder='Select a version'
                variant='underlined'
                isDisabled={!selectedModel}
                onSelectionChange={(key) => setSelectedVersion(key as string)}
            >
                {(version) => (
                    <SelectItem key={version.key}>{version.label}</SelectItem>
                )}
            </Select>
            <Button
                color='primary'
                type='submit'
                size='sm'
                className='mt-4'
                isLoading={loading}
            >
                Apply changes
            </Button>
        </Form>
    );
};

export default Comit;
