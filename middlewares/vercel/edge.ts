import { get } from '@vercel/edge-config'
import type { Blog, Package, Project } from 'studio'

type EdgeDataOptions = 'projects' | 'packages' | 'blogs'

export const config = {
    runtime: 'edge',
}

export function edge(option: EdgeDataOptions) {
    const options = {
        projects: async () => {
            const projects: Project[] = await get('projects')

            return projects
        },
        packages: async () => {
            const packages: Package[] = await get('packages')

            return packages
        },
        blogs: async () => {
            const blogs: Blog[] = await get('blogs')

            return blogs
        },
    }

    return options[option]
}
