export type CardView =
    | 'web applications'
    | 'GUI games'
    | 'software packages'
    | 'software programs'

export type ProjefctCard = {
    type: CardView
    name: string
    description: string
    repo: string
}

export type FormDataField = {
    name: string
    email: string
    title: string
    message: string
}

export type FormDataResponse = {
    sentBy: string
    sentTo: string
    sentAt: string
}
