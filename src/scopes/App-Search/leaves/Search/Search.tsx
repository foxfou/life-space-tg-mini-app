import { Outlet } from '@remix-run/react'
import { Button } from '@/components/common/button'
import { useNavigate } from 'react-router'

export const Search = () => {

    const navigate = useNavigate()
    return (
        <div>

            <div className="px-4 py-2 mt-[54px]">
                <div className="text-xl font-bold ">Воспользуйтесь фильтром</div>
                    <div className="flex gap-4 mt-4">

                        <button className="bg-accent text-accent-foreground w-full h-full px-4 py-10 rounded active:bg-accent/80">Посуточно</button>

                        <button className="bg-accent text-accent-foreground w-full h-full px-4 py-10 rounded active:bg-accent/80">Надолго</button>

                    </div>
            </div>

            <div className="px-4 py-2 mt-[54px]">

                <Button size="lg" className="mb-6" onClick={()=>navigate('/offer-create')}>Создать объявление</Button>

                <div className="text-2xl font-bold mb-8">Новые предложения</div>

                <Outlet />

            </div>

        </div>
    )
}
