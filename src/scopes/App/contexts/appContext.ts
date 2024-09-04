import {createContext} from 'react'

export type TestContext = {
    user: {
        id: string
        createdAt: string
        userName: string
        age: number
    }
}

export const appContext = createContext<TestContext | null>(null)