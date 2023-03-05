import { LanguageButton, ThemeButton } from '@application/components/core'
import { useTheme } from '@haneulchoi/contexts'
import { classnames } from '@haneulchoi/functions'
import { type AppRFC } from '@haneulchoi/types'
import Link from 'next/link'

const HeaderLayout: AppRFC = () => {
    const { theme } = useTheme()

    return (
        <header
            className={classnames(
                'transition-smooth fixed top-0 z-40 w-full backdrop-blur-sm',
                theme === 'dark'
                    ? 'bg-neutral-900/90 text-white'
                    : 'bg-white/90 text-neutral-900'
            )}
        >
            <section className="p-4 w-full max-w-cutoff mx-auto flex justify-between items-center">
                <h1 className="flex items-center">
                    <Link href={'/'}>
                        <a className="font-light font-mono italic text-base lg:text-lg transition-all hover:opacity-75">
                            HC.Studio
                        </a>
                    </Link>
                </h1>
                <div className="flex items-center gap-x-4 lg:gap-x-6">
                    <ThemeButton />
                    <LanguageButton />
                </div>
            </section>
        </header>
    )
}

export default HeaderLayout
