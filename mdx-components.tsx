import Image, { ImageProps } from '@node_modules/next/image';
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // Allows customizing built-in components, e.g. to add styling.
        h1: ({ children }) => (
            <h1 style={{ color: 'red', fontSize: '44px' }}>{children}</h1>
        ),
        h2: ({ children }) => (
            <h2 style={{ color: 'red', fontSize: '32px' }}>{children}</h2>
        ),
        h3: ({ children }) => (
            <h3 style={{ color: 'red', fontSize: '24px' }}>{children}</h3>
        ),
        img: (props) => (
            <Image
                sizes='100vw'
                style={{ width: '100%', height: 'auto' }}
                {...(props as ImageProps)}
            />
        ),
        ...components,
    };
}
