import { useTheme } from '@studio/hooks/useTheme'
import { classnames } from '@studio/utils/classnames'
import dynamic from 'next/dynamic'
import { TfiGithub, TfiInstagram, TfiLinkedin } from 'react-icons/tfi'

const Logo = dynamic(() => import('@studio/components/Logo'))

const FooterLayer = () => {
    const { theme } = useTheme()
    return (
        <footer
            className={classnames(
                'w-full border-t',
                theme === 'dark'
                    ? 'bg-themeDarkLight/90 border-themeLightDark/25'
                    : 'bg-themeLightDark/5'
            )}
        >
            <section className="px-8 2xl:px-0 py-16 w-full max-w-cutoff mx-auto">
                <div className="flex justify-center md:justify-start mb-2 md:mb-3 items-center gap-x-4 lg:gap-x-6">
                    <Logo alwaysShow />
                    <ul className="flex items-center gap-x-2">
                        <span
                            className={classnames(
                                'block w-[2.5px] h-[2.5px] rounded-full',
                                theme === 'dark'
                                    ? 'bg-themeLightDark'
                                    : 'bg-themeDarkLight'
                            )}
                        />
                        <span
                            className={classnames(
                                'block w-[2.5px] h-[2.5px] rounded-full',
                                theme === 'dark'
                                    ? 'bg-themeLightDark'
                                    : 'bg-themeDarkLight'
                            )}
                        />
                        <span
                            className={classnames(
                                'block w-[2.5px] h-[2.5px] rounded-full',
                                theme === 'dark'
                                    ? 'bg-themeLightDark'
                                    : 'bg-themeDarkLight'
                            )}
                        />
                    </ul>
                    <ul className="flex items-center gap-x-3 lg:gap-x-4">
                        <a
                            href="https://github.com/haneulchoistudio"
                            className="transition-smooth transform lg:hover:opacity-70 lg:hover:scale-110"
                        >
                            <TfiGithub className="text-xl lg:text-2xl" />
                        </a>
                        <a
                            href="https://instagram.com/__sky__e"
                            className="transition-smooth transform lg:hover:opacity-70 lg:hover:scale-110"
                        >
                            <TfiInstagram className="text-xl lg:text-2xl" />
                        </a>
                        <a
                            href="https://linkedin.com/in/haneulab"
                            className="transition-smooth transform lg:hover:opacity-70 lg:hover:scale-110"
                        >
                            <TfiLinkedin className="text-xl lg:text-2xl" />
                        </a>
                    </ul>
                </div>
                <div className="flex items-center gap-x-2 justify-center md:justify-start text-xs lg:text-sm text-grayWhite/50">
                    <h3 className="text-center font-medium font-h">
                        &copy; Haneul Choi Studio 2023
                    </h3>
                    <div className="flex items-center gap-x-1">
                        <a
                            href="#"
                            className="text-orangeRed transition-smooth lg:hover:text-normalRed"
                        >
                            Privacy
                        </a>
                        <span className="text-orangeRed">&</span>
                        <a
                            href="#"
                            className="text-orangeRed transition-smooth lg:hover:text-normalRed"
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
