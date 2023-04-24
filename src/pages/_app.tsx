import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@nextui-org/react';
import '@fortawesome/fontawesome-svg-core/styles.css'; //importing font awesome css
import { config } from '@fortawesome/fontawesome-svg-core';
import Header from "../components/Header";
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return(
  <>
  <Header/>
  <Component {...pageProps} />
  </>
  )
}
