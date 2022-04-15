import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { RobinhoodProvider } from "../context/RobinhoodContext";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      // This should be in a .env file
      serverUrl="https://5tzys0fsli1o.usemoralis.com:2053/server"
      appId="8lpfhlhMsFTJytLZWkkzVExXZwPHcX8TGKBcy00K"
    >
      <RobinhoodProvider>
        <Component {...pageProps} />
      </RobinhoodProvider>
    </MoralisProvider>
  );
}

export default MyApp;
