import Link from 'next/link'
import { ImArrowRight2 } from 'react-icons/im'

const PortfolioDemoMap = () => {
    return (
        <div
            id="demo_portfolio"
            className="min-h-screen w-full flex flex-col items-center justify-center bg-themeDark relative"
        >
            <section className="px-8 py-24 2xl:px-0 w-full max-w-cutoff mx-auto grid grid-cols-1 gap-12 lg:grid-cols-12">
                <article className="lg:col-span-8 w-full h-full">
                    <div className="lg:sticky lg:top-20 flex flex-col gap-y-12 ">
                        <div className="w-full">
                            <h3
                                style={{
                                    lineHeight: '1.2',
                                }}
                                className="font-bold text-3xl lg:text-4xl 2xl:text-5xl font-h pr-16 lg:pr-24 2xl:pr-96 mb-4 lg:mb-6"
                            >
                                Build Business & Personal Portfolio.
                            </h3>
                            <p
                                style={{
                                    lineHeight: '1.6',
                                }}
                                className="font-h font-light opacity-75 text-lg lg:text-xl pr-8 lg:pr-16 2xl:pr-48 2xl:text-2xl mb-8 lg:mb-6 2xl:mb-8"
                            >
                                Improve your business & personal online presense
                                by building your own protfolio website.
                            </p>
                            <div>
                                <Link
                                    href={'/contact'}
                                    className="w-max flex items-center gap-x-4 px-8 py-3 lg:px-0 lg:py-0 rounded-md border-2 lg:border-0 lg:rounded-none bg-pink-500/10 border-pink-500/25 text-pink-500 lg:bg-pink-500/0 font-medium text-lg lg:text-xl font-h transition-smooth lg:hover:opacity-60"
                                >
                                    <ImArrowRight2 />
                                    <span>Contact For Inquiry</span>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col sm:items-center lg:items-start gap-y-6 pt-12 border-t border-pink-400/10">
                            <Link
                                href={'/products'}
                                className="w-full sm:w-[340px] font-medium text-lg lg:text-xl text-themeLight transition-smooth font-e1 flex justify-between items-center gap-x-4 px-6 py-4 rounded-full bg-themeDark shadow-xl lg:hover:bg-pink-500 lg:hover:text-themeDark border border-pink-500/25 lg:hover:animate-pulse"
                            >
                                <span>Product Price & Features</span>
                                <span className="rounded-full p-1 bg-pink-500">
                                    <ImArrowRight2 />
                                </span>
                            </Link>
                            <button className="w-full sm:w-[340px] font-medium text-lg lg:text-xl text-themeLight transition-smooth font-e1 flex justify-between items-center gap-x-4 px-6 py-4 rounded-full bg-themeDark shadow-xl lg:hover:bg-pink-500 lg:hover:text-themeDark border border-pink-500/25 lg:hover:animate-pulse">
                                <span>Frequently Asked Questions</span>
                                <span className="rounded-full p-1 bg-pink-500">
                                    <ImArrowRight2 />
                                </span>
                            </button>
                        </div>
                    </div>
                </article>
                <article className="lg:col-span-4 w-full">
                    <ul className="h-max flex flex-col gap-y-8">
                        <div className="p-6 rounded-lg bg-pink-500/5 border border-pink-500/25 text-pink-400 shadow-lg overflow-hidden transition-smooth lg:hover:bg-pink-500/10 cursor-pointer">
                            <h6 className="font-bold text-base lg:text-lg font-h mb-0.5">
                                Yuchan Shokudo
                            </h6>
                            <p className="font-light text-xs lg:text-sm font-h text-themeLight/75 mb-3">
                                Local Japanese Restaurant
                            </p>
                            <p className="text-themeLight font-h text-sm lg:text-base leading-7 lg:leading-8 mb-6">
                                Minimalistic 4-pages business websites built
                                within one-week with fully customized contents
                                including menu files and gallery.
                            </p>
                            <div>
                                <a
                                    href="https://yuchanshokudo.com"
                                    target="_blank"
                                    referrerPolicy="no-referrer"
                                    className="w-full border border-pink-500 lg:border-pink-500/50 font-h px-6 p-3 rounded-lg lg:bg-themeDark/50 lg:text-pink-500/50 font-medium text-base text-center block transition-smooth lg:hover:text-themeLight lg:hover:bg-pink-500 lg:hover:border-pink-500"
                                    rel="noreferrer"
                                >
                                    View Demo
                                </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-lg bg-pink-500/5 border border-pink-500/25 text-pink-400 shadow-lg overflow-hidden transition-smooth lg:hover:bg-pink-500/10 cursor-pointer">
                            <h6 className="font-bold text-base lg:text-lg font-h mb-0.5">
                                Haneul Choi Studio
                            </h6>
                            <p className="font-light text-xs lg:text-sm font-h text-themeLight/75 mb-3">
                                Profesisonal Personal Website
                            </p>
                            <p className="text-themeLight font-h text-sm lg:text-base leading-7 lg:leading-8 mb-6">
                                Professional freelancing portfolio website for
                                software developer, Haneul Choi, with minimal
                                product, service, portfolio, about, contact
                                pages.
                            </p>
                            <div>
                                <a
                                    href="https://haneulchoi.studio"
                                    target="_blank"
                                    referrerPolicy="no-referrer"
                                    className="w-full border border-pink-500 lg:border-pink-500/50 font-h px-6 p-3 rounded-lg lg:bg-themeDark/50 lg:text-pink-500/50 font-medium text-base text-center block transition-smooth lg:hover:text-themeLight lg:hover:bg-pink-500 lg:hover:border-pink-500"
                                    rel="noreferrer"
                                >
                                    View Demo
                                </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-lg bg-pink-500/5 border border-pink-500/25 text-pink-400 shadow-lg overflow-hidden transition-smooth lg:hover:bg-pink-500/10 cursor-pointer">
                            <h6 className="font-bold text-base lg:text-lg font-h mb-0.5">
                                Almond House
                            </h6>
                            <p className="font-light text-xs lg:text-sm font-h text-themeLight/75 mb-3">
                                Local Coffee Shop
                            </p>
                            <p className="text-themeLight font-h text-sm lg:text-base leading-7 lg:leading-8 mb-6">
                                Basic coffee shop website that consists of
                                simple & precise menu, gallery, and contact
                                pages and their contents.
                            </p>
                            <div>
                                <a
                                    href="https://haneulchoi.studio"
                                    target="_blank"
                                    referrerPolicy="no-referrer"
                                    className="w-full border border-pink-500 lg:border-pink-500/50 font-h px-6 p-3 rounded-lg lg:bg-themeDark/50 lg:text-pink-500/50 font-medium text-base text-center block transition-smooth lg:hover:text-themeLight lg:hover:bg-pink-500 lg:hover:border-pink-500"
                                    rel="noreferrer"
                                >
                                    View Demo
                                </a>
                            </div>
                        </div>
                    </ul>
                </article>
            </section>
        </div>
    )
}

export default PortfolioDemoMap
