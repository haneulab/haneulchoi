/**
 * @brief
 * --- IMPORTS STATEMENTS ----
 */
import dynamic from 'next/dynamic'
import type { StudioPage } from 'studio'

/**
 * @brief
 * --- DYNAMIC IMPORTS STATEMENTS ----
 */
const PrimaryLayer = dynamic(
    () => import('@studio/components/layers/PrimaryLayer')
)
const ContactSection = dynamic(
    () => import('@studio/components/ContactSection')
)

/**
 * @brief
 * --- INTERFACE STATEMENTS ----
 */
interface PageProps {
    page?: string
}

/**
 * @brief
 * --- COMPONENT STATEMENTS ----
 */
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
