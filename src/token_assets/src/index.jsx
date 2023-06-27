import ReactDOM from 'react-dom/client';
import React from 'react'
import App from "./components/App";
import { AuthClient } from '@dfinity/auth-client';


const init = async () => { 
  // ReactDOM.render(<App />, document.getElementById("root"));

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);


const authClient = await AuthClient.create();

if(authClient.isAuthenticated()){
  handeleAuthenticated(authClient);
}else{
  await authClient.login({
    identityProvider : "https://identity.ic0.app/#authorize",
    onSuccess : () => {
      handeleAuthenticated(authClient); 
    }
  });
}
}

async  function handeleAuthenticated(authClient){
  //  bellow commented lines should be uncommented if the app is deployed to IC
  // const identity = await authClient.getIdentity();
  // const userPrincipal = identity._principal.toString();
  // console.log(userPrincipal);
//  pass this loggedinPrincial={userPrincipal} prop: to the app component
  await ReactDOM.createRoot(document.getElementById('root')).render(<App  />)
}

init();


