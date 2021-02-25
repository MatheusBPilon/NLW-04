import "../styles/global.css";
import { ChallengesProvider } from "../context/ChallengesContext";
import React from "react";

import { CountDownProvider } from "../context/CountdownContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <CountDownProvider>
        <Component {...pageProps} />
      </CountDownProvider>
    </ChallengesProvider>
  );
}

export default MyApp;
