import  { useEffect, useRef } from 'react'
import { useCreateUser } from '../api/MyUserApi'
import { useAuth0 } from '@auth0/auth0-react'
import {  useNavigate } from 'react-router-dom'

//this page will run the use effect for once, render it and if user exist in auth , it will push in the database
//and if any lower comp will change it will rerender it 
const Authcallbackpage = () => {
    const {createUser} = useCreateUser()
    const hasrenderedonce = useRef(false)
    const Navigate = useNavigate()
    const {user} = useAuth0();
    useEffect(() => {
        if(user?.sub && user?.email && hasrenderedonce.current == false){
            // if there is auth id of user and email of him, then we can store the user into our database
            createUser({auth0Id:user.sub,email:user.email})
            hasrenderedonce.current = true
        }
        Navigate("/")
    }, [createUser,user,Navigate]);
  return (
    <div>
       .... LOADING
    </div>
  )
}

export default Authcallbackpage