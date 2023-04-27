import { useCallback } from "react";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const ParentComponent = useCallback(({ children }) => {
    return (
      <>
        <Head>
          <title>UVIC</title>
          <link rel="icon" href="/images/navbar_logo.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Layout>{children}</Layout>
      </>
    );
  }, []);

  return (
    <ParentComponent {...pageProps}>
      <Component {...pageProps} />
    </ParentComponent>
  );
}

export default MyApp;
