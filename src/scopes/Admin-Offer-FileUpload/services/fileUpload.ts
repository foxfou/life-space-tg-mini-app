import { supabase } from '@/utils/supabase'
import { toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid'
import { OffersData } from '@/scopes/App-Offers/services/offers'

export async function uploadImageToSupabase(file: File, offerId: string): Promise<string | null> {
    const fileName = `${offerId}/${uuidv4()}`
    const { data, error } = await supabase.storage
        .from('products') //todo: переключиться на прод таблицу после создания аутентификации
        .upload(fileName, file)

    if (error) {
        console.error('Ошибка при загрузке файла:', error)
        return null
    }

    return data?.path ?? null
}

export function getPublicImageUrl(path: string): string {
    const publicURL  = supabase.storage
        .from('products') //todo: переключиться на прод таблицу после создания аутентификации
        .getPublicUrl(path)

    return publicURL.data.publicUrl ?? ''
}

export async function saveOfferImageUrl(offerId: string, imageUrl: string) {
    const { data: offer, error: fetchError } = await supabase
        .from('offer')
        .select('photo_urls')
        .eq('id', offerId)
        .single()

    if (fetchError) {
        console.error('Ошибка при получении текущих значений photo_urls:', fetchError)
        return
    }

    const existingUrls = offer?.photo_urls || []
    const { error } = await supabase
        .from('offer')
        .update({ photo_urls: [...existingUrls, imageUrl] })
        .eq('id', offerId)

    if (error) {
        if (error.code === '409') {
            toast.error(`Данный изображение уже добавлено в объявление`, {
                position: "top-center",
            })
        } else {
            toast.error(`Данный изображение уже добавлено в объявление`, {
                position: "top-center",
            })
        }
    } else {
        toast.success(`Успешно`, {
            position: "top-center",
        })
    }
}

export async function getOffer(offerId: string | undefined): Promise<OffersData | null> {
    const {data: offer, error} = await supabase
        .from('offer')
        .select(`*`)
        .eq('id', offerId)
        .single()
    if (error) {
        console.error('Ошибка при получении данных:', error)
        return null
    } else {
        return offer as OffersData
    }

}