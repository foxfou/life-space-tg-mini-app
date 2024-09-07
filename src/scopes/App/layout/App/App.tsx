import { Outlet } from "@remix-run/react"
import {TelegramProvider} from '@/scopes/App/contexts/appContext'

export const App = () => {

    return(
        <>
            <TelegramProvider>
                <Outlet />
            </TelegramProvider>
        </>
    )
}
