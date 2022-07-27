import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import Layout from "../components/layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const newClient: QueryClient = new QueryClient();

  return (
    <QueryClientProvider client={newClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
};

export default MyApp;
