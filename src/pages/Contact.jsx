import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi, I'm ${form.name}. ${form.message} (Phone: ${form.phone})`;
    window.open(`https://wa.me/919791462100?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main id="contact-page">
      <section className="page-hero" id="contact-hero">
        <div className="page-hero__bg">
          <img src="/images/hero.png" alt="Contact Us" />
          <div className="page-hero__overlay" />
        </div>
        <div className="page-hero__content container">
          <motion.span className="section-label" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Get in Touch</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Contact Us
          </motion.h1>
        </div>
      </section>

      <section className="section" id="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <motion.div className="contact-info" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2>Let's Talk About Your Project</h2>
              <p>Have questions or ready to start your construction journey? Reach out to us through any of the channels below.</p>

              <div className="contact-cards">
                <a href="tel:+919791462100" className="contact-card" id="contact-phone">
                  <div className="contact-card__icon"><FaPhone /></div>
                  <div>
                    <strong>Call Us</strong>
                    <span>+91 97914 62100</span>
                  </div>
                </a>

                <a href="https://wa.me/919791462100" target="_blank" rel="noreferrer" className="contact-card" id="contact-whatsapp">
                  <div className="contact-card__icon contact-card__icon--green"><FaWhatsapp /></div>
                  <div>
                    <strong>WhatsApp</strong>
                    <span>Chat with us instantly</span>
                  </div>
                </a>

                <a href="https://www.instagram.com/smr_constructions_" target="_blank" rel="noreferrer" className="contact-card" id="contact-instagram">
                  <div className="contact-card__icon contact-card__icon--pink"><FaInstagram /></div>
                  <div>
                    <strong>Instagram</strong>
                    <span>@smr_constructions_</span>
                  </div>
                </a>

                <div className="contact-card">
                  <div className="contact-card__icon contact-card__icon--blue"><FaMapMarkerAlt /></div>
                  <div>
                    <strong>Location</strong>
                    <span>Tiruppur, Tamil Nadu, India</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div className="contact-form-wrapper" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
                <h3>Send Us a Message</h3>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Tell us about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} id="contact-submit">
                  {submitted ? '✓ Sent!' : <><FaPaperPlane /> Send Message</>}
                </button>
              </form>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div className="contact-map" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125323.40216379!2d77.26244575!3d11.108929600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907b0754fed1f%3A0x3e4f8b5a02208474!2sTiruppur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: 16 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SMR Constructions Location"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
