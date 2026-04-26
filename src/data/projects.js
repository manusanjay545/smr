const projects = [
  {
    id: 'lotus-dreams',
    name: 'Lotus Dreams',
    location: 'Veerapandi, Tiruppur',
    status: 'Ongoing',
    priceRange: '₹22L – ₹42L',
    size: '494 – 1652 sq.ft',
    image: '/images/lotus-dreams.png',
    featured: true,
    description:
      'Lotus Dreams is a premium residential project designed for modern families, offering 1BHK, 2BHK, and 3BHK apartments with spacious layouts, natural ventilation, and world-class amenities. Located in the heart of Veerapandi, Tiruppur, it provides excellent connectivity to schools, hospitals, and commercial centers.',
    gallery: ['/images/lotus-dreams.png', '/images/hero.png', '/images/about.png'],
    floorPlans: [
      { type: '1BHK', price: '₹22 Lakhs', sqft: '494 sq.ft', beds: 1, baths: 1, parking: 0 },
      { type: '2BHK', price: '₹39 Lakhs', sqft: '850 sq.ft', beds: 2, baths: 2, parking: 1 },
      { type: '3BHK', price: '₹42 Lakhs', sqft: '1652 sq.ft', beds: 3, baths: 3, parking: 1 },
    ],
    amenities: [
      'Landscaped Gardens',
      'Children Play Area',
      'Covered Car Parking',
      '24/7 Security',
      'Power Backup',
      'Rainwater Harvesting',
      'Community Hall',
      'CCTV Surveillance',
    ],
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.0!2d77.35!3d11.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDA2JzAwLjAiTiA3N8KwMjEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1',
  },
  {
    id: 'green-valley-villas',
    name: 'Green Valley Villas',
    location: 'Avinashi Road, Tiruppur',
    status: 'Completed',
    priceRange: '₹55L – ₹85L',
    size: '1200 – 2100 sq.ft',
    image: '/images/hero.png',
    featured: true,
    description:
      'Green Valley Villas is a collection of independent luxury villas nestled in a green, serene environment along Avinashi Road. Each villa features premium fittings, private gardens, and ample space for families who value privacy and comfort.',
    gallery: ['/images/hero.png', '/images/lotus-dreams.png', '/images/about.png'],
    floorPlans: [
      { type: '2BHK Villa', price: '₹55 Lakhs', sqft: '1200 sq.ft', beds: 2, baths: 2, parking: 1 },
      { type: '3BHK Villa', price: '₹72 Lakhs', sqft: '1650 sq.ft', beds: 3, baths: 3, parking: 2 },
      { type: '4BHK Villa', price: '₹85 Lakhs', sqft: '2100 sq.ft', beds: 4, baths: 4, parking: 2 },
    ],
    amenities: [
      'Private Garden',
      'Clubhouse',
      'Swimming Pool',
      'Gym',
      '24/7 Security',
      'Power Backup',
      'Walking Track',
      'Gated Community',
    ],
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.0!2d77.35!3d11.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDA2JzAwLjAiTiA3N8KwMjEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1',
  },
  {
    id: 'skyline-towers',
    name: 'Skyline Towers',
    location: 'Mangalam Road, Tiruppur',
    status: 'Ongoing',
    priceRange: '₹35L – ₹60L',
    size: '750 – 1500 sq.ft',
    image: '/images/about.png',
    featured: false,
    description:
      'Skyline Towers is an upcoming premium high-rise apartment project in Mangalam Road, offering breathtaking views and modern amenities. Designed for young professionals and families seeking a vibrant urban lifestyle.',
    gallery: ['/images/about.png', '/images/hero.png', '/images/lotus-dreams.png'],
    floorPlans: [
      { type: '1BHK', price: '₹35 Lakhs', sqft: '750 sq.ft', beds: 1, baths: 1, parking: 1 },
      { type: '2BHK', price: '₹48 Lakhs', sqft: '1100 sq.ft', beds: 2, baths: 2, parking: 1 },
      { type: '3BHK', price: '₹60 Lakhs', sqft: '1500 sq.ft', beds: 3, baths: 3, parking: 1 },
    ],
    amenities: [
      'Rooftop Lounge',
      'Fitness Center',
      'Children Play Zone',
      'Multipurpose Hall',
      '24/7 Security',
      'EV Charging',
      'Intercom Facility',
      'Fire Safety Systems',
    ],
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.0!2d77.35!3d11.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDA2JzAwLjAiTiA3N8KwMjEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1',
  },
];

export default projects;
