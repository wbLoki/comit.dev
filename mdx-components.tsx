import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // Allows customizing built-in components, e.g. to add styling.
        h1: ({ children }) => (
            <h1 style={{ color: 'white', fontSize: '44px' }}>{children}</h1>
        ),
        h2: ({ children }) => (
            <h2 style={{ color: 'white', fontSize: '32px' }}>{children}</h2>
        ),
        h3: ({ children }) => (
            <h3 style={{ color: 'white', fontSize: '24px' }}>{children}</h3>
        ),
        ul: ({ children }) => (
            <ul style={{ listStyleType: 'disc', marginLeft: '2rem' }}>
                {children}
            </ul>
        ),
        ...components,
    };
}