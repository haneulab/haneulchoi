interface IProductPriceTag {
    lower: number
    upper: number
    variability: 'variable' | 'fixed'
}

const ProductPriceTag = ({ lower, upper, variability }: IProductPriceTag) => {
    return (
        <h3 className="w-full rounded-full font-h flex flex-col items-center">
            <span className="lg:text-lg 2xl:text-xl text-pink-500 mb-1.5">
                Price ranges from
            </span>
            <span className="text-2xl lg:text-3xl 2xl:text-4xl font-e2 mb-4">
                <big className="font-bold">${Math.round(lower)}</big> to{' '}
                <big className="font-bold">${Math.round(upper)}</big>
            </span>
            {variability === 'variable' && (
                <span className="text-sm lg:text-base font-light text-slate-500/75">
                    *Variable Price Products
                </span>
            )}
            {variability === 'fixed' && (
                <span className="text-sm lg:text-base font-light text-slate-500/75">
                    *Flat Price Products
                </span>
            )}
        </h3>
    )
}

export default ProductPriceTag
