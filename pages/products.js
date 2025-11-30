import Head from 'next/head'
import Link from 'next/link'

export default function Products() {
  return (
    <>
      <Head>
        <title>Products • Basketville</title>
      </Head>

      {/* NAVBAR */}
      <header className="navbar">
        <nav className="nav" id="navbar">
          <ul className="nav-left">
            <li><Link href="/">Home</Link></li>
            <li><a href="#trending">Trending</a></li>
          </ul>
          <Link className="logo" href="/">Basketville</Link>
          <ul className="nav-right">
            <li><Link href="/custom">Custom</Link></li>
            <li><Link href="/cart">Cart</Link></li>
          </ul>
        </nav>
      </header>

      {/* HEADER BANNER */}
      <section className="products-banner">
        <div className="products-banner__content">
          <h1>Our Collections</h1>
          <p className="ui-font">
            Discover every kind of basket — for moments, moods, and memories.
          </p>
        </div>
      </section>

      {/* CATEGORY STRIP */}
      <section className="category-strip">
        <button className="chip active">Trending</button>
        <button className="chip">Collections</button>
        <button className="chip">Self Care</button>
        <button className="chip">Food</button>
        <button className="chip">Games</button>
        <button className="chip">Beauty</button>
        <button className="chip">Luxury</button>
        <button className="chip">Misc.</button>
        <button className="chip">Events</button>
      </section>

      {/* PRODUCT GRID */}
      <main className="product-grid">
        <Link href="/products/egyptian-treasures" className="product-card styled">
          <div className="product-thumb"></div>
          <div className="product-meta">
            <span className="name ui-font">Egyptian Treasures</span>
            <span className="price ui-font">$XX.XX</span>
          </div>
        </Link>

        <Link href="/products/taste-of-japan" className="product-card styled">
          <div className="product-thumb"></div>
          <div className="product-meta">
            <span className="name ui-font">Taste of Japan</span>
            <span className="price ui-font">$XX.XX</span>
          </div>
        </Link>

        <Link href="/products/parisian-indulgence" className="product-card styled">
          <div className="product-thumb"></div>
          <div className="product-meta">
            <span className="name ui-font">Parisian Indulgence</span>
            <span className="price ui-font">$XX.XX</span>
          </div>
        </Link>

        <Link href="/products/winter-warmth" className="product-card styled">
          <div className="product-thumb"></div>
          <div className="product-meta">
            <span className="name ui-font">Winter Warmth</span>
            <span className="price ui-font">$XX.XX</span>
          </div>
        </Link>

        <Link href="/products/cozy-cocoa" className="product-card styled">
          <div className="product-thumb"></div>
          <div className="product-meta">
            <span className="name ui-font">Cozy Cocoa</span>
            <span className="price ui-font">$XX.XX</span>
          </div>
        </Link>

        <Link href="/products/silver-bells" className="product-card styled">
          <div className="product-thumb"></div>
          <div className="product-meta">
            <span className="name ui-font">Silver Bells</span>
            <span className="price ui-font">$XX.XX</span>
          </div>
        </Link>

        <Link href="/products/holiday-deluxe" className="product-card styled">
          <div className="product-thumb"></div>
          <div className="product-meta">
            <span className="name ui-font">Holiday Deluxe</span>
            <span className="price ui-font">$XX.XX</span>
          </div>
        </Link>

        <Link href="/products/mediterranean-sunset" className="product-card styled">
          <div className="product-thumb"></div>
          <div className="product-meta">
            <span className="name ui-font">Mediterranean Sunset</span>
            <span className="price ui-font">$XX.XX</span>
          </div>
        </Link>

        <Link href="/products/alpine-retreat" className="product-card styled">
          <div className="product-thumb"></div>
          <div className="product-meta">
            <span className="name ui-font">Alpine Retreat</span>
            <span className="price ui-font">$XX.XX</span>
          </div>
        </Link>
      </main>

      {/* SORT BAR */}
      <section className="sortbar">
        <select className="ui-font">
          <option>Sort by: Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest</option>
        </select>
      </section>

      {/* FOOTER */}
      <footer className="footer"><p>© 2025 Basketville</p></footer>
    </>
  )
}

