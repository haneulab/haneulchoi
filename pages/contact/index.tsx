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
const PrimaryLayer = dynamic(() => import('@studio/components/layers/Primary'))
const Contact = dynamic(() => import('@studio/components/forms/Contact'))

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
const ContactPage: StudioPage<PageProps> = (_props: PageProps) => {
    return (
        <>
            <PrimaryLayer>
                <Contact />
            </PrimaryLayer>
        </>
    )
}

ContactPage.getLayout = (page) => page
export default ContactPage
