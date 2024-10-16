import {useLoaderData} from '@remix-run/react'
import {Offers} from '@/scopes/App-Offers/leaves/Offers/Offers'
import { type clientLoader } from '@/scopes/App-Search/leaves/Search/Search.loader'

export const Search = () => {
    const data = useLoaderData<typeof clientLoader>()

    return (
        <div>
            <div className="px-4 py-2 mt-[54px]">
                <div className="text-xl font-bold ">Воспользуйтесь фильтром</div>
                <div className="">
                    <div className="flex gap-4 mt-4">
                        <button className="bg-accent text-accent-foreground w-full h-full px-4 py-10 rounded active:bg-accent/80">Посуточно</button>
                        <button className="bg-accent text-accent-foreground w-full h-full px-4 py-10 rounded active:bg-accent/80">Надолго</button>
                    </div>
                </div>
            </div>

            <div className="px-4 py-2 mt-[54px]">

                <div className="text-2xl font-bold mb-8">Новые предложения</div>

                {data.map((item) => (
                    <Offers key={item.id} item={item} />
                ))}

            </div>
        </div>
    )
}
