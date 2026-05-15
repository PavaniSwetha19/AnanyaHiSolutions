import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <footer className="footer text-white pt-5">
        <Container>
          <Row className="g-4">
            {/* Logo & About */}
            <Col md={4}>
              <Link href="/" className="d-inline-block mb-3">
                <img
                  src="/assets/front/images/ahs-logo.png"
                  alt="AHS Logo"
                  style={{ maxHeight: "60px" }}
                />
              </Link>
              <p>
                We are a professional Web Design & Digital Marketing agency in Hyderabad,
                delivering creative solutions that help businesses grow online.
              </p>
            </Col>

            {/* Quick Links */}
            <Col xs={6} md={2}>
              <h5 className="mb-3 text-white">Quick Links</h5>
              <ul className="list-unstyled footer-links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="#">Payment Terms</Link></li>
                <li><Link href="#">News</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </Col>

            {/* Services Links */}
            <Col xs={6} md={3}>
              <h5 className="mb-3 text-white">Our Services</h5>
              <ul className="list-unstyled footer-links">
                <li><Link href="/website-design">Website Design</Link></li>
                <li><Link href="/digital-marketing">Digital Marketing</Link></li>
                <li><Link href="/mobile-application">Mobile Application</Link></li>
                <li><Link href="/ecommerce-application-development">eCommerce Application</Link></li>
                <li><Link href="/video-production">Video Production</Link></li>
                <li><Link href="/software-development">Software Development</Link></li>
              </ul>
            </Col>

            {/* Contact Info */}
            <Col md={3}>
              <h5 className="mb-3 text-white">Contact Us</h5>
              <p>
                <i className="bi bi-geo-alt-fill me-2"></i>
                <a
                  href="https://maps.app.goo.gl/CAftcYrScrB2igQo6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  401 Sravya Vatika, Greenlands, Begumpet, Hyderabad, Telangana-500016
                </a>
              </p>
              <p>
                <i className="bi bi-telephone-fill me-2"></i>
                <a href="tel:+917673935353" className="contact-link">(+91) 76739-35353</a>
              </p>
              <p>
                <i className="bi bi-envelope-fill me-2"></i>
                <a href="mailto:info@ananyahisolutions.com" className="contact-link">info@ananyahisolutions.com</a>
              </p>

              {/* Social Media */}
              <div className="social-icons mt-3">
                <a href="https://www.facebook.com/AnanyaHiSolutions/" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/ananyahisolutions/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
                <a href="https://www.linkedin.com/company/ananya-hi-solutions" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
              </div>
            </Col>
          </Row>

          <hr className="my-4 border-light" />

          {/* Bottom */}
          <div className="text-center pb-3">
            <p className="mb-0">&copy; 2025 Ananya Hi Solutions. All Rights Reserved.</p>
          </div>
        </Container>
      </footer>

      {/* WhatsApp Chatbot Floating Icon */}
      <div className="chatbot-wrapper">
        <div className="chatbot-tooltip">Hi, I’m Ananya 👋</div>
        <a
          href="https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20need%20assistance!"
          target="_blank"
          rel="noopener noreferrer"
          className="chatbot-icon"
          aria-label="Chat with Ananya Hi Solutions"
        >
          <img src="/assets/front/images/ananya.png" alt="Ananya Girl Chatbot" width={60} height={60} />
        </a>
      </div>
    </>
  );
}
