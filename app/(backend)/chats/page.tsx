"use client";
import api from "@lib/api";
import { getChatTable } from "@requests/getChatTable";
import React from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { useRouter, useSearchParams } from "next/navigation";

function AgentChat(message: any) {
  const markedText = marked(message.message);
  const sanitizedHTML = DOMPurify.sanitize(markedText as string);
  return (
    <div className="flex items-start">
      <div className="bg-gray-800 rounded-lg p-3 max-w-2xl">
        <p className="text-sm">
          <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
        </p>
      </div>
    </div>
  );
}

function UserChat(message: any) {
  return (
    <div className="flex items-start justify-end">
      <div className="bg-blue-600 rounded-lg p-3 max-w-xs">
        <p className="text-sm">{message.message}</p>
      </div>
    </div>
  );
}



export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [chats, setChats] = React.useState([]);
  const [messages, setMessage] = React.useState([]);
  const [chatId, setChatId] = React.useState(null as any);
  function HandleChatClick(chatid: string){
    const params = new URLSearchParams(window.location.search);
    params.set("chatid", chatid);
    router.push(`?${params.toString()}`, { scroll: false });
    
  }
  React.useEffect(() => {
    (async () => {
      const response = await getChatTable(14);
      setChats(response.data as []);
      if (searchParams.get("chatid") !== null) {
        setChatId(searchParams.get("chatid"));
        return 
      } 

      if (response.data[0]?.id) setChatId(response.data[0].id);
      const params = new URLSearchParams(window.location.search);
      params.set("chatid", response.data[0]?.id);
      router.push(`?${params.toString()}`, { scroll: false });
    })();
  }, []);

  React.useEffect(() => {
    if (chatId) {
    //   if (messages.length > 1) {
    //     return;
    //   }
      (async () => {
        const response = await api.get(`/transactions/history/chat/${chatId}`);
        setMessage(response.data[0].messages);
      })();
    }
  }, [chatId]);

  React.useEffect(() => {
    if (searchParams.get("chatid")) {
      setChatId(searchParams.get("chatid"));
    }
  }, [searchParams]);

  return (
    <div className="flex h-[90vh] bg-primary-900 text-white rounded-md">
      <aside className="w-64 bg-gray-800 p-4 border-r border-gray-700 flex flex-col">
        <h2 className="text-lg font-semibold mb-4">Chat History</h2>
        <div className="flex-grow overflow-y-auto space-y-2">
          {chats.map((chat: any) => (
            <button
              key={chat.id}
              className="w-full text-left p-2 rounded hover:bg-gray-700"
              onClick={() => HandleChatClick(chat.id)}
            >
              {chat.messages.slice(0, 30)}
            </button>
          ))}
        </div>
        <button className="w-full bg-blue-500 rounded p-2 mt-4 hover:bg-blue-600">
          Load More
        </button>
      </aside>

      <div className="flex-grow flex flex-col">
        <div className="flex-grow overflow-y-auto p-4 space-y-4">
          {messages.map((message: any, index: number) => {
            if (message.role == "user") {
              return <UserChat key={index} message={message.content[0].text} />;
            } else if (message.role == "assistant") {
              return (
                <AgentChat key={index} message={message.content[0].text} />
              );
            }
          })}
        </div>

        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Type a message..."
              className="cursor-not-allowed flex-grow bg-gray-800 rounded-lg p-2 text-sm focus:outline-none"
              disabled
              
            />
            <button disabled className="bg-blue-500 rounded-lg p-2 ml-2 text-sm cursor-not-allowed">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
