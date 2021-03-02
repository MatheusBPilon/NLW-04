import Document, { Html, Head, Main, NextScript } from "next/document";
let test = true
export default class MyDocument extends Document {
  
  
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/png"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"></link>
        </Head>
        <body style={{background: test ? "#282a36" : "#f2f3f5" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
