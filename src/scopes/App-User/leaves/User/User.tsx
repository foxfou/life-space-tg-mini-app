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
                    Eniter Web App data:
                    <pre>{JSON.stringify(webApp, null, 2)}</pre>
                </div>
            ) : (
                <div>Make sure web app is opened from telegram client</div>
            )}
        </div>
    )
}