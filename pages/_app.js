import "../styles/globals.scss";
import { UserContextProvider } from "../context/UserContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}

export default MyApp;
