import Link from 'next/link'

const MainButtonNavs = () => {
    return (
        <ul className="w-full flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-6 max-w-xl mx-auto">
            <Link
                href={'/products'}
                className="font-h w-full text-center px-8 py-3 rounded-md border ring ring-black text-lg lg:text-xl transition-all duration-[0.35s] ease-in-out lg:hover:ring-orange-500 lg:hover:text-orange-500 lg:hover:border-orange-500"
            >
                See All Products
            </Link>
            <Link
                href={'/products'}
                className="font-h w-full text-center px-8 py-3 rounded-md border ring ring-black text-lg lg:text-xl transition-all duration-[0.35s] ease-in-out lg:hover:ring-fuchsia-600 lg:hover:text-fuchsia-500 lg:hover:border-fuchsia-600"
            >
                Pricing Model
            </Link>
        </ul>
    )
}

export default MainButtonNavs
