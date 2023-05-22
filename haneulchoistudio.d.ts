import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

declare module 'haneulchoistudio' {
    type Page<P = unknown, IP = P> = NextPage<P, IP> & {
        layout?: React.ComponentType
        getLayout?: (_page: React.ReactElement) => React.ReactNode
    }
    type Props<P = Record<string, unknown>> = {
        Component: StudioPage
    } & AppProps<P>

    type ThemeOptions = 'dark' | 'light'
    type ThemeStore = {
        theme: ThemeOptions
        onChange: (_theme?: ThemeOptions) => void
    }
    type ThemeStoreProvider = (_props: {
        children: React.ReactNode
    }) => React.ReactNode
}
