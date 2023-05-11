interface IHideMenu {
    onClick?: () => void
}

const HideMenu = ({ onClick }: IHideMenu) => {
    return (
        <button
            onClick={onClick}
            className="font-e1 text-sm font-medium flex justify-center items-center gap-x-2 rounded-md px-2 py-1 bg-pink-500/10 border border-pink-500/25 text-pink-500 transition-smooth lg:hover:bg-pink-500 lg:hover:text-themeLight"
        >
            <span>Hide Menu</span>
        </button>
    )
}

export default HideMenu
