import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import servicesData from '../data/services';
import './Services.css';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

export default function Services() {
  return (
    <main id="services-page">
      <section className="page-hero" id="services-hero">
        <div className="page-hero__bg">
          <img src="/images/about.png" alt="Our Services" />
          <div className="page-hero__overlay" />
        </div>
        <div className="page-hero__content container">
          <motion.span className="section-label" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>What We Do</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Our Services
          </motion.h1>
        </div>
      </section>

      <section className="section" id="services-listing">
        <div className="container">
          <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="section-label">Services</span>
            <h2>Comprehensive Construction Solutions</h2>
            <p>From design to delivery, we offer end-to-end construction services tailored to your needs.</p>
          </motion.div>
          <motion.div className="services-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {servicesData.map((s) => (
              <motion.div key={s.id} className="service-card" variants={fadeUp} id={`service-${s.id}`}>
                <div className="service-card__icon">
                  <s.icon />
                </div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <ul className="service-card__features">
                  {s.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner" id="services-cta">
        <div className="container">
          <motion.div className="cta-banner__content" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2>Have a Project in Mind?</h2>
            <p>Let's bring your vision to life with our expert construction services.</p>
            <div className="cta-banner__actions">
              <Link to="/contact" className="btn btn-white">Get a Free Quote <FaArrowRight /></Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
