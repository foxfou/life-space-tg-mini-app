import { type ClientLoaderFunctionArgs } from '@remix-run/react'
import { getOffer } from '@/scopes/Admin-Offer-FileUpload/services/fileUpload'

export async function clientLoader({ params }: ClientLoaderFunctionArgs) {
    return getOffer(params.offerId)
}

clientLoader.hydrate = false
