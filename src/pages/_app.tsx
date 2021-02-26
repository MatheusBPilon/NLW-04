import "../styles/global.css";
import React from "react";

import { CountDownProvider } from "../context/CountdownContext";

function MyApp({ Component, pageProps }) {
  return (
  
      <CountDownProvider>
        <Component {...pageProps} />
      </CountDownProvider>
    
  );
}

export default MyApp;
