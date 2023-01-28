import Image from 'next/image'
import Hero from 'public/hero.png'
import Logo from 'public/logo.png'
import LandingPage from 'public/landingpage.png'
import PortfolioSite from 'public/portfoliosite.png'
import WebApplication from 'public/webapplication.png'
import EcommerceSite from 'public/ecommercesite.png'
import { type PageWithLayout } from '@haneulchoi/types'
import { type GetServerSidePropsContext } from 'next'
import { PrimaryLayout } from '@haneulchoi/components/layouts'
import { classnames } from '@haneulchoi/functions'
import { useTheme } from '@haneulchoi/contexts'
import { HiArrowRight } from 'react-icons/hi'
import { SiInstagram, SiGithub, SiLinkedin } from 'react-icons/si'
const getServerSideProps = async (_: GetServerSidePropsContext) => {
    return { props: {} }
}

const HomePage: PageWithLayout = () => {
    const { theme } = useTheme()

    return (
        <>
            <picture
                className={classnames(
                    'transition-smooth w-full overflow-hidden h-max lg:max-h-[50vh] block',
                    theme === 'dark' ? 'opacity-75' : 'opacity-25'
                )}
            >
                <Image
                    src={Hero}
                    alt="Haneul Choi Hero Image"
                    layout="responsive"
                    // width={1920}
                    // height={1080}
                    className={classnames(
                        'trasform h-full  lg:-translate-y-16 xl:-translate-y-24 2xl:-translate-y-32 transition-smooth'
                    )}
                />
            </picture>
            <div
                className={classnames(
                    'transition-smooth',
                    theme === 'dark' ? 'bg-neutral-900' : 'bg-white'
                )}
            >
                <section className="p-8 py-16 lg:py-24 w-full max-w-cutoff mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <article className="col-span-1 lg:col-span-4">
                        <h2 className="font-bold font-lato text-2xl md:text-3xl lg:text-4xl mb-1 text-center lg:text-left ">
                            Hi, I am Haneul Choi
                        </h2>
                        <p className="font-medium font-nunito text-lg lg:text-xl leading-8 lg:leading-9 text-center lg:text-left">
                            I am a software developer based in California.
                        </p>
                    </article>
                    <article className="col-span-1 lg:col-span-8 grid grid-cols-1 gap-16 lg:grid-cols-3">
                        <section className="flex flex-col justify-between">
                            <div>
                                <h3 className="font-semibold font-lato pb-2 border-b border-dotted mb-4 text-sky-500 border-sky-500/50">
                                    Who Am I.
                                </h3>
                                <p className="text-sm leading-7 mb-6">
                                    Briefly, I am a positive and passionate
                                    entrepreneur who loves developing softwares.
                                </p>
                            </div>
                            <div>
                                <button
                                    className={classnames(
                                        'transition-smooth px-6 py-2 rounded-md w-full text-white hover:opacity-75 font-medium font-poppins bg-sky-500'
                                    )}
                                >
                                    Background
                                </button>
                            </div>
                        </section>
                        <section className="flex flex-col justify-between">
                            <div>
                                <h3 className="font-semibold font-lato pb-2 border-b border-dotted mb-4 text-cyan-500 border-cyan-500/50">
                                    What Do I Do.
                                </h3>
                                <p className="text-sm leading-7 mb-6">
                                    I build websites such as landing pages,
                                    portfolio sites, web applications, and
                                    e-commerce sites.
                                </p>
                            </div>
                            <div>
                                <button
                                    className={classnames(
                                        'transition-smooth px-6 py-2 rounded-md w-full text-white hover:opacity-75 font-medium font-poppins bg-cyan-500'
                                    )}
                                >
                                    Types of Work
                                </button>
                            </div>
                        </section>
                        <section className="flex flex-col justify-between">
                            <div>
                                <h3 className="font-semibold font-lato pb-2 border-b border-dotted mb-4 text-blue-500 border-blue-500/50">
                                    Work With Me.
                                </h3>
                                <p className="text-sm leading-7 mb-6">
                                    Have questions about working with me? Please
                                    send me your questions and I will answer
                                    them with the best of my ability.
                                </p>
                            </div>
                            <div>
                                <button
                                    className={classnames(
                                        'transition-smooth px-6 py-2 rounded-md w-full text-white hover:opacity-75 font-medium font-poppins bg-blue-500'
                                    )}
                                >
                                    Contact Haneul
                                </button>
                            </div>
                        </section>
                    </article>
                </section>
            </div>
            <div
                className={classnames(
                    'transition-smooth',
                    theme === 'dark'
                        ? 'bg-blue-900'
                        : 'bg-gradient-to-r from-sky-100 via-cyan-100 to-blue-100'
                )}
            >
                <section className="p-8 py-16 lg:py-24 w-full flex flex-col items-center max-w-xl mx-auto">
                    <h3 className="font-semibold font-poppins text-3xl md:text-4xl lg:text-5xl mb-2">
                        Brief About Me.
                    </h3>
                    <p className="font-medium font-nunito text-lg lg:text-xl opacity-75">
                        Let me introduce myself to you.
                    </p>
                    <article className="my-6 flex items-center justify-center gap-x-4">
                        <span className="inline-block w-4 h-4 rounded-md bg-blue-400 drop-shadow-md" />
                        <span className="inline-block w-4 h-4 rounded-md bg-blue-400 drop-shadow-md" />
                        <span className="inline-block w-4 h-4 rounded-md bg-blue-400 drop-shadow-md" />
                    </article>
                    <p className="text-center text-lg lg:text-xl leading-8 lg:leading-9 font-nunito">
                        I am a freelancing software developer who have been
                        building websites for the past few years. My goal is to
                        help grow my client&apos;s businesses and grow with
                        them. I can speak Korean & English. My technology stacks
                        are NodeJS, TypeScript, Python, React, NextJs, Firebase
                        & TailwindCSS.
                    </p>
                </section>
            </div>
            <div
                className={classnames(
                    'transition-smooth',
                    theme === 'dark' ? 'bg-neutral-900' : 'bg-white'
                )}
            >
                <section className="px-8 py-16 lg:py-24 w-full max-w-cutoff mx-auto">
                    <article className="mb-16 lg:flex lg:flex-col lg:items-end">
                        <h3 className="font-semibold font-poppins text-3xl md:text-4xl lg:text-5xl mb-2">
                            I build websites.
                        </h3>
                        <p className="font-medium font-nunito text-lg lg:text-xl opacity-75">
                            The following is the type of products I develop.
                        </p>
                    </article>
                    <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        <div
                            className={classnames(
                                'px-2 py-1 bg-transparent  rounded-t-md transition-smooth overflow-hidden lg:hover:px-4 lg:hover:py-2',
                                theme === 'dark' ? '' : ''
                            )}
                        >
                            <div
                                className={classnames(
                                    'relative  transition-smooth transform hover:bg-transparent rounded-t-md lg:hover:scale-110',
                                    theme === 'dark'
                                        ? 'text-white bg-neutral-900'
                                        : 'bg-white text-neutral-900 '
                                )}
                            >
                                <h4 className="font-medium text-xl lg:text-2xl font-poppins absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-max mx-auto">
                                    Landing Pages
                                </h4>
                                <picture className="opacity-25 block">
                                    <Image
                                        src={LandingPage}
                                        alt="Landing Page Image"
                                    />
                                </picture>
                            </div>
                        </div>
                        <div
                            className={classnames(
                                'px-2 py-1 bg-transparent  rounded-t-md transition-smooth overflow-hidden lg:hover:px-4 lg:hover:py-2',
                                theme === 'dark' ? '' : ''
                            )}
                        >
                            <div
                                className={classnames(
                                    'relative  transition-smooth transform hover:bg-transparent rounded-t-md lg:hover:scale-110',
                                    theme === 'dark'
                                        ? 'text-white bg-neutral-900'
                                        : 'bg-white text-neutral-900 '
                                )}
                            >
                                <h4 className="font-medium text-xl lg:text-2xl font-poppins absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-max mx-auto">
                                    Portfolio Sites
                                </h4>
                                <picture className="opacity-25 block">
                                    <Image
                                        src={PortfolioSite}
                                        alt="Portfolio Site Image"
                                    />
                                </picture>
                            </div>
                        </div>
                        <div
                            className={classnames(
                                'px-2 py-1 bg-transparent  rounded-t-md transition-smooth overflow-hidden lg:hover:px-4 lg:hover:py-2',
                                theme === 'dark' ? '' : ''
                            )}
                        >
                            <div
                                className={classnames(
                                    'relative  transition-smooth transform hover:bg-transparent rounded-t-md lg:hover:scale-110',
                                    theme === 'dark'
                                        ? 'text-white bg-neutral-900'
                                        : 'bg-white text-neutral-900 '
                                )}
                            >
                                <h4 className="font-medium text-xl lg:text-2xl font-poppins absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-max mx-auto">
                                    Web Applications
                                </h4>
                                <picture className="opacity-25 block">
                                    <Image
                                        src={WebApplication}
                                        alt="Web Application Image"
                                    />
                                </picture>
                            </div>
                        </div>
                        <div
                            className={classnames(
                                'px-2 py-1 bg-transparent  rounded-t-md transition-smooth overflow-hidden lg:hover:px-4 lg:hover:py-2',
                                theme === 'dark' ? '' : ''
                            )}
                        >
                            <div
                                className={classnames(
                                    'relative  transition-smooth transform hover:bg-transparent rounded-t-md lg:hover:scale-110',
                                    theme === 'dark'
                                        ? 'text-white bg-neutral-900'
                                        : 'bg-white text-neutral-900 '
                                )}
                            >
                                <h4 className="font-medium text-xl lg:text-2xl font-poppins absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-max mx-auto">
                                    Ecommerce Sites
                                </h4>
                                <picture className="opacity-25 block">
                                    <Image
                                        src={EcommerceSite}
                                        alt="Ecommerce Site Image"
                                    />
                                </picture>
                            </div>
                        </div>
                    </article>
                </section>
            </div>
            <div
                className={classnames(
                    'transition-smooth',
                    theme === 'dark' ? 'bg-neutral-900' : 'bg-white'
                )}
            >
                <section className="px-8 py-16 lg:py-24 w-full max-w-cutoff mx-auto">
                    <article className="mb-16 lg:flex lg:flex-col lg:items-start">
                        <h3 className="font-semibold font-poppins text-3xl md:text-4xl lg:text-5xl mb-2">
                            Send Me Work Inquiries.
                        </h3>
                        <p className="font-medium font-nunito text-lg lg:text-xl opacity-75">
                            Fill out a simple form below and send me your
                            inquiries.
                        </p>
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
