import {  Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const Navigate = useNavigate()
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT;
  const redirectURL = import.meta.env.VITE_AUTH0_CALLBACKURL;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE
    // console.log(domain)
    // console.log(clientId)
    // console.log(redirectURL)
  if (!domain || !clientId || !redirectURL||!audience) {
    throw new Error("Error initialising the Auth");
  }

  const redirectCallback = ()=>{
    // user will show all the details of the logged in user at Auth0
    Navigate("/auth-call")
    
  }
  return (
    <div>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: redirectURL,
          audience:audience
        }}
        onRedirectCallback={redirectCallback}
      >{children}</Auth0Provider>
    </div>
  );
};

export default AuthProvider;
