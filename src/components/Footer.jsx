import { Link } from 'react-router-dom';
import { FaPhone, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="/logo.svg" alt="SMR Constructions" className="footer__logo-icon" />
              <div className="footer__logo-text-wrapper">
                <span className="footer__logo-text">SMR</span>
                <span className="footer__logo-sub">Constructions</span>
              </div>
            </div>
            <p className="footer__tagline">
              Premium Living Made Affordable. Building trust and delivering excellence across Tamil Nadu since day one.
            </p>
            <div className="footer__social">
              <a href="https://www.instagram.com/smr_constructions_" target="_blank" rel="noreferrer" aria-label="Instagram" id="footer-instagram">
                <FaInstagram />
              </a>
              <a href="https://wa.me/919791462100" target="_blank" rel="noreferrer" aria-label="WhatsApp" id="footer-whatsapp">
                <FaWhatsapp />
              </a>
              <a href="tel:+919791462100" aria-label="Phone" id="footer-phone">
                <FaPhone />
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Our Services</h4>
            <ul>
              <li><Link to="/services">Construction</Link></li>
              <li><Link to="/services">Renovation</Link></li>
              <li><Link to="/services">Architecture & Design</Link></li>
              <li><Link to="/services">Interior Solutions</Link></li>
              <li><Link to="/services">Project Management</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Contact Info</h4>
            <ul className="footer__contact-list">
              <li>
                <FaPhone className="footer__icon" />
                <a href="tel:+919791462100">+91 97914 62100</a>
              </li>
              <li>
                <FaWhatsapp className="footer__icon" />
                <a href="https://wa.me/919791462100" target="_blank" rel="noreferrer">WhatsApp Us</a>
              </li>
              <li>
                <FaMapMarkerAlt className="footer__icon" />
                <span>Tiruppur, Tamil Nadu, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} SMR Constructions. All Rights Reserved.</p>
          <button className="footer__scroll-top" onClick={scrollToTop} aria-label="Scroll to top" id="scroll-top-btn">
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
