import { type CardView } from '@haneulchoi/types'

export interface ISoftwareTypesList {
    currentCardView: CardView
    onChnageCardView: (_newCardView: CardView) => void
    views: CardView[]
}
