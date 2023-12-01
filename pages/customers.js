import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedCustomerList } from '../lib/data-customers';

// define a getStaticProps() function - this name is defined by next.js
export async function getStaticProps() {
  const allCustomerData = await getSortedCustomerList();
  return {
    props: { 
      allCustomerData
     },
     revalidate: 60
  };
}

// export our home page component Home
export default function Home( { allCustomerData } ) {
  return (
    <Layout home>
      <h1>List of Customers</h1>
        <div className="list-group">
          {allCustomerData.map(({ id, name }) => (
            <Link key={id} href={`/customers/${id}`} className="list-group-item list-group-item-action">{name}
            </Link>
          ))}
        </div>
        <Link href="/" className="btn btn-primary mt-3">← Back to home
        </Link>
    </Layout>
  );
}