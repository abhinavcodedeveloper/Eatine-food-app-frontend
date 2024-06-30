import { useAuth0 } from '@auth0/auth0-react';

const LogoutUser = () => {
    const { logout } = useAuth0();

  return (
    <button onClick={() => logout()}>
    Log Out
  </button>
  )
}

export default LogoutUser