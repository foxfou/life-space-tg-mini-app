import {useTelegram} from '@/scopes/App/contexts/appContext'

export type UserData = {
  id: number
  first_name: string
  last_name?: string
  username?: string
  language_code: string
  is_premium?: boolean
}

export const User = () => {
    const { user, webApp } = useTelegram()
    return (
        <div>
            {user ? (
                <div>
                    <h1>Welcome {user?.username}</h1>
                    User data:
                    <pre>{JSON.stringify(user, null, 2)}</pre>
                    App data:
                    <pre>{JSON.stringify(webApp, null, 2)}</pre>
                </div>
            ) : (
                <div className="container px-4 py-2 flex flex-col gap-y-2">

                    Данное приложение открывается только через Telegram Mini App

                    <a href="https://t.me/lifespacerentbot" className="text-blue-700">https://t.me/lifespacerentbot</a>

                </div>
            )}
        </div>
    )
}