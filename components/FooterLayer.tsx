import { useTheme } from '@studio/hooks/useTheme'
import { classnames } from '@studio/utils/classnames'
import dynamic from 'next/dynamic'

const Logo = dynamic(() => import('@studio/components/Logo'))
const TfiGithub = dynamic(() =>
    import('react-icons/tfi').then((module) => module.TfiGithub)
)
const TfiInstagram = dynamic(() =>
    import('react-icons/tfi').then((module) => module.TfiInstagram)
)
const TfiLinkedin = dynamic(() =>
    import('react-icons/tfi').then((module) => module.TfiLinkedin)
)

const FooterLayer = () => {
    const { theme } = useTheme()
    return (
        <footer
            className={classnames(
                'w-full text-white border-t border-normalGray/20',
                theme === 'dark' ? 'bg-normalDark/90' : 'bg-grayDark'
            )}
        >
            <section className="px-6 lg:px-0 py-16 w-full max-w-cutoff mx-auto">
                <div className="flex justify-center md:justify-start mb-2 md:mb-3 items-center gap-x-4 lg:gap-x-6">
                    <Logo />
                    <ul className="flex items-center gap-x-2">
                        <span className="block w-[2.5px] h-[2.5px] bg-white rounded-full" />
                        <span className="block w-[2.5px] h-[2.5px] bg-white rounded-full" />
                        <span className="block w-[2.5px] h-[2.5px] bg-white rounded-full" />
                    </ul>
                    <ul className="flex items-center gap-x-3 lg:gap-x-4">
                        <a
                            href="https://github.com/haneulchoistudio"
                            className="transition-all transform lg:hover:opacity-70 lg:hover:scale-110"
                        >
                            <TfiGithub className="text-xl lg:text-2xl" />
                        </a>
                        <a
                            href="https://instagram.com/__sky__e"
                            className="transition-all transform lg:hover:opacity-70 lg:hover:scale-110"
                        >
                            <TfiInstagram className="text-xl lg:text-2xl" />
                        </a>
                        <a
                            href="https://linkedin.com/in/haneulab"
                            className="transition-all transform lg:hover:opacity-70 lg:hover:scale-110"
                        >
                            <TfiLinkedin className="text-xl lg:text-2xl" />
                        </a>
                    </ul>
                </div>
                <div className="flex items-center gap-x-2 justify-center md:justify-start text-xs lg:text-sm text-grayWhite/50">
                    <h3 className="text-center font-medium font-figtree">
                        &copy; Haneul Choi Studio 2023
                    </h3>
                    <div className="flex items-center gap-x-1">
                        <a
                            href="#"
                            className="text-orangeRed transition-all lg:hover:text-normalRed"
                        >
                            Privacy
                        </a>
                        <span className="text-orangeRed">&</span>
                        <a
                            href="#"
                            className="text-orangeRed transition-all lg:hover:text-normalRed"
                        >
                            Content Terms
                        </a>
                    </div>
                </div>
            </section>
        </footer>
    )
}
export default FooterLayer
