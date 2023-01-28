import { type ReactNode, ComponentType, ReactElement } from 'react'
import { type NextPage } from 'next'

export type GenericProps<T extends {}> = {
    [K in keyof T]: T[K]
}

export type GenericRFC<T extends {}> = React.FC<GenericProps<T>>

export type CustomRFC<
    ComponentProps extends {} = {},
    DefineGenericProps extends {} = {}
> = GenericRFC<ComponentProps & DefineGenericProps>

export interface AppRFCProps {
    className?: string
    children?: ReactNode
}

export type AppRFC<Props extends {} = {}> = CustomRFC<Props, AppRFCProps>

export type GetLayout = (_page: ReactElement) => ReactNode

export interface IPageWithLayout {
    getLayout?: GetLayout
    layout?: ComponentType
}
export type PageWithLayout<P extends {} = {}> = NextPage<P> & IPageWithLayout
