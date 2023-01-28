import { useLanguage } from '@haneulchoi/contexts'
import { type AppRFC } from '@haneulchoi/types'
import { type ILanguageButton } from './LanguageButton.types'
import { MdLanguage } from 'react-icons/md'
const LanguageButton: AppRFC<ILanguageButton> = () => {
    const { lang, onLanguageSwitch } = useLanguage()
    const displayLanguage = {
        ko: 'Korean',
        en: 'English',
    }
    return (
        <button
            onClick={() => onLanguageSwitch(lang === 'en' ? 'ko' : 'en')}
            className="flex items-center gap-x-2 transition-smooth hover:opacity-60"
        >
            <MdLanguage className="text-xl" />
            <span>{displayLanguage[lang]}</span>
        </button>
    )
}

export default LanguageButton
