import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedList } from '../lib/data';
import { getSortedOrderList } from '../lib/data-orders';
import { getSortedCustomerList } from '../lib/data-customers';
import { getSortedProductList } from '../lib/data-products';

// define a getStaticProps() function - this name is defined by next.js
export async function getStaticProps() {
  const allData = await getSortedList();
  const allOrderData = await getSortedOrderList();
  const allCustomerData = await getSortedCustomerList();
  const allProductData = await getSortedProductList();
  return {
    props: { 
      allData,
      allOrderData,
      allCustomerData,
      allProductData
     },
     revalidate: 60
  };
}

// export our home page component Home
export default function Home( { allData, allOrderData, allCustomerData, allProductData } ) {
  return (
    <Layout home>
      <h1>List of Orders</h1>
        <div className="list-group">
          {allOrderData.map(({ id, order_title }) => (
            <Link legacyBehavior key={id} href={`/orders/${id}`}>
              <a className="list-group-item list-group-item-action">{order_title}</a>
            </Link>
          ))}
        </div>
      <h1>List of Customers</h1>
        <div className="list-group">
          {allCustomerData.map(({ id, name}) => (
            <Link legacyBehavior key={id} href={`/customers/${id}`}>
              <a className="list-group-item list-group-item-action">{name}</a>
            </Link>
          ))}
        </div>
      <h1>List of Products</h1>
        <div className="list-group">
          {allProductData.map(({ id, name}) => (
            <Link legacyBehavior key={id} href={`/products/${id}`}>
              <a className="list-group-item list-group-item-action">{name}</a>
            </Link>
          ))}
        </div>
    </Layout>
  );
}