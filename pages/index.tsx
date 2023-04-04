import { useTheme } from '@studio/hooks/useTheme'
import { classnames } from '@studio/utils/classnames'
import dynamic from 'next/dynamic'
import type { StudioPage } from 'studio'

const PrimaryLayer = dynamic(() => import('@studio/components/PrimaryLayer'))

const Index: StudioPage = () => {
    return <div className={classnames('relative min-h-screen')}>Hi</div>
}

Index.getLayout = (page) => {
    return <PrimaryLayer>{page}</PrimaryLayer>
}

export default Index
