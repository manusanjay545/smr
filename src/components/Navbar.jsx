import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaPhone } from 'react-icons/fa';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--open' : ''}`} id="main-nav">
      <div className="navbar__container container">
        <Link to="/" className="navbar__logo" id="nav-logo">
          <img src="/logo.svg" alt="SMR Constructions" className="navbar__logo-icon" />
          <div className="navbar__logo-text-wrapper">
            <span className="navbar__logo-text">SMR</span>
            <span className="navbar__logo-sub">Constructions</span>
          </div>
        </Link>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--active' : ''}`} id="nav-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="navbar__cta-mobile">
            <a href="tel:+919791462100" className="btn btn-primary">
              <FaPhone /> Call Us
            </a>
          </li>
        </ul>

        <a href="tel:+919791462100" className="navbar__cta btn btn-primary" id="nav-cta">
          <FaPhone /> Call Us
        </a>

        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="nav-toggle"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>
    </nav>
  );
}
