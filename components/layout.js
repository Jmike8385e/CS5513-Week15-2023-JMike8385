import Head from 'next/head';
import Link from 'next/link';

export default function Layout( { children, home } ) {
  return (
    <div>
      <Head>
        <title>Jeremy Week 15 App</title>
      </Head>
      <header>
        <nav>
          <a className="btn btn-primary mt-3" href="/orders/">Orders</a>
          <a className="btn btn-primary mt-3" href="/customers/">Customers</a>
          <a className="btn btn-primary mt-3" href="/products/">Products</a>
        </nav>
      </header>
      <main>
        {children}
      </main>
      {!home && (
          <Link href="/" className="btn btn-primary mt-3">← Back to home
          </Link>
        )
      }
    </div>
  );
}