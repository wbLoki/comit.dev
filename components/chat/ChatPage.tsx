import { Button, Link } from '@heroui/react';
import { Chat, Message } from '@types';
import AgentChat from './AgentChat';
import UserChat from './UserChat';

type Props = {
    chats: Chat[];
    chatId: string | null;
    messages: Message[];
    handleChatClick: (id: string) => void;
};

export default function ChatPage({
    chats,
    chatId,
    messages,
    handleChatClick,
}: Props) {
    return (
        <div className='flex h-full bg-primary-900 text-white rounded-md'>
            <aside className='w-64 bg-gray-800 p-4 border-r border-gray-700 flex flex-col'>
                <h2 className='text-lg font-semibold mb-4'>Chat History</h2>

                <div className='flex-grow overflow-y-auto space-y-2'>
                    {chats?.map((chat: any) => (
                        <Button
                            key={chat.id}
                            variant={chat.id === chatId ? 'solid' : 'light'}
                            radius='sm'
                            className='justify-start w-full p-2 hover:bg-gray-700 active:bg-gray-600'
                            onClick={() => handleChatClick(chat.id)}
                        >
                            <span className='truncate'>{chat.messages}</span>
                        </Button>
                    ))}
                </div>

                <Button fullWidth color='primary'>
                    Load More
                </Button>
            </aside>

            <div className='flex-grow flex flex-col'>
                <div className='flex-grow overflow-y-auto p-4 space-y-4'>
                    {messages.map((message: any, index: number) => {
                        if (message.role == 'user') {
                            return (
                                <UserChat
                                    key={index}
                                    message={message.content[0].text}
                                />
                            );
                        } else if (message.role == 'assistant') {
                            return (
                                <AgentChat
                                    key={index}
                                    message={message.content[0].text}
                                />
                            );
                        }
                    })}
                </div>

                <div className='p-4 border-t border-gray-700'>
                    <div className='flex items-center gap-2'>
                        <input
                            type='text'
                            placeholder='Type a message...'
                            className='cursor-not-allowed flex-grow bg-gray-800 rounded-lg p-2 text-sm focus:outline-none'
                            disabled
                        />
                        <Button isDisabled color='primary'>
                            Send
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
