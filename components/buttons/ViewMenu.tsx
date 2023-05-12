import { TbEyeglass } from 'react-icons/tb'
import { UIUtility } from '@studio/utils'

type ColorVariant = 'dark' | 'light'

interface IViewMenu {
    viewNav: boolean
    onViewNav?: () => void
    variant: ColorVariant
}

const ViewMenu = ({ viewNav, onViewNav, variant }: IViewMenu) => {
    return (
        !viewNav && (
            <button
                onClick={onViewNav}
                className={UIUtility.classnames(
                    'text-sm font-light font-h flex items-center justify-center gap-x-2 mx-auto transition-smooth opacity-75 transform lg:hover:scale-110',

                    variant === 'dark'
                        ? 'text-pink-500 lg:hover:text-themeLight'
                        : 'text-slate-500 lg:hover:text-themeDark'
                )}
            >
                <TbEyeglass size={20} />
            </button>
        )
    )
}

export default ViewMenu
