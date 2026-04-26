import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import projects from '../data/projects';
import './Projects.css';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const filters = ['All', 'Ongoing', 'Completed'];

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.status === active);

  return (
    <main id="projects-page">
      <section className="page-hero" id="projects-hero">
        <div className="page-hero__bg">
          <img src="/images/hero.png" alt="Our Projects" />
          <div className="page-hero__overlay" />
        </div>
        <div className="page-hero__content container">
          <motion.span className="section-label" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Portfolio</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Our Projects
          </motion.h1>
        </div>
      </section>

      <section className="section" id="projects-listing">
        <div className="container">
          <div className="projects-filters" id="project-filters">
            {filters.map((f) => (
              <button
                key={f}
                className={`filter-btn ${active === f ? 'filter-btn--active' : ''}`}
                onClick={() => setActive(f)}
                id={`filter-${f.toLowerCase()}`}
              >
                {f}
              </button>
            ))}
          </div>

          <motion.div
            className="projects-grid"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            key={active}
          >
            {filtered.map((p) => (
              <motion.div key={p.id} variants={fadeUp}>
                <Link to={`/projects/${p.id}`} className="project-card" id={`project-${p.id}`}>
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
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="projects-empty">
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
