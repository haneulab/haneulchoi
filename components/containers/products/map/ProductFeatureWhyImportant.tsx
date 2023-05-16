import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { useState } from 'react'
import UIUtility from 'utils/ui'

interface IProductFeatureWhyImportant {
    feature: string
    description: string
    whyImportant: string
}

const ProductFeatureWhyImportant = ({
    feature,
    description,
    whyImportant,
}: IProductFeatureWhyImportant) => {
    const [showContent, setShowContent] = useState(false)

    return (
        <>
            <div className="flex flex-col items-center gap-y-4">
                {showContent ? (
                    <button
                        onClick={() => setShowContent(false)}
                        className={UIUtility.classnames(
                            'block font-light text-sm font-h transition-smooth lg:text-base 2xl:text-lg text-blue-500/50 lg:hover:text-blue-400'
                        )}
                    >
                        Ok, Got it!
                    </button>
                ) : (
                    <p className="font-h text-base lg:text-lg leading-7 lg:leading-8 text-slate-500 text-center">
                        {description}{' '}
                        <button
                            onClick={() => setShowContent(true)}
                            className="text-blue-500 lg:hover:text-blue-500/50 lowercase inline"
                        >
                            Why {feature} matters?
                        </button>
                    </p>
                )}

                {showContent && (
                    <p className="relative flex flex-col gap-y-4 p-6 lg:border lg:rounded-md text-start font-h text-sm lg:text-base leading-7 lg:leading-8 lg:bg-pink-400/10 border-pink-400/25 border-t">
                        <AiOutlineExclamationCircle
                            className="text-pink-400 block self-end transition-smooth transform lg:hover:scale-125 lg:hover:text-blue-500 cursor-pointer absolute z-20 -top-4 right-4 bg-transparent backdrop-blur-lg rounded-full"
                            size={30}
                        />
                        <span className="block w-max px-3 py-1 rounded-full bg-pink-400 text-sm text-themeLight font-medium font-h">
                            Why {feature}?
                        </span>
                        <span className="relative z-10 text-slate-500/80">
                            {whyImportant}
                        </span>
                    </p>
                )}
            </div>
        </>
    )
}

export default ProductFeatureWhyImportant
