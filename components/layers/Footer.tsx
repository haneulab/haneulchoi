import { useState } from 'react'
import { TfiGithub, TfiInstagram, TfiLinkedin } from 'react-icons/tfi'

/**
 * @brief
 * --- COMPONENT STATEMENTS ----
 */
const Footer = () => {
    const links = [
        {
            href: 'https://github.com/haneulchoistudio',
            text: 'Github',
            icon: <TfiGithub />,
        },

        {
            href: 'https://instagram/com/__sky__e',
            text: 'Instagram',
            icon: <TfiInstagram />,
        },
        {
            href: 'https://linkedin.com/in/haneulab',
            text: 'Linkedin',
            icon: <TfiLinkedin />,
        },
    ]

    const [linkAlert, setLinkAlert] = useState<string>('')

    function toSocial(message: string, href: string) {
        setLinkAlert(message)
        const timer = setTimeout(() => {
            setLinkAlert('')
            window.location.assign(href)
        }, 2000)

        return () => clearInterval(timer)
    }

    return (
        <footer className="fixed bottom-0 z-10 w-full h-max bg-themeLight">
            <section className="p-4 lg:p-8 text-center flex justify-between items-center">
                <p className="font-p text-sm text-themeDarkLight/75">
                    2023 &copy; All rights reserved
                </p>
                {linkAlert ? (
                    <p className="font-medium text-sm  lg:text-lg animate-bounce text-blue-500 font-e1">
                        {linkAlert}
                    </p>
                ) : (
                    <ul className="flex items-center gap-x-4 text-lg lg:text-xl">
                        {links.map((link, idx) => (
                            <button
                                key={idx}
                                onClick={() =>
                                    toSocial(
                                        `Sending you to ${link.text} now.`,
                                        link.href
                                    )
                                }
                                className="transition-smooth transform lg:hover:scale-125 lg:hover:rotate-12 lg:hover:opacity-75"
                            >
                                {link.icon}
                            </button>
                        ))}
                    </ul>
                )}
            </section>
        </footer>
    )
}
export default Footer
