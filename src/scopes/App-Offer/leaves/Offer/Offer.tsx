import { OfferCard } from '@/scopes/App-Offer/components/OfferCard/OfferCard'
import { type clientLoader } from '@/scopes/App-Offer/leaves/Offer/Offer.loader'
import { useLoaderData, useNavigate } from '@remix-run/react'
import { Dialog, DialogContent } from '@/components/common/dialog'

export const Offer = () => {
    const item = useLoaderData<typeof clientLoader>()
    const navigate = useNavigate()

    if (!item) return null

    return (
        <Dialog open onOpenChange={() => navigate(-1)}>
            <DialogContent className="overflow-y-scroll h-full w-full">
                <OfferCard item={item}/>
            </DialogContent>
        </Dialog>
    )
}