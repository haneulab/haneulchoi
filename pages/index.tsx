import type { StudioPage } from 'studio'

const Index: StudioPage = () => {
    return <>Index</>
}

Index.getLayout = (page) => {
    return <>{page}</>
}

export default Index
