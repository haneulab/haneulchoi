import { MdArrowDownward, MdArrowDropDown } from 'react-icons/md'

const HeaderLayer = () => {
    return (
        <header className="fixed top-0 z-40 left-0 w-full bg-themeLight">
            <button className="transition-smooth animate-ping ease-linear block absolute top-0 right-4">
                <MdArrowDropDown size={65} className="" />
            </button>
            <section className="px-6 py-4 2xl:px-0 w-full max-w-cutoff mx-auto flex justify-end"></section>
        </header>
    )
}

export default HeaderLayer
