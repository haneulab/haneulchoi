import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

// TYPES SUPPORT
type PositionCenter = 'center'
type PositionStart = 'start'
type PositionEnd = 'end'
type Position = [PositionCenter, PositionEnd, PositionStart][number]

type ThemeLight = 'light'
type ThemeDark = 'dark'
type Theme = [ThemeLight, ThemeDark][number]

type ScreenExact = 'screen'
type ScreenMinExact = 'min-screen'
type Screen = [ScreenExact, ScreenMinExact][number]

type NotFoundErrorStatusCode = 404 | '404'
type ServerErrorStatusCode = 500 | '500'
type ErrorStatusCode = [NotFoundErrorStatusCode, ServerErrorStatusCode][number]

declare module 'haneulchoistudio' {
    type AlignVariant = Position
    type JustifyVariant = Position | 'between'
    type ThemeVariant = Theme
    type ScreenVariant = Screen
    type ErrorVariant = ErrorStatusCode

    type Page<P = unknown, IP = P> = NextPage<P, IP> & {
        layout?: React.ComponentType
        getLayout?: (_page: React.ReactElement) => React.ReactNode
    }
    type Props<P = Record<string, unknown>> = {
        Component: StudioPage
    } & AppProps<P>

    type ThemeStore = {
        theme: Theme
        onChange: (_theme?: Theme) => void
    }
    type ThemeStoreProvider = (_props: {
        children: React.ReactNode
    }) => React.ReactNode
}
