interface AboutKeywordDescription {
    title: string
    description: string
    tags?: string[]

    link?: {
        href: string
        text: string
    }
}

interface IAboutMap {
    contents: AboutKeywordDescription[]
}

const AboutMap = (props: IAboutMap) => {
    const { contents } = props

    return (
        <div
            id="learn-more"
            className="min-h-screen flex flex-col justify-center items-center py-24 border-t"
        >
            <section className="p-8 2xl:px-0 w-full max-w-cutoff mx-auto flex flex-col items-center gap-y-32">
                {contents.map((content, idx) => (
                    <article
                        key={idx}
                        className="flex flex-col items-center w-full max-w-2xl mx-auto"
                    >
                        <div className="flex flex-col mb-6">
                            <h3 className="font-semibold text-xl lg:text-2xl text-center font-h">
                                {content.title}
                            </h3>
                            {content.tags && content.tags.length >= 1 && (
                                <div className="mt-4 flex justify-center gap-x-2">
                                    {content.tags.map((tag, jdx) => (
                                        <span
                                            className="px-2 py-1 rounded-full bg-slate-50 text-themeDark border shadow inline-block font-medium font-e1 text-themeDarkLight/75 text-sm cursor-pointer transition-smooth lg:hover:bg-themeDark lg:hover:text-pink-500"
                                            key={jdx}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                        <p className="text-center text-themeDarkLight/75 font-p text-base lg:text-lg">
                            {content.description}
                        </p>
                        {content.link && (
                            <div className="mt-8 flex justify-center items-center">
                                <a
                                    href={content.link.href}
                                    className="px-8 py-3 rounded-md border bg-themeLight border-themeDark font-medium font-h transition-smooth lg:hover:bg-themeDark lg:hover:text-themeLight"
                                >
                                    {content.link.text}
                                </a>
                            </div>
                        )}
                    </article>
                ))}
            </section>
        </div>
    )
}

export default AboutMap
