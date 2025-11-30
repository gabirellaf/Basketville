import Head from 'next/head'
import Link from 'next/link'

export default function Custom() {
  return (
    <>
      <Head><title>Custom • Basketville</title></Head>
      <header className="navbar">
        <nav className="nav">
          <ul className="nav-left">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
          </ul>
          <Link className="logo" href="/">Basketville</Link>
          <ul className="nav-right">
            <li><Link href="/cart">Cart</Link></li>
          </ul>
        </nav>
      </header>

      <section className="custom-page">
        <div className="custom-left"></div>
        <div className="custom-right">
          <h1>Design Your Basket</h1>
          <p className="ui-font">
            Create the perfect gift—choose a base, fill it with your favorites, and we’ll handle the finishing touches.
          </p>
          <button className="cta ui-font">Start Building</button>
        </div>
      </section>

      <footer className="footer"><p>© 2025 Basketville</p></footer>
    </>
  )
}

