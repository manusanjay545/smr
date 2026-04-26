import { motion } from 'framer-motion';
import { FaBullseye, FaEye, FaHardHat, FaCheckCircle } from 'react-icons/fa';
import './About.css';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const achievements = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '10+', label: 'Years of Expertise' },
  { value: '500+', label: 'Happy Families' },
  { value: '50+', label: 'Skilled Workers' },
];

const values = [
  'Transparent pricing with no hidden costs',
  'On-time project delivery guarantee',
  'Eco-friendly and sustainable construction practices',
  'Premium materials sourced from trusted suppliers',
  'End-to-end project management',
  'Post-construction support and maintenance',
];

export default function About() {
  return (
    <main id="about-page">
      {/* Page Hero */}
      <section className="page-hero" id="about-hero">
        <div className="page-hero__bg">
          <img src="/images/about.png" alt="About SMR Constructions" />
          <div className="page-hero__overlay" />
        </div>
        <div className="page-hero__content container">
          <motion.span className="section-label" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>About Us</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Crafting Dreams Into Reality
          </motion.h1>
        </div>
      </section>

      {/* Company Intro */}
      <section className="section" id="company-intro">
        <div className="container">
          <motion.div className="about-intro" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div className="about-intro__text" variants={fadeUp}>
              <span className="section-label">Our Story</span>
              <h2>A Decade of Building Excellence</h2>
              <p>
                Founded with a vision to transform the construction landscape in Tamil Nadu, SMR Constructions has grown from a small team of passionate builders to one of the most trusted names in the region. We believe that everyone deserves a premium home, and we work tirelessly to make that affordable.
              </p>
              <p>
                Over the past decade, we've completed 150+ projects ranging from individual homes to large residential complexes. Our commitment to quality, transparency, and on-time delivery has earned us the trust of 500+ families across Tiruppur and beyond.
              </p>
            </motion.div>
            <motion.div className="about-intro__image" variants={fadeUp}>
              <img src="/images/hero.png" alt="SMR Construction Site" loading="lazy" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section section-dark" id="mission-vision">
        <div className="container">
          <motion.div className="mv-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div className="mv-card" variants={fadeUp}>
              <div className="mv-card__icon"><FaBullseye /></div>
              <h3>Our Mission</h3>
              <p>To deliver premium-quality construction projects that meet the aspirations of modern families, while maintaining affordability, transparency, and timely delivery at every step.</p>
            </motion.div>
            <motion.div className="mv-card" variants={fadeUp}>
              <div className="mv-card__icon"><FaEye /></div>
              <h3>Our Vision</h3>
              <p>To become Tamil Nadu's most trusted construction brand, setting new standards in quality, design, and customer satisfaction — building communities that thrive for generations.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section" id="achievements">
        <div className="container">
          <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="section-label">Achievements</span>
            <h2>Numbers That Speak</h2>
          </motion.div>
          <motion.div className="achievements-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {achievements.map((a, i) => (
              <motion.div key={i} className="achievement-card" variants={fadeUp}>
                <FaHardHat className="achievement-card__icon" />
                <span className="achievement-card__value">{a.value}</span>
                <span className="achievement-card__label">{a.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section section-gray" id="our-values">
        <div className="container">
          <motion.div className="values-section" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <span className="section-label">Our Values</span>
              <h2>What Sets Us Apart</h2>
              <p style={{ color: 'var(--gray-500)', marginTop: 16, maxWidth: 500 }}>
                We don't just build structures — we build relationships based on trust, quality, and commitment to excellence.
              </p>
            </motion.div>
            <motion.div className="values-list" variants={fadeUp}>
              {values.map((v, i) => (
                <div key={i} className="value-item">
                  <FaCheckCircle className="value-item__icon" />
                  <span>{v}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
