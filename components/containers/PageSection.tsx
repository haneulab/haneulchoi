import { classnames } from '@studio/utils/classnames'

interface IPageSection {
    className?: string
    children: React.ReactNode
}

const PageSection = (props: IPageSection) => {
    return (
        <section
            className={classnames(
                'w-full px-6 py-6 2xl:px-0 max-w-cutoff mx-auto'
            )}
        >
            {props.children}
        </section>
    )
}

export default PageSection
