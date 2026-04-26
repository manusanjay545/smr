import { FaBuilding, FaTools, FaDraftingCompass, FaCouch, FaProjectDiagram, FaHandshake } from 'react-icons/fa';

const services = [
  {
    id: 'construction',
    title: 'Construction',
    icon: FaBuilding,
    description:
      'We build homes and commercial spaces from start to finish — using strong materials and skilled workers to give you safe, durable, and beautiful buildings.',
    features: ['Residential Buildings', 'Commercial Complexes', 'Industrial Structures', 'Foundation & Structural Work'],
  },
  {
    id: 'renovation',
    title: 'Renovation',
    icon: FaTools,
    description:
      'Want to refresh your old home? From small makeovers to full transformations, we upgrade your spaces into modern, stylish, and practical living areas.',
    features: ['Home Makeovers', 'Kitchen & Bath Remodels', 'Structural Repairs', 'Exterior Facelift'],
  },
  {
    id: 'architecture',
    title: 'Architecture & Design',
    icon: FaDraftingCompass,
    description:
      'Our architects create smart and creative designs that look good, save space, and make daily living easier. We balance beauty with functionality.',
    features: ['Custom Floor Plans', '3D Visualizations', 'Sustainable Design', 'Space Optimization'],
  },
  {
    id: 'interior',
    title: 'Interior Solutions',
    icon: FaCouch,
    description:
      'We design your interiors the way you dream it — from modular kitchens to wardrobes and full décor solutions, we make your home comfortable and stylish.',
    features: ['Modular Kitchens', 'Custom Wardrobes', 'Living Room Design', 'Lighting Solutions'],
  },
  {
    id: 'project-management',
    title: 'Project Management',
    icon: FaProjectDiagram,
    description:
      "You don't have to worry about anything. We plan, supervise, and complete your project on time and within budget — stress-free for you.",
    features: ['Timeline Planning', 'Budget Management', 'Quality Control', 'Vendor Coordination'],
  },
  {
    id: 'consultation',
    title: 'Real Estate Consultation',
    icon: FaHandshake,
    description:
      'Looking to buy or invest in property? We guide you with the right options, paperwork, and finance help, so you can make confident decisions.',
    features: ['Investment Guidance', 'Legal Documentation', 'Finance Assistance', 'Market Analysis'],
  },
];

export default services;
