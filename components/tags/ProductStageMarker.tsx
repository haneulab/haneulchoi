interface IProductStageMarker {
    stage: 'alpha' | 'beta' | 'released'
}

const ProductStageMarker = ({ stage = 'beta' }: IProductStageMarker) => {
    return (
        <span className="text-sm px-2 py-1 lg:text-base rounded-r-full rounded-t-full bg-themeLight text-themeDark">
            {stage}
        </span>
    )
}

export default ProductStageMarker
