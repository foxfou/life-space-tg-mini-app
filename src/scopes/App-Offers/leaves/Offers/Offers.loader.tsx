import { type ClientLoaderFunctionArgs } from '@remix-run/react'
import { getOffers } from '@/scopes/App-Offers/services/offers'

export async function clientLoader({ request }: ClientLoaderFunctionArgs) {
    // const searchParams = new URL(request.url).searchParams
    return await getOffers()
}

clientLoader.hydrate = false
