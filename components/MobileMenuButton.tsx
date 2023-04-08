import { FaBars, FaTimes } from 'react-icons/fa'

interface IMobileMenuButton {
    showMobileMenu: boolean
    onShowMobileMenu: () => void
    onHideMobileMenu: () => void
    id?: string
}

const MobileMenuButton = (props: IMobileMenuButton) => {
    return (
        <button
            onClick={
                props.showMobileMenu
                    ? props.onHideMobileMenu
                    : props.onShowMobileMenu
            }
            className="flex justify-center items-center text-2xl md:hidden"
        >
            {props.showMobileMenu ? <FaTimes /> : <FaBars />}
        </button>
    )
}

export default MobileMenuButton
