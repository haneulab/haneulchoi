type Language<T> = {
    ko: T
    en: T
}

export type ProjectType = 'web' | 'program' | 'package'

export interface IProject {
    type: ProjectType
    title?: Language<string>
    description?: Language<string>
    urls: {
        repository?: string
        demo?: string
    }
    technologies?: string[]
}

export type SubjectType = 'mathematics' | 'computer science'

export interface ITutor {
    type: SubjectType
    title?: Language<string>
    description?: Language<string>
    price: {
        session: '$45/hour'
        package: {
            week: '$200/week'
            month: '$725/month'
        }
    }
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
