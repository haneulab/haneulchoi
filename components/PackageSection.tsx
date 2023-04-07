import { useTheme } from '@studio/hooks/useTheme'
import { classnames } from '@studio/utils/classnames'
import dynamic from 'next/dynamic'

const Image = dynamic(() => import('next/image'))
const Link = dynamic(() => import('next/link'))

const SlSocialGithub = dynamic(() =>
    import('react-icons/sl').then((module) => module.SlSocialGithub)
)
const SlEye = dynamic(() =>
    import('react-icons/sl').then((module) => module.SlEye)
)
const TbPackages = dynamic(() =>
    import('react-icons/tb').then((module) => module.TbPackages)
)
const FaLongArrowAltRight = dynamic(() =>
    import('react-icons/fa').then((module) => module.FaLongArrowAltRight)
)

const PackageSection = () => {
    const { theme } = useTheme()

    return (
        <section className="px-8 lg:px-0 py-12 lg:py-16 max-w-cutoff mx-auto grid grid-cols-1">
            <article className="mb-20 md:mb-24">
                <h3 className="w-full text-center mx-auto font-bold text-3xl md:text-4xl lg:text-5xl font-figtree flex flex-col gap-y-4 lg:gap-y-6 items-center">
                    <TbPackages className="text-5xl md:text-6xl lg:text-7xl" />
                    <span>
                        <span className="inline-block">Better Software,</span>{' '}
                        <span className="inline-block">Better Products.</span>
                    </span>
                </h3>
            </article>
            <article className="grid grid-cols-1 gap-20 md:grid-cols-2 w-full sm:w-max mx-auto mb-16">
                <div className="grid grid-cols-1 gap-8 relative transition-all transform lg:hover:scale-105">
                    <picture className="w-full absolute -top-10 md:-top-14 left-8 z-10 rounded-full max-w-[75px] h-max mx-auto p-2 md:max-w-[100px] md:p-4 border-2 shadow-md shadow-green-400/10 border-green-200 overflow-hidden block drop-shadow-md bg-white/95 backdrop-blur-sm">
                        <Image
                            width={500}
                            height={500}
                            src="/ctx_logo.svg"
                            alt="ctx @haneulchoistudio Logo"
                        />
                    </picture>
                    <section className="px-8 pb-8 pt-14 relative border border-green-400 z-0 rounded-xl shadow-md">
                        <h4 className="font-semibold w-max mx-auto md:w-full font-figtree text-xl lg:text-2xl">
                            @haneulchoistudio/ctx
                        </h4>
                        <code className="w-max mx-auto block md:mx-0 font-source text-green-400 font-semibold lg:text-lg mb-4">
                            NodeJS Package
                        </code>

                        <ul className="flex flex-col gap-y-4 items-center md:items-start">
                            <a
                                href=""
                                className="flex item-center gap-x-2 transition-all lg:hover:text-green-400"
                            >
                                <SlSocialGithub className="text-2xl" />
                                <span className="font-bold font-source">
                                    Source Code
                                </span>
                            </a>
                            <a
                                href=""
                                className="flex item-center gap-x-2 transition-all lg:hover:text-green-400"
                            >
                                <SlEye className="text-2xl" />
                                <span className="font-bold font-source">
                                    See Demo
                                </span>
                            </a>
                        </ul>
                    </section>
                </div>
                <div className="grid grid-cols-1 gap-8 relative transition-all transform lg:hover:scale-105">
                    <picture className="w-full absolute -top-10 md:-top-14 left-8 z-10 rounded-full max-w-[75px] h-max mx-auto p-2 md:max-w-[100px] md:p-4 border-2 shadow-md shadow-blue-600/10 border-blue-300 overflow-hidden block drop-shadow-md bg-white/95 backdrop-blur-sm">
                        <Image
                            width={500}
                            height={500}
                            src="/tnote_logo.svg"
                            alt="Tnote @haneulchoistudio Logo"
                        />
                    </picture>
                    <section className="px-8 pb-8 pt-14 relative border border-blue-400 z-0 rounded-xl shadow-md">
                        <h4 className="w-max mx-auto md:w-full font-semibold font-figtree text-xl lg:text-2xl">
                            @haneulchoistudio/tnote
                        </h4>
                        <code className="w-max mx-auto block md:mx-0 font-source text-blue-400 font-semibold lg:text-lg mb-4">
                            PIP Package
                        </code>
                        <ul className="flex flex-col items-center md:items-start gap-y-4">
                            <a
                                href=""
                                className="flex item-center gap-x-2 transition-all lg:hover:text-blue-400"
                            >
                                <SlSocialGithub className="text-2xl" />
                                <span className="font-bold font-source">
                                    Source Code
                                </span>
                            </a>
                            <a
                                href=""
                                className="flex item-center gap-x-2 transition-all lg:hover:text-blue-400"
                            >
                                <SlEye className="text-2xl" />
                                <span className="font-bold font-source">
                                    See Demo
                                </span>
                            </a>
                        </ul>
                    </section>
                </div>
            </article>
            <article>
                <p
                    className={classnames(
                        'font-medium text-center font-source text-xl leading-7 lg:text-2xl mb-8',
                        theme === 'dark'
                            ? 'text-grayWhite/80'
                            : 'text-normalGray/80'
                    )}
                >
                    Intersted in more detailed information about these packages?
                </p>
                <Link
                    href={'/package'}
                    className="flex items-center gap-x-4 font-figtree font-medium text-orangeRed text-xl justify-center transition-all transform lg:hover:text-orangeRed/100 lg:text-orangeRed/80 lg:hover:scale-110"
                >
                    <TbPackages />
                    <span>Package Page</span>
                    <FaLongArrowAltRight />
                </Link>
            </article>
        </section>
    )
}

export default PackageSection
