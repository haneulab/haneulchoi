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
}
