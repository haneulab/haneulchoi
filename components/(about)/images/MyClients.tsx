import dynamic from 'next/dynamic'
import MyClientsImage from 'public/static/about_myclients.png'

const ImageContent = dynamic(
    () => import('@shared-components/containers/ImageContent')
)
const MyClients = () => {
    return (
        <>
            <ImageContent
                image={MyClientsImage}
                alt="My Clients | Haneul Choi Studio"
            />
            <h3 className="font-bold text-4xl lg:text-5xl 2xl:text-6xl font-h">
                My Clients
            </h3>
            <p className="text-xl lg:text-2xl text-center leading-8 lg:leading-10 text-themeLight/75">
                I have beenw working with clients from different industries
                including entrepreneurs, business owners, corporates, and
                individuals.
            </p>
        </>
    )
}

export default MyClients
