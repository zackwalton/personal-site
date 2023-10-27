'use client'
import React, { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

export default function ThemeHandler() {

    const [darkMode, setDarkMode] = useState<boolean>(false)

    useEffect(() => {
        initDarkMode()
    }, [])

    function initDarkMode() {
        const darkModeString: string | undefined = localStorage.theme;
        if (darkModeString !== undefined)
            // Set dark mode based on local storage
            setDarkMode(darkModeString === 'dark');
        else
            // Set dark mode based on OS preferred
            setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }

    function changeThemeHandler(theme: string) {
        if (theme === 'dark')
            document.documentElement.classList.add('dark')
        else
            document.documentElement.classList.remove('dark')

        setDarkMode(theme === 'dark');
        localStorage.theme = theme;
    }


    return (
        <button type="button" className={"fixed bottom-7 right-7 text-3xl animate-fade"}
                onClick={() => (darkMode ? changeThemeHandler('light') : changeThemeHandler('dark'))}>
            {darkMode ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
        </button>
    )
}