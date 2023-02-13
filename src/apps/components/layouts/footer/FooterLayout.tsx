import { useTheme } from '@haneulchoi/contexts'
import { classnames } from '@haneulchoi/functions'
import { type AppRFC } from '@haneulchoi/types'

const FooterLayout: AppRFC = () => {
    const { theme } = useTheme()

    return (
        <footer
            className={classnames(
                'transition-smooth w-full',
                theme === 'dark'
                    ? 'bg-neutral-900 text-white/90'
                    : 'bg-white text-neutral-800/90'
            )}
        >
            <div className="px-8 py-16 max-w-cutoff mx-auto">
                <p className="text-center font-light text-sm">
                    Made With Love By{' '}
                    <span className="font-poppins transition-smooth opacity-70 hover:opacity-100 cursor-pointer">
                        @HaneuLab
                    </span>
                </p>
            </div>
        </footer>
    )
}

export default FooterLayout
