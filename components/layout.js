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
          <Link className="btn btn-primary mt-3" href="/orders/">Orders</Link>
          <Link className="btn btn-primary mt-3" href="/customers/">Customers</Link>
          <Link className="btn btn-primary mt-3" href="/products/">Products</Link>
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