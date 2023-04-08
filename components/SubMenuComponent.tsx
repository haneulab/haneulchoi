import { useTheme } from '@studio/hooks/useTheme'
import { classnames } from '@studio/utils/classnames'
import dynamic from 'next/dynamic'

const Link = dynamic(() => import('next/link'))
const IoIosArrowForward = dynamic(() =>
    import('react-icons/io').then((module) => module.IoIosArrowForward)
)

export const AboutSubMenuComponent = () => {
    const { theme } = useTheme()

    return (
        <div
            className={classnames(
                'p-6 border-b transition-smooth',
                theme === 'dark' ? 'border-black/25' : 'border-normalDark/10'
            )}
        >
            <p className="mb-3 text-lg leading-7 font-source font-medium opacity-80">
                Learn about who I am, where I am from, and what I like to do in
                both work & personal life.
            </p>
            <Link
                href={'/about'}
                className="flex items-center gap-x-2 font-medium font-figtree text-orangeRed"
            >
                <span>About Page</span>
                <IoIosArrowForward className="text-xl" />
            </Link>
        </div>
    )
}

export const PackageSubMenuComponent = () => {
    const { theme } = useTheme()

    return (
        <div
            className={classnames(
                'p-6 border-b transition-all duration-[0.25s]',
                theme === 'dark' ? 'border-black/25' : 'border-normalDark/10'
            )}
        >
            <p className="mb-3 text-lg leading-7 font-source font-medium opacity-80">
                Explore some of the software packages I built & idealize in my
                source repositories.
            </p>
            <Link
                href={'/package'}
                className="flex items-center gap-x-2 font-medium font-figtree text-orangeRed"
            >
                <span>Package Page</span>
                <IoIosArrowForward className="text-xl" />
            </Link>
        </div>
    )
}

export const ProjectSubMenuComponent = () => {
    const { theme } = useTheme()

    return (
        <div
            className={classnames(
                'p-6 border-b transition-all duration-[0.25s]',
                theme === 'dark' ? 'border-black/25' : 'border-normalDark/10'
            )}
        >
            <p className="mb-3 text-lg leading-7 font-source font-medium opacity-80">
                See the demo & source code for some of the recent and past
                projects that I worked on.
            </p>
            <Link
                href={'/project'}
                className="flex items-center gap-x-2 font-medium font-figtree text-orangeRed"
            >
                <span>Project Page</span>
                <IoIosArrowForward className="text-xl" />
            </Link>
        </div>
    )
}

export const BlogSubMenuComponent = () => {
    const { theme } = useTheme()

    return (
        <div
            className={classnames(
                'p-6 border-b transition-all duration-[0.25s]',
                theme === 'dark' ? 'border-black/25' : 'border-normalDark/10'
            )}
        >
            <p className="mb-3 text-lg leading-7 font-source font-medium opacity-80">
                Interact with my discussion on interesting topics that I
                discover in my development workflow.
            </p>
            <Link
                href={'/project'}
                className="flex items-center gap-x-2 font-medium font-figtree text-orangeRed"
            >
                <span>Blog Page</span>
                <IoIosArrowForward className="text-xl" />
            </Link>
        </div>
    )
}
