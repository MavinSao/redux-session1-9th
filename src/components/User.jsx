import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { fetchUser } from '../redux/actions/userAction'
const User = () => {

    const users = useSelector(state => state.userReducer.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUser())
    }, [])
    
    return (
        <ul>
            {users.map(user=><li key={user.id}>{user.name}</li>)}
        </ul>
    )
}

export default User
