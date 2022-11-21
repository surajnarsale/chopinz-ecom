import Head from 'next/head';
import { useQuery } from 'urql';

export default function Home() {
  // const [result] = useFetchProductList({query:''})
  return (
    <div>
      <Head>
        <title>Chopinz</title>
        <meta name="description" content="ecom site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-blue-200">HomePage</main>
    </div>
  );
}
