import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si'

import { type PageWithLayout } from '@haneulchoi/types'
import { type GetServerSidePropsContext } from 'next'

import { PrimaryLayout } from '@haneulchoi/components/layouts'
import { useTheme } from '@haneulchoi/contexts'
import { classnames } from '@haneulchoi/functions'

import Image from 'next/image'
import HaneulChoiAvatar from 'public/haneulchoi_avatar.png'

const getServerSideProps = async (_: GetServerSidePropsContext) => {
    return { props: {} }
}

const HomePage: PageWithLayout = () => {
    const { theme } = useTheme()

    return (
        <>
            <div className="min-h-screen w-full flex flex-col justify-center relative">
                <section className="px-12 lg:px-8 py-24 lg:py-28 w-full max-w-cutoff mx-auto grid grid-cols-1 gap-9 lg:grid-cols-12">
                    <article className="flex flex-col items-center lg:items-start lg:col-span-9">
                        <picture className="block w-full max-w-[500px]">
                            <Image
                                src={HaneulChoiAvatar}
                                alt="Haneul Choi Avatar Image"
                            />
                        </picture>
                        <code className="text-center lg:text-start lg:w-full w-max mx-auto font-nunito font-medium text-xl md:text-2xl lg:text-3xl block mb-2">
                            Hi, I&apos;m Haneul.
                        </code>
                        <h2 className="font-medium font-poppins text-center text-2xl lg:text-3xl">
                            I&apos;m a happy software developer.
                        </h2>
                    </article>
                    <ul
                        className={classnames(
                            'flex items-center gap-x-4 justify-center lg:flex-col lg:gap-x-0 lg:gap-y-4 xl:gap-y-6 col-span-1 lg:col-span-3',
                            theme === 'dark' ? '' : 'text-white'
                        )}
                    >
                        <button className="bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-500 p-1.5 rounded-md flex justify-center transition-smooth transform hover:rotate-[25deg] hover:scale-90 items-center">
                            <span className="mx-auto w-[90%] h-[90%] flex flex-col items-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl transform transition-smooth hover:scale-[180%] hover:w-full hover:h-full hover:bg-white/5 backdrop-blur-md rounded-full">
                                <SiGithub />
                            </span>
                        </button>
                        <button className="bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-500 p-1.5 rounded-md flex justify-center transition-smooth transform hover:rotate-[25deg] hover:scale-90 items-center">
                            <span className="mx-auto w-[90%] h-[90%] flex flex-col items-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl transform transition-smooth hover:scale-[180%] hover:w-full hover:h-full hover:bg-white/5 backdrop-blur-md rounded-full">
                                <SiLinkedin />
                            </span>
                        </button>
                        <button className="bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-500 p-1.5 rounded-md flex justify-center transition-smooth transform hover:rotate-[25deg] hover:scale-90 items-center">
                            <span className="mx-auto w-[90%] h-[90%] flex flex-col items-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl transform transition-smooth hover:scale-[180%] hover:w-full hover:h-full hover:bg-white/5 backdrop-blur-md rounded-full">
                                <SiGmail />
                            </span>
                        </button>
                    </ul>
                </section>
            </div>
            <div className="min-h-screen">
                <section className="px-12 lg:px-8 py-12 lg:py-16 w-full h-full max-w-cutoff mx-auto grid grid-cols-1 gap-y-0 lg:grid-cols-12 gap-x-0">
                    <article
                        className={classnames(
                            'col-span-2 lg:col-span-3 w-full h-full flex flex-col gap-y-4 text-center p-8',
                            theme === 'dark' ? 'bg-zinc-800' : 'bg-slate-200'
                        )}
                    >
                        <h3 className="font-bold text-2xl mb-4">
                            Software Projects
                        </h3>
                        <ul className="flex flex-col items-center gap-y-4">
                            <button className="font-nunito font-medium text-lg text-slate-400 transition-smooth hover:text-slate-500">
                                Web Applications
                            </button>
                            <button className="font-nunito font-medium text-lg text-slate-400 transition-smooth hover:text-slate-500">
                                Software Programs
                            </button>
                            <button className="font-nunito font-medium text-lg text-slate-400 transition-smooth hover:text-slate-500">
                                GUI Games
                            </button>
                        </ul>
                    </article>
                    <article
                        className={classnames(
                            'col-span-4 lg:col-span-9 pt-8 lg:pt-0 lg:pl-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3',
                            theme === 'dark' ? 'bg-neutral-900' : 'bg-white'
                        )}
                    >
                        <section
                            className={classnames(
                                'lg:border lg:drop-shadow lg:p-6  flex flex-col justify-between gap-y-2 transition-smooth transform hover:scale-[102.5%] cursor-pointer',
                                theme === 'dark'
                                    ? 'border-slate-400/30 hover:border-slate-400/50'
                                    : 'hover:border-neutral-900/75 lg:border-neutral-900/25 shadow-md shadow-transparent hover:shadow-slate-200/50 '
                            )}
                        >
                            <div className="mb-2">
                                <h4 className="font-medium text-xl font-poppins mb-2">
                                    Soboro
                                </h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nemo officia ex et
                                    accusantium facilis aut.
                                </p>
                            </div>
                            <div>
                                <button className="px-4 py-3 inline-flex justify-center items-center gap-x-2 w-full bg-zinc-500 text-neutral-50 font-lato font-bold text-sm transition-smooth hover:bg-neutral-500/50">
                                    <SiGithub />
                                    <span>Repository</span>
                                </button>
                            </div>
                        </section>
                        <section
                            className={classnames(
                                'lg:border lg:drop-shadow lg:p-6  flex flex-col justify-between gap-y-2 transition-smooth transform hover:scale-[102.5%] cursor-pointer',
                                theme === 'dark'
                                    ? 'border-slate-400/30 hover:border-slate-400/50'
                                    : 'hover:border-neutral-900/75 lg:border-neutral-900/25 shadow-md shadow-transparent hover:shadow-slate-200/50 '
                            )}
                        >
                            <div className="mb-2">
                                <h4 className="font-medium text-xl font-poppins mb-2">
                                    Soboro
                                </h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nemo officia ex et
                                    accusantium facilis aut.
                                </p>
                            </div>
                            <div>
                                <button className="px-4 py-3 inline-flex justify-center items-center gap-x-2 w-full bg-zinc-500 text-neutral-50 font-lato font-bold text-sm transition-smooth hover:bg-neutral-500/50">
                                    <SiGithub />
                                    <span>Repository</span>
                                </button>
                            </div>
                        </section>
                        <section
                            className={classnames(
                                'lg:border lg:drop-shadow lg:p-6  flex flex-col justify-between gap-y-2 transition-smooth transform hover:scale-[102.5%] cursor-pointer',
                                theme === 'dark'
                                    ? 'border-slate-400/30 hover:border-slate-400/50'
                                    : 'hover:border-neutral-900/75 lg:border-neutral-900/25 shadow-md shadow-transparent hover:shadow-slate-200/50 '
                            )}
                        >
                            <div className="mb-2">
                                <h4 className="font-medium text-xl font-poppins mb-2">
                                    Soboro
                                </h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nemo officia ex et
                                    accusantium facilis aut.
                                </p>
                            </div>
                            <div>
                                <button className="px-4 py-3 inline-flex justify-center items-center gap-x-2 w-full bg-zinc-500 text-neutral-50 font-lato font-bold text-sm transition-smooth hover:bg-neutral-500/50">
                                    <SiGithub />
                                    <span>Repository</span>
                                </button>
                            </div>
                        </section>
                        <section
                            className={classnames(
                                'lg:border lg:drop-shadow lg:p-6  flex flex-col justify-between gap-y-2 transition-smooth transform hover:scale-[102.5%] cursor-pointer',
                                theme === 'dark'
                                    ? 'border-slate-400/30 hover:border-slate-400/50'
                                    : 'hover:border-neutral-900/75 lg:border-neutral-900/25 shadow-md shadow-transparent hover:shadow-slate-200/50 '
                            )}
                        >
                            <div className="mb-2">
                                <h4 className="font-medium text-xl font-poppins mb-2">
                                    Soboro
                                </h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nemo officia ex et
                                    accusantium facilis aut.
                                </p>
                            </div>
                            <div>
                                <button className="px-4 py-3 inline-flex justify-center items-center gap-x-2 w-full bg-zinc-500 text-neutral-50 font-lato font-bold text-sm transition-smooth hover:bg-neutral-500/50">
                                    <SiGithub />
                                    <span>Repository</span>
                                </button>
                            </div>
                        </section>
                    </article>
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
