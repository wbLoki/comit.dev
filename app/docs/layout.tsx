'use client';
import { AppSidebar } from '@components/app-sidebar';
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from '@components/ui/sidebar';

export default function DocumentationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SidebarProvider
            style={
                {
                    '--sidebar-width': '16rem',
                } as React.CSSProperties
            }
        >
            <AppSidebar />
            <SidebarInset>
                <header className='flex h-16 shrink-0 items-center gap-2 px-4'>
                    <SidebarTrigger className='-ml-1' />
                </header>
                <div className='flex flex-1 flex-col gap-4 p-4 md:px-12 lg:px-16'>
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
