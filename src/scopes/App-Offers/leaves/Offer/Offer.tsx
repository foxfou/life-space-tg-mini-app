import { AnnouncementCarousel } from '@/components/complex/AnnouncementCarousel/AnnouncementCarousel'
import { OfferData } from '@/scopes/App-Offers/services/offers'
import {OfferPreviewCard} from '@/scopes/App-Offers/components/OfferPreviewCard/OfferPreviewCard'

export type OffersProps = {
    item: OfferData
}

export const Offer = (props: OffersProps) => {
    const { item } = props

    return (
        <div>

            <OfferPreviewCard {...props} />

        </div>
    )
}