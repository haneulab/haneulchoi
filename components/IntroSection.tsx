import { useTheme } from '@studio/hooks/useTheme'
import { classnames } from '@studio/utils/classnames'
import dynamic from 'next/dynamic'

const Image = dynamic(() => import('next/image'))
const Link = dynamic(() => import('next/link'))
const FaLongArrowAltRight = dynamic(() =>
    import('react-icons/fa').then((module) => module.FaLongArrowAltRight)
)

const IntroSection = () => {
    const { theme } = useTheme()

    return (
        <section className="px-8 lg:px-0 py-12 lg:py-16 max-w-cutoff mx-auto grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            <article className="lg:col-span-6 flex flex-col justify-center">
                <h2 className="font-bold font-figtree text-4xl md:text-5xl lg:text-6xl flex flex-col gap-y-1 mb-8">
                    <span>Hi There!</span>
                    <span>I&apos;m Haneul Choi.</span>
                </h2>
                <p className="font-base font-source flex flex-col gap-y-4 text-xl lg:text-2xl mb-8">
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
                            ' font-semibold text-lg border px-6 py-2 rounded-md w-full lg:w-max flex justify-between items-center gap-x-4 transition-all duration-[0.25s] lg:hover:opacity-75',
                            theme === 'dark'
                                ? 'bg-white text-navyDark border-grayWhite'
                                : 'bg-navyDark text-white border-grayDark'
                        )}
                    >
                        <span>See My Projects</span>
                        <FaLongArrowAltRight />
                    </Link>
                    <Link
                        href={'/package'}
                        className={classnames(
                            'font-semibold text-lg border px-6 py-2 border-orangeRed text-orangeRed rounded-md w-full lg:w-max flex justify-between items-center gap-x-4 transition-all duration-[0.25s] lg:hover:opacity-75',
                            theme === 'dark' ? '' : 'bg-white '
                        )}
                    >
                        <span>Software Packages</span>
                        <FaLongArrowAltRight />
                    </Link>
                </ul>
            </article>
            <article className="lg:col-span-6">
                <picture className="w-full rounded-md overflow-hidden block drop-shadow-md">
                    <Image
                        width={500}
                        height={500}
                        src="/profile.svg"
                        alt="Haneul Choi Profile Image"
                    />
                </picture>
            </article>
        </section>
    )
}

export default IntroSection
