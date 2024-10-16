import { OfferData } from '@/scopes/App-Offers/services/offers'
import { OffersPreviewCard } from '@/scopes/App-Offers/components/OffersPreviewCard/OffersPreviewCard'
import { Dialog, DialogContent, DialogTrigger } from '@/components/common/dialog'
import { OffersDetailCard } from '@/scopes/App-Offers/components/OffersDetailCard/OffersDetailCard'

export type OffersProps = {
    item: OfferData
}

export const Offers = (props: OffersProps) => {
    const {item} = props

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="whitespace-nowrap w-full text-left">
                    <OffersPreviewCard item={item} />
                </button>
            </DialogTrigger>
            <DialogContent className="overflow-y-scroll h-full w-full">
                <OffersDetailCard item={item} />
            </DialogContent>
        </Dialog>
    )
}