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
          background: `linear-gradient(rgba(6, 66, 103, 0.85), rgba(6, 66, 103, 0.85)), url('/assets/front/images/digital-marketing-office-hyderabad.jpg') center/cover no-repeat`
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
              <p
                className="mb-0 text-white fw-medium text-center"
                style={{ whiteSpace: "nowrap", fontSize: "clamp(0.85rem, 1.8vw, 1.1rem)" }}
                dangerouslySetInnerHTML={{ __html: service.hero.trustPara }}
              />
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
              service.hero.ctaButton.link.startsWith("http") ? (
                <a
                  href={service.hero.ctaButton.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn rounded-pill px-4 ${service.hero.ctaButton.className}`}
                >
                  <i className={`bi ${service.hero.ctaButton.icon} me-2`}></i> {service.hero.ctaButton.text}
                </a>
              ) : (
                <Link
                  href={service.hero.ctaButton.link}
                  className={`btn rounded-pill px-4 ${service.hero.ctaButton.className}`}
                >
                  <i className={`bi ${service.hero.ctaButton.icon} me-2`}></i> {service.hero.ctaButton.text}
                </Link>
              )
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

      <section
  className={`py-5 ${
    ["software-development", "video-production"].includes(service.slug)
      ? "services-section"
      : ""
  }`}
  style={{ backgroundColor: "#eef1f2" }}
>
        {service.subSection && (
          <Container className="text-center mb-5">
            <h2 className="fw-bold mb-3 primaryClr" dangerouslySetInnerHTML={{ __html: service.subSection.heading }} />
            <div className="mx-auto" style={{ maxWidth: "700px", color: "#333", fontSize: "1.1rem", textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: service.subSection.description }} />
          </Container>
        )}

        {service.items && service.items.length > 0 && (
          <Container>
            <Row className="g-4 justify-content-center">
              {service.items.map((item, index) => (
                
                <Col lg={4} md={6} key={index} className="mb-4">
                  <article
                    className="solution-card p-4 h-100 text-center d-flex flex-column justify-content-center align-items-center"
                    style={{ borderRadius: "15px", border: "none", minHeight: "260px" }}
                  >
                    <Link href={`/${item.link}`} className="text-decoration-none text-dark d-block w-100">
                      <i className={`bi ${item.icon} icon mb-3 d-block`} style={item.color ? { color: item.color, fontSize: '2.5rem' } : { fontSize: '2.5rem' }}></i>
                      <h5 className="fw-bold mb-3" style={{ fontSize: '1.2rem' }}>{item.title}</h5>
                      <p className="text-muted small mb-0" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>{item.description}</p>
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
        <section className="py-5" style={{ backgroundColor: "#eef1f2" }}>
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
                <div className="why-card">
                  <i className={`bi ${item.icon}`}></i>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
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

  const isLeftAligned = [
    "seo-service-provider-hyderabad", 
    "social-media-marketing-services-hyderabad", 
    "ppc-services-hyderabad", 
    "content-marketing-services-hyderabad",
    "email-marketing-services-hyderabad",
    "ios-app-development-services-hyderabad",
    "android-app-development-services-hyderabad",
    "ecommerce-website-developers-hyderabad"
  ].includes(service.slug);

  const isThreeLines = [
    "static-website-design-services-hyderabad", 
    "dynamic-website-design-services-hyderabad", 
    "social-media-marketing-services-hyderabad", 
    "ppc-services-hyderabad", 
    "content-marketing-services-hyderabad",
    "email-marketing-services-hyderabad",
    "ios-app-development-services-hyderabad",
    "android-app-development-services-hyderabad",
    "ecommerce-website-developers-hyderabad"
  ].includes(service.slug);

  return (
    <>
      <section
        className="hero-about text-white text-center py-5 d-flex align-items-center"
        style={{
          minHeight: "400px",
          background: `linear-gradient(rgba(6, 66, 103, 0.85), rgba(6, 66, 103, 0.85)), url('/assets/front/images/digital-marketing-office-hyderabad.jpg') center/cover no-repeat`
        }}
      >
        <Container>
            <h1
              className="fw-bold mb-3"
              style={
                service.slug === "software-development"
                  ? {
                    whiteSpace: "nowrap",
                    fontSize: "clamp(1.5rem, 3.2vw, 2.8rem)",
                  }
                  : {}
              }
              dangerouslySetInnerHTML={{ __html: service.hero.heading }}
            />

          <div
            className="lead mb-4 mx-auto"
            style={{ maxWidth: "800px" }}
            dangerouslySetInnerHTML={{ __html: service.hero.subHeading }}
          />

          <div className="mt-4 d-flex justify-content-center flex-wrap gap-2">
            {service.hero.ctaButton ? (
              service.hero.ctaButton.link.startsWith("http") ? (
                <a
                  href={service.hero.ctaButton.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn rounded-pill px-4 ${service.hero.ctaButton.className}`}
                >
                  <i className={`bi ${service.hero.ctaButton.icon} me-2`}></i>
                  {service.hero.ctaButton.text}
                </a>
              ) : (
                <Link
                  href={service.hero.ctaButton.link}
                  className={`btn rounded-pill px-4 ${service.hero.ctaButton.className}`}
                >
                  <i className={`bi ${service.hero.ctaButton.icon} me-2`}></i>
                  {service.hero.ctaButton.text}
                </Link>
              )
            ) : (
              <>
                <a
                  href="https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20need%20a%20free%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp d-inline-block d-lg-none"
                >
                  <i className="bi bi-whatsapp me-2"></i>
                  Chat With Us Now
                </a>

                <Link
                  href="/ananya-hi-solutions-package"
                  className="btn btn-package d-none d-lg-inline-block"
                >
                  <i className="bi bi-cart-check me-2"></i>
                  Choose Package
                </Link>
              </>
            )}
          </div>
        </Container>
      </section>

      <section className="py-5" style={{ backgroundColor: "#eef1f2" }}>
        <Container>
          <Row className="align-items-center g-4 text-center text-md-start">
            <Col xs={12}>
              <h2 className="fw-bold mb-3 text-center" style={{ fontSize: "18pt" }} dangerouslySetInnerHTML={{ __html: detailSection.heading1 }} />

              <p
                className="text-muted mx-auto mb-5 text-start"
                style={{ maxWidth: "1200px", fontSize: "0.95rem" }}
              >
                {detailSection.paragraph1}
              </p>
            </Col>

            <Col md={5}>
              <h4 className="fw-semibold mb-2 text-dark">
                🎁 Want to See Our Full Package Details?
              </h4>
              
              <p className="text-muted mb-4 small">Fill out the short form to instantly unlock our complete package information.</p>


              {detailSection.packageHtml && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: detailSection.packageHtml,
                  }}
                />
              )}
            </Col>

            <Col md={7}>
              <img
                src={`/${detailSection.image}`}
                alt={detailSection.imageAlt}
                className="img-fluid rounded img-thumbnail shadow w-100"
                style={{ maxHeight: "600px", objectFit: "cover" }}
              />
            </Col>
          </Row>

          <div className="mt-5 pt-4">
            <h2 className="fw-bold mb-3 text-center">
              {detailSection.heading2}
            </h2>

            <p className="mb-4 text-start">
              {detailSection.paragraph2}
            </p>

            <h4 className="fw-semibold my-4 text-dark text-start">
              Why Ananya Hi Solutions?
            </h4>

            <div className="text-start">
              <ul className="list-unstyled mt-3">
                {detailSection.benefits.map((benefit, index) => (
                  <li key={index} className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    <span dangerouslySetInnerHTML={{ __html: benefit }} />
                  </li>
                ))}
              </ul>
            </div>
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

      <section
        className="cta-final text-white text-center py-5"
        style={{
          background: "linear-gradient(to right, #064267, #1485cb)",
        }}
      >
        <Container>
          <h2 className="fw-bold mb-3">
            {service.ctaFinal?.heading ||
              "Ready to Launch Your Business Website?"}
          </h2>

          <p className="lead mb-4">
            {service.ctaFinal?.subHeading ||
              "Get your static website designed by Hyderabad’s trusted web design company."}
          </p>

          <a
            href="https://wa.me/917673935353"
            target="_blank"
            rel="noopener noreferrer"
            className="btn rounded-pill px-4 btn-whatsapp-yellow"
          >
            <i className="bi bi-whatsapp me-2"></i>
            {service.ctaFinal?.buttonText || "Chat on WhatsApp"}
          </a>
        </Container>
      </section>
    </>
  );
}
