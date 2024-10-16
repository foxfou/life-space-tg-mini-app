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
    offer_conditions: OfferCondition[]
    offer_property_type: OfferPropertyType[]
    offer_property_spec: OfferPropertySpec[]
    offer_heating_type: OfferHeatingType[]
    offer_rental_periods: OfferRentalPeriods[]
}

export type OfferCondition = {
    property_rent_condition: {
        id: number
        name: string
        tag: string
    }
}

export type OfferPropertyType = {
    property_type: {
        id: number
        name: string
    }
}

export type OfferPropertySpec = {
    property_spec: {
        id: number
        name: string
    }
}

export type OfferHeatingType = {
    property_heating_type: {
        id: number
        name: string
    }
}

export type OfferRentalPeriods = {
    property_rental_period: {
        id: number
        name: string
    }
}

export async function getOffers(): Promise<OfferData[]> {
    const {data, error} = await supabase
        .from('offer')
        .select(`
            *,
            offer_property_type(
                property_type(
                   id,
                   name 
                )
            ),
            offer_property_spec(
                property_spec(
                    id,
                    name
                )
            ),
            offer_conditions (
                property_rent_condition (
                    id,
                    name,
                    tag
                )
            ),
            offer_heating_type (
                property_heating_type (
                    id,
                    name
                )
            ),
            offer_rental_periods(
                property_rental_period(
                    id,
                    name
                )
            )
        `)
    if (error) {
        console.error('Ошибка при получении данных:', error)
        return []
    } else {
        return data as OfferData[]
    }

}