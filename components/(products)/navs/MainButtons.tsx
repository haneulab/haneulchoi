import { HiArrowDown } from 'react-icons/hi'
import {
    SiCreatereactapp,
    SiDwavesystems,
    SiPagespeedinsights,
} from 'react-icons/si'

const MainButtons = () => {
    return (
        <ul className="w-full max-w-2xl mx-auto grid grid-cols-1 gap-6 lg:grid-cols-3 mt-8">
            <button className="flex justify-between lg:flex-col lg:gap-y-2 items-center transition-all duration-[0.25s] ease-in-out w-full text-base lg:text-lg font-medium font-h lg:border lg:hover:bg-emerald-400 lg:hover:border-emerald-400 lg:ring-4 ring-transparent lg:hover:text-themeDarkLight lg:p-6 lg:rounded-md lg:bg-emerald-400/5 border-emerald-400/25 lg:hover:ring-emerald-400 text-emerald-400">
                <span className="flex items-center gap-3 lg:flex-col lg:gap-y-2">
                    <SiPagespeedinsights className="text-2xl lg:text-5xl 2xl:text-6xl" />
                    <span>Simple Website Products</span>
                </span>
                <HiArrowDown size={22} className="-rotate-90 lg:rotate-0" />
            </button>
            <button className="flex justify-between lg:flex-col lg:gap-y-2 items-center transition-all duration-[0.25s] ease-in-out w-full text-base lg:text-lg font-medium font-h lg:border lg:hover:bg-teal-400 lg:hover:border-teal-400 lg:ring-4 ring-transparent lg:hover:text-themeDarkLight lg:p-6 lg:rounded-md lg:bg-teal-400/5 border-teal-400/25 lg:hover:ring-teal-400 text-teal-400">
                <span className="flex items-center gap-3 lg:flex-col lg:gap-y-2">
                    <SiCreatereactapp className="text-2xl lg:text-5xl 2xl:text-6xl" />
                    <span>Web Application Products</span>
                </span>
                <HiArrowDown size={22} className="-rotate-90 lg:rotate-0" />
            </button>
            <button className="flex justify-between lg:flex-col lg:gap-y-2 items-center transition-all duration-[0.25s] ease-in-out w-full text-base lg:text-lg font-medium font-h lg:border lg:hover:bg-cyan-400 lg:hover:border-cyan-400 lg:ring-4 ring-transparent lg:hover:text-themeDarkLight lg:p-6 lg:rounded-md lg:bg-cyan-400/5 border-cyan-400/25 lg:hover:ring-cyan-400 text-cyan-400">
                <span className="flex items-center gap-3 lg:flex-col lg:gap-y-2">
                    <SiDwavesystems className="text-2xl rotate-[90deg] lg:text-5xl 2xl:text-6xl" />
                    <span>NextStore & NextReport</span>
                </span>
                <HiArrowDown size={22} className="-rotate-90 lg:rotate-0" />
            </button>
        </ul>
    )
}

export default MainButtons
