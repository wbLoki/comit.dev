import api from "@lib/api";

type ChatData = {
  id: string;
  messages: string;
  chat_length: number;
  timestamp: number;
};

type ChatTable = {
  data: ChatData[];
};

export async function getChatTable(limit: number = 10): Promise<ChatTable> {
  const response = await api.get(
    `/transactions/history/chat/titles?limit=${limit}`
  );
  return response.data;
}
