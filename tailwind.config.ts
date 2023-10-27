import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            animation: {
                fade: 'fadeIn 1s cubic-bezier(0.74, -0.02, 1, -0.15)',
            },
            keyframes: () => ({
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            }),
            colors: {
                'light-accent': 'var(--light-accent)',
                'dark-accent': 'var(--dark-accent)',
            },
            fontFamily: {
                eigerdals: ['var(--font-eigerdals)'],
                open_sans: ['var(--font-open-sans)']
            }
        },
    },
    plugins: [],
}
export default config
