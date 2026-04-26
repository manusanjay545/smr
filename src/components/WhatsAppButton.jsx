import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919791462100?text=Hi%2C%20I%27m%20interested%20in%20your%20construction%20services."
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
      id="whatsapp-float-btn"
    >
      <FaWhatsapp />
      <span className="whatsapp-float__tooltip">Chat with us</span>
    </a>
  );
}
