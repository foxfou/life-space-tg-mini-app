import React from 'react'
import {Card, CardContent} from '@/components/common/card'
import {clsx} from 'clsx'
import {AspectRatio} from '@/components/common/aspect-ratio'
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from '@/components/common/carousel'
import {ImageOffIcon} from 'lucide-react'

export type AnnouncementCarouselProps = {
    images?: Array<string>
    size: 'sm' | 'lg'
    className?: string
}

export const AnnouncementCarousel = (props: AnnouncementCarouselProps) => {
    const {images, size} = props
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    const renderPagination = () => {
        return Array.from({length: count}).map((_, index) => (
            <button
                key={index}
                className={clsx(
                    'w-3 h-3 rounded-full mx-1',
                    current === index + 1 ? 'bg-accent-foreground/60' : 'bg-muted-foreground/60',
                )}
                onClick={() => api?.scrollTo(index)}
            />
        ))
    }

    return (
        <>
            {images && images.length > 0 ? (
                <>
                    {images?.length === 1 ? (
                        <>
                            <div className="bg-accent p-0">
                                <AspectRatio ratio={size === 'sm' ? 4 / 3 : 3 / 4}>
                                    <div className="flex items-center justify-center w-full h-full">
                                        <img src={`./images/123/${images[0]}`} className="object-cover" alt=""/>
                                    </div>
                                </AspectRatio>
                            </div>
                        </>
                    ) : (
                        <div className="relative">
                            <Carousel className="w-full" setApi={setApi}>
                                <CarouselContent>
                                    {images?.map((image, index) => (
                                        <CarouselItem key={index} className="">
                                        <div className="">
                                                <Card className="!rounded-none">
                                                    <AspectRatio ratio={size === 'sm' ? 4 / 3 : 3 / 4} className="bg-accent flex justify-center">
                                                        <CardContent className="aspect-square p-0 flex items-center justify-center w-full h-full">
                                                            <img src={`./images/123/${image}`} className="object-cover" alt=""/>
                                                        </CardContent>
                                                    </AspectRatio>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>

                            <div className="absolute bottom-2 w-full">
                                <div className="text-center">
                                    {renderPagination()}
                                </div>
                            </div>

                        </div>
                    )}
                </>
            ) : (
                <div className="bg-accent p-0">
                    <AspectRatio ratio={size === 'sm' ? 4 / 3 : 3 / 4}>
                        <div className="flex items-center justify-center w-full h-full">
                            <ImageOffIcon className="w-10 h-10 text-gray-500"/>
                        </div>
                    </AspectRatio>
                </div>
            )}
        </>
    )
}
