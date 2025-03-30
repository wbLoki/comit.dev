'use client';

import api from '@lib/api';
import { getChatTable } from '@requests/getChatTable';
import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Chat, Message } from '@types';
import { ChatPage } from '@components';

function ChatWrapper() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [chats, setChats] = useState<Chat[]>([]);
    const [messages, setMessages] = useState<Message[]>([]);
    const [chatId, setChatId] = useState<string | null>(null);

    function handleChatClick(chatid: string) {
        const params = new URLSearchParams(window.location.search);
        params.set('chatid', chatid);
        router.push(`?${params.toString()}`, { scroll: false });
    }

    useEffect(() => {
        (async () => {
            try {
                const response = await getChatTable(14);
                const chatData = response.data as Chat[];
                setChats(chatData);

                const currentChatId = searchParams.get('chatid');
                if (currentChatId) {
                    setChatId(currentChatId);
                    return;
                }

                if (chatData.length > 0 && chatData[0].id) {
                    setChatId(chatData[0].id);
                    const params = new URLSearchParams(window.location.search);
                    params.set('chatid', chatData[0].id);
                    router.push(`?${params.toString()}`, { scroll: false });
                }
            } catch (error) {
                console.error('Error fetching chat table:', error);
            }
        })();
    }, []);

    useEffect(() => {
        if (chatId) {
            (async () => {
                try {
                    const response = await api.get(
                        `/transactions/history/chat/${chatId}`
                    );
                    setMessages(response.data[0]?.messages || []);
                } catch (error) {
                    console.error('Error fetching chat messages:', error);
                }
            })();
        }
    }, [chatId]);

    useEffect(() => {
        const currentChatId = searchParams.get('chatid');
        if (currentChatId) {
            setChatId(currentChatId);
        }
    }, [searchParams]);

    return (
        <ChatPage
            chats={chats}
            chatId={chatId}
            messages={messages}
            handleChatClick={handleChatClick}
        />
    );
}

export default function Page() {
    return (
        <Suspense
            fallback={
                <ChatPage
                    chatId={null}
                    chats={[]}
                    messages={[]}
                    handleChatClick={() => {}}
                />
            }
        >
            <ChatWrapper />
        </Suspense>
    );
}
