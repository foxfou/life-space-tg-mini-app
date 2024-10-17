import { AnnouncementCarousel } from '@/components/complex/AnnouncementCarousel/AnnouncementCarousel'
import { Chips } from '@/components/complex/chip'
import { IntlFormattedDateTime } from '@/components/complex/IntlFormattedDateTime/IntlFormattedDateTime'
import { OfferData } from '@/scopes/App-Offer/services/offer'

export type OfferCardProps = {
    item: OfferData | null
}

export const OfferCard = (props: OfferCardProps) => {
    const { item } = props

    return (
        <>
            {item && (
                <div>

                    <AnnouncementCarousel images={item.photo_urls} size="lg"/>

                    <div className="px-4 py-2">

                        <div className="mt-4 text-xl font-semibold">
                            {item.price}
                            <span>$&nbsp;/&nbsp;мес.</span>
                        </div>

                        <div className="mt-2">
                            {['г. ' + item.city, `ул. ` + item.street, item.house_number + item.building,]
                                .filter(Boolean)
                                .join(', ')
                            }
                        </div>

                        <div className="flex text-nowrap mt-6">

                            <div className="">
                                {item.bedroom_count}
                                <span>-комн.</span>
                            </div>

                            <div className="before:content-['•'] before:mx-2">
                                {item.area}
                                <span>&nbsp;m²</span>
                            </div>

                            <div className="overflow-hidden text-ellipsis whitespace-nowrap before:content-['•'] before:mx-2">
                                {item.floor}
                                <span>&nbsp;этаж</span>
                            </div>

                        </div>

                        <div className="mt-6">

                            <div className="text-lg font-semibold">
                                {item.title}
                            </div>

                            <div className="mt-2 text-sm text-muted-foreground">
                                {item.description}
                            </div>

                        </div>

                        <div className="mt-6">

                            <div className="text-lg font-semibold">
                                Условия аренды
                            </div>

                            <div className="mt-2 flex gap-x-4 text-nowrap flex-wrap gap-y-2">
                                {item.offer_conditions.map((cond) => (
                                    <Chips key={cond.property_rent_condition.id} className="">
                                        {cond.property_rent_condition.name}
                                    </Chips>

                                ))}

                                <Chips>
                                    {item.offer_rental_periods[0].property_rental_period.name}
                                </Chips>

                            </div>

                        </div>

                        <div className="mt-6">

                            <div className="text-lg font-semibold">
                                Наполнение объекта
                            </div>

                            <div className="mt-2 flex gap-x-4 text-nowrap flex-wrap gap-y-2">
                                {item.offer_property_spec.map((spec) => (
                                    <Chips key={spec.property_spec.id} className="">
                                        {spec.property_spec.name}
                                    </Chips>
                                ))}
                            </div>

                        </div>

                        <div className="mt-6">

                            <div className="text-sm text-muted-foreground">
                                Дата создания:&nbsp;
                                <IntlFormattedDateTime value={item.created_at} day="2-digit" month="2-digit" year="2-digit"/>
                            </div>

                        </div>

                    </div>

                </div>
            )}
        </>
    )
}