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
    description: 'Passionate developer from Canada.',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={`${openSans.variable} ${eigerdals.variable}`}>{children}</body>
        </html>
    )
}
