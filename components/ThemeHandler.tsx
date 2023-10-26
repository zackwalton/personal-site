'use client'
import React, { useEffect, useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';

export default function ThemeHandler() {

    const [darkMode, setDarkMode] = useState<boolean>(false)

    useEffect(() => {
        initDarkMode()
    }, [])

    function initDarkMode() {
        const darkModeString = localStorage.theme;
        setDarkMode(darkModeString === 'dark');
    }

    function changeThemeHandler(theme: string) {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        setDarkMode(theme === 'dark');
        localStorage.theme = theme;
    }


    return (
        <button type="button" className={"absolute top-5 right-5 text-3xl animate-fade"}
                onClick={() => (darkMode ? changeThemeHandler('light') : changeThemeHandler('dark'))}>
            {darkMode ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
        </button>
    )
}