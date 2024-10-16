import {AnnouncementCarousel} from '@/components/complex/AnnouncementCarousel/AnnouncementCarousel'
import {OfferData} from '@/scopes/App-Offers/services/offers'
import {Card} from '@/components/common/card'

export type OfferPreviewCardProps = {
    item: OfferData
}
export const OffersPreviewCard = (props: OfferPreviewCardProps) => {
    const {item} = props

    const images = [
        '1.jpg', '2.jpg', '3.jpg',
    ]

    return (
        <Card className="bg-card">

            <AnnouncementCarousel images={images} size="sm"/>

            <div className="px-4 py-2">

                <div className="mt-2 text-xl font-semibold">
                    {item.price}
                    <span>$&nbsp;/&nbsp;мес.</span>
                </div>

                {/*<div className="mt-2 text-lg font-semibold">*/}
                {/*    {item.title}*/}
                {/*</div>*/}

                {/*<div className="mt-1 text-ellipsis line-clamp-3 text-sm text-muted-foreground">*/}
                {/*    {item.description}*/}
                {/*</div>*/}

                <div className="flex text-nowrap mt-2">

                    <div className="text-sm">
                        {item.bedroom_count}
                        <span>-комн</span>
                    </div>

                    <div className="text-sm before:content-['•'] before:mx-2">
                        {item.area}
                        <span>&nbsp;m²</span>
                    </div>

                    <div className="text-sm overflow-hidden text-ellipsis whitespace-nowrap before:content-['•'] before:mx-2">
                        {item.floor}
                        <span>&nbsp;этаж</span>
                    </div>

                </div>

                <div className="text-muted-foreground text-sm mt-2">
                    {item.street},&nbsp;{item.house_number}{item.building}&nbsp;
                </div>

            </div>

        </Card>
    )
}