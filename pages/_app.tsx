/**
 * @brief
 * --- IMPORTS STATEMENTS ----
 */
import '@studio/styles/index.css'
import type { Props } from 'haneulchoistudio'
import { ThemeContextProvider } from '@contexts/ThemeContext'
import { AnimatePresence } from 'framer-motion'

/**
 * @brief
 * --- COMPONENT STATEMENTS ----
 */
const Studio = (props: Props) => {
    const { Component, pageProps, router } = props

    const getLayout = Component.getLayout || ((page) => page)

    return (
        <AnimatePresence
            mode="wait"
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
        >
            <ThemeContextProvider>
                {getLayout(<Component {...pageProps} key={router.asPath} />)}
            </ThemeContextProvider>
        </AnimatePresence>
    )
}

export default Studio
