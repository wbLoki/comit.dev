export interface FeatredCardProps {
    icon: string;
    title: string;
    content: string;
    index: number;
}

export interface ButtonProps {
    styles?: string;
}

export interface FeedBackProps {
    content: string;
    title: string;
    name: string;
    img: string | any;
}

export interface Feature {
    id: string;
    icon: string;
    title: string;
    content: string;
}

export interface Chat {
    id: string;
    messages: string;
    chat_length: number;
    timestamp: number;
}

export interface MessageContent {
    role: string;
    content: { type: string; text: string }[];
}

export interface Message {
    _id: string;
    messages: MessageContent[];
    timestamp: number;
    userId: string;
}
