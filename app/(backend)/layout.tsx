'use client';

import { Sidebar } from '@components';

export default function DocumentationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <Sidebar>{children}</Sidebar>;
}
