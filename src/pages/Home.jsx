import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaShieldAlt, FaClock, FaAward, FaUsers, FaQuoteLeft, FaStar, FaArrowRight, FaInstagram, FaPlay } from 'react-icons/fa';
import projects from '../data/projects';
import 'swiper/css';
import 'swiper/css/pagination';
import './Home.css';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const stats = [
  { value: '150+', label: 'Projects Completed' },
  { value: '10+', label: 'Years Experience' },
  { value: '500+', label: 'Happy Families' },
  { value: '25+', label: 'Expert Team' },
];

const whyUs = [
  { icon: FaShieldAlt, title: 'Quality Assured', desc: 'Premium materials and strict quality checks at every stage of construction.' },
  { icon: FaClock, title: 'On-Time Delivery', desc: 'We respect your time and deliver every project on schedule, guaranteed.' },
  { icon: FaAward, title: 'Award Winning', desc: 'Recognized for excellence in construction and design across Tamil Nadu.' },
  { icon: FaUsers, title: 'Client Focused', desc: 'Your vision is our priority — we build exactly what you dream.' },
];

const testimonials = [
  { name: 'Kishore Kumar', loc: 'Veerapandi, Tiruppur', text: 'They helped me build my dream home in Veerapandi, Tiruppur. The quality of construction and attention to detail exceeded my expectations.' },
  { name: 'Ashwin', loc: 'Tiruppur', text: 'From the foundation to the finishing, they treated my house like their own. They understood what I wanted exactly.' },
  { name: 'Priya Ramesh', loc: 'Avinashi, Tiruppur', text: 'Professional team, transparent pricing, and outstanding quality. SMR Constructions made our home-building journey stress-free.' },
];

const igReels = [
  { thumb: '/images/reel1.png', url: 'https://www.instagram.com/p/DO6MuTfjI3k/', title: 'Construction Update' },
  { thumb: '/images/reel2.png', url: 'https://www.instagram.com/p/DWbq4Wmib6E/', title: 'Interior Walkthrough' },
  { thumb: '/images/reel3.png', url: 'https://www.instagram.com/p/DWWjlubjDZY/', title: 'Site Progress' },
  { thumb: '/images/reel1.png', url: 'https://www.instagram.com/p/DVbTXFFE1lR/', title: 'Project Highlight' },
  { thumb: '/images/reel2.png', url: 'https://www.instagram.com/p/DVJR9XgEyl1/', title: 'Home Tour' },
];

export default function Home() {
  return (
    <main id="home-page">
      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero__bg">
          <img src="/images/hero.png" alt="SMR Constructions Project" loading="eager" />
          <div className="hero__overlay" />
        </div>
        <div className="hero__content container">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span className="hero__label" variants={fadeUp}>SMR CONSTRUCTIONS</motion.span>
            <motion.h1 variants={fadeUp}>Building Trust,<br />Delivering <span className="text-accent">Excellence</span></motion.h1>
            <motion.p variants={fadeUp}>Premium Living Made Affordable — crafting dream homes and commercial spaces across Tamil Nadu with unmatched quality and trust.</motion.p>
            <motion.div className="hero__actions" variants={fadeUp}>
              <Link to="/projects" className="btn btn-primary">View Projects <FaArrowRight /></Link>
              <Link to="/contact" className="btn btn-outline">Contact Us</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section" id="about-preview">
        <div className="container">
          <motion.div className="about-preview" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
            <motion.div className="about-preview__img" variants={fadeUp}>
              <img src="/images/about.png" alt="About SMR Constructions" loading="lazy" />
              <div className="about-preview__badge">
                <span className="about-preview__badge-num">10+</span>
                <span className="about-preview__badge-text">Years of<br />Excellence</span>
              </div>
            </motion.div>
            <motion.div className="about-preview__content" variants={fadeUp}>
              <span className="section-label">About Us</span>
              <h2>We Build More Than Structures — We Build Trust</h2>
              <p>SMR Constructions is a premier construction company based in Tiruppur, Tamil Nadu. We specialize in residential and commercial projects, bringing together expert craftsmanship, modern design, and transparent processes.</p>
              <p>Our mission is to make premium living affordable for every family while maintaining the highest standards of quality and safety.</p>
              <div className="about-preview__stats">
                {stats.map((s, i) => (
                  <div key={i} className="about-preview__stat">
                    <span className="about-preview__stat-value">{s.value}</span>
                    <span className="about-preview__stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn btn-primary">Learn More <FaArrowRight /></Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Instagram Reels Gallery */}
      <section className="section section-dark" id="ig-gallery">
        <div className="container">
          <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="section-label"><FaInstagram /> Reels</span>
            <h2>From Our Instagram</h2>
            <p>Tap to watch our latest reels on Instagram.</p>
          </motion.div>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={12}
            slidesPerView={2.3}
            loop={true}
            grabCursor={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{ 640: { slidesPerView: 3.3, spaceBetween: 16 }, 1024: { slidesPerView: 5, spaceBetween: 20 } }}
            className="ig-swiper"
          >
            {igReels.map((reel, i) => (
              <SwiperSlide key={i}>
                <a href={reel.url} target="_blank" rel="noreferrer" className="ig-reel-card" title={reel.title}>
                  <img src={reel.thumb} alt={reel.title} loading="lazy" />
                  <div className="ig-reel-play">
                    <FaPlay />
                  </div>
                  <div className="ig-reel-label">{reel.title}</div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="text-center" style={{ marginTop: 40 }}>
            <a href="https://www.instagram.com/smr_constructions_/" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ borderColor: '#E1306C', color: '#E1306C', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <FaInstagram /> Follow @smr_constructions_
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section section-gray" id="featured-projects">
        <div className="container">
          <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="section-label">Our Projects</span>
            <h2>Featured Projects</h2>
            <p>Explore our latest residential and commercial developments designed for modern living.</p>
          </motion.div>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="projects-swiper"
          >
            {projects.map((p) => (
              <SwiperSlide key={p.id}>
                <Link to={`/projects/${p.id}`} className="project-card" id={`project-card-${p.id}`}>
                  <div className="project-card__img">
                    <img src={p.image} alt={p.name} loading="lazy" />
                    <span className={`status-badge ${p.status === 'Completed' ? 'status-completed' : 'status-ongoing'}`}>
                      {p.status}
                    </span>
                  </div>
                  <div className="project-card__body">
                    <h3>{p.name}</h3>
                    <p className="project-card__location">{p.location}</p>
                    <div className="project-card__meta">
                      <span>{p.priceRange}</span>
                      <span>{p.size}</span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="text-center" style={{ marginTop: 40 }}>
            <Link to="/projects" className="btn btn-primary">View All Projects <FaArrowRight /></Link>
          </div>
        </div>
      </section>

      {/* Meet the CEO */}
      <section className="section section-gray" id="ceo-section">
        <div className="container">
          <motion.div className="ceo-preview" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
            <motion.div className="ceo-preview__img" variants={fadeUp}>
              <img src="/images/ceo.jpg" alt="Jeyash Kumar - CEO" loading="lazy" />
              <div className="ceo-preview__badge">
                <span className="ceo-preview__badge-text">Jeyash Kumar</span>
                <span className="ceo-preview__badge-sub">Founder & CEO</span>
              </div>
            </motion.div>
            <motion.div className="ceo-preview__content" variants={fadeUp}>
              <span className="section-label">Leadership</span>
              <h2>Building Trust Through Vision and Dedication</h2>
              <p>Under the visionary leadership of Mr. Jeyash Kumar, SMR Constructions has grown from a humble beginning to one of Tamil Nadu's most trusted real estate developers. His commitment to quality, transparent pricing, and timely delivery remains the cornerstone of our company.</p>
              <p>"Our goal isn't just to build structures. It's to build lifelong relationships with the families who trust us with their life savings. We bring premium living to everyone without compromising on quality."</p>
              <div style={{ marginTop: 24 }}>
                 <a href="https://www.instagram.com/jeyashkumar/" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                   Follow on Instagram <FaArrowRight />
                 </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-dark" id="why-choose-us">
        <div className="container">
          <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="section-label">Why Choose Us</span>
            <h2>Building Excellence, Every Step</h2>
            <p>More than 10 years of delivering exceptional construction projects across Tamil Nadu.</p>
          </motion.div>
          <motion.div className="why-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {whyUs.map((item, i) => (
              <motion.div key={i} className="why-card" variants={fadeUp}>
                <div className="why-card__icon">
                  <item.icon />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" id="testimonials">
        <div className="container">
          <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="section-label">Testimonials</span>
            <h2>Hear From Our Happy Homeowners</h2>
            <p>Real stories from families who trusted us across Tamil Nadu.</p>
          </motion.div>
          <motion.div className="testimonials-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {testimonials.map((t, i) => (
              <motion.div key={i} className="testimonial-card" variants={fadeUp}>
                <FaQuoteLeft className="testimonial-card__quote" />
                <p>{t.text}</p>
                <div className="testimonial-card__stars">
                  {[...Array(5)].map((_, j) => <FaStar key={j} />)}
                </div>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.name.charAt(0)}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.loc}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner" id="cta-banner">
        <div className="container">
          <motion.div className="cta-banner__content" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2>Ready to Build Your Dream Home?</h2>
            <p>Let's discuss your vision. Our team is ready to turn your ideas into reality.</p>
            <div className="cta-banner__actions">
              <Link to="/contact" className="btn btn-white">Get in Touch</Link>
              <a href="tel:+919791462100" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>
                Call +91 97914 62100
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
