import { AppContext } from "../../Provider/AppProvider"
import { useCallback, useContext } from "react"
import { useEffect } from 'react';

const User = () => {
    const { user, setUser} = useContext(AppContext);
    
    
    const fetchUser = useCallback(
        async () => {
            const fetching = await fetch('https://dummyjson.com/users/1')
            const response = await fetching.json()
            setUser?.(response)
        },
        [setUser]
    )

    useEffect(
        () => {
            fetchUser()
        },
        [fetchUser]
    )

    return (
        <div>
            <p>First Name: {user?.firstName} </p>
            <p>Last Name: {user?.lastName}</p>
            <p>Email: {user?.email}</p>
        </div>
    )
}

export default User