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
                fade: 'fadeIn 3.5s ease-in-out',
            },
            keyframes: theme => ({
                fadeIn: {
                    '0%': { color: 'transparent' },
                    '100%': { color: 'inherit' },
                },
            }),
            colors: {
                'light-accent': 'var(--light-accent)',
                'dark-accent': 'var(--dark-accent)',
            },
            screens: {
                'sm': '1050px'
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
