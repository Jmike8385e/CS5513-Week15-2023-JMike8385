import Head from 'next/head';
import Link from 'next/link';

export default function Layout( { children, home } ) {
  return (
    <div>
      <Head>
        <title>Jeremy Next.js App</title>
      </Head>
      <header>
        <nav>
          <a href="https://www.nfl.com">Visit NFL.com</a>
        </nav>
      </header>
      <main>
        {children}
      </main>
      {!home && (
          <Link href="/" className="btn btn-primary mt-3">
            ← Back to homepage
          </Link>
        )
      }
      <footer>
        <p>Please do not sue me NFL</p>
      </footer>
    </div>
  );
}