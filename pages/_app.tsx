import "@/styles/globals.css";
import "@/styles/fonts/font.css";
import "@arco-design/web-react/dist/css/arco.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Common/Layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
