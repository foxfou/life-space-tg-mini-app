import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from '@remix-run/react'
import './tailwind.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

export function Layout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <Meta/>
            <Links/>
            <script src="https://telegram.org/js/telegram-web-app.js"></script>
        </head>
        <body>
        {children}
        {/*<ScrollRestoration/>*/}
        <Scripts/>
        <ToastContainer />
        </body>
        </html>
    )
}

export default function App() {
    return <Outlet/>
}

export function HydrateFallback() {
    return <p>Загрузка...</p>
}
