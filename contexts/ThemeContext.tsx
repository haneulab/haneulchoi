import { classnames } from '@studio/utils/classnames'
import { createContext, useEffect, useState } from 'react'
import type { ThemeStore } from 'studio'

export const ThemeContext = createContext<ThemeStore>({
    theme: 'light',
    onChange: null,
})

export const ThemeContextProvider = (props: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<ThemeStore['theme']>('light')

    function onChange(theme_: ThemeStore['theme']): void {
        if (theme_) {
            localStorage.setItem('studio-theme', theme_)
            setTheme(theme_)
        } else {
            localStorage.setItem(
                'studio-theme',
                theme === 'dark' ? 'light' : 'dark'
            )
            setTheme(theme === 'dark' ? 'light' : 'dark')
        }
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
            <div
                className={classnames(
                    'relative w-full transition-smooth',
                    theme === 'dark'
                        ? 'bg-themeDark text-themeLight'
                        : 'bg-themeLight text-themeDark'
                )}
            >
                {props.children}
            </div>
        </ThemeContext.Provider>
    )
}
