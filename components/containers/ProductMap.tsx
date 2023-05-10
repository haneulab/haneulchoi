import Link from 'next/link'

interface ProductMapRelevantFeature {
    featureIcon?: React.ReactNode
    featureTitle: string
    featureExplanation: string
}

interface ProductMapRelevantRoute {
    href?: string
    text?: string
    icon?: React.ReactNode
}

interface IProductMap {
    title: string
    description: string
    relevantRoute: ProductMapRelevantRoute
    relevantFeatures: ProductMapRelevantFeature[]
}

const ProductMap = (props: IProductMap) => {
    const { title, description, relevantFeatures, relevantRoute } = props

    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-themeLight to-themeLightDark/5 text-themeDark w-full">
            <section className="px-8 py-24 2xl:px-0 w-full max-w-cutoff mx-auto">
                <article className="flex flex-col items-center mb-10 2xl:mb-12 pb-10 2xl:pb-12 border-b-2 border-themeDarkLight/5 w-full max-w-4xl mx-auto">
                    <h3 className="font-bold text-center text-4xl lg:text-5xl 2xl:text-6xl font-h mb-4">
                        {title}
                    </h3>
                    <p className="text-center font-h text-themeDarkLight/50 lg:text-lg leading-7 lg:leading-8 2xl:text-xl 2xl:leading-9 mb-8">
                        {description}
                    </p>
                    <div>
                        <Link
                            href={relevantRoute.href}
                            className="w-full p-0.5 border block rounded-md border-themeDarkLight/50 transition-smooth lg:hover:bg-themeDark lg:hover:text-themeLight"
                        >
                            <span className="flex items-center font-h text-lg font-medium rounded px-6 p-2 gap-x-4">
                                {relevantRoute.icon}
                                <span>{relevantRoute.text}</span>
                            </span>
                        </Link>
                    </div>
                </article>
                <article className="mx-auto max-w-lg flex flex-col gap-y-8 lg:gap-y-10">
                    {relevantFeatures.map((feature, idx) => (
                        <div key={idx}>
                            <h4 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-themeDark via-themeLightDark to-themeDark font-medium text-lg lg:text-xl 2xl:text-2xl font-h mb-2 lg:mb-4">
                                {feature.featureTitle}
                            </h4>
                            <p className="text-center text-sm lg:text-base leading-6 lg:leading-7 font-h text-themeDarkLight/50">
                                {feature.featureExplanation}
                            </p>
                        </div>
                    ))}
                </article>
            </section>
        </div>
    )
}

export default ProductMap
