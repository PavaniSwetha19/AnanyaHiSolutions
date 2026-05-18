import { Container } from "react-bootstrap";

interface PageHeroProps {
  title: string;
  description: string;
  showCTA?: boolean;
  className?: string;
}

export default function PageHero({ title, description, showCTA = true, className = "" }: PageHeroProps) {
  return (
    <section className={`hero-about ${className}`}>
      <Container className="position-relative z-2">
        <h1>{title}</h1>
        <p>{description}</p>
        {showCTA && (
          <a href="https://wa.me/917673935353" target="_blank" rel="noopener noreferrer" className="btn btn-cta">
            <i className="bi bi-whatsapp me-2"></i> Get FREE Consultation
          </a>
        )}
      </Container>
    </section>
  );
}
