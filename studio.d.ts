import type {
    GetServerSideProps,
    GetServerSidePropsContext,
    NextPage,
} from 'next'
import type { AppProps } from 'next/app'

declare module 'studio' {
    type StudioPage<P = unknown, IP = P> = NextPage<P, IP> & {
        layout?: React.ComponentType
        getLayout?: (_page: React.ReactElement) => React.ReactNode
    }
    type StudioProps<P = Record<string, unknown>> = {
        Component: StudioPage
    } & AppProps<P>
    type StudioSSRProps = GetServerSideProps
    type StudioSSRContext = GetServerSidePropsContext

    type ThemeOptions = 'dark' | 'light'
    type ThemeStore = {
        theme: ThemeOptions
        onChange: (_theme?: ThemeOptions) => void
    }
    type ThemeStoreProvider = (_props: {
        children: React.ReactNode
    }) => React.ReactNode

    type ContactCategory = 'inquiry' | 'question'

    type ContactField = {
        name: string
        email: string
        category: ContactCategory
        message: string
    }

    /** Edge Config Data */
    type Project = {
        image?: string
        id: number
        type: string
        name: string
        description: string
        slug: string
        stacks: string[]
        url: { demo?: string; code?: string }
    }

    type Package = {
        image?: string
        id: number
        type: string
        name: string
        description: string
        slug: string
        requiredPeerPackages: string[]
        url: { docs?: string; code?: string }
    }

    type BlogContentURL = {
        href: string
        name: string
    }

    type Blog = {
        image?: string
        id: number
        name: string
        slug: string
        description: string
        urls: BlogContentURL[]
    }
}
