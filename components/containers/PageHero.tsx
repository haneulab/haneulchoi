import Link from 'next/link'
import { UIUtility } from '@studio/utils'

type BackgroundVariant = 'dark' | 'light'

interface LinkProps {
    href?: string
    text?: string
}

interface IPageHero {
    title?: string
    description?: string
    links?: LinkProps[]

    warning?: boolean

    background?: BackgroundVariant

    children?: React.ReactNode
}

const PageHero = (props: IPageHero) => {
    const { warning } = props

    return (
        <main
            className={UIUtility.classnames(
                'h-screen w-full flex flex-col justify-center items-center',
                props.background === 'dark'
                    ? 'bg-themeDark text-themeLight'
                    : 'bg-themeLight text-themeDark'
            )}
        >
            <section className="p-8 2xl:px-0 w-full max-w-cutoff mx-auto">
                <article>
                    <h3 className="font-bold font-h text-3xl md:text-4xl lg:text-6xl text-center mb-6">
                        {props.title}
                    </h3>
                    <p
                        className={UIUtility.classnames(
                            'font-e1 font-medium text-lg max-w-md mx-auto leading-7 2xl:text-xl 2xl:leading-9 text-center opacity-75',
                            warning && 'text-pink-500'
                        )}
                    >
                        {props.description}
                    </p>
                </article>
                {props.links && props.links.length >= 1 && (
                    <ul className="flex items-center justify-center gap-x-1 mt-8">
                        {props.links.map((link, idx) => (
                            <>
                                <Link
                                    key={idx}
                                    href={link.href}
                                    className={UIUtility.classnames(
                                        'text-base lg:text-lg font-medium font-p border-b-2 pb-0.5 border-transparent transition-smooth ',
                                        props.background === 'dark'
                                            ? 'text-themeLight lg:hover:text-themeLightDark/75 lg:hover:border-themeLightDark/75'
                                            : 'text-themeDark lg:hover:text-themeDarkLight/75 lg:hover:border-themeLight/75'
                                    )}
                                >
                                    {link.text}
                                </Link>
                                {idx !== props.links.length - 1 && (
                                    <span
                                        className={UIUtility.classnames(
                                            props.background === 'dark'
                                                ? 'text-themeLightDark/50'
                                                : 'text-themeDarkLight/50'
                                        )}
                                    >
                                        /
                                    </span>
                                )}
                            </>
                        ))}
                    </ul>
                )}
                {props.children && (
                    <div className="mt-8 flex flex-col items-center">
                        {props.children}
                    </div>
                )}
            </section>
        </main>
    )
}

export default PageHero
