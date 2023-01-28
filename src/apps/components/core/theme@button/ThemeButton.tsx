import { useTheme } from '@haneulchoi/contexts'
import { type AppRFC } from '@haneulchoi/types'
import { type IThemeButton } from './ThemeButton.types'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { classnames } from '@haneulchoi/functions'

const ThemeButton: AppRFC<IThemeButton> = () => {
    const { theme, onThemeSwitch } = useTheme()

    return (
        <button
            className={classnames(
                'transition-smooth text-2xl hover:opacity-60',
                theme === 'dark' ? 'text-white' : 'text-slate-900'
            )}
            onClick={() => onThemeSwitch(theme === 'dark' ? 'light' : 'dark')}
        >
            {theme === 'dark' ? <MdDarkMode /> : <MdLightMode />}
        </button>
    )
}

export default ThemeButton
