/**
 * @brief
 * --- IMPORTS STATEMENTS ----
 */
import { useTheme } from '@studio/hooks/useTheme'
import { classnames } from '@studio/utils/classnames'
import Link from 'next/link'
import { MdOutlineMarkEmailUnread } from 'react-icons/md'

/**
 * @brief
 * --- COMPONENT STATEMENTS ----
 */
const ContactButton = () => {
    const { theme } = useTheme()

    return (
        <Link
            href={'/contact'}
            className={classnames(
                'flex items-center p-1.5 border rounded-full justify-center text-2xl transition-smooth lg:hover:opacity-70 transform',

                theme === 'dark'
                    ? 'bg-themeDarkLight border-themeLightDark/50'
                    : 'bg-themeLightDark text-themeLight border-themeDarkLight/50'
            )}
        >
            <span>
                <MdOutlineMarkEmailUnread />
            </span>
        </Link>
    )
}

export default ContactButton
