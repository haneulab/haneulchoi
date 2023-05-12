/**
 * @brief
 * --- IMPORTS STATEMENTS ----
 */
import dynamic from 'next/dynamic'
import type { StudioPage } from 'studio'

// Layer
const PrimaryLayer = dynamic(() => import('@studio/components/layers/Primary'))
const Header = dynamic(() => import('@studio/components/layers/Header'))
const Footer = dynamic(() => import('@studio/components/layers/Footer'))
// Container
const PageHero = dynamic(() => import('@studio/components/containers/PageHero'))
// Form
const Contact = dynamic(() => import('@studio/components/forms/Contact'))
// Link
const HashDirect = dynamic(() => import('@studio/components/links/HashDriect'))

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
                <Header variant="light" />
                <PageHero
                    background="light"
                    title="Please Contact Me."
                    description="If you have inquiries, questions, or any other matter that I should knowm, please contact me using the form below."
                >
                    <HashDirect to="form" text="Fill Out Contact Form" />
                </PageHero>

                <Contact />
                <Footer variant="light" />
            </PrimaryLayer>
        </>
    )
}

ContactPage.getLayout = (page) => page
export default ContactPage
