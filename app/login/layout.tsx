import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Login - My App',
    description: 'Login to access your account',
};

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout;