import Link from 'next/link'
import { UIUtility } from '@studio/utils'

type BackgroundVariant = 'dark' | 'light'

interface ProductMapRelevantFeature {
    featureIcon?: React.ReactNode
    featureTitle: string
    featureExplanation: string

    featureLink?: {
        href?: string
        text?: string
    }
}

interface ProductMapRelevantRoute {
    href?: string
    text?: string
    icon?: React.ReactNode
}

interface IProductMap {
    title: string
    price: {
        from: number
        to: number
    }
    description: string
    relevantRoute: ProductMapRelevantRoute
    relevantFeatures: ProductMapRelevantFeature[]

    background?: BackgroundVariant
}

const ProductMap = (props: IProductMap) => {
    const { title, description, price, relevantFeatures, relevantRoute } = props

    return (
        <div
            className={UIUtility.classnames(
                'min-h-screen flex flex-col justify-center items-center w-full',
                props.background === 'dark'
                    ? 'bg-themeDark text-themeLight'
                    : 'bg-themeLightDark/5 text-themeDark'
            )}
        >
            <section className="px-8 py-24 2xl:px-0 w-full max-w-cutoff mx-auto">
                <article
                    className={UIUtility.classnames(
                        'flex flex-col items-center mb-10 2xl:mb-12 pb-10 2xl:pb-12 border-b-2 w-full max-w-4xl mx-auto',
                        props.background === 'dark'
                            ? 'border-themeLight/5'
                            : 'border-themeDarkLight/5'
                    )}
                >
                    <h3 className="font-bold text-center text-4xl lg:text-5xl 2xl:text-6xl font-h mb-4">
                        {title}
                    </h3>
                    <p
                        className={UIUtility.classnames(
                            'text-center font-h  lg:text-lg leading-7 lg:leading-8 2xl:text-xl 2xl:leading-9 mb-8',
                            props.background === 'dark'
                                ? 'text-themeLightDark/75'
                                : 'text-themeDarkLight/50'
                        )}
                    >
                        {description}
                    </p>
                    <div>
                        <Link
                            href={relevantRoute.href}
                            className={UIUtility.classnames(
                                'w-full p-0.5 border block rounded-md  transition-smooth ',
                                props.background === 'dark'
                                    ? 'border-themeLightDark/50 lg:hover:bg-themeLight lg:hover:text-themeDark'
                                    : 'border-themeDarkLight/50 lg:hover:bg-themeDark lg:hover:text-themeLight'
                            )}
                        >
                            <span className="flex items-center font-h text-lg font-medium rounded px-6 p-2 gap-x-4">
                                {relevantRoute.icon}
                                <span>{relevantRoute.text}</span>
                            </span>
                        </Link>
                    </div>
                </article>
                <div className="flex flex-col gap-y-12 lg:gap-y-14">
                    <h3 className="w-full rounded-full font-h flex flex-col gap-y-1 items-center">
                        <span className="lg:text-lg 2xl:text-xl text-pink-500">
                            Price ranges from
                        </span>
                        <span className="text-lg lg:text-xl 2xl:text-2xl font-e2">
                            <big className="font-bold">${price.from}.00</big> to{' '}
                            <big className="font-bold">${price.to}.00</big>
                        </span>
                    </h3>
                    <ul className="flex items-center justify-center gap-x-4">
                        <span className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-pink-400 animate-bounce " />
                        <span className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-pink-500 animate-pulse" />
                        <span className="w-1 h-1 lg:w-2 lg:h-2 rounded-full bg-pink-400 animate-ping" />
                    </ul>
                    <article className="mx-auto max-w-lg flex flex-col gap-y-8 lg:gap-y-10">
                        {relevantFeatures.map((feature, idx) => (
                            <div key={idx}>
                                <h4
                                    className={UIUtility.classnames(
                                        'text-center text-transparent bg-clip-text bg-gradient-to-r  font-medium text-lg lg:text-xl 2xl:text-2xl font-h mb-2 lg:mb-4',
                                        props.background === 'dark'
                                            ? 'from-themeLight to-themeLight'
                                            : 'from-themeDarkLight  to-themeDarkLight'
                                    )}
                                >
                                    {feature.featureTitle}
                                </h4>
                                <p
                                    className={UIUtility.classnames(
                                        'text-center text-sm lg:text-base leading-6 lg:leading-7 font-h text-themeDarkLight/50',
                                        props.background === 'dark'
                                            ? 'text-themeLight/50'
                                            : ' text-themeDarkLight/50'
                                    )}
                                >
                                    {feature.featureExplanation}
                                </p>
                                {feature.featureLink && (
                                    <Link
                                        href={feature.featureLink.href}
                                        className="block mt-4 w-max mx-auto font-h font-semibold text-sm lg:text-base  px-8 py-3 border-b border-pink-500 text-pink-500 lg:hover:bg-pink-500 lg:hover:text-themeLight"
                                    >
                                        {feature.featureLink.text}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </article>
                </div>
            </section>
        </div>
    )
}

export default ProductMap
