import { type ClientLoaderFunctionArgs } from '@remix-run/react'
import { getOffer } from '@/scopes/App-Offer/services/offer'

export async function clientLoader({ request, params }: ClientLoaderFunctionArgs) {
    return await getOffer(params.offerId)
}

clientLoader.hydrate = false
