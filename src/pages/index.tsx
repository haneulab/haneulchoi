import { type PageWithLayout } from '@haneulchoi/types'
import { type GetServerSidePropsContext } from 'next'

import { PrimaryLayout } from '@haneulchoi/components/layouts'
import { useLanguage, useTheme } from '@haneulchoi/contexts'
import { classnames } from '@haneulchoi/functions'

import Image from 'next/image'
import HaneulChoiAvatar from 'public/haneulchoi_avatar.png'
import { HiOutlineArrowDown, HiArrowRight } from 'react-icons/hi'
import Link from 'next/link'
const getServerSideProps = async (_: GetServerSidePropsContext) => {
    return { props: {} }
}

const HomePage: PageWithLayout = () => {
    /** hooks */
    const { theme } = useTheme()
    const { lang } = useLanguage()

    return (
        <>
            <div className="h-screen flex flex-col justify-center items-center relative">
                <div className="absolute bottom-8 w-max mx-auto flex justify-center items-center">
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-x-2 font-nunito font-light text-slate-500 transition-smooth hover:text-sky-500"
                    >
                        <span>
                            {lang === 'en'
                                ? 'Any questions? Contact me'
                                : '질문이 있으신가요?'}
                        </span>
                        <HiOutlineArrowDown />
                    </a>
                </div>
                <section className="px-8 py-24 lg:py-28 w-full max-w-cutoff mx-auto relative">
                    <article className="flex flex-col items-center mb-6">
                        <picture className="block mb-2 max-w-[275px] md:max-w-[325px]">
                            <Image
                                src={HaneulChoiAvatar}
                                alt="Haneul Choi, Software Developer, Mathematics & Computer Science Tutor Image"
                            />
                        </picture>
                        <h2 className="mb-2 font-semibold font-poppins text-2xl md:text-3xl lg:text-4xl">
                            {lang === 'en'
                                ? 'Hi, I am Haneul Choi.'
                                : '안녕하세요, 최하늘입니다.'}
                        </h2>
                        <p className="text-center px-8 leading-7 lg:text-lg lg:leading-8 font-lato">
                            {lang === 'en'
                                ? 'I am a software developer / tutor.'
                                : '소프트웨어 개발 및 개인과외를 합니다.'}
                        </p>
                    </article>
                    <ul className="max-w-[500px] mx-auto flex flex-col px-8 gap-y-4 lg:flex-row lg:px-0 lg:gap-y-0 lg:gap-x-8 justify-center">
                        <Link href={'/tutor/home'}>
                            <a
                                className={classnames(
                                    'w-full border-2 transition-smooth transform overflow-hidden',
                                    theme === 'dark'
                                        ? 'border-neutral-500/25 hover:border-neutral-300/90'
                                        : 'border-neutral-700/25 hover:border-neutral-800/90'
                                )}
                            >
                                <span className="w-full inline-flex px-3 py-2 items-center justify-center gap-x-4 font-light font-poppins transition-smooth transform hover:scale-105">
                                    <span>
                                        {lang === 'en'
                                            ? 'Tutor Page'
                                            : '과외 페이지로 가기'}
                                    </span>
                                    <HiArrowRight />
                                </span>
                            </a>
                        </Link>
                        <Link href={'/developer/home'}>
                            <a
                                className={classnames(
                                    'w-full border-2 transition-smooth transform overflow-hidden',
                                    theme === 'dark'
                                        ? 'border-neutral-500/25 hover:border-neutral-300/90'
                                        : 'border-neutral-700/25 hover:border-neutral-800/90'
                                )}
                            >
                                <span className="w-full inline-flex px-3 py-2 items-center justify-center gap-x-4 font-light font-poppins transition-smooth transform hover:scale-105">
                                    <span>
                                        {lang === 'en'
                                            ? 'Developer Page'
                                            : '개발 페이지로 가기'}
                                    </span>
                                    <HiArrowRight />
                                </span>
                            </a>
                        </Link>
                    </ul>
                </section>
            </div>
            {/* <div
                className={classnames(
                    'min-h-screen bg-gradient-to-b from-transparent via-transparent',
                    theme === 'dark' ? ' to-neutral-800' : ' to-neutral-100'
                )}
            >
                <section className="px-8 py-16 w-full max-w-cutoff mx-auto flex flex-col gap-y-16 lg:gap-y-32">
                    <article>
                        <h3 className="font-bold w-max mx-auto font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8 lg:mb-12">
                            Quickly, This is me.
                        </h3>
                        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-2xl mx-auto">
                            <div className="flex flex-col gap-8 lg:gap-12">
                                <p className="flex flex-col text-center items-center">
                                    <MdOutlineDevices className="text-2xl lg:text-4xl mb-1" />
                                    <strong className="font-medium font-lato text-lg lg:text-xl mb-2">
                                        Software Development
                                    </strong>
                                    <span className="inline-flex items-center justify-center gap-x-2 py-4">
                                        <span className="w-2 h-2 rounded-full bg-sky-500" />
                                        <span className="w-2 h-2 rounded-full bg-sky-500" />
                                        <span className="w-2 h-2 rounded-full bg-sky-500" />
                                    </span>
                                    <span className="font-nunito opacity-75">
                                        I became interested in software
                                        development since I decided to build my
                                        own protfolio website. Now, I build web
                                        apps and other software programs that
                                        are either my own or clients&apos;
                                        projects.{' '}
                                        <button className="text-blue-500 font-medium transition-smooth hover:text-blue-400">
                                            Learn about the softwares that I
                                            build.
                                        </button>
                                    </span>
                                </p>
                                <p className="flex flex-col text-center items-center">
                                    <FaChalkboardTeacher className="text-2xl lg:text-4xl mb-1" />
                                    <strong className="font-medium font-lato text-lg lg:text-xl mb-2">
                                        Tutoring
                                    </strong>
                                    <span className="inline-flex items-center justify-center gap-x-2 py-4">
                                        <span className="w-2 h-2 rounded-full bg-sky-500" />
                                        <span className="w-2 h-2 rounded-full bg-sky-500" />
                                        <span className="w-2 h-2 rounded-full bg-sky-500" />
                                    </span>
                                    <span className="font-nunito opacity-75">
                                        I started tutoring since 2017 teaching
                                        middle and highschool students in
                                        mathematics. Since then, I expanded my
                                        mathematical and computational knoweldge
                                        to teach more variety of students in
                                        mathematics and computer science as
                                        well.{' '}
                                        <button className="text-blue-500 font-medium transition-smooth hover:text-blue-400">
                                            Here is list of topics I tutor.
                                        </button>
                                    </span>
                                </p>
                            </div>
                            <div className="flex flex-col gap-8 lg:gap-12">
                                <p className="flex flex-col text-center items-center">
                                    <MdLanguage className="text-2xl lg:text-4xl mb-1" />
                                    <strong className="font-medium font-lato text-lg lg:text-xl mb-2">
                                        Lanaguages & Cultures
                                    </strong>
                                    <span className="inline-flex items-center justify-center gap-x-2 py-4">
                                        <span className="w-2 h-2 rounded-full bg-sky-500" />
                                        <span className="w-2 h-2 rounded-full bg-sky-500" />
                                        <span className="w-2 h-2 rounded-full bg-sky-500" />
                                    </span>
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
                                <p className="flex flex-col text-center items-center">
                                    <SlPlane className="text-2xl lg:text-4xl mb-1" />
                                    <strong className="font-medium font-lato text-lg lg:text-xl mb-2">
                                        Personal Hobbies
                                    </strong>
                                    <span className="inline-flex items-center justify-center gap-x-2 py-4">
                                        <span className="w-2 h-2 rounded-full bg-sky-500" />
                                        <span className="w-2 h-2 rounded-full bg-sky-500" />
                                        <span className="w-2 h-2 rounded-full bg-sky-500" />
                                    </span>
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
                            Creative & On-demand Softwares
                        </h3>
                        <p className="leading-7 lg:leading-8 lg:text-lg opacity-75 mb-8">
                            Instead of building conventional & replicated
                            softwares, I desire to build ones that are on-demand
                            using creative thinking.{' '}
                            <a
                                href="#"
                                className="text-blue-500 transition-smooth hover:text-blue-400"
                            >
                                Visit developer page for more information.
                            </a>
                        </p>
                        <ul className="w-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                            <div className="flex flex-col justify-between p-6 border transition-smooth hover:scale-105 opacity-90 hover:opacity-100 shadow-md shadow-transparent hover:shadow-gray-500/10 cursor-pointer">
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
                                    <button className="text-sm px-3 py-2 bg-sky-600 text-white font-medium transition-smooth hover:opacity-75">
                                        Demo
                                    </button>
                                    <button className="text-sm px-3 py-2 bg-cyan-500 text-white font-medium transition-smooth hover:opacity-75">
                                        Code
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between p-6 border transition-smooth hover:scale-105 opacity-90 hover:opacity-100 shadow-md shadow-transparent hover:shadow-gray-500/10 cursor-pointer">
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
                                    <button className="text-sm px-3 py-2 bg-sky-600 text-white font-medium transition-smooth hover:opacity-75">
                                        Demo
                                    </button>
                                    <button className="text-sm px-3 py-2 bg-cyan-500 text-white font-medium transition-smooth hover:opacity-75">
                                        Code
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between p-6 border transition-smooth hover:scale-105 opacity-90 hover:opacity-100 shadow-md shadow-transparent hover:shadow-gray-500/10 cursor-pointer">
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
                                    <button className="text-sm px-3 py-2 bg-sky-600 text-white font-medium transition-smooth hover:opacity-75">
                                        Demo
                                    </button>
                                    <button className="text-sm px-3 py-2 bg-cyan-500 text-white font-medium transition-smooth hover:opacity-75">
                                        Code
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between p-6 border transition-smooth hover:scale-105 opacity-90 hover:opacity-100 shadow-md shadow-transparent hover:shadow-gray-500/10 cursor-pointer">
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
                                    <button className="text-sm px-3 py-2 bg-sky-600 text-white font-medium transition-smooth hover:opacity-75">
                                        Demo
                                    </button>
                                    <button className="text-sm px-3 py-2 bg-cyan-500 text-white font-medium transition-smooth hover:opacity-75">
                                        Code
                                    </button>
                                </div>
                            </div>
                        </ul>
                    </article>
                    <article className="pb-16">
                        <h3 className="font-semibold font-poppins text-2xl md:text-3xl lg:text-4xl mb-2 lg:mb-3">
                            Practical & Effective Tutors
                        </h3>
                        <p className="leading-7 lg:leading-8 lg:text-lg opacity-75 mb-8">
                            I do not encourage students to learn fast, but deep.
                            It is my goal to help students fully accumulate the
                            concepts once they learn so that they can always
                            remember and apply into more advanced topics in the
                            future.{' '}
                            <a
                                href="#"
                                className="text-blue-500 transition-smooth hover:text-blue-400"
                            >
                                Visit tutor page for more information.
                            </a>
                        </p>
                        <ul className="w-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                            <div className="flex flex-col justify-between p-6 border transition-smooth hover:scale-105 opacity-90 hover:opacity-100 shadow-md shadow-transparent hover:shadow-gray-500/10 cursor-pointer">
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
                                    <button className="text-sm px-3 py-2 bg-sky-600 text-white font-medium transition-smooth hover:opacity-75">
                                        Request
                                    </button>
                                    <button className="text-sm px-3 py-2 bg-emerald-500 text-white font-medium transition-smooth hover:opacity-75">
                                        Syllabus
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between p-6 border transition-smooth hover:scale-105 opacity-90 hover:opacity-100 shadow-md shadow-transparent hover:shadow-gray-500/10 cursor-pointer">
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
                                    <button className="text-sm px-3 py-2 bg-sky-600 text-white font-medium transition-smooth hover:opacity-75">
                                        Request
                                    </button>
                                    <button className="text-sm px-3 py-2 bg-emerald-500 text-white font-medium transition-smooth hover:opacity-75">
                                        Syllabus
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between p-6 border transition-smooth hover:scale-105 opacity-90 hover:opacity-100 shadow-md shadow-transparent hover:shadow-gray-500/10 cursor-pointer">
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
                                    <button className="text-sm px-3 py-2 bg-sky-600 text-white font-medium transition-smooth hover:opacity-75">
                                        Request
                                    </button>
                                    <button className="text-sm px-3 py-2 bg-emerald-500 text-white font-medium transition-smooth hover:opacity-75">
                                        Syllabus
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between p-6 border transition-smooth hover:scale-105 opacity-90 hover:opacity-100 shadow-md shadow-transparent hover:shadow-gray-500/10 cursor-pointer">
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
                                    <button className="text-sm px-3 py-2 bg-sky-600 text-white font-medium transition-smooth hover:opacity-75">
                                        Request
                                    </button>
                                    <button className="text-sm px-3 py-2 bg-emerald-500 text-white font-medium transition-smooth hover:opacity-75">
                                        Syllabus
                                    </button>
                                </div>
                            </div>
                        </ul>
                    </article>
                </section>
            </div> */}
            <div
                className={classnames(
                    'bg-gradient-to-b from-transparent via-transparent'
                )}
            >
                <section
                    id="contact"
                    className="px-8 py-24 lg:py-32 w-full max-w-cutoff mx-auto flex flex-col gap-y-16 lg:gap-y-32"
                >
                    <article className="max-w-2xl mx-auto">
                        <h3 className="font-bold w-max mx-auto font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6">
                            Q&A Time.
                        </h3>
                        <p className="text-center px-8 font-nunito opacity-80 leading-7 lg:text-lg lg:leading-8 mb-8">
                            {lang === 'en'
                                ? 'If you have any questions that you think others might possibly have asked before, you can check out the'
                                : '질문 및 문의가 있으시다면 아래에 기제하여 보내주시면 빠른시간내에 답변드리겠습니다.'}{' '}
                            <a
                                href=""
                                className="text-blue-400 opacity-100 font-medium transition-smooth hover:text-blue-500 text-base"
                            >
                                {lang === 'en'
                                    ? 'Frequently Asked Questions page.'
                                    : '자주 물어보는 질문 페이지'}
                            </a>{' '}
                            {lang === 'en'
                                ? 'Otherwise, you can directly submit the question form below and I will get back to you as soon as possible!'
                                : '를 보시면 자주 물어보시는 질문들이 있습니다.'}
                        </p>
                        <form className="border-2">
                            <section className="p-6 flex flex-col gap-y-6">
                                <div className="flex flex-col w-full gap-y-2">
                                    <label className="font-bold text-base font-lato">
                                        {lang === 'en'
                                            ? 'Your Name'
                                            : '이름이 어떻게 되시나요?'}
                                    </label>
                                    <input
                                        type="text"
                                        className={classnames(
                                            'border-x-0 border-t-0 border-b pb-2 outline-none ring-none focus:outline-0 focus:border-b-blue-500 focus:border-b-2 focus:ring-0',
                                            theme === 'dark'
                                                ? 'bg-neutral-900'
                                                : 'bg-white'
                                        )}
                                    />
                                </div>
                                <div className="flex flex-col w-full gap-y-2">
                                    <label className="font-bold text-base font-lato">
                                        {lang === 'en'
                                            ? 'Your Email'
                                            : '어떤 이메일로 답변드릴까요?'}
                                    </label>
                                    <input
                                        type="text"
                                        className={classnames(
                                            'border-x-0 border-t-0 border-b pb-2 outline-none ring-none focus:outline-0 focus:border-b-blue-500 focus:border-b-2 focus:ring-0',
                                            theme === 'dark'
                                                ? 'bg-neutral-900'
                                                : 'bg-white'
                                        )}
                                    />
                                </div>
                                <div className="flex flex-col w-full gap-y-2">
                                    <label className="font-bold text-base font-lato">
                                        {lang === 'en'
                                            ? 'Message Title'
                                            : '메세지 제목'}
                                    </label>
                                    <input
                                        type="text"
                                        className={classnames(
                                            'border-x-0 border-t-0 border-b pb-2 outline-none ring-none focus:outline-0 focus:border-b-blue-500 focus:border-b-2 focus:ring-0',
                                            theme === 'dark'
                                                ? 'bg-neutral-900'
                                                : 'bg-white'
                                        )}
                                    />
                                </div>
                                <div className="flex flex-col w-full gap-y-2">
                                    <label className="font-bold text-base font-lato">
                                        {lang === 'en'
                                            ? 'Message'
                                            : '메세지 내용'}
                                    </label>
                                    <textarea
                                        rows={4}
                                        className={classnames(
                                            'border-x-0 border-t-0 border-b pb-2 outline-none ring-none focus:outline-0 focus:border-b-blue-500 focus:border-b-2 focus:ring-0',
                                            theme === 'dark'
                                                ? 'bg-neutral-900'
                                                : 'bg-white'
                                        )}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="submit"
                                        value={
                                            lang === 'en'
                                                ? 'Send Message'
                                                : '메세지 보내기'
                                        }
                                        className="px-8 py-3 w-full sm:max-w-[275px] rounded-none text-white bg-sky-500 transition-smooth hover:opacity-80 cursor-pointer font-medium font-poppins"
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
