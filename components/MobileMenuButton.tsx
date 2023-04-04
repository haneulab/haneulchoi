import dynamic from 'next/dynamic'

const FaBars = dynamic(() =>
    import('react-icons/fa').then((module) => module.FaBars)
)
const FaTimes = dynamic(() =>
    import('react-icons/fa').then((module) => module.FaTimes)
)

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
