import Link from 'next/link'
import { UIUtility, sum } from '@studio/utils'
import {
    type UniqueProduct,
    type VariableProduct,
} from '@studio/models/product.model'
import { ColorVariant } from 'studio'
import dynamic from 'next/dynamic'

const FeatureWhyImportant = dynamic(
    () => import('@studio/components/buttons/FeatureWhyImportant')
)

type IProductMap = [UniqueProduct, VariableProduct][number] & {
    background: ColorVariant
}

const ProductMap = ({
    name,
    productStatus,
    description,
    directRoute,
    features,
    priceRange,
    productType,
    background,
    options,
}: IProductMap) => {
    return (
        <div
            className={UIUtility.classnames(
                'min-h-screen flex flex-col justify-center items-center w-full',
                background === 'dark'
                    ? 'bg-themeDark text-themeLight'
                    : 'bg-themeLight/5 text-themeDark'
            )}
        >
            <section className="px-8 py-24 2xl:px-0 w-full max-w-cutoff mx-auto">
                <article
                    className={UIUtility.classnames(
                        'flex flex-col items-center mb-10 2xl:mb-12 pb-10 2xl:pb-12 border-b-2 w-full max-w-4xl mx-auto',
                        background === 'dark'
                            ? 'border-themeLight/5'
                            : 'border-themeDarkLight/5'
                    )}
                >
                    <h3 className="font-bold text-center text-4xl lg:text-5xl 2xl:text-6xl font-h mb-4">
                        {name}
                    </h3>
                    <p
                        className={UIUtility.classnames(
                            'text-center font-h  lg:text-lg leading-7 lg:leading-8 2xl:text-xl 2xl:leading-9 mb-8 max-w-2xl',
                            background === 'dark'
                                ? 'text-themeLightDark/75'
                                : 'text-themeDarkLight/50'
                        )}
                    >
                        {description}
                    </p>
                    <div>
                        <Link
                            href={directRoute.href}
                            className={UIUtility.classnames(
                                'w-full p-0.5 border block rounded-md  transition-smooth ',
                                background === 'dark'
                                    ? 'border-themeLightDark/50 lg:hover:bg-themeLight lg:hover:text-themeDark'
                                    : 'border-themeDarkLight/50 lg:hover:bg-themeDark lg:hover:text-themeLight'
                            )}
                        >
                            <span className="flex items-center font-h text-lg font-medium rounded px-6 p-2 gap-x-4">
                                {directRoute.icon}
                                <span>{directRoute.text}</span>
                            </span>
                        </Link>
                    </div>
                </article>
                <div className="flex flex-col gap-y-16 lg:gap-y-24">
                    <h3 className="w-full rounded-full font-h flex flex-col items-center">
                        <span className="lg:text-lg 2xl:text-xl text-pink-500 mb-1.5">
                            Price ranges from
                        </span>
                        <span className="text-2xl lg:text-3xl 2xl:text-4xl font-e2 mb-4">
                            <big className="font-bold">
                                ${Math.round(priceRange.lowerBound)}
                            </big>{' '}
                            to{' '}
                            <big className="font-bold">
                                ${Math.round(priceRange.upperBound)}
                            </big>
                        </span>
                        {priceRange.variability === 'variable' && (
                            <span className="text-sm lg:text-base font-light text-pink-500/50">
                                *Variable Price Products
                            </span>
                        )}
                        {priceRange.variability === 'fixed' && (
                            <span className="text-sm lg:text-base font-light text-pink-500/50">
                                *Flat Price Products
                            </span>
                        )}
                    </h3>
                    {productStatus === 'released' && (
                        <>
                            {productType === 'variable' && (
                                <ul className="w-full grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-0">
                                    {options.map((option, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-themeLight flex flex-col justify-between relative rounded-md p-6 transition-smooth border cursor-pointer shadow-xl shadow-slate-400/10 lg:hover:shadow-slate-600/20"
                                        >
                                            <div>
                                                <span className="z-10 rounded-full border border-pink-500/25 px-4 py-1 absolute -top-4 lg:-top-5 right-6 flex items-center gap-x-2 bg-themeDark backdrop-blur-sm">
                                                    <span className="font-medium font-h text-xs lg:text-sm text-pink-300">
                                                        Starts at
                                                    </span>
                                                    <big className="block font-h font-semibold text-pink-400  text-base lg:text-lg">
                                                        $
                                                        {Math.round(
                                                            sum(
                                                                { total: 0 },
                                                                ...(option.baseComponents.map(
                                                                    (cmp) =>
                                                                        cmp.price
                                                                ) as number[])
                                                            )
                                                        )}
                                                    </big>
                                                </span>
                                                <h5 className="mb-4 font-semibold font-h text-xl lg:text-2xl">
                                                    {option.name}
                                                </h5>
                                                <p className="font-h font-light text-sm lg:text-base leading-7 lg:leading-8 mb-6">
                                                    {option.description}
                                                </p>
                                            </div>
                                            <div className="w-full">
                                                <button className="font-semibold font-h px-8 py-3 w-full transition-smooth rounded-md bg-themeLight border border-themeDark/50 text-themeDark  lg:hover:bg-themeDark lg:hover:border-themeDark lg:hover:text-themeLight">
                                                    Features & Price
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </ul>
                            )}
                            <ul className="flex items-center justify-center gap-x-4">
                                <span className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-pink-400 animate-bounce " />
                                <span className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-pink-500 animate-pulse" />
                                <span className="w-1 h-1 lg:w-2 lg:h-2 rounded-full bg-pink-400 animate-ping" />
                            </ul>
                            <article className="mx-auto max-w-lg flex flex-col gap-y-12 lg:gap-y-16 relative z-0">
                                {features.map((feature, idx) => (
                                    <div key={idx}>
                                        <h4
                                            className={UIUtility.classnames(
                                                'text-center text-transparent bg-clip-text bg-gradient-to-r  font-medium text-2xl lg:text-3xl 2xl:text-4xl font-h mb-4',
                                                background === 'dark'
                                                    ? 'from-themeLight to-themeLight'
                                                    : 'from-themeDarkLight  to-themeDarkLight'
                                            )}
                                        >
                                            {feature.name}
                                        </h4>
                                        <FeatureWhyImportant
                                            feature={feature.name}
                                            description={feature.description}
                                            whyImportant={feature.whyImportant}
                                        />
                                    </div>
                                ))}
                            </article>
                        </>
                    )}
                    {productStatus === 'prepare' && (
                        <div className="p-6 border-l-4 border-pink-500 bg-pink-500/5 relative z-0 w-full max-w-2xl mx-auto">
                            <p className="font-h text-base lg:text-lg leading-7 lg:leading-8 text-pink-500 text-center">
                                This product is currently not ready for sale.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}

export default ProductMap
