import { AiOutlineMenu } from 'react-icons/ai'
const Header = () => {
    return (
        <header className="fixed top-0 w-full bg-themeLight z-10 h-max">
            <section className="px-8 py-4 text-center flex justify-center items-center">
                <button className="block lg:hidden">
                    <AiOutlineMenu size={24} />
                </button>
            </section>
        </header>
    )
}

export default Header
