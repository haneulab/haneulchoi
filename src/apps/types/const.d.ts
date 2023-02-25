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
