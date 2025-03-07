import { ReactNode } from '@node_modules/@types/react';

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
