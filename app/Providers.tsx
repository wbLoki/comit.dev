'use client';

import { AuthProvider } from '@context/AuthProvider';
import { HeroUIProvider } from '@heroui/react';

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <AuthProvider>
            <HeroUIProvider>{children}</HeroUIProvider>
        </AuthProvider>
    );
}
