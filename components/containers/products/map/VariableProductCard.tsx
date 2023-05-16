import {
    ProductComponentInfo,
    VariableProductOption,
} from '@studio/models/product.model'
import { sum } from 'utils/math'

interface IVariableProductCard {
    option: VariableProductOption<ProductComponentInfo[]>
}

const VariableProductCard = ({ option }: IVariableProductCard) => {
    return (
        <div className="bg-themeLight flex flex-col justify-between relative rounded-md p-6 transition-smooth border cursor-pointer shadow-xl shadow-slate-400/10 lg:hover:shadow-slate-600/20">
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
                                    (cmp) => cmp.price
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
    )
}

export default VariableProductCard
