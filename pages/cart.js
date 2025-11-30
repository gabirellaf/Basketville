import Head from 'next/head'
import Link from 'next/link'
import '../styles/base.css'
import '../styles/layout.css'
import '../styles/components.css'

export default function Cart() {
  return (
    <>
      <Head><title>Cart • Basketville</title></Head>
      <header className="navbar">
        <nav className="nav">
          <ul className="nav-left">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
          </ul>
          <Link className="logo" href="/">Basketville</Link>
          <ul className="nav-right">
            <li><Link href="/custom">Custom</Link></li>
          </ul>
        </nav>
      </header>

      <section className="cart">
        <h1>Your Cart</h1>
        <div className="cart-list">
          <div className="cart-item">
            <div className="thumb"></div>
            <div className="cart-info ui-font">
              <div className="cart-name">Egyptian Treasures</div>
              <div>Qty: 1</div>
            </div>
            <div className="cart-price ui-font">$XX.XX</div>
          </div>
          <div className="cart-summary ui-font">
            <div>Subtotal: $XX.XX</div>
            <button className="cta">Proceed to Checkout</button>
          </div>
        </div>
      </section>

      <footer className="footer"><p>© 2025 Basketville</p></footer>
    </>
  )
}

