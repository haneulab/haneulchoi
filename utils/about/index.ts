interface ContentLink {
    href: string
    text: string
}

interface AboutKeywordDescription {
    title: string
    description: string
    tags?: string[]

    link?: ContentLink
}

interface About {
    contents: AboutKeywordDescription[]
}

class __About_Utility__ {
    constructor(public contents: About['contents']) {
        this.contents = contents
    }
}

const AboutUtility = new __About_Utility__([
    {
        title: 'Naturality & Residency',
        description:
            'I am originally from Seoul, South Korea. Now, I am residing in California, USA.',
        tags: ['Korea', 'USA'],
    },
    {
        title: 'Education Background',
        description:
            'I have two associate degrees, natural sciences and mathematics from Irvine Valley College. I am currently attending University of California majoring in B.S Cognitive Science.',
        tags: ['IVC', 'UCD', 'Math', 'Science', 'Cognition'],

        link: {
            href: 'https://linkedin.com/in/haneulab',
            text: 'Connect Linkedin',
        },
    },
    {
        title: 'Technical Stacks',
        description:
            'I build web applications using various modern software tools. I am familiar with React, NexJs, TypeScript, TailwindCSS, Git, and Github.',
        tags: ['NextJs', 'TypeScript', 'Tailwind', 'Git', 'Github'],
        link: {
            href: 'https://github.com/haneulchoistudio',
            text: 'View Repositories',
        },
    },
])

export default AboutUtility
