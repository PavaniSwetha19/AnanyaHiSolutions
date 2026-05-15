"use client";
import { useParams, notFound } from "next/navigation";
import { servicesData, Service } from "@/lib/servicesData";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import Link from "next/link";

export default function DynamicServicePage() {
  const params = useParams();
  const slug = params?.slug as string;

  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <main>
      {service.type === "category" ? (
        <CategoryLayout service={service} />
      ) : (
        <DetailLayout service={service} />
      )}
    </main>
  );
}

function CategoryLayout({ service }: { service: Service }) {
  return (
    <>
      <section
        className="hero-about text-white text-center py-5 d-flex align-items-center justify-content-center"
        style={{
          minHeight: "500px",
          ...(service.hero.heroImage ? { backgroundImage: `linear-gradient(rgba(6, 66, 103, 0.85), rgba(6, 66, 103, 0.85)), url('/${service.hero.heroImage}')` } : {})
        }}
      >
        <Container>
          <h1 className="fw-bold mb-3" style={service.slug === "software-development" ? { whiteSpace: "nowrap", fontSize: "clamp(1.5rem, 3.2vw, 2.8rem)" } : {}}>{service.hero.heading}</h1>
          <div
            className="lead mb-4 mx-auto"
            style={{ maxWidth: "850px" }}
            dangerouslySetInnerHTML={{ __html: service.hero.subHeading }}
          />

          {service.hero.trustPara && (
            <div className="mt-4 mb-4">
              <p className="mb-0 text-white fw-medium text-center" dangerouslySetInnerHTML={{ __html: service.hero.trustPara }} />
            </div>
          )}

          {service.hero.trustBadges && (
            <div className="mt-3 d-flex justify-content-center flex-wrap gap-3">
              {service.hero.trustBadges.map((badge, idx) => (
                <div key={idx} className="d-flex align-items-center bg-white bg-opacity-10 px-3 py-1 rounded-pill">
                  <i className={`bi ${badge.icon} me-2`} style={{ color: badge.color || "#fff" }}></i>
                  <span className="small">{badge.text}</span>
                </div>
              ))}
            </div>
          )}

          <div className="mt-4 d-flex justify-content-center flex-wrap gap-2">
            {service.hero.ctaButton ? (
              <a
                href={service.hero.ctaButton.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn rounded-pill px-4 ${service.hero.ctaButton.className}`}
              >
                <i className={`bi ${service.hero.ctaButton.icon} me-2`}></i> {service.hero.ctaButton.text}
              </a>
            ) : (
              <>
                <a
                  href="https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20need%20a%20free%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp rounded-pill px-4 d-inline-block d-lg-none"
                >
                  <i className="bi bi-whatsapp me-2"></i> Chat With Us Now
                </a>

                <Link href="/ananya-hi-solutions-package" className="btn btn-package rounded-pill px-4 d-none d-lg-inline-block">
                  <i className="bi bi-cart-check me-2"></i> Choose Package
                </Link>
              </>
            )}
          </div>
        </Container>
      </section>

      <section className={`py-5 ${service.slug === "software-development" ? "services-section" : ""}`}>
        {service.subSection && (
          <Container className="text-center mb-5">
            <h2 className="fw-bold mb-3 primaryClr" dangerouslySetInnerHTML={{ __html: service.subSection.heading }} />
            <div className="mx-auto" style={{ maxWidth: "700px", color: "#333", fontSize: "1.1rem" }} dangerouslySetInnerHTML={{ __html: service.subSection.description }} />
          </Container>
        )}

        {service.items && service.items.length > 0 && (
          <Container>
            <Row className="g-4">
              {service.items.map((item, index) => (
                <Col md={4} key={index} className="mx-auto">
                  <article className="solution-card p-4 h-100 text-center">
                    <Link href={`/${item.link}`} className="text-decoration-none text-dark d-block">
                      <i className={`bi ${item.icon} icon`} style={item.color ? { color: item.color } : {}}></i>
                      <h5 className="fw-bold">{item.title}</h5>
                      <p className="text-muted small mb-0">{item.description}</p>
                    </Link>
                  </article>
                </Col>
              ))}
            </Row>
          </Container>
        )}
      </section>

      {service.fullDetails && (
        <div dangerouslySetInnerHTML={{ __html: service.fullDetails }} />
      )}

      {service.faqs && (
        <section className="py-5 bg-light">
          <Container>
            <div className="headings mb-5 text-center">
              <h2 className="fw-bold">Frequently Asked Questions</h2>
            </div>
            <Accordion defaultActiveKey="0" className="custom-accordion">
              {service.faqs.map((faq, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Container>
        </section>
      )}

      <section className="why-choose-us py-5 text-white" style={{ background: "linear-gradient(to right, #064267, #1485cb)" }}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold">Why Choose Ananya Hi Solutions?</h2>
            <p className="opacity-75">No Salesman, Just You & Your Professional Web Expert Agency.</p>
          </div>
          <Row className="g-4">
            {[
              { title: "ROI Focused", desc: "We deliver measurable growth with strategies built for results.", icon: "bi-graph-up-arrow" },
              { title: "24/7 Support", desc: "Round the clock assistance to ensure your business never stops.", icon: "bi-headset" },
              { title: "Expert Team", desc: "Our skilled professionals bring innovation & expertise to every project.", icon: "bi-people" },
              { title: "Proven Results", desc: "Trusted by clients with successful projects & long-term partnerships.", icon: "bi-award" }
            ].map((item, idx) => (
              <Col md={3} key={idx}>
                <div className="text-center p-4 rounded h-100 shadow-sm" style={{ backgroundColor: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(5px)" }}>
                  <i className={`bi ${item.icon} fs-1 mb-3 d-block text-white`}></i>
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="small opacity-75 mb-0">{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

function DetailLayout({ service }: { service: Service }) {
  if (!service.detailSection) return null;
  const { detailSection } = service;

  return (
    <>
      <section
        className="hero-about text-white text-center py-5 d-flex align-items-center"
        style={service.hero.heroImage ? { backgroundImage: `linear-gradient(rgba(6, 66, 103, 0.85), rgba(6, 66, 103, 0.85)), url('/${service.hero.heroImage}')` } : {}}
      >
        <Container>
          <h1 className="fw-bold mb-3" style={service.slug === "software-development" ? { whiteSpace: "nowrap", fontSize: "clamp(1.5rem, 3.2vw, 2.8rem)" } : {}}>{service.hero.heading}</h1>
          <div
            className="lead mb-4 mx-auto"
            style={{ maxWidth: "800px" }}
            dangerouslySetInnerHTML={{ __html: service.hero.subHeading }}
          />

          <div className="mt-4 d-flex justify-content-center flex-wrap gap-2">
            {service.hero.ctaButton ? (
              <a
                href={service.hero.ctaButton.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${service.hero.ctaButton.className}`}
              >
                <i className={`bi ${service.hero.ctaButton.icon} me-2`}></i> {service.hero.ctaButton.text}
              </a>
            ) : (
              <>
                <a
                  href="https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20need%20a%20free%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp d-inline-block d-lg-none"
                >
                  <i className="bi bi-whatsapp me-2"></i> Chat With Us Now
                </a>

                <Link href="/ananya-hi-solutions-package" className="btn btn-package d-none d-lg-inline-block">
                  <i className="bi bi-cart-check me-2"></i> Choose Package
                </Link>
              </>
            )}
          </div>
        </Container>
      </section>

      <section className="py-5" style={{ backgroundColor: "#e9efef" }}>
        <Container>
          <Row className="align-items-center g-4 text-center text-md-start">
          <Col xs={12}>
            <h2 className="fw-bold mb-3 text-center">{detailSection.heading1}</h2>
            <p className="text-muted">{detailSection.paragraph1}</p>
          </Col>

          <Col md={6}>
            <h4 className="fw-semibold mb-2 text-dark">🎁 Want to See Our Full Package Details?</h4>
            <p className="text-muted mb-3">
              Fill out the short form to instantly unlock our complete package information.
            </p>
            {detailSection.packageHtml && (
              <div dangerouslySetInnerHTML={{ __html: detailSection.packageHtml }} />
            )}
          </Col>

          <Col md={6}>
            <img
              src={`/${detailSection.image}`}
              alt={detailSection.imageAlt}
              className="img-fluid rounded img-thumbnail shadow"
            />
          </Col>
        </Row>

        <h2 className="fw-bold pt-5 mb-3 text-center">{detailSection.heading2}</h2>
        <p className="text-center">{detailSection.paragraph2}</p>

        <h4 className="fw-semibold my-4 text-dark text-center">Why Ananya Hi Solutions?</h4>
        <div className="d-flex justify-content-center">
          <ul className="list-unstyled mt-3">
            {detailSection.benefits.map((benefit, index) => (
              <li key={index} className="mb-2">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                <span dangerouslySetInnerHTML={{ __html: benefit }} />
              </li>
            ))}
          </ul>
        </div>

        {detailSection.footerImage && (
          <div className="text-center mt-5">
            <img
              src={`/${detailSection.footerImage}`}
              alt="Service Highlight"
              className="img-fluid rounded shadow-lg border"
              style={{ maxWidth: "900px" }}
            />
          </div>
        )}
        </Container>
      </section>

      <section className="cta-final text-white text-center py-5" style={{ background: "linear-gradient(rgba(6, 66, 103, 0.9), rgba(6, 66, 103, 0.9))" }}>
        <Container>
          <h2 className="fw-bold mb-3">{service.ctaFinal?.heading || "Ready to Launch Your Business Website?"}</h2>
          <p className="lead mb-4">{service.ctaFinal?.subHeading || "Get your website designed by Hyderabad's trusted web design company."}</p>
          <a
            href="https://wa.me/917673935353"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <i className="bi bi-whatsapp me-2"></i> {service.ctaFinal?.buttonText || "Chat on WhatsApp"}
          </a>
        </Container>
      </section>
    </>
  );
}
