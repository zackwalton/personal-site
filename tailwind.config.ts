import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
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
