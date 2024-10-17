import { OffersPreviewCard } from '@/scopes/App-Offers/components/OffersPreviewCard/OffersPreviewCard'
import { Outlet, useLoaderData } from '@remix-run/react'
import { type clientLoader } from '@/scopes/App-Offers/leaves/Offers/Offers.loader'
import { Link } from 'react-router-dom'

export const Offers = () => {
    const items = useLoaderData<typeof clientLoader>()

    return (
        <>

            {items.map((item) => (
                <Link to={`/offers/${item.id}`} key={item.id}>
                    <OffersPreviewCard item={item}/>
                </Link>
            ))}

            <Outlet/>

        </>
    )
}
