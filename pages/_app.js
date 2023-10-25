import { SWRConfig } from "swr";
import Layout from "./_layout";
import Head from "next/head";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>SmartSaver</title>
      </Head>
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </Layout>
  );
}
