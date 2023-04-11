import { useTheme } from '@studio/hooks/useTheme'
import { classnames } from '@studio/utils/classnames'
import { useEffect, useState } from 'react'
import { RiMoonLine, RiLightbulbLine } from 'react-icons/ri'

const ThemeButton = () => {
    const { theme, onChange } = useTheme()
    const [changed, setChanged] = useState<boolean>(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setChanged(false)
        }, 250)
        setChanged(true)
        return () => clearInterval(timer)
    }, [theme])

    return (
        <button
            onClick={() => onChange()}
            className={classnames(
                'flex items-center p-1.5 border rounded-full justify-center text-2xl transition-smooth lg:hover:opacity-70 transform',
                changed ? 'scale-125 opacity-0' : 'scale-100 opacity-100',
                theme === 'dark'
                    ? 'bg-themeDarkLight border-themeLightDark/50'
                    : 'bg-themeLightDark text-themeLight border-themeDarkLight/50'
            )}
        >
            <span>
                {theme === 'dark' && <RiLightbulbLine />}
                {theme === 'light' && <RiMoonLine />}
            </span>
        </button>
    )
}

export default ThemeButton
