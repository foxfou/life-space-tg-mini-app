import { Outlet } from "@remix-run/react"

import { SDKProvider} from '@telegram-apps/sdk-react'
import { ThemeProvider } from "@/components/complex/themeProvider"

export const App = () => {
    const theme = window.Telegram.WebApp.colorScheme

    return(
        <>
            <SDKProvider acceptCustomStyles debug>
                <ThemeProvider defaultTheme={theme} storageKey="vite-ui-theme">
                    <Outlet />
                </ThemeProvider>
            </SDKProvider>

        </>
    )
}
