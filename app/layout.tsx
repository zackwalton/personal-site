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
    title: 'Zack · Hello!',
    description: 'Hey, I\'m Zack! I am a software developer from Ottawa, Ontario, Canada. ' +
        'I study Computer Science at Concordia University. Check out my experience and personal projects!',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">

        <body className={`${openSans.variable} ${eigerdals.variable}`}>

        <div className={"flex flex-nowrap items-center justify-center h-fit p"}>
            <div className={"w-[1000px] h-fit mt-28"}>
                {children}
            </div>
        </div>
        </body>
        </html>
    )
}
