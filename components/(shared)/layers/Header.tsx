import Link from 'next/link'

const Header = () => {
    return (
        <header className="fixed top-0 z-40 w-full left-0 bg-themeDark/90 backdrop-blur-sm text-themeLight">
            <section className="px-4 2xl:px-8 py-4 w-full mx-auto flex justify-between">
                <h1 className="font-bold font-h text-lg lg:text-xl bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-fuchsia-600">
                    <Link href={'/'}>HC</Link>
                </h1>
            </section>
        </header>
    )
}

export default Header
