/**
 * @brief
 * --- IMPORTS STATEMENTS ----
 */
import Link from 'next/link'

/**
 * @brief
 * --- INTERFACE STATEMENTS ----
 */
interface ILogo {
    alwaysShow?: boolean
}

/**
 * @brief
 * --- COMPONENT STATEMENTS ----
 */
const Logo = ({ alwaysShow = false }: ILogo) => {
    return (
        <h1
            className={`font-medium font-h text-lg lg:text-xl transition-all lg:hover:opaicty-70 ${
                alwaysShow ? 'block' : 'hidden md:block'
            }`}
        >
            <Link href={'/'}>
                <strong>haneulchoistudio</strong>
            </Link>
        </h1>
    )
}

export default Logo
