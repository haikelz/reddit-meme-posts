import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const newClient: QueryClient = new QueryClient();

  return (
    <QueryClientProvider client={newClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default MyApp;
