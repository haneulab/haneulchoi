import Link from 'next/link'
import { MdOutlineViewInAr } from 'react-icons/md'
import { VscRequestChanges } from 'react-icons/vsc'

const WebsiteProductsLinks = () => {
    return (
        <ul className="w-full flex flex-col gap-y-6 sm:max-w-xs">
            <Link
                href={'/products/websites/info'}
                className="font-h flex items-center justify-between gap-x-4 w-full lg:w-full lg:self-end px-8 py-3 rounded-md bg-themeLight text-themeDark transition-smooth font-medium lg:hover:bg-themeDark lg:hover:text-themeLight"
            >
                <MdOutlineViewInAr size={22} />
                <span>Website Products Info</span>
            </Link>
            <Link
                href={'/products/websites/info'}
                className="font-h flex items-center justify-between gap-x-4 w-full lg:w-full px-8 py-3 rounded-md bg-themeDark text-themeLight transition-smooth font-medium lg:hover:bg-emerald-400 lg:hover:text-themeDark"
            >
                <VscRequestChanges size={22} />
                <span>Request To Build Website</span>
            </Link>
        </ul>
    )
}

export default WebsiteProductsLinks
