import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si'

import { type PageWithLayout } from '@haneulchoi/types'
import { type GetServerSidePropsContext } from 'next'

import { PrimaryLayout } from '@haneulchoi/components/layouts'
import { useTheme } from '@haneulchoi/contexts'
import { classnames } from '@haneulchoi/functions'

const getServerSideProps = async (_: GetServerSidePropsContext) => {
    return { props: {} }
}

const HomePage: PageWithLayout = () => {
    const { theme } = useTheme()

    return (
        <>
            <div className="min-h-screen w-full flex flex-col justify-center relative">
                {/* <picture className="hidden md:block w-full h-full absolute top-0 z-0">
                    <Image
                        src={BGDesktop}
                        alt=""
                        className="opacity-10 w-full"
                    />
                </picture>
                <picture className="block md:hidden w-full h-full absolute top-0 z-0">
                    <Image
                        src={BGMobile}
                        alt=""
                        className="opacity-10 w-full"
                    />
                </picture> */}
                <section className="h-[60vh] w-full flex flex-col justify-center">
                    <section className="w-full max-w-cutoff mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-8 xl:grid-cols-12 gap-8">
                        <article className="flex flex-col items-center lg:items-start lg:col-span-6 xl:col-span-7">
                            <h2 className="font-lato font-bold text-xl lg:text-3xl mb-2 lg:mb-3 italic">
                                Hello, I&apos;m Haneul
                            </h2>
                            <h3 className="font-bold font-poppins text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl mb-4 lg:mb-5">
                                I Make Websites.
                            </h3>
                            <p className="font-nunito text-center lg:text-left font-light text-lg leading-7 lg:text-xl lg:leading-8 2xl:text-2xl 2xl:leading-9">
                                I am a passionate software developer who loves
                                to solve seemlingly impossible problems.
                            </p>
                        </article>
                        <ul className="flex lg:flex-col justify-center items-center gap-x-4 lg:gap-x-0 lg:items-end lg:col-span-2 xl:col-span-5 gap-y-8">
                            <button className="p-1 w-max rounded-md transition-smooth hover:bg-neutral-900 hover:text-white transform lg:hover:scale-110">
                                <span className="rounded-md w-[90%] h-[90%] mx-auto flex items-center justify-center bg-transparent transition-smooth">
                                    <SiGithub className="text-4xl lg:text-5xl xl:text-6xl" />
                                </span>
                            </button>
                            <button className="p-1 w-max rounded-md transition-smooth hover:bg-neutral-900 hover:text-white transform lg:hover:scale-110">
                                <span className="rounded-md w-[90%] h-[90%] mx-auto flex items-center justify-center bg-transparent transition-smooth">
                                    <SiLinkedin className="text-4xl lg:text-5xl xl:text-6xl" />
                                </span>
                            </button>
                            <button className="p-1 w-max rounded-md transition-smooth hover:bg-neutral-900 hover:text-white transform lg:hover:scale-110">
                                <span className="rounded-md w-[90%] h-[90%] mx-auto flex items-center justify-center bg-transparent transition-smooth">
                                    <SiGmail className="text-4xl lg:text-5xl xl:text-6xl" />
                                </span>
                            </button>
                        </ul>
                    </section>
                </section>
                <section
                    className={classnames(
                        'min-h-[40vh] w-full border-t',
                        theme === 'dark'
                            ? 'border-slate-600'
                            : 'border-slate-200'
                    )}
                >
                    <section className="px-8 lg:px-4 py-8 flex flex-col max-w-cutoff mx-auto w-full">
                        <article>
                            <h3 className="font-bold font-lato text-2xl md:text3-xl lg:text-4xl mb-2">
                                Featured Projects
                            </h3>
                            <p className="text-red-400">
                                Currently preparing this section.
                            </p>
                        </article>
                    </section>
                </section>
            </div>
        </>
    )
}

HomePage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export { getServerSideProps }
export default HomePage
