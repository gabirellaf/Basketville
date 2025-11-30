import Head from 'next/head'
import Link from 'next/link'

export default function Cart() {

  async function checkout() {
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          product: "Egyptian Treasures",
          price: 129 // replace with your real price later
        })
      });

      const data = await res.json();
      if (data.url) {
        window.location = data.url; // redirect to Stripe Checkout
      } else {
        alert("Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      alert("Checkout failed.");
    }
  }

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
            <div className="cart-price ui-font">$129.00</div>
          </div>

          <div className="cart-summary ui-font">
            <div>Subtotal: $129.00</div>

            {/* STRIPE CHECKOUT BUTTON */}
            <button className="cta" onClick={checkout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </section>

      <footer className="footer"><p>© 2025 Basketville</p></footer>
    </>
  )
}

