import { classnames } from '@studio/utils/classnames'
import dynamic from 'next/dynamic'

const MobileSubMenu = dynamic(() => import('@studio/components/MobileSubMenu'))

interface IMobileMenu {
    showMobileMenu: boolean
}

const MobileMenu = (props: IMobileMenu) => {
    const menuItems = [
        {
            text: 'About',
            subMenuComponent: dynamic(() =>
                import('@studio/components/SubMenuComponent').then(
                    (module) => module.AboutSubMenuComponent
                )
            ),
        },
        {
            text: 'Package',
            subMenuComponent: dynamic(() =>
                import('@studio/components/SubMenuComponent').then(
                    (module) => module.PackageSubMenuComponent
                )
            ),
        },
        {
            text: 'Project',
            subMenuComponent: dynamic(() =>
                import('@studio/components/SubMenuComponent').then(
                    (module) => module.ProjectSubMenuComponent
                )
            ),
        },
        {
            text: 'Blog',
            subMenuComponent: dynamic(() =>
                import('@studio/components/SubMenuComponent').then(
                    (module) => module.BlogSubMenuComponent
                )
            ),
        },
    ]

    return (
        <section
            className={classnames(
                'w-full transition-all duration-[0.25s] overflow-hidden transform md:hidden'
            )}
        >
            <ul className="grid grid-cols-1 w-full">
                {menuItems.map((menuItem, idx) => (
                    <MobileSubMenu
                        {...menuItem}
                        key={idx}
                        showMobileMenu={props.showMobileMenu}
                    />
                ))}
            </ul>
        </section>
    )
}

export default MobileMenu
