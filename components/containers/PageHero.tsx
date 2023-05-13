import { UIUtility } from '@studio/utils'
import Link from 'next/link'

type BackgroundVariant = 'dark' | 'light'

interface LinkProps {
    href?: string
    text?: string
}

interface IPageHero {
    image?: React.ReactNode

    title?: string | React.ReactNode
    description?: string | React.ReactNode
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
                'w-full flex flex-col justify-center items-center min-h-screen',
                props.background === 'dark'
                    ? 'bg-themeDark text-themeLight'
                    : 'bg-themeLight text-themeDark'
            )}
        >
            <section className="p-8 py-16 lg:py-24 2xl:px-0 w-full max-w-cutoff mx-auto">
                {props.image && (
                    <div className="mb-6 lg:mb-8 2xl:mb-10">{props.image}</div>
                )}
                <article>
                    <h3
                        className={UIUtility.classnames(
                            'font-bold font-h text-3xl md:text-4xl lg:text-6xl text-center',
                            props.image
                                ? 'mb-4 lg:mb-6 2xl:mb-8'
                                : 'mb-6 lg:mb-8 2xl:mb-10'
                        )}
                    >
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
                    <ul
                        className={UIUtility.classnames(
                            'flex items-center justify-center gap-x-1',
                            props.image
                                ? 'mt-6 lg:mt-8 2xl:mt-10'
                                : ' mt-8 lg:mt-10 2xl:mt-12'
                        )}
                    >
                        {props.links.map((link, idx) => (
                            <>
                                <Link
                                    key={idx}
                                    href={link.href}
                                    className={UIUtility.classnames(
                                        'text-base lg:text-lg font-medium font-p border-b-2 pb-0.5 border-transparent transition-smooth ',
                                        props.background === 'dark'
                                            ? 'text-pink-500 lg:hover:text-pink-400/75 lg:hover:border-pink-400/75'
                                            : 'text-themeDark lg:hover:text-themeDarkLight/75 lg:hover:border-themeLight/75'
                                    )}
                                >
                                    {link.text}
                                </Link>
                                {idx !== props.links.length - 1 && (
                                    <span
                                        className={UIUtility.classnames(
                                            props.background === 'dark'
                                                ? 'text-pink-500/50'
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
                    <div
                        className={UIUtility.classnames(
                            'flex flex-col items-center',
                            props.image
                                ? 'mt-6 lg:mt-8 2xl:mt-10'
                                : 'mt-8 lg:mt-10 2xl:mt-12'
                        )}
                    >
                        {props.children}
                    </div>
                )}
            </section>
        </main>
    )
}

export default PageHero
