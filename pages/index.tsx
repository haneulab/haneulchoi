import dynamic from 'next/dynamic'
import type { StudioPage } from 'studio'

const PrimaryLayer = dynamic(() => import('@studio/components/PrimaryLayer'))
const IntroSection = dynamic(() => import('@studio/components/IntroSection'))
const PackageSection = dynamic(
    () => import('@studio/components/PackageSection')
)
const BlogSection = dynamic(() => import('@studio/components/BlogSection'))
const Index: StudioPage = () => {
    return (
        <div className="relative min-h-screen">
            <IntroSection />
            <PackageSection />
            <BlogSection />
        </div>
    )
}

Index.getLayout = (page) => {
    return <PrimaryLayer>{page}</PrimaryLayer>
}

export default Index
