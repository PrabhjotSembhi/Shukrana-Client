import {useEffect} from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {

  const { loginWithRedirect ,logout } = useAuth0();

  useEffect(() => {

  })

  return (

    <div>Home
    <button onClick={() => loginWithRedirect()}>Log In</button>
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
    </div>
  )
}

export default Home