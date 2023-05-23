import dynamic from 'next/dynamic'
import WorkCategoriesImage from 'public/static/about_workcategories.png'
import { HiArrowRight } from 'react-icons/hi'

const ImageContent = dynamic(
    () => import('@shared-components/containers/ImageContent')
)
const WorkCategories = () => {
    return (
        <>
            <ImageContent
                image={WorkCategoriesImage}
                alt="Work Categories | Haneul Choi Studio"
            />
            <h3 className="font-bold text-4xl lg:text-5xl 2xl:text-6xl font-h mb-4">
                Work Categories
            </h3>
            <p className="text-xl lg:text-2xl text-center leading-8 lg:leading-10 text-themeLight/75 mb-8">
                I build websites, web applications, and other software packages.
            </p>
            <ul className="w-full max-w-sm mx-auto flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-2">
                    <button className="flex justify-between items-center transition-all duration-[0.25s] ease-in-out w-full text-lg font-medium font-h border lg:hover:bg-emerald-400 lg:hover:border-emerald-400 ring-4 ring-transparent lg:hover:text-themeDarkLight px-8 py-3 rounded-md bg-emerald-400/5 border-emerald-400/25 lg:hover:ring-emerald-400 text-emerald-400">
                        <span>Website Product</span>
                        <HiArrowRight size={22} />
                    </button>
                    <span className="flex items-center gap-x-2">
                        <span>Or</span>
                        <button className="text-start text-emerald-500 lg:hover:underline transition-smooth">
                            Wanna See Demo Websites?
                        </button>
                    </span>
                </div>
                <div className="flex flex-col gap-y-2">
                    <button className="flex justify-between items-center transition-all duration-[0.25s] ease-in-out w-full text-lg font-medium font-h border lg:hover:bg-teal-400 lg:hover:border-teal-400 ring-4 ring-transparent lg:hover:text-themeDarkLight px-8 py-3 rounded-md bg-teal-400/5 border-teal-400/25 lg:hover:ring-teal-400 text-teal-400">
                        <span>Web Application Product</span>
                        <HiArrowRight size={22} />
                    </button>
                    <span className="flex items-center gap-x-2">
                        <span>Or</span>
                        <button className="text-start text-teal-500 lg:hover:underline transition-smooth">
                            Wanna See Demo Web Applications?
                        </button>
                    </span>
                </div>
                <div className="flex flex-col gap-y-2">
                    <button className="flex justify-between items-center transition-all duration-[0.25s] ease-in-out w-full text-lg font-medium font-h border lg:hover:bg-cyan-400 lg:hover:border-cyan-400 ring-4 ring-transparent lg:hover:text-themeDarkLight px-8 py-3 rounded-md bg-cyan-400/5 border-cyan-400/25 lg:hover:ring-cyan-400 text-cyan-400">
                        <span>NextReport, NextStore</span>
                        <HiArrowRight size={22} />
                    </button>
                    <span className="flex items-center gap-x-2">
                        <span>Or</span>
                        <button className="text-start text-cyan-500 lg:hover:underline transition-smooth">
                            what are they?
                        </button>
                    </span>
                </div>
            </ul>
        </>
    )
}

export default WorkCategories
