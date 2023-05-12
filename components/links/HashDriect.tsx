import UIUtility from 'utils/ui'

type ColorVariant = 'light' | 'dark'

interface IHashDirect {
    to: string
    text: string

    variant?: ColorVariant
}

const HashDirect = ({ to, text, variant = 'light' }: IHashDirect) => {
    const __href__ = `#${to}`

    return (
        <a
            href={__href__}
            className={UIUtility.classnames(
                'block text-center font-h px-8 py-3 font-medium bg-themeLight text-themeDark rounded-md transition-smooth',
                variant === 'dark'
                    ? 'border-2 border-themeLight lg:hover:border-pink-400/25 lg:hover:bg-pink-400/10 lg:hover:text-pink-400'
                    : 'border border-themeDark lg:hover:bg-themeDark lg:hover:text-themeLight'
            )}
        >
            {text}
        </a>
    )
}

export default HashDirect
