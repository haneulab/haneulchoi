import Link from 'next/link'

const Logo = () => {
    return (
        <h1 className="font-bold font-h text-lg lg:text-xl bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-fuchsia-600">
            <Link href={'/'}>HC</Link>
        </h1>
    )
}

export default Logo
