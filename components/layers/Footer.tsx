import dynamic from 'next/dynamic'
import { useState } from 'react'
import { TfiGithub, TfiInstagram, TfiLinkedin } from 'react-icons/tfi'
import UIUtility from 'utils/ui'

// Loader
const FooterLinkDirectLoading = dynamic(
    () => import('@studio/components/loaders/FooterLinkDirectLoading')
)
// Button
const FooterSocialIcon = dynamic(
    () => import('@studio/components/buttons/FooterSocialIcon')
)
// Text
const FooterCopyRight = dynamic(
    () => import('@studio/components/texts/FooterCopyRight')
)
/**
 * @brief
 * --- COMPONENT STATEMENTS ----
 */

type ColorVariant = 'dark' | 'light'
interface IFooter {
    variant?: ColorVariant
}

const Footer = ({ variant = 'light' }: IFooter) => {
    const links = [
        {
            href: 'https://github.com/haneulchoistudio',
            text: 'Github',
            icon: <TfiGithub />,
        },

        {
            href: 'https://instagram.com/__sky__e',
            text: 'Instagram',
            icon: <TfiInstagram />,
        },
        {
            href: 'https://linkedin.com/in/haneulab/',
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
        <footer
            className={UIUtility.classnames(
                'fixed bottom-0 z-10 w-full h-max ',
                variant === 'dark'
                    ? 'bg-themeDark text-themeLight'
                    : 'bg-themeLight text-themeDark '
            )}
        >
            <section className="p-4 lg:p-8 text-center flex justify-between items-center">
                <FooterCopyRight year={2023} />

                {linkAlert ? (
                    <FooterLinkDirectLoading message={linkAlert} />
                ) : (
                    <ul className="flex items-center gap-x-4 text-lg lg:text-xl">
                        {links.map((link, idx) => (
                            <FooterSocialIcon
                                key={idx}
                                onClick={() =>
                                    toSocial(
                                        `Sending you to ${link.text} now.`,
                                        link.href
                                    )
                                }
                                icon={link.icon}
                            />
                        ))}
                    </ul>
                )}
            </section>
        </footer>
    )
}
export default Footer
