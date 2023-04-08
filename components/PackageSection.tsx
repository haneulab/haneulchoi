import { useTheme } from '@studio/hooks/useTheme'
import { classnames } from '@studio/utils/classnames'
import dynamic from 'next/dynamic'
import { Package } from 'studio'

const Link = dynamic(() => import('next/link'))

// const SlSocialGithub = dynamic(() =>
//     import('react-icons/sl').then((module) => module.SlSocialGithub)
// )
// const SlEye = dynamic(() =>
//     import('react-icons/sl').then((module) => module.SlEye)
// )
const TbPackages = dynamic(() =>
    import('react-icons/tb').then((module) => module.TbPackages)
)
const FaLongArrowAltRight = dynamic(() =>
    import('react-icons/fa').then((module) => module.FaLongArrowAltRight)
)
const PackageSnippetCard = dynamic(
    () => import('@studio/components/PackageSnippetCard')
)

interface IPackageSection {
    packages: Package[]
}

const PackageSection = (props: IPackageSection) => {
    const { theme } = useTheme()

    return (
        <section className="px-8 lg:px-0 py-12 lg:py-16 max-w-cutoff mx-auto grid grid-cols-1">
            <article className="mb-20 md:mb-24">
                <h3 className="w-full text-center mx-auto font-bold text-3xl md:text-4xl lg:text-5xl font-figtree flex flex-col gap-y-4 lg:gap-y-6 items-center">
                    <TbPackages className="text-5xl md:text-6xl lg:text-7xl" />
                    <span>
                        <span className="inline-block">Better Software,</span>{' '}
                        <span className="inline-block">Better Products.</span>
                    </span>
                </h3>
            </article>
            <article className="grid grid-cols-1 gap-20 md:grid-cols-2 w-full sm:w-max mx-auto mb-16">
                {props.packages.map((pkg, idx) => (
                    <PackageSnippetCard {...pkg} key={idx} />
                ))}
            </article>
            <article>
                <p
                    className={classnames(
                        'font-medium text-center font-source text-xl leading-7 lg:text-2xl mb-8',
                        theme === 'dark'
                            ? 'text-grayWhite/80'
                            : 'text-normalGray/80'
                    )}
                >
                    Intersted in more detailed information about these packages?
                </p>
                <Link
                    href={'/package'}
                    className="flex items-center gap-x-4 font-figtree font-medium text-orangeRed text-xl justify-center transition-smooth transform lg:hover:text-orangeRed/100 lg:text-orangeRed/80 lg:hover:scale-110"
                >
                    <TbPackages />
                    <span>Package Page</span>
                    <FaLongArrowAltRight />
                </Link>
            </article>
        </section>
    )
}

export default PackageSection
