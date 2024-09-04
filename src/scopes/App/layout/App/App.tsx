import { Outlet } from "@remix-run/react"

export const App = () => {

    return(
        <>

            <div className="w-full h-20 bg-amber-400 text-white text-center pt-4">
                HEADER
            </div>

            <Outlet/>
        </>
    )
}
