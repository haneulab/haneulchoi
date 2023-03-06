import { type IProject } from '@haneulchoi/types'

const Projects: IProject[] = [
    {
        type: 'web',
        title: {
            en: 'Yuchan Shukudo',
            ko: '유찬 쇼쿠도',
        },
        description: {
            en: 'A Japanese restaurant website that displays informative contents throughout the multi-page architecture.',
            ko: '다양한 페이지를 기반으로하는 유용한 정보들을 디스플레이 해주는 로컬 일본 레스토랑 웹사이트.',
        },
        urls: {
            demo: 'https://yuchanshokudo.com',
            repository: null,
        },
        technologies: [
            'TypeScript',
            'Node',
            'TailwindCSS',
            'React',
            'NextJS',
            'Git',
            'Github',
            'Vercel',
        ],
    },
]

export default Projects
