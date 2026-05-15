import { Container } from "react-bootstrap";

export default function SocialFollow() {
  const socialLinks = [
    { name: "Facebook", icon: "bi-facebook", href: "https://www.facebook.com/AnanyaHiSolutions/", class: "facebook" },
    { name: "Instagram", icon: "bi-instagram", href: "https://www.instagram.com/ananyahisolutions/", class: "instagram" },
    { name: "WhatsApp", icon: "bi-whatsapp", href: "https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20need%20a%20free%20consultation.", class: "whatsapp" },
    { name: "LinkedIn", icon: "bi-linkedin", href: "https://www.linkedin.com/company/ananya-hi-solutions", class: "linkedin" },
  ];

  return (
    <section className="social-follow-section py-5">
      <Container className="text-center">
        <h2 className="fw-bold mb-3 text-white">Stay Connected</h2>
        <p className="text-light mb-4">Follow us on social media for updates, tips & offers!</p>

        <div className="d-flex justify-content-center gap-3 flex-wrap">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-icon ${social.class}`}
              aria-label={social.name}
            >
              <i className={`bi ${social.icon}`}></i>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
