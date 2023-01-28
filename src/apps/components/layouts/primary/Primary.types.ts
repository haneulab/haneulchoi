export interface IPrimaryLayout {
    title?: string
    description?: string
    keywords?: string[]
    image?: string
    render?: {
        header: boolean
        footer: boolean
    }
}
