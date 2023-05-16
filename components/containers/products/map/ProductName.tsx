interface IProductName {
    name: string
}

const ProductName = ({ name }: IProductName) => {
    return (
        <h3 className="font-bold text-center text-4xl lg:text-5xl 2xl:text-6xl font-h mb-4">
            {name}
        </h3>
    )
}

export default ProductName
