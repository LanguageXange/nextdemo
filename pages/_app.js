import "../styles/globals.css";
import { ThemeProvider } from "theme-ui";
import Nav from "./components/nav";
import theme from "../theme";
// this is global css
// global css can't be imported outside _app.js
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
