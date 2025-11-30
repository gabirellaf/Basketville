import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Smooth slideshow
    let index = 0
    const slides = document.getElementsByClassName('slides')
    const dots = document.getElementsByClassName('dot')

    function showSlides() {
      for (let i = 0; i < slides.length; i++) slides[i].classList.remove('active')
      index = (index + 1) % slides.length
      slides[index].classList.add('active')
      for (let i = 0; i < dots.length; i++) dots[i].classList.remove('active')
      dots[index].classList.add('active')
      setTimeout(showSlides, 4000)
    }
    if (slides.length > 0) showSlides()

    // Fade-in scroll animations
    const fades = document.querySelectorAll('.home-fade')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.2 })
    fades.forEach((section) => observer.observe(section))
  }, [])

  return (
    <>
      <Head>
        <title>Basketville</title>
      </Head>

      {/* NAV */}
      <header className="navbar">
        <nav className="nav" id="navbar">
          <ul className="nav-left">
            <li><Link href="/">Home</Link></li>
            <li><a href="#trending">Trending</a></li>
          </ul>
          <Link className="logo" href="/">Basketville</Link>
          <ul className="nav-right">
            <li><Link href="/custom">Custom</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/cart">Cart</Link></li>
          </ul>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero reveal home-fade" id="hero">
        <div className="slides active fade"><div className="slide-img">Slide 1 Placeholder</div></div>
        <div className="slides fade"><div className="slide-img">Slide 2 Placeholder</div></div>
        <div className="slides fade"><div className="slide-img">Slide 3 Placeholder</div></div>
        <div className="slides fade"><div className="slide-img">Slide 4 Placeholder</div></div>
        <button className="cta cta-hero">Shop All</button>
        <div className="dots">
          <span className="dot active"></span><span className="dot"></span>
          <span className="dot"></span><span className="dot"></span>
        </div>
      </section>

      {/* TRENDING */}
      <section className="section-full reveal home-fade" id="trending">
        <h2>Trending</h2>
        <div className="trending-grid">
          <div className="card-xl"><div className="product-image"></div><div className="product-label"><span>Basket 1</span><span>$XX.XX</span></div></div>
          <div className="card-xl"><div className="product-image"></div><div className="product-label"><span>Basket 2</span><span>$XX.XX</span></div></div>
          <div className="card-xl"><div className="product-image"></div><div className="product-label"><span>Basket 3</span><span>$XX.XX</span></div></div>
        </div>
        <button className="cta cta-center ui-font" onClick={() => location.href='/products'}>
          Shop Trends Now
        </button>
      </section>

      {/* SEASONAL */}
      <section className="section-full reveal home-fade" id="seasonal">
        {/* Holiday Banner */}
        <div className="holiday-banner">
          <div className="holiday-text">
            <h3>Happy Holidays from Basketville!</h3>
            <p>Celebrate with 15% off any holiday basket.</p>
          </div>
        </div>

        <h2>Seasonal Favorites</h2>

        {/* Product Grid */}
        <div className="holiday-grid">
          <div className="card-square color-a">
            <div className="product-image"></div>
            <div className="product-label"><span>Winter Warmth</span><span>$XX.XX</span></div>
          </div>
          <div className="card-square color-b">
            <div className="product-image"></div>
            <div className="product-label"><span>Cozy Cocoa</span><span>$XX.XX</span></div>
          </div>
          <div className="card-square color-c">
            <div className="product-image"></div>
            <div className="product-label"><span>Silver Bells</span><span>$XX.XX</span></div>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="collections reveal home-fade" id="collections">
        <h2>Our Hottest Collections</h2>
        <div className="collections-strip">
          <div className="col-rect c1"></div><div className="col-rect c2"></div>
          <div className="col-rect c3"></div><div className="col-rect c4"></div>
          <div className="col-rect c5"></div>
        </div>
      </section>

      {/* CUSTOM */}
      <section className="custom reveal home-fade" id="custom">
        <div className="custom-overlay">
          <h2>Make Your Own</h2>
          <button className="cta" onClick={() => location.href='/custom'}>Build Your Custom Basket Now</button>
        </div>
      </section>

      {/* SHIPPING */}
      <section className="shipping-banner reveal home-fade">
        <p>🚚 Free shipping on orders over $300 with code SHIP300!</p>
      </section>

      {/* PARTNERS */}
      <section className="section-full reveal home-fade" id="partners">
        <h2>In Partnership With</h2>
        <div className="partner-grid stretch">
          <div className="partner"></div><div className="partner"></div>
          <div className="partner"></div><div className="partner"></div>
        </div>
      </section>

      <footer className="footer"><p>© 2025 Basketville</p></footer>
    </>
  )
}

