/** PRODUCT TYPE */
type ProductTypeUnique = 'unique'
type ProductTypeVariable = 'variable'
export type ProductType = [ProductTypeUnique, ProductTypeVariable][number]
/** PRODUCT STACKS */
type StackNextJS = 'nextjs'
type StackTailwindCSS = 'tailwind'
type StackTypeScript = 'typescript'
type StackVercel = 'vercel'
type StackGit = 'git'
type StackGithub = 'github'
export type ProductStack = [
    StackNextJS,
    StackTailwindCSS,
    StackTypeScript,
    StackVercel,
    StackGithub,
    StackGit
][number]
type ProductStackOptions = ProductStack[]
/** PRODUCT SCHEMA */
type ProductBaseInfo = {
    name: string
    description: string
}
type ProductFeatureInfo = ProductBaseInfo & {
    icon?: React.ReactNode
    whyImportant?: string
}
type ProductDirectRouteInfo = {
    text: string
    href: string
    icon?: React.ReactNode
}
type ProductPriceInfo = {
    lowerBound: number
    upperBound: number
    variability: 'fixed' | 'variable'
}
type ProductComponentInfo = {
    fullName: string
    shortName: string
    description: string
    price: unknown | number
}
type VariableProductOption<T> = ProductBaseInfo & {
    baseComponents: T
}
export type Product<T extends object = { __READEMD__?: string }> = {
    productType: ProductType
} & ProductBaseInfo & {
        features: ProductFeatureInfo[]
    } & { directRoute: ProductDirectRouteInfo } & {
        priceRange: ProductPriceInfo
    } & T

export type UniqueProduct = {
    productType: ProductTypeUnique
} & Product<//
/**
 * UniqueProduct Expansion
 */
//
{
    baseComponents: ProductComponentInfo[]
    options?: unknown
}>
export type VariableProduct = {
    productType: ProductTypeVariable
} & Product<//
/**
 * Variable Product Expansion
 */
//
{
    options: VariableProductOption<ProductComponentInfo[]>[]
}>
