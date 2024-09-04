import {NavLink} from 'react-router-dom'


export const Home = () => {
    return (
        <>

            <div className="text-2xl">Hi Home page</div>

            <NavLink to="/search" className="block">Go to Search</NavLink>

            <NavLink to="/user" className="block">Go to User</NavLink>

        </>
    )
}