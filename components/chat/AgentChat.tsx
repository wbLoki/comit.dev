import { marked } from 'marked';
import DOMPurify from 'dompurify';

export default function AgentChat(message: any) {
    const markedText = marked(message.message);
    const sanitizedHTML = DOMPurify.sanitize(markedText as string);
    return (
        <div className='flex items-start'>
            <div className='bg-gray-800 rounded-lg p-3 max-w-2xl'>
                <div className='text-sm'>
                    <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
                </div>
            </div>
        </div>
    );
}
