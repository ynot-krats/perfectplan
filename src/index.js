import React ,{lazy,Suspense} from 'react';
import './index.css';
import App from './App';
import ReactDOM from "react-dom";

import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from "@auth0/auth0-react";



ReactDOM.render(
     <Auth0Provider
    domain="dev-ij079sjw.us.auth0.com"
    clientId="lNvygqlz1YAwy2mtMup0IzEmzIC5gdZW"
    redirectUri={window.location.origin}
  >
     <App/>
     </Auth0Provider>
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
