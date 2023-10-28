import AppChakraProvider from "@/providers/AppChakraProvider";
import AppQueryClientProvider from "@/providers/AppQueryClientProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
 return (
  <AppQueryClientProvider>
   <AppChakraProvider>
    <Component {...pageProps} />
   </AppChakraProvider>
  </AppQueryClientProvider>
 );
}
