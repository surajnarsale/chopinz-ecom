import Head from 'next/head';
import { useQuery } from 'urql';
import { fetchProducts } from '@/lib/queries';
import { ProductsGrid } from '@/components/organisms/products-grid';
import { Product } from '@/types/types';

export default function Home() {
  const [results] = useQuery({ query: fetchProducts });
  const { data, fetching, error } = results;

  if (fetching) return <p>loading...</p>;
  if (error) return <p>error</p>;
  const products = data.products.data;
  console.log('products', products);

  return (
    <div>
      <Head>
        <title>Chopinz</title>
        <meta name="description" content="ecom site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-blue-200">
        <ProductsGrid products={products} />
      </main>
    </div>
  );
}
