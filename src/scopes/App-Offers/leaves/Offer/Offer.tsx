import { OfferData } from '@/scopes/App-Offers/services/offers'
import { OfferPreviewCard } from '@/scopes/App-Offers/components/OfferPreviewCard/OfferPreviewCard'
import { Dialog, DialogContent, DialogTrigger } from '@/components/common/dialog'
import { OfferDetailCard } from '@/scopes/App-Offers/components/OfferDetailCard/OfferDetailCard'

export type OffersProps = {
    item: OfferData
}

export const Offer = (props: OffersProps) => {
    const {item} = props

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="whitespace-nowrap w-full text-left">
                    <OfferPreviewCard item={item} />
                </button>
            </DialogTrigger>
            <DialogContent className="overflow-y-scroll h-full w-full">
                <OfferDetailCard item={item} />
            </DialogContent>
        </Dialog>
    )
}