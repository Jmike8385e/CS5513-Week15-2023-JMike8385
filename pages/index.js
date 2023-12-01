//import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedList } from '../lib/data';
import { getSortedOrderList } from '../lib/dataorders';
import { getSortedCustomerList } from '../lib/datacustomers';
import { getSortedProductList } from '../lib/dataproducts';

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
          {allOrderData.map(({ id, order_title}) => (
            <Link className="list-group-item list-group-item-action" key={id} href={`/orders/${id}`}>{order_title}
            </Link>
          ))}
        </div>
      <h1>List of Customers</h1>
        <div className="list-group">
          {allCustomerData.map(({ id, name}) => (
            <Link className="list-group-item list-group-item-action" key={id} href={`/customers/${id}`}>{name}
            </Link>
          ))}
        </div>
      <h1>List of Products</h1>
        <div className="list-group">
          {allProductData.map(({ id, name}) => (
            <Link className="list-group-item list-group-item-action" key={id} href={`/products/${id}`}>{name}
            </Link>
          ))}
        </div>
    </Layout>
  );
}