import '@studio/styles/index.css'
import type { StudioProps } from 'studio'

const Studio = (props: StudioProps) => {
    const { Component, pageProps } = props

    const getLayout = Component.getLayout || ((page) => page)

    return getLayout(<Component {...pageProps} />)
}

export default Studio
