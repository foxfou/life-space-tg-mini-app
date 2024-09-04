import {useLoaderData} from 'react-router'

export const Search = () => {
    const data = useLoaderData()

    return(
        <div>My users is: {JSON.stringify(data)}</div>
    )
}
