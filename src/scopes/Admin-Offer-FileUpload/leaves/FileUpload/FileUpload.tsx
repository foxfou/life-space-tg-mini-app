import React from 'react'
import { getPublicImageUrl, saveOfferImageUrl, uploadImageToSupabase } from '@/scopes/Admin-Offer-FileUpload/services/fileUpload'
import { type clientLoader } from '@/scopes/Admin-Offer-FileUpload/leaves/FileUpload/FileUpload.loader'
import { useLoaderData } from '@remix-run/react'

export const FileUpload = () => {

    const offer = useLoaderData<typeof clientLoader>()

    const handleFileUpload = async (file: File) => {
        const filePath = await uploadImageToSupabase(file, offer?.id ?? '')

        if (filePath && offer?.id) {
            const publicUrl = getPublicImageUrl(filePath)
            await saveOfferImageUrl(offer.id, publicUrl)
            console.log('Изображение успешно загружено и сохранено в offer:', publicUrl)
        }
    }

    const [selectedFile, setSelectedFile] = React.useState<File | null>(null)

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            setSelectedFile(file)
        }
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        if (selectedFile) {
            handleFileUpload(selectedFile)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileChange} accept="image/*" />
            <button type="submit" disabled={!selectedFile}>Загрузить</button>
        </form>
    )
}
