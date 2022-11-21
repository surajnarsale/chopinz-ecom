import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { Provider } from 'urql';
import { client } from '@/lib/graphql';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}
