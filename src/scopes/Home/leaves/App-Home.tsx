import { NavLink } from 'react-router-dom'
import { Button } from '@/components/common/button'

export const Home = () => {

    return (
        <div className="flex flex-col md:flex-row w-full min-h-screen">

            <div className="px-6 py-6">
                <img src="./images/home_page_img.svg" alt="Startscreen image"></img>
            </div>

            <header className="px-4 pb-6 text-center">
                <div className="container mx-auto">

                    <h1 className="text-3xl font-bold">LifeSpace - Твое место в Батуми</h1>

                    <p className="text-lg text-muted-foreground mt-4">
                        Удобный поиск жилья для долгосрочной аренды и краткосрочных визитов
                    </p>

                </div>
            </header>

            <main className="flex justify-center mx-auto">
                <Button className="" size="lg">
                    <NavLink to="/offers">
                        Найти жилье
                    </NavLink>
                </Button>

            </main>

        </div>
    )
}