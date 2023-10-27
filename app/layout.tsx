import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import React from "react";
import ThemeHandler from "@/components/ThemeHandler";

const openSans = Open_Sans({
    variable: '--font-open-sans',
    subsets: ['latin'],
})
const eigerdals = localFont(
    {
        src: "../public/Eigerdals.ttf",
        variable: '--font-eigerdals',
    })

export const metadata: Metadata = {
    title: 'Zachary Walton',
    description: 'Hey, I\'m Zack! I am a software developer from Ottawa. I study Computer Science at ' +
        'Concordia University. Check out my experience and personal projects!',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${openSans.variable} ${eigerdals.variable}` +
            " bg-white text-[--text-light] dark:bg-[--bg-dark] dark:text-[--text-dark]"}>
        <script dangerouslySetInnerHTML={{
            __html: `
                try {
                  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark')
                  } else {
                    document.documentElement.classList.remove('dark')
                  }
                } catch (_) {}
              `
        }} />
        <div className={"flex flex-nowrap items-center justify-center h-fit"}>
            <div className={"relative w-full lg:w-[1000px] h-fit p-2 md:p-4 lg:p-0 mt-5 md:mt-28"}>
                <ThemeHandler />
                {children}
            </div>
        </div>
        </body>
        </html>
    )
}
