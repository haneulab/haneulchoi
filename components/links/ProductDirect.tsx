import Link from 'next/link'

interface IProductDirect {
    name: string
    href: string
}

const ProductDirect = ({ name, href }: IProductDirect) => {
    return (
        <Link
            href={href}
            className="px-8 py-3 w-full sm:max-w-sm lg:max-w-xs flex justify-center items-center rounded-full bg-gradient-to-r border-pink-500/25 from-pink-500/5 via-fuchsia-500/5 to-themeDark font-medium text-lg lg:text-xl border font-e1 transition-smooth lg:hover:text-pink-500 lg:hover:border-pink-500"
        >
            {name}
        </Link>
    )
}

export default ProductDirect
