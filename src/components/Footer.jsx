import { BrandMarkFooter } from './icons'

export default function Footer() {
  return (
    <footer data-scene="4">
      <div className="wrap">
        <div className="fgrid">
          <div className="fcol">
            <a className="brand" href="#top" style={{ marginBottom: 16 }}>
              <span className="mark">
                <BrandMarkFooter />
              </span>
              <span className="txt">
                <span className="n1">Purelane</span>
                <span className="n2">Clean, simply</span>
              </span>
            </a>
            <p style={{ maxWidth: '30ch' }}>
              Effective cleaning, powered by nature. Made for Indian homes since day one.
            </p>
          </div>
          <div className="fcol">
            <h5>Shop</h5>
            <a href="#shop">Bestsellers</a>
            <a href="#shop">Kitchen</a>
            <a href="#shop">Laundry</a>
            <a href="#shop">Home</a>
            <a href="#shop">Skin</a>
            <a href="#bundles">Starter kits</a>
          </div>
          <div className="fcol">
            <h5>About</h5>
            <a href="#how">How it works</a>
            <a href="#ingredients">Sustainability</a>
            <a href="#proof">FAQs</a>
            <a href="#reviews">Reviews</a>
          </div>
          <div className="fcol">
            <h5>Get in touch</h5>
            <a href="mailto:hello@purelane.com">hello@purelane.com</a>
            <a href="tel:+919930123234">+91 9930 123 234</a>
            <p style={{ fontSize: 12, color: 'rgba(236,230,247,.5)' }}>Purelane Eco Products Pvt Ltd</p>
          </div>
        </div>
        <div className="fbot">
          <span>© 2026 Purelane Eco Products Private Limited</span>
          <span>Privacy · Terms · Refunds · Contact</span>
        </div>
      </div>
    </footer>
  )
}
