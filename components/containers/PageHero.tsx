import Link from 'next/link'

interface LinkProps {
    href?: string
    text?: string
}

interface IPageHero {
    title?: string
    description?: string
    links?: LinkProps[]
}

const PageHero = (props: IPageHero) => {
    return (
        <main className="h-screen flex flex-col justify-center items-center">
            <section className="p-8 2xl:px-0 w-full max-w-cutoff mx-auto">
                <article className="mb-8">
                    <h3 className="font-bold font-h text-3xl md:text-4xl lg:text-6xl text-center mb-6">
                        {props.title}
                    </h3>
                    <p className="font-h font-medium text-base max-w-md mx-auto leading-7 lg:text-lg lg:leading-8 2xl:text-xl 2xl:leading-9 text-center opacity-50">
                        {props.description}
                    </p>
                </article>
                <ul className="flex items-center justify-center gap-x-1">
                    {props.links.map((link, idx) => (
                        <>
                            <Link
                                key={idx}
                                href={link.href}
                                className="text-base lg:text-lg font-medium font-p border-b pb-0.5 border-transparent transition-smooth text-themeDark lg:hover:text-themeDarkLight lg:hover:border-themeLightDark"
                            >
                                {link.text}
                            </Link>
                            {idx !== props.links.length - 1 && (
                                <span className="text-themeDarkLight/50">
                                    /
                                </span>
                            )}
                        </>
                    ))}
                </ul>
            </section>
        </main>
    )
}

export default PageHero
