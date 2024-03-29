import Link from 'next/link'

const Logo = () => {
    return (
        <h1 className="w-[30px] h-[30px] rounded-md transform lg:hover:rotate-[360deg] transition-all duration-[0.15s] ease-in flex justify-center items-center bg-themeLight text-themeDark font-bold font-h text-base lg:text-lg lg:hover:bg-themeDark lg:hover:text-themeLight">
            <Link href={'/'}>HC</Link>
        </h1>
    )
}

export default Logo
