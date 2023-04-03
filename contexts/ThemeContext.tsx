import { createContext, useEffect, useState } from 'react'
import type { ThemeStore } from 'studio'

export const ThemeContext = createContext<ThemeStore>({
    theme: 'light',
    onChange: null,
})

export const ThemeContextProvider = (props: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<ThemeStore['theme']>('light')

    function onChange(theme: ThemeStore['theme']): void {
        localStorage.setItem('studio-theme', theme)
        setTheme(theme)
    }

    function inIt(): void {
        if (!localStorage.getItem('studio-theme')) {
            localStorage.setItem('studio-theme', 'light')
            setTheme('light')
        } else {
            setTheme(
                localStorage.getItem('studio-theme') as ThemeStore['theme']
            )
        }
    }

    useEffect(() => {
        inIt()
    }, [])

    return (
        <ThemeContext.Provider value={{ theme, onChange }}>
            {props.children}
        </ThemeContext.Provider>
    )
}
