import { useTheme } from '@studio/hooks/useTheme'
import { classnames } from '@studio/utils/classnames'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const RiLightbulbLine = dynamic(() =>
    import('react-icons/ri').then((module) => module.RiLightbulbLine)
)
const RiMoonLine = dynamic(() =>
    import('react-icons/ri').then((module) => module.RiMoonLine)
)

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
                'flex items-center justify-center text-2xl transition-all lg:hover:opacity-70 transform duration-[0.25s]',
                changed ? 'scale-125 opacity-0' : 'scale-100 opacity-100',
                theme === 'dark' ? 'text-white' : 'text-normalDark'
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
