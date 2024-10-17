import {type ClientLoaderFunctionArgs} from '@remix-run/react'

export async function clientLoader({ request }: ClientLoaderFunctionArgs) {
    return await null
}

clientLoader.hydrate = false
