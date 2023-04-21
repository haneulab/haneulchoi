import { classnames } from '@studio/utils/classnames'
import dynamic from 'next/dynamic'

const PageSection = dynamic(
    () => import('@studio/components/containers/PageSection')
)

interface IPageParent {
    children: React.ReactNode
    className?: string
}

const PageParent = (props: IPageParent) => {
    return (
        <div
            className={classnames(
                'w-full min-h-screen flex flex-col',
                props.className ?? ''
            )}
        >
            <PageSection>{props.children}</PageSection>
        </div>
    )
}

export default PageParent
