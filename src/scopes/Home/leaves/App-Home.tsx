import {NavLink} from 'react-router-dom'
import {Button} from '@/components/common/button'


export const Home = () => {
    return (
        // <>
        //
        //     <div className="text-2xl">Hi Home page</div>
        //
        //     <Button asChild>
        //         <NavLink to="/search" className="block">Go to Search</NavLink>
        //     </Button>
        //
        //     <NavLink to="/user" className="block">Go to User</NavLink>
        //
        // </>

        <div className="flex flex-col w-full min-h-screen items-end">

            <div className="px-6 py-6">
                <img src="/home_page_img.svg" alt="Startscreen image"></img>
            </div>

            <header className="px-4 pb-6 text-center">
                <div className="container mx-auto">

                    <h1 className="text-3xl font-bold">LifeSpace - Твое место в Батуми</h1>

                    <p className="text-lg text-muted-foreground mt-4">
                        Удобный поиск жилья для долгосрочной аренды и краткосрочных визитов
                    </p>

                </div>
            </header>

            <main className="container flex my-6">
                <Button className="mx-auto" size="lg">
                    <NavLink to="/search">
                        Найти жилье
                    </NavLink>
                </Button>
            </main>

        </div>
    )
}