import { Input } from '@/components/common/input'
import { Textarea } from '@/components/common/textarea'

export const OfferCreate = () => {

    return (
        <div className="px-4 py-2">
            <div className="mt-6">

                <div className="">
                    <h1 className="text-2xl font-semibold">
                        Создание нового объявления
                    </h1>

                    <div className="mt-2 text-sm text-muted-foreground">
                        Пожалуйста заполните все строки, они важны для наших пользователей
                    </div>
                </div>

                <div className="mt-10">

                    <div className="mb-1 text-sm font-medium">

                        Заголовок

                        {/*<span className="text-muted-foreground text-sm ml-2">Будет использован в шапке объявления</span>*/}

                    </div>

                    <Input placeholder="Например: Светлая квартира у моря "/>

                </div>

                <div className="mt-4">

                    <div className="mb-1 text-sm font-medium">
                        Описание
                    </div>

                    <Textarea placeholder="Разрешены эмодзи и специальные символы"/>

                </div>

                <div className="mt-4">

                    <div className="mb-1 text-sm font-medium">
                        Цена
                    </div>

                    <Input className="appearance-none" placeholder="Поддерживается только доллар" type="number"/>

                </div>

                <div className="mt-10">

                    <h3 className="text-lg font-semibold">
                        Адрес объекта
                    </h3>

                    <div className="">
                        <div className="mb-1 text-sm font-medium mt-2">
                            Город
                        </div>

                        <Input placeholder="" type="text"/>

                    </div>

                    <div className="mt-4">

                        <div className="mb-1 text-sm font-medium">
                            Улица
                        </div>

                        <Input placeholder="" type="text"/>

                    </div>

                    <div className="mt-4 flex gap-x-4 items-center">

                        <div className="flex-grow">
                            <div className="mb-1 text-sm font-medium">
                                Дом
                            </div>

                            <Input placeholder="" type="text"/>
                        </div>

                        <div className="flex-grow">
                            <div className="mb-1 text-sm font-medium">
                                Строение
                            </div>

                            <Input placeholder="" type="text"/>
                        </div>


                    </div>


                </div>

            </div>
        </div>
    )
}