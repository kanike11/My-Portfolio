import { useState, useEffect } from 'react';
import {
  FaEnvelope,
  FaMapPin,
  FaClock,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaMoon,
  FaSun,
  FaArrowUp
} from 'react-icons/fa6';
import { FiSend } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [theme, setTheme] = useState('dark');

  // Toggle Theme between Dark and Light Mode
  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    if (nextTheme === 'light') {
      document.documentElement.classList.add('light-mode');
    } else {
      document.documentElement.classList.remove('light-mode');
    }
  };

  // Scroll to Top action
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    // Simulate sending message
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset status after a few seconds
      setTimeout(() => {
        setStatus('idle');
      }, 4000);
    }, 1200);
  };

  return (
    <section className="contact-page-container" id="contact">
      {/* Background decoration glows */}
      <div className="bg-glow bg-glow--left" />
      <div className="bg-glow bg-glow--right" />

      {/* Main content grid */}
      <div className="contact-content">
        <header className="contact-header">
          <h1 className="contact-title">Let's Build Something Together</h1>
          <p className="contact-subtitle">Have a project in mind? Let's talk.</p>
        </header>

        <div className="contact-grid">
          {/* Left Column: Info cards */}
          <div className="contact-left-col">
            <a href="mailto:klsevellino.work@gmail.com" className="info-card-link">
              <div className="info-card">
                <div className="info-card__icon-container">
                  <FaEnvelope className="info-card__icon" />
                </div>
                <div className="info-card__content">
                  <span className="info-card__label">EMAIL</span>
                  <span className="info-card__value">klsevellino.work@gmail.com</span>
                </div>
              </div>
            </a>

            <div className="info-card">
              <div className="info-card__icon-container">
                <FaMapPin className="info-card__icon" />
              </div>
              <div className="info-card__content">
                <span className="info-card__label">LOCATION</span>
                <span className="info-card__value">Davao, Philippines</span>
              </div>
            </div>

            <div className="info-card">
              <div className="info-card__icon-container">
                <FaClock className="info-card__icon" />
              </div>
              <div className="info-card__content">
                <span className="info-card__label">AVAILABILITY</span>
                <span className="info-card__value">Open for opportunities</span>
              </div>
            </div>

            {/* Connect Card */}
            <div className="connect-card">
              <h4 className="connect-card__title">Connect With Me</h4>
              <div className="connect-socials">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="connect-social-icon" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="connect-social-icon" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="connect-social-icon" aria-label="Medium">
                  <FaMedium />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form card */}
          <div className="contact-right-col">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="6"
                  required
                  className="form-textarea"
                />
              </div>

              <button
                type="submit"
                className={`form-submit-btn ${status === 'success' ? 'form-submit-btn--success' : ''}`}
                disabled={status === 'sending'}
              >
                {status === 'idle' && (
                  <>
                    <span>Send Message</span>
                    <FiSend className="btn-icon" />
                  </>
                )}
                {status === 'sending' && (
                  <>
                    <span>Sending...</span>
                    <div className="spinner" />
                  </>
                )}
                {status === 'success' && (
                  <>
                    <span>Message Sent!</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Floating vertical social panel on the right edge */}
      <div className="floating-social-sidebar">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="sidebar-social-icon" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="sidebar-social-icon" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="sidebar-social-icon" aria-label="Medium">
          <FaMedium />
        </a>
      </div>

      {/* Floating bottom-right utility buttons */}
      <div className="floating-utilities">
        <button className="utility-btn utility-btn--theme" onClick={toggleTheme} aria-label="Toggle Theme">
          {theme === 'dark' ? <FaMoon /> : <FaSun />}
        </button>
        <button className="utility-btn utility-btn--scroll" onClick={scrollToTop} aria-label="Scroll to Top">
          <FaArrowUp />
        </button>
      </div>
    </section>
  );
}