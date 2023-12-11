import Header from "@/components/layout/Header";
import "../styles/globals.css";
import Head from "next/head";
import Footer from "@/components/layout/Footer";
import Script from "next/script";
import { useEffect } from "react";
import { initGA, logPageView } from '../../lib/ga';

function App({ Component, pageProps }) {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload">
        {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
                });
            `}
      </Script>
      <Head>
        <title>Baller Beasts!</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {/* <Header /> */}
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  );
}

export default App;
