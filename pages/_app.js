import "@/styles/globals.css";
import { ProviderContext } from "../hooks/UseContext";


export default function App({ Component, pageProps }) {
    return (
        <>
            <ProviderContext><Component {...pageProps} /></ProviderContext>
        </>
    )
}
