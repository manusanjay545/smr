import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBed, FaBath, FaCar, FaRulerCombined, FaMapMarkerAlt, FaPhone, FaWhatsapp, FaArrowLeft, FaCheckCircle, FaCalculator, FaInstagram } from 'react-icons/fa';
import projects from '../data/projects';
import './ProjectDetail.css';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [activeImg, setActiveImg] = useState(0);
  const [activePlan, setActivePlan] = useState(0);

  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState(3000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenureYears, setTenureYears] = useState(15);

  if (!project) {
    return (
      <main className="section" style={{ paddingTop: 140, textAlign: 'center' }}>
        <h2>Project Not Found</h2>
        <Link to="/projects" className="btn btn-primary" style={{ marginTop: 24 }}>Back to Projects</Link>
      </main>
    );
  }

  const plan = project.floorPlans[activePlan];

  // EMI Calculation: E = P x r x (1+r)^n / ((1+r)^n - 1)
  const calculateEMI = () => {
    const p = loanAmount;
    const r = (interestRate / 12) / 100;
    const n = tenureYears * 12;
    if (p === 0 || r === 0 || n === 0) return 0;
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  const emiResult = calculateEMI();

  return (
    <main id="project-detail-page">
      <section className="page-hero page-hero--compact" id="detail-hero">
        <div className="page-hero__bg">
          <img src={project.gallery[activeImg]} alt={project.name} />
          <div className="page-hero__overlay" />
        </div>
        <div className="page-hero__content container">
          <Link to="/projects" className="back-link"><FaArrowLeft /> Back to Projects</Link>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>{project.name}</motion.h1>
          <motion.p className="detail-hero__location" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <FaMapMarkerAlt /> {project.location}
          </motion.p>
          <span className={`status-badge ${project.status === 'Completed' ? 'status-completed' : 'status-ongoing'}`}>
            {project.status}
          </span>
        </div>
      </section>

      {/* Details Grid */}
      <section className="section" id="detail-info">
        <div className="container">
          <div className="detail-grid">
            <div className="detail-main">
              {/* Main Picture Gallery Above Description */}
              <motion.div className="detail-block" initial="hidden" animate="visible" variants={fadeUp}>
                <div className="detail-main-img">
                  <img src={project.gallery[activeImg]} alt={project.name} />
                </div>
                <div className="detail-gallery__thumbs" style={{ marginTop: 16 }}>
                  {project.gallery.map((img, i) => (
                    <button
                      key={i}
                      className={`detail-gallery__thumb ${activeImg === i ? 'detail-gallery__thumb--active' : ''}`}
                      onClick={() => setActiveImg(i)}
                      id={`thumb-${i}`}
                    >
                      <img src={img} alt={`${project.name} preview ${i + 1}`} loading="lazy" />
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Description */}
              <motion.div className="detail-block" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h2>About This Project</h2>
                <p>{project.description}</p>
              </motion.div>

              {/* Floor Plans */}
              <motion.div className="detail-block" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h2>Floor Plans & Pricing</h2>
                <div className="plans-tabs">
                  {project.floorPlans.map((fp, i) => (
                    <button
                      key={i}
                      className={`plan-tab ${activePlan === i ? 'plan-tab--active' : ''}`}
                      onClick={() => setActivePlan(i)}
                      id={`plan-tab-${i}`}
                    >
                      {fp.type}
                    </button>
                  ))}
                </div>
                <div className="plan-details">
                  <div className="plan-details__price">
                    <span className="plan-details__price-label">Starting from</span>
                    <span className="plan-details__price-value">{plan.price}</span>
                  </div>
                  <div className="plan-details__specs">
                    <div className="plan-spec"><FaRulerCombined /> <span>{plan.sqft}</span></div>
                    <div className="plan-spec"><FaBed /> <span>{plan.beds} Bed{plan.beds > 1 ? 's' : ''}</span></div>
                    <div className="plan-spec"><FaBath /> <span>{plan.baths} Bath{plan.baths > 1 ? 's' : ''}</span></div>
                    {plan.parking > 0 && <div className="plan-spec"><FaCar /> <span>{plan.parking} Parking</span></div>}
                  </div>
                  <div className="plan-image-preview mt-4">
                    <img src="/images/floorplan.png" alt="Sample Floor Plan" style={{ width: '100%', borderRadius: 8, marginTop: 16 }} />
                  </div>
                </div>
              </motion.div>

              {/* Instagram Feed / Real Pictures */}
              <motion.div className="detail-block" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h2>Site Updates & Gallery <FaInstagram style={{ color: '#E1306C', marginLeft: 8 }} /></h2>
                <p style={{ marginBottom: 16 }}>Latest real pictures from our Instagram updates.</p>
                <div className="ig-gallery grid-2">
                  <img src="/images/ig1.png" alt="Instagram Update 1" className="ig-img" />
                  <img src="/images/ig2.png" alt="Instagram Update 2" className="ig-img" />
                </div>
              </motion.div>

              {/* EMI Calculator */}
              <motion.div className="detail-block emi-calculator" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h2><FaCalculator /> EMI Calculator</h2>
                <div className="emi-grid">
                  <div className="emi-inputs">
                    <div className="form-group">
                      <label>Loan Amount (₹)</label>
                      <input type="number" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} />
                    </div>
                    <div className="form-group">
                      <label>Interest Rate (% p.a)</label>
                      <input type="number" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} />
                    </div>
                    <div className="form-group">
                      <label>Loan Tenure (Years)</label>
                      <input type="number" value={tenureYears} onChange={(e) => setTenureYears(Number(e.target.value))} />
                    </div>
                  </div>
                  <div className="emi-result-card">
                    <span>Monthly EMI</span>
                    <h3>₹{emiResult.toLocaleString('en-IN')}</h3>
                    <p>Estimated monthly payment to bank.</p>
                  </div>
                </div>
              </motion.div>

              {/* Amenities */}
              <motion.div className="detail-block" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h2>Amenities</h2>
                <div className="amenities-grid">
                  {project.amenities.map((a, i) => (
                    <div key={i} className="amenity-item">
                      <FaCheckCircle className="amenity-item__icon" />
                      <span>{a}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Map */}
              <motion.div className="detail-block" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h2>Location</h2>
                <div className="detail-map">
                  <iframe
                    src={project.mapEmbed}
                    width="100%"
                    height="350"
                    style={{ border: 0, borderRadius: 12 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Project Location"
                  />
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="detail-sidebar">
              <div className="detail-sidebar__card">
                <h3>Interested in this project?</h3>
                <p>Get in touch with our team for more details, site visits, and pricing.</p>
                <a href="tel:+919791462100" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} id="detail-call-btn">
                  <FaPhone /> Call Now
                </a>
                <a
                  href={`https://wa.me/919791462100?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(project.name)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                  style={{ width: '100%', justifyContent: 'center', marginTop: 12 }}
                  id="detail-whatsapp-btn"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>

              <div className="detail-sidebar__card detail-sidebar__card--dark">
                <h3>Project Highlights</h3>
                <ul className="detail-highlights">
                  <li><strong>Location:</strong> {project.location}</li>
                  <li><strong>Price Range:</strong> {project.priceRange}</li>
                  <li><strong>Size:</strong> {project.size}</li>
                  <li><strong>Status:</strong> {project.status}</li>
                  <li><strong>Units:</strong> {project.floorPlans.length} types available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
