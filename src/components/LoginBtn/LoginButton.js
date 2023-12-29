import React, { useEffect } from "react";
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import './LoginBtn.css'

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, user, getAccessTokenSilently  } = useAuth0();

  const storeUserToDatabase = async () => {
    if (isAuthenticated && user) {
      try {
        const accessToken = await getAccessTokenSilently();

        const response = await axios.post('http://localhost:4000/api/store-user', {
          userId: user.sub,
          email: user.email,
          // Other user data to be stored...
        }, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        });

        console.log('User data stored successfully:', response.data);
      } catch (error) {
        console.error('Error storing user data:', error);
      }
    }
  };

  useEffect(() => {
    // Automatically store user data once authenticated
    storeUserToDatabase();
  }, [isAuthenticated]); // Trigger when isAuthenticated changes

  return (
    <div>
      <button className="GoogleBtn"  onClick={() => loginWithRedirect()}>Sign In With Google</button>
    </div>
  );
};

export default LoginButton;
