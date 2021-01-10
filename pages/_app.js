import "../styles/globals.css";
// this is global css
// global css can't be imported outside _app.js
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
