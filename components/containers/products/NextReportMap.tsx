import dynamic from 'next/dynamic'

// Container
const PageHero = dynamic(() => import('@studio/components/containers/PageHero'))

const NextReportMap = () => {
    return (
        <PageHero
            background="dark"
            title={
                <span className="inline-flex items-end gap-x-4 ">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-pink-500">
                        NextReport
                    </span>
                    <span className="text-sm pr-2 lg:text-base rounded-full bg-gradient-to-r from-transparent via-fuchsia-500 to-pink-500">
                        Beta
                    </span>
                </span>
            }
            description={
                <span className="font-h">
                    Essential features & functionalities that supports sales
                    record & statistical summary.
                </span>
            }
        >
            <ul className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <button className="px-8 py-3 rounded-full bg-gradient-to-r border-pink-500/25 from-pink-500/5 via-fuchsia-500/5 to-themeDark font-medium text-lg lg:text-xl border font-e1 transition-smooth lg:hover:text-pink-500 lg:hover:border-pink-500">
                    How It Works
                </button>
                <button className="px-8 py-3 rounded-full bg-gradient-to-r border-pink-500/25 from-pink-500/5 via-fuchsia-500/5 to-themeDark font-medium text-lg lg:text-xl border font-e1 transition-smooth lg:hover:text-pink-500 lg:hover:border-pink-500">
                    Who Is It For
                </button>
            </ul>
        </PageHero>
    )
}

export default NextReportMap
