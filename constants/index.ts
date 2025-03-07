import {
    facebook,
    instagram,
    linkedin,
    twitter,
    branch,
    Ai,
    commit,
} from '@/public/assets';
import { Feature } from '@types';

export const navLinks = [
    {
        id: 'home',
        title: 'Home',
    },
    {
        id: 'docs',
        title: 'Docs',
    },
];

export const features: Feature[] = [
    {
        id: 'feature-1',
        icon: commit,
        title: 'Commit Message Generation',
        content:
            'Analyzes staged changes to generate structured and meaningful commit messages automatically.',
    },
    {
        id: 'feature-2',
        icon: branch,
        title: 'Branch Name Generation',
        content:
            'Converts descriptive titles into standardized, readable branch names.',
    },
    {
        id: 'feature-3',
        icon: Ai,
        title: 'AI-Powered Assistance',
        content:
            'Chat with an AI agent to get coding help and command suggestions.',
    },
];

export const stats = [
    {
        id: 'stats-1',
        title: 'User Active',
        value: '3800+',
    },
    {
        id: 'stats-2',
        title: 'Trusted by Company',
        value: '230+',
    },
    {
        id: 'stats-3',
        title: 'Transaction',
        value: '$230M+',
    },
];

export const footerLink = {
    id: 'footerLinks-1',
    title: 'Useful Links',
    links: [
        {
            name: 'How it Works',
            link: 'https://www.comit.dev/how-it-works/',
        },
        {
            name: 'Help',
            link: 'https://www.comit.dev/help-center/',
        },
        {
            name: 'Terms & Services',
            link: 'https://www.comit.dev/terms-and-services/',
        },
    ],
};

export const socialMedia = [
    {
        id: 'social-media-1',
        icon: instagram,
        link: 'https://www.instagram.com/',
    },
    {
        id: 'social-media-2',
        icon: facebook,
        link: 'https://www.facebook.com/',
    },
    {
        id: 'social-media-3',
        icon: twitter,
        link: 'https://www.twitter.com/',
    },
    {
        id: 'social-media-4',
        icon: linkedin,
        link: 'https://www.linkedin.com/',
    },
];
