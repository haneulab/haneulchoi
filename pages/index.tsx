import dynamic from 'next/dynamic'
import type { StudioPage } from 'studio'

const PrimaryLayer = dynamic(() => import('@studio/components/PrimaryLayer'))
const IntroSection = dynamic(() => import('@studio/components/IntroSection'))
const Index: StudioPage = () => {
    return (
        <div className="relative min-h-screen">
            <IntroSection />
        </div>
    )
}

Index.getLayout = (page) => {
    return <PrimaryLayer>{page}</PrimaryLayer>
}

export default Index
