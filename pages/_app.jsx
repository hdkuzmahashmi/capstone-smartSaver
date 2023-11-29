import { SWRConfig } from "swr";
import Layout from "./_layout";
import Head from "next/head";
import { useState } from "react";
import Toast from "@/components/Toast";
import { SessionProvider } from "next-auth/react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");

  const handleToast = (show, toastMessage, type) => {
    setShowToast(show);
    setToastMessage(toastMessage);
    setToastType(type);
  };

  return (
    <SessionProvider session={session}>
      <Layout>
        <Head>
          <title>SmartSaver</title>
        </Head>
        <SWRConfig value={{ fetcher }}>
          <Component {...pageProps} setToast={handleToast} />
        </SWRConfig>

        <Toast
          message={toastMessage}
          showToast={showToast}
          setShowToast={setShowToast}
          type={toastType}
        />
      </Layout>
    </SessionProvider>
  );
}
