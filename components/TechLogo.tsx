import {
    TbBrandVercel,
    TbBrandTailwind,
    TbBrandTypescript,
    TbBrandNextjs,
    TbBrandGit,
    TbBrandGithub,
    TbBrandMongodb,
    TbBrandFirebase,
} from 'react-icons/tb'
interface ITechLogo {
    stack: string
}

const TechLogo = (props: ITechLogo) => {
    const stacks = {
        NextJS: <TbBrandNextjs className="text-2xl lg:text-4xl" />,
        TailwindCSS: <TbBrandTailwind className="text-2xl lg:text-4xl" />,
        TypeScript: <TbBrandTypescript className="text-2xl lg:text-4xl" />,
        Vercel: <TbBrandVercel className="text-2xl lg:text-4xl" />,
        Git: <TbBrandGit className="text-2xl lg:text-4xl" />,
        Github: <TbBrandGithub className="text-2xl lg:text-4xl" />,
        MongoDB: <TbBrandMongodb className="text-2xl lg:text-4xl" />,
        Firebase: <TbBrandFirebase className="text-2xl lg:text-4xl" />,
    }

    return (
        <span className="flex items-center justify-center gap-x-2 lg:gap-x-4">
            <span className="font-medium text-lg lg:text-2xl font-figtree">
                {props.stack}
            </span>
            {stacks[props.stack]}
        </span>
    )
}

export default TechLogo
