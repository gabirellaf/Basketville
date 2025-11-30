import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

export default function ProductPage() {
  const { slug } = useRouter().query

  return (
    <>
      <Head>
        <title>{slug ? `${slug.replace(/-/g, ' ')} • Basketville` : 'Basketville'}</title>
      </Head>

      <header className="navbar">
        <nav className="nav" id="navbar">
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

      {/* PRODUCT DETAIL */}
      <section className="product-page">
        <div className="p-left"></div>
        <div className="p-right">
          <h1>{slug ? slug.replace(/-/g, ' ') : 'Loading...'}</h1>
          <div className="price ui-font">$XX.XX</div>
          <p className="ui-font">
            A beautifully curated basket featuring select items that embody warmth, charm, and elegance.
          </p>
          <button className="cta ui-font" onClick={() => alert('Added to cart!')}>
            Add to Cart
          </button>
        </div>
      </section>

      {/* RECOMMENDED */}
      <section className="recommend">
        <h2>You May Also Like</h2>
        <div className="rec-scroll">
          <Link className="rec-card" href="/products/egyptian-treasures"><div className="rec-thumb"></div><div className="rec-name ui-font">Egyptian Treasures</div></Link>
          <Link className="rec-card" href="/products/taste-of-japan"><div className="rec-thumb"></div><div className="rec-name ui-font">Taste of Japan</div></Link>
          <Link className="rec-card" href="/products/parisian-indulgence"><div className="rec-thumb"></div><div className="rec-name ui-font">Parisian Indulgence</div></Link>
        </div>
      </section>

      <footer className="footer"><p>© 2025 Basketville</p></footer>
    </>
  )
}

