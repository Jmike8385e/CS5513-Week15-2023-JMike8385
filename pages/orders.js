//import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedOrderList } from '../lib/data-orders';

// define a getStaticProps() function - this name is defined by next.js
export async function getStaticProps() {
  const allOrderData = await getSortedOrderList();
  return {
    props: { 
      allOrderData
     },
     revalidate: 60
  };
}

// export our home page component Home
export default function Home( { allOrderData } ) {
  return (
    <Layout home>
      <h1>List of Orders</h1>
        <div className="list-group">
          {allOrderData.map(({ id, order_title }) => (
            <Link key={id} href={`/orders/${id}`} className="list-group-item list-group-item-action">{order_title}
            </Link>
          ))}
        </div>
        <Link href="/" className="btn btn-primary mt-3">← Back to home
        </Link>
    </Layout>
  );
}