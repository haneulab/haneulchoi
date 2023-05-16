const ProductSectionBreaker = () => {
    return (
        <ul className="flex items-center justify-center gap-x-4">
            <span className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-pink-400 animate-bounce " />
            <span className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-pink-500 animate-pulse" />
            <span className="w-1 h-1 lg:w-2 lg:h-2 rounded-full bg-pink-400 animate-ping" />
        </ul>
    )
}

export default ProductSectionBreaker
