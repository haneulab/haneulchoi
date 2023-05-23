import Link from 'next/link'

const MainButtons = () => {
    return (
        <ul className="w-full flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-6 max-w-xl mx-auto">
            <Link
                href={'/products'}
                className="font-h w-full text-center px-8 py-3 rounded-md border ring ring-transparent text-lg lg:text-xl transition-all duration-[0.35s] ease-in-out lg:hover:ring-emerald-400 lg:hover:text-emerald-400 lg:hover:border-emerald-400"
            >
                See All Products
            </Link>
            <Link
                href={'/products'}
                className="font-h w-full text-center px-8 py-3 rounded-md border ring ring-transparent text-lg lg:text-xl transition-all duration-[0.35s] ease-in-out lg:hover:ring-cyan-400 lg:hover:text-cyan-400 lg:hover:border-cyan-400"
            >
                Pricing Model
            </Link>
        </ul>
    )
}

export default MainButtons
