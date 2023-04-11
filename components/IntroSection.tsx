import { useTheme } from '@studio/hooks/useTheme'
import { classnames } from '@studio/utils/classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FaLongArrowAltRight } from 'react-icons/fa'

const IntroSection = () => {
    const { theme } = useTheme()

    return (
        <section className="px-8 2xl:px-0 py-12 lg:py-16 max-w-cutoff mx-auto grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            <article className="lg:col-span-6 flex flex-col justify-center">
                <h2 className="font-bold font-h text-4xl md:text-5xl lg:text-6xl flex flex-col gap-y-1 mb-8">
                    <span>Hi There!</span>
                    <span>I&apos;m Haneul Choi.</span>
                </h2>
                <p className="font-p flex flex-col gap-y-4 text-xl lg:text-2xl mb-8 opacity-75">
                    <span>
                        I am a software developer, youtuber, and blogger.
                    </span>
                    <span>
                        I build web applications & software packages, review on
                        tech-related contents, and wrtie blogs about them.
                    </span>
                </p>
                <ul className="w-full flex flex-col gap-y-4 lg:flex-row lg:gap-y-0 lg:gap-x-4">
                    <Link
                        href={'/project'}
                        className={classnames(
                            ' font-semibold font-h text-lg border px-6 py-2 rounded-md w-full lg:w-max flex justify-between items-center gap-x-4 transition-smooth lg:hover:opacity-75',
                            theme === 'dark'
                                ? 'bg-themeLight text-themeDark border-themeLight'
                                : 'bg-themeDark text-themeLight border-themeDark'
                        )}
                    >
                        <span>See My Projects</span>
                        <FaLongArrowAltRight />
                    </Link>
                    <Link
                        href={'/package'}
                        className={classnames(
                            'font-semibold font-h text-lg border px-6 py-2 rounded-md w-full lg:w-max flex justify-between items-center gap-x-4 transition-smooth lg:hover:opacity-75',
                            theme === 'dark'
                                ? 'bg-themeDark border-themeDarkLight'
                                : 'bg-themeLight border-themeLightDark'
                        )}
                    >
                        <span>Software Packages</span>
                        <FaLongArrowAltRight />
                    </Link>
                </ul>
            </article>
            <article className="lg:col-span-6">
                <picture className="w-full overflow-hidden block drop-shadow-md">
                    <Image
                        width={500}
                        height={500}
                        src="/profile.svg"
                        alt="Haneul Choi Profile Image"
                        className={`rounded-xl ${
                            theme === 'dark' ? 'grayscale' : ''
                        }`}
                    />
                </picture>
            </article>
        </section>
    )
}

export default IntroSection
