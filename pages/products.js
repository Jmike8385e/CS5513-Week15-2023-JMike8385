import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedProductList } from '../lib/data-products';

// define a getStaticProps() function - this name is defined by next.js
export async function getStaticProps() {
  const allProductData = await getSortedProductList();
  return {
    props: { 
      allProductData
     },
     revalidate: 60
  };
}

// export our home page component Home
export default function Home( { allProductData } ) {
  return (
    <Layout home>
      <h1>List of Products</h1>
        <div className="list-group">
          {allProductData.map(({ id, name }) => (
            <Link key={id} href={`/products/${id}`} className="list-group-item list-group-item-action">{name}
            </Link>
          ))}
        </div>
        <Link href="/" className="btn btn-primary mt-3">← Back to home
        </Link>
    </Layout>
  );
}