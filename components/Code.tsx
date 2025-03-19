'use client';

import { useState } from 'react';
import { Clipboard, ClipboardCheck } from 'lucide-react';

export default function CodeSnippet({
    code,
    hasCopy = false,
}: {
    code: string;
    hasCopy: boolean;
}) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div
            className={`relative bg-input p-4 py-${
                hasCopy ? '2' : '4'
            } rounded-[0.5rem] flex items-center`}
        >
            <pre className='font-mono text-sm whitespace-pre-wrap'>
                {code.split('\n').map((line, index) => (
                    <span key={index}>
                        {line}
                        <br />
                    </span>
                ))}
            </pre>
            {hasCopy && (
                <button
                    onClick={handleCopy}
                    className='ml-auto p-2 hover:bg-card/70 transition rounded-[0.25rem] cursor-pointer'
                >
                    {copied ? (
                        <ClipboardCheck size={18} />
                    ) : (
                        <Clipboard size={18} />
                    )}
                </button>
            )}
        </div>
    );
}
