import * as React from 'react';

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import Image from '@node_modules/next/image';
import { mobileLogo } from '@public/assets';
import Link from '@node_modules/next/link';

const data = {
    navMain: [
        {
            title: 'Getting Started',
            url: '/docs',
            items: [
                {
                    title: 'Installation',
                    url: 'docs/installation',
                },
                {
                    title: 'Project Structure',
                    url: '#',
                },
            ],
        },
        {
            title: 'Building Your Application',
            url: '#',
            items: [
                {
                    title: 'Routing',
                    url: 'docs/routing',
                },
            ],
        },
        {
            title: 'API Reference',
            url: '#',
            items: [
                {
                    title: 'Components',
                    url: '#',
                },
            ],
        },
        {
            title: 'Community',
            url: '#',
            items: [
                {
                    title: 'Contribution Guide',
                    url: '#',
                },
            ],
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar variant='sidebar' {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size='lg' asChild>
                            <a href='#'>
                                <div className='flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground'>
                                    <Image
                                        src={mobileLogo}
                                        className='size-6'
                                        alt={'comit logo'}
                                    />
                                </div>
                                <div className='flex flex-col gap-0.5 leading-none'>
                                    <span className='font-semibold'>
                                        Documentation
                                    </span>
                                    <span className=''>v1.0.0</span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu className='gap-2'>
                        {data.navMain.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <a href={item.url} className='font-medium'>
                                        {item.title}
                                    </a>
                                </SidebarMenuButton>
                                {item.items?.length ? (
                                    <SidebarMenuSub className='ml-0 border-l-0 px-1.5'>
                                        {item.items.map((item) => (
                                            <SidebarMenuSubItem
                                                key={item.title}
                                            >
                                                <SidebarMenuSubButton
                                                    asChild
                                                    // isActive={item.isActive}
                                                >
                                                    <Link href={item.url}>
                                                        {item.title}
                                                    </Link>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        ))}
                                    </SidebarMenuSub>
                                ) : null}
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}

