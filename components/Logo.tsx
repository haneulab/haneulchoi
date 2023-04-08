import Link from 'next/link'

const Logo = () => {
    return (
        <h1 className="text-lg lg:text-xl transition-all lg:hover:opaicty-70">
            <Link href={'/'}>
                <span className="font-source font-light">HC</span>{' '}
                <strong className="font-figtree font-medium">Studio</strong>
            </Link>
        </h1>
    )
}

export default Logo
