import {supabase} from '@/utils/supabase'


export type OfferData = {
    area: number
    bedroom_count: number
    building: string
    city: string
    created_at: string
    description: string
    floor: number
    house_number: string
    id: string
    photo_urls: string[] | null
    price: number
    street: string
    title: string
    updated_at: string
}

export async function getOffers(): Promise<OfferData[]> {
    const { data, error } = await supabase
    .from('offer')
    .select('*')
    if (error) {
        console.error('Ошибка при получении данных:', error)
        return []
    } else {
        return data as OfferData[]
    }

}