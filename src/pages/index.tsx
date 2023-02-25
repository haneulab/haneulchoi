import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si'

import { CardView, type PageWithLayout } from '@haneulchoi/types'
import { type GetServerSidePropsContext } from 'next'

import { PrimaryLayout } from '@haneulchoi/components/layouts'
import { useLanguage, useTheme } from '@haneulchoi/contexts'
import { classnames } from '@haneulchoi/functions'

import Image from 'next/image'
import HaneulChoiAvatar from 'public/haneulchoi_avatar.png'
import { HiArrowRight } from 'react-icons/hi'
import { MdOutlineDevices, MdLanguage } from 'react-icons/md'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { SlPlane } from 'react-icons/sl'
const getServerSideProps = async (_: GetServerSidePropsContext) => {
    return { props: {} }
}

const HomePage: PageWithLayout = () => {
    /** hooks */
    const { theme } = useTheme()
    const { lang } = useLanguage()

    return (
        <>
            <div className="h-screen flex flex-col justify-center items-center">
                <section className="px-8 py-24 lg:py-28 w-full max-w-cutoff mx-auto">
                    <article className="flex flex-col items-center mb-8">
                        <picture className="block mb-2 max-w-[375px]">
                            <Image src={HaneulChoiAvatar} alt="" />
                        </picture>
                        <h2 className="mb-2 font-semibold font-lato text-2xl md:text-3xl lg:text-4xl">
                            Hi, I am Haneul Choi.
                        </h2>
                        <p className="text-center px-8 leading-7 lg:text-lg lg:leading-8 font-nunito">
                            I do software development & teaching for work.
                        </p>
                    </article>
                    <ul className="max-w-[500px] mx-auto flex flex-col px-8 gap-y-4 lg:flex-row lg:px-0 lg:gap-y-0 lg:gap-x-8 justify-center">
                        <button className="w-full p-1 border-2 bg-blue-600 border-sky-500 text-white transition-smooth transform lg:hover:bg-blue-900 lg:hover:border-sky-900 overflow-hidden">
                            <span className="w-full inline-flex items-center justify-center gap-x-4 px-6 py-3 font-medium font-poppins bg-sky-50/5 backdrop-blur-sm transition-smooth transform hover:scale-105">
                                <span>Tutor Page</span>
                                <HiArrowRight />
                            </span>
                        </button>
                        <button className="w-full p-1 border-2 bg-blue-600 border-sky-500 text-white transition-smooth transform lg:hover:bg-blue-900 lg:hover:border-sky-900 overflow-hidden">
                            <span className="w-full inline-flex items-center justify-center gap-x-4 px-6 py-3 font-medium font-poppins bg-sky-50/5 backdrop-blur-sm transition-smooth transform hover:scale-105">
                                <span>Developer Page</span>
                                <HiArrowRight />
                            </span>
                        </button>
                    </ul>
                </section>
            </div>
            <div
                className={classnames(
                    'min-h-screen bg-gradient-to-b from-transparent via-transparent',
                    theme === 'dark' ? ' to-blue-900' : ' to-slate-100'
                )}
            >
                <section className="px-8 py-16 w-full max-w-cutoff mx-auto flex flex-col gap-y-16 lg:gap-y-32">
                    <article>
                        <h3 className="font-bold w-max mx-auto font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8 lg:mb-12">
                            Quickly, This is me.
                        </h3>
                        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                            <div className="flex flex-col gap-8 lg:gap-12">
                                <p className="flex flex-col">
                                    <MdOutlineDevices className="text-2xl lg:text-4xl mb-1" />
                                    <strong className="font-medium font-lato text-lg lg:text-xl mb-2">
                                        Software Development Interest
                                    </strong>

                                    <span className="font-nunito opacity-75">
                                        I became interested in software
                                        development since I decided to build my
                                        own protfolio website. Now, I build web
                                        apps and other software programs that
                                        are either my own or clients&apos;
                                        projects.{' '}
                                        <button className="text-blue-400 opacity-100 font-medium transition-smooth hover:text-blue-500">
                                            Learn about the softwares that I
                                            build.
                                        </button>
                                    </span>
                                </p>
                                <p className="flex flex-col">
                                    <FaChalkboardTeacher className="text-2xl lg:text-4xl mb-1" />
                                    <strong className="font-medium font-lato text-lg lg:text-xl mb-2">
                                        Teaching Interest
                                    </strong>

                                    <span className="font-nunito opacity-75">
                                        I started tutoring since 2017 teaching
                                        middle and highschool students in
                                        mathematics. Since then, I expanded my
                                        mathematical and computational knoweldge
                                        to teach more variety of students in
                                        mathematics and computer science as
                                        well.{' '}
                                        <button className="text-blue-400 opacity-100 font-medium transition-smooth hover:text-blue-500">
                                            Here is list of topics I tutor.
                                        </button>
                                    </span>
                                </p>
                            </div>
                            <div className="flex flex-col gap-8 lg:gap-12">
                                <p className="flex flex-col">
                                    <MdLanguage className="text-2xl lg:text-4xl mb-1" />
                                    <strong className="font-medium font-lato text-lg lg:text-xl mb-2">
                                        Lanaguages & Cultures
                                    </strong>

                                    <span className="font-nunito opacity-75">
                                        I am originally from Seoul, South Korea.
                                        I came to live in Orange County,
                                        California since 2011. I am able to
                                        speak fluent Korean and English.
                                        Although, I am not good enough, I am
                                        also learning Japanese as my third
                                        language.
                                    </span>
                                </p>
                                <p className="flex flex-col">
                                    <SlPlane className="text-2xl lg:text-4xl mb-1" />
                                    <strong className="font-medium font-lato text-lg lg:text-xl mb-2">
                                        Personal Hobbies
                                    </strong>
                                    <span className="font-nunito opacity-75">
                                        In my freetime, I enjoy inviting friends
                                        to cook & share food together in the
                                        table. The types of small talks that I
                                        do there with them is one of my precious
                                        life-motives. I also like to travel to
                                        unknown place, over popular places.
                                    </span>
                                </p>
                            </div>
                        </section>
                    </article>
                    <article>
                        <h3 className="font-semibold font-poppins text-2xl md:text-3xl lg:text-4xl mb-2 lg:mb-3">
                            Building Creative & Effective Softwares
                        </h3>
                        <p className="leading-7 lg:leading-8 lg:text-lg opacity-75 mb-8">
                            I build softwares in 4 different categories. That is{' '}
                            <strong>
                                Web Applications, Software Programs, Software
                                Packages, and GUI Games.
                            </strong>{' '}
                            One of the things that I do is{' '}
                            <em className="font-medium">
                                creative thinking and effective underlaying
                            </em>{' '}
                            of the project. Here, I list some of the previous
                            projects that I worked on for myself and clients.{' '}
                            <a
                                href="#"
                                className="text-blue-500 transition-smooth hover:text-blue-600 text-base"
                            >
                                Visit developer page to see more topics.
                            </a>
                        </p>
                        <ul className="w-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                            <div className="flex flex-col justify-between">
                                <div>
                                    <h5 className="mb-2 font-semibold font-lato">
                                        Social Media Web Application
                                    </h5>
                                    <p className="text-sm font-light font-nunito mb-4">
                                        Web-based social media application based
                                        with interactive user interface and
                                        dynamic data fetching in the SSR
                                        architecture pattern.
                                    </p>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <button className="text-sm px-3 py-2 bg-blue-600 text-white font-medium transition-smooth hover:opacity-75">
                                        Demo
                                    </button>
                                    <button className="text-sm px-3 py-2 bg-purple-500 text-white font-medium transition-smooth hover:opacity-75">
                                        Code
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between">
                                <div>
                                    <h5 className="mb-2 font-semibold font-lato">
                                        File Data Extractor Program
                                    </h5>
                                    <p className="text-sm font-light font-nunito mb-4">
                                        File-OS based software program that
                                        extracts data from a file to csv file
                                        built with python.
                                    </p>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <button className="text-sm px-3 py-2 bg-blue-600 text-white font-medium transition-smooth hover:opacity-75">
                                        Demo
                                    </button>
                                    <button className="text-sm px-3 py-2 bg-purple-500 text-white font-medium transition-smooth hover:opacity-75">
                                        Code
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between">
                                <div>
                                    <h5 className="mb-2 font-semibold font-lato">
                                        Reactify Component Library
                                    </h5>
                                    <p className="text-sm font-light font-nunito mb-4">
                                        Front-end software package used to built
                                        reactjs/nextjs-based web applications.
                                    </p>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <button className="text-sm px-3 py-2 bg-blue-600 text-white font-medium transition-smooth hover:opacity-75">
                                        Demo
                                    </button>
                                    <button className="text-sm px-3 py-2 bg-purple-500 text-white font-medium transition-smooth hover:opacity-75">
                                        Code
                                    </button>
                                </div>
                            </div>
                            <div>
                                <h5 className="mb-2 font-semibold font-lato">
                                    2D Map Relocation Game
                                </h5>
                                <p className="text-sm font-light font-nunito mb-4">
                                    GUI game built using python and its
                                    sub-libraries. The game is a simple map
                                    based path finding game based from Dijkstra
                                    Algorithms.
                                </p>
                                <div className="flex items-center gap-x-2">
                                    <button className="text-sm px-3 py-2 bg-blue-600 text-white font-medium transition-smooth hover:opacity-75">
                                        Demo
                                    </button>
                                    <button className="text-sm px-3 py-2 bg-purple-500 text-white font-medium transition-smooth hover:opacity-75">
                                        Code
                                    </button>
                                </div>
                            </div>
                        </ul>
                    </article>
                    <article className="pb-16">
                        <h3 className="font-semibold font-poppins text-2xl md:text-3xl lg:text-4xl mb-2 lg:mb-3">
                            Intuitive & Analytical Way of Learning Mathematics &
                            Computer
                        </h3>
                        <p className="leading-7 lg:leading-8 lg:text-lg opacity-75 mb-8">
                            I tutor for more than 10 different topics in the
                            field of{' '}
                            <strong>mathematics and computer science.</strong>{' '}
                            For mathematics, I tutor in{' '}
                            <em>
                                algebra, calculus, linear algebra, differential
                                equations, and more.
                            </em>{' '}
                            For computer sciences, I teach introductory
                            programming in (python or C), web programming, and
                            data structures & implementations. Some of the
                            related topics that I believe is useful in
                            real-world applications are offered for tutoring.{' '}
                            <a
                                href="#"
                                className="text-blue-500 transition-smooth hover:text-blue-600 text-base"
                            >
                                Visit tutor page to see more topics.
                            </a>
                        </p>
                        <ul className="w-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                            <div className="flex flex-col justify-between">
                                <div>
                                    <h5 className="mb-2 font-semibold font-lato">
                                        Introduction to Linear Algebra
                                    </h5>
                                    <p className="text-sm font-light font-nunito mb-4">
                                        Web-based social media application based
                                        with interactive user interface and
                                        dynamic data fetching in the SSR
                                        architecture pattern.
                                    </p>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <button className="text-sm px-3 py-2 bg-blue-600 text-white font-medium transition-smooth hover:opacity-75">
                                        Request
                                    </button>
                                    <button className="text-sm px-3 py-2 bg-pink-500 text-white font-medium transition-smooth hover:opacity-75">
                                        Syllabus
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between">
                                <div>
                                    <h5 className="mb-2 font-semibold font-lato">
                                        Applied Linear Algebra
                                    </h5>
                                    <p className="text-sm font-light font-nunito mb-4">
                                        File-OS based software program that
                                        extracts data from a file to csv file
                                        built with python.
                                    </p>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <button className="text-sm px-3 py-2 bg-blue-600 text-white font-medium transition-smooth hover:opacity-75">
                                        Request
                                    </button>
                                    <button className="text-sm px-3 py-2 bg-pink-500 text-white font-medium transition-smooth hover:opacity-75">
                                        Syllabus
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between">
                                <div>
                                    <h5 className="mb-2 font-semibold font-lato">
                                        Introduction to Programming Python
                                    </h5>
                                    <p className="text-sm font-light font-nunito mb-4">
                                        Front-end software package used to built
                                        reactjs/nextjs-based web applications.
                                    </p>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <button className="text-sm px-3 py-2 bg-blue-600 text-white font-medium transition-smooth hover:opacity-75">
                                        Request
                                    </button>
                                    <button className="text-sm px-3 py-2 bg-pink-500 text-white font-medium transition-smooth hover:opacity-75">
                                        Syllabus
                                    </button>
                                </div>
                            </div>
                            <div>
                                <h5 className="mb-2 font-semibold font-lato">
                                    Building Own Installable Py Package
                                </h5>
                                <p className="text-sm font-light font-nunito mb-4">
                                    GUI game built using python and its
                                    sub-libraries. The game is a simple map
                                    based path finding game based from Dijkstra
                                    Algorithms.
                                </p>
                                <div className="flex items-center gap-x-2">
                                    <button className="text-sm px-3 py-2 bg-blue-600 text-white font-medium transition-smooth hover:opacity-75">
                                        Request
                                    </button>
                                    <button className="text-sm px-3 py-2 bg-pink-500 text-white font-medium transition-smooth hover:opacity-75">
                                        Syllabus
                                    </button>
                                </div>
                            </div>
                        </ul>
                    </article>
                </section>
            </div>
            <div
                className={classnames(
                    'bg-gradient-to-b from-transparent via-transparent'
                )}
            >
                <section className="px-8 py-24 lg:py-32 w-full max-w-cutoff mx-auto flex flex-col gap-y-16 lg:gap-y-32">
                    <article className="max-w-2xl mx-auto">
                        <h3 className="font-bold w-max mx-auto font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8 lg:mb-12">
                            Q&A Time.
                        </h3>
                        <p className="text-center px-8 font-nunito opacity-80 leading-7 lg:text-lg lg:leading-8 mb-16">
                            If you have any questions that you think others
                            might possibly have asked before, you can check out
                            the{' '}
                            <a
                                href=""
                                className="text-blue-500 transition-smooth hover:text-blue-600"
                            >
                                Frequently Asked Questions page.
                            </a>{' '}
                            Otherwise, you can directly submit the question form
                            below and I will get back to you as soon as
                            possible!
                        </p>
                        <form className="border-2">
                            <section className="p-8 flex flex-col gap-y-6">
                                <div className="flex flex-col w-full gap-y-2">
                                    <label className="font-bold text-base font-lato">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        className="border-x-0 border-t-0 border-b pb-2 outline-none ring-none focus:outline-0 focus:border-b-blue-500 focus:border-b-2 focus:ring-0 text-slate-800 px-4"
                                    />
                                </div>
                                <div className="flex flex-col w-full gap-y-2">
                                    <label className="font-bold text-base font-lato">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        className="border-x-0 border-t-0 border-b pb-2 outline-none ring-none focus:outline-0 focus:border-b-blue-500 focus:border-b-2 focus:ring-0 text-slate-800 px-4"
                                    />
                                </div>
                                <div className="flex flex-col w-full gap-y-2">
                                    <label className="font-bold text-base font-lato">
                                        Message Title
                                    </label>
                                    <input
                                        type="text"
                                        className="border-x-0 border-t-0 border-b pb-2 outline-none ring-none focus:outline-0 focus:border-b-blue-500 focus:border-b-2 focus:ring-0 text-slate-800 px-4"
                                    />
                                </div>
                                <div className="flex flex-col w-full gap-y-2">
                                    <label className="font-bold text-base font-lato">
                                        Message
                                    </label>
                                    <textarea
                                        rows={6}
                                        className="border-x-0 border-t-0 border-b pb-2 outline-none ring-none focus:outline-0 focus:border-b-blue-500 focus:border-b-2 focus:ring-0 text-slate-800 px-4"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="submit"
                                        value="Send Message"
                                        className="px-8 py-3 bg-blue-500 transition-smooth hover:opacity-80 cursor-pointer font-medium font-poppins"
                                    />
                                </div>
                            </section>
                        </form>
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
