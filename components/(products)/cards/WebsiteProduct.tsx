import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'

interface IWebsiteProduct {
    title: string
    description: string
    links?: { href: string; text: string }[]
    children?: React.ReactNode
}

const WebsiteProduct = ({
    description,
    links,
    title,
    children = null,
}: IWebsiteProduct) => {
    return (
        <div className="w-full h-full">
            <div className="flex justify-between items-start lg:items-center mb-3">
                <h4 className="text-xl lg:text-2xl font-medium font-h text-transparent lg:text-themeLight bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                    {title}
                </h4>
                <ul className="flex items-center gap-x-3 mt-2 lg:mt-0">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="w-3 h-3 rounded-full bg-teal-400 animate-pulse" />
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
                </ul>
            </div>

            <p className="text-slate-300/75 font-h text-base lg:text-lg lg:leading-7">
                {description}
            </p>
            {links && links.length >= 1 && (
                <ul className="flex flex-col gap-y-4 mt-6">
                    {links.map((link, idx) => (
                        <Link
                            href={link.href}
                            key={idx}
                            className="font-h lg:text-lg flex items-center gap-x-4 transition-smooth  lg:hover:text-emerald-400"
                        >
                            <HiArrowRight className="text-xl" />
                            <span>{link.text}</span>
                        </Link>
                    ))}
                </ul>
            )}
            {children && <div className="mt-6">{children}</div>}
        </div>
    )
}

export default WebsiteProduct
