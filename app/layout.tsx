import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import React from "react";

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

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en" className={"dark"}>
        <body className={`${openSans.variable} ${eigerdals.variable}` + " bg-white text-[--text-light] dark:bg-[--bg-dark] dark:text-[--text-dark]"}>
        <div className={"flex flex-nowrap items-center justify-center h-fit"}>
            <div className={"w-[1000px] h-fit mt-28"}>
                {children}
            </div>
        </div>
        </body>
        </html>
    )
}
