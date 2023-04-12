import dynamic from 'next/dynamic'
import type { StudioPage } from 'studio'

const PrimaryLayer = dynamic(() => import('@studio/components/PrimaryLayer'))
const ContactSection = dynamic(
    () => import('@studio/components/ContactSection')
)

interface PageProps {
    page?: string
}

const Contact: StudioPage<PageProps> = (_props: PageProps) => {
    return (
        <div className="relative flex flex-col items-center">
            <ContactSection />
        </div>
    )
}

Contact.getLayout = (page) => {
    return <PrimaryLayer>{page}</PrimaryLayer>
}

export default Contact