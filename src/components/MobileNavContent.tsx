import { Button } from './ui/button'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const MobileNavContent = () => {
    const {user,logout} = useAuth0();
  return (
    <div className='flex flex-col gap-6 r'>
         <div className="flex gap-2 items-center clash px-2 py-3">
          <img src="./icons/Tick.png" height={20} width={20}></img>
          <p>{user?.name}</p>
        </div>
        <div className='flex gap-2 items-center'>
        <img src="./icons/profileicon.png" height={35} width={35}></img>
        <Link to="/profile" className='clash text-orange-600'> User Profile</Link>
        </div>
        <Button onClick={()=> logout()} className='bg-red-600 text-white rounded-md px-4 py-2 text-center'>Logout</Button>
    </div>
  )
}

export default MobileNavContent