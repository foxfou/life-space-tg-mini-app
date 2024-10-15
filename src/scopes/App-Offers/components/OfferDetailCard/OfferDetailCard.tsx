import {OfferData} from '@/scopes/App-Offers/services/offers'
import {AnnouncementCarousel} from '@/components/complex/AnnouncementCarousel/AnnouncementCarousel'

export type OfferDetailCardProps = {
    item: OfferData
}

export const OfferDetailCard = (props: OfferDetailCardProps) => {
    const {item} = props
    const images = [
        '1.jpg', '2.jpg', '3.jpg',
    ]

    return (
        <div>

            <AnnouncementCarousel images={images} size="lg"/>

            <div className="px-4 py-2">

                <div className="mt-2 text-xl font-semibold">
                    {item.price}
                    <span>$&nbsp;/&nbsp;мес.</span>
                </div>


                <div className="mt-2 text-lg font-semibold">
                    {item.title}
                </div>

                <div className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                </div>


                <div className="text-muted-foreground text-sm mt-2">
                    {item.street},&nbsp;{item.house_number}{item.building}&nbsp;
                </div>

            </div>

        </div>
    )
}