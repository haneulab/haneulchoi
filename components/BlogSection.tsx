import { TfiWrite } from 'react-icons/tfi'
const BlogSection = () => {
    return (
        <section className="px-8 lg:px-0 py-12 lg:py-16 max-w-cutoff mx-auto grid grid-cols-1">
            <article className="mb-20 md:mb-24">
                <h3 className="w-full text-center mx-auto font-bold text-3xl md:text-4xl lg:text-5xl font-figtree flex flex-col gap-y-4 lg:gap-y-6 items-center mb-8">
                    <TfiWrite className="text-5xl md:text-6xl lg:text-7xl" />
                    <span>Blog Posts</span>
                </h3>
                <p className="text-center text-xl">
                    This component section is currently in preparation mode.{' '}
                    <strong>Sorry for the inconvenience.</strong>
                </p>
            </article>
        </section>
    )
}

export default BlogSection
