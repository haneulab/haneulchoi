import { useState } from 'react'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Footer = () => {
    const [showFooter, setShowFooter] = useState(true)

    return (
        <>
            {!showFooter && (
                <button
                    onClick={() => {
                        setShowFooter(true)
                    }}
                    className="fixed bottom-4 z-40 right-4 px-4 py-2 rounded-md bg-emerald-400/5 border border-emerald-400/25 text-emerald-400 backdrop-blur-md"
                >
                    Show Footer
                </button>
            )}
            {showFooter && (
                <footer className="fixed bottom-0 z-40 w-full left-0 bg-themeDarkLight text-themeLightDark border-t border-themeLight/10">
                    <section className="p-4 w-full mx-auto flex gap-4 justify-between">
                        <div>
                            <p className="flex flex-col lg:flex-row items-start lg:items-center lg:gap-2 text-themeLight">
                                <strong className="text-base">
                                    Haneul Choi Studio
                                </strong>
                                <span className="text-xs text-themeLightDark">
                                    &copy; All rights reserved.
                                </span>
                            </p>
                            <ul className="flex items-center gap-x-4">
                                <a
                                    href="https://github.com/haneulchoistudio"
                                    className="transition-smooth lg:hover:opacity-60 transform lg:hover:scale-125"
                                >
                                    <BsGithub className="text-white text-lg lg:text-xl" />
                                </a>
                                <a
                                    href="https://linkedin.com/company/haneulchoistudio"
                                    className="transition-smooth lg:hover:opacity-60 transform lg:hover:scale-125"
                                >
                                    <BsLinkedin className="text-white text-lg lg:text-xl" />
                                </a>
                                <a
                                    href="https://github.com/haneulchoistudio"
                                    className="transition-smooth lg:hover:opacity-60 transform lg:hover:scale-125"
                                >
                                    <BsTwitter className="text-white text-lg lg:text-xl" />
                                </a>
                            </ul>
                        </div>
                        <button
                            onClick={() => {
                                setShowFooter(false)
                            }}
                            className="px-4 py-2 rounded-md bg-pink-500/5 border border-pink-500/25 text-pink-500"
                        >
                            Hide Footer
                        </button>
                    </section>
                </footer>
            )}
        </>
    )
}

export default Footer
