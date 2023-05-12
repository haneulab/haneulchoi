import { TbEyeglass } from 'react-icons/tb'
import { UIUtility } from '@studio/utils'

interface IViewMenu {
    viewNav: boolean
    onViewNav?: () => void
}

const ViewMenu = ({ viewNav, onViewNav }: IViewMenu) => {
    return (
        !viewNav && (
            <button
                onClick={onViewNav}
                className={UIUtility.classnames(
                    'text-sm font-light font-h flex items-center justify-center gap-x-2 mx-auto transition-smooth opacity-75 lg:hover:text-themeDark transform lg:hover:scale-110',
                    viewNav ? 'text-red-400' : 'text-slate-400'
                )}
            >
                <TbEyeglass size={20} />
            </button>
        )
    )
}

export default ViewMenu
