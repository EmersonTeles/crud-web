import "../styles/globals.scss";
import "../styles/reset.scss";
import "../styles/container.scss";
import "../styles/costumerRegister.scss";

import "../styles/components/navbar.scss";
import "../styles/components/addClientButton.scss";
import "../styles/components/search.scss";
import "../styles/components/tableClients.scss";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
