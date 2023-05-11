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
                <Header />
                <PageHero
                    title="Please Contact Me."
                    description="If you have inquiries, questions, or any other matter that I should knowm, please contact me using the form below."
                >
                    <a
                        href="#form"
                        className="font-h px-8 py-3 font-medium bg-themeLight text-themeDark rounded-md border border-themeDark transition-smooth lg:hover:bg-themeDark lg:hover:text-themeLight"
                    >
                        Fill Out Contact Form
                    </a>
                </PageHero>

                <Footer />
                <Contact />
            </PrimaryLayer>
        </>
    )
}

ContactPage.getLayout = (page) => page
export default ContactPage
