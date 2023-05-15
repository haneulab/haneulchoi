import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { useState } from 'react'
import UIUtility from 'utils/ui'

interface IFeatureWhyImportant {
    feature: string
    content: string
}

const FeatureWhyImportant = ({ content, feature }: IFeatureWhyImportant) => {
    const [showContent, setShowContent] = useState(true)

    return (
        <>
            <div className="flex flex-col items-center gap-y-4">
                <button
                    onClick={
                        showContent
                            ? () => setShowContent(false)
                            : () => setShowContent(true)
                    }
                    className={UIUtility.classnames(
                        'block font-light text-sm font-h transition-smooth lg:text-base 2xl:text-lg',
                        showContent
                            ? 'text-pink-500/50 lg:hover:text-pink-400'
                            : 'text-pink-500 lg:hover:text-pink-500/50'
                    )}
                >
                    {showContent
                        ? 'Ok, Got it!'
                        : `Learn why ${feature.toLocaleLowerCase()} is important.`}
                </button>
                {showContent && (
                    <p className="relative flex flex-col gap-y-4 p-6 lg:border lg:rounded-md text-start font-h text-sm lg:text-base leading-7 lg:leading-8 lg:bg-pink-400/10 border-pink-400/25 border-t">
                        <AiOutlineExclamationCircle
                            className="text-pink-400 block self-end transition-smooth transform lg:hover:scale-125 lg:hover:text-sky-200 cursor-pointer absolute z-20 -top-4 right-4 bg-themeDark rounded-full"
                            size={30}
                        />
                        <span className="block w-max px-3 py-1 rounded-full bg-pink-400 text-sm text-themeDark font-medium font-h">
                            Why {feature}?
                        </span>
                        <span className="relative z-10">{content}</span>
                    </p>
                )}
            </div>
        </>
    )
}

export default FeatureWhyImportant
