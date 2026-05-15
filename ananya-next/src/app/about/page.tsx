"use client";

import { Container, Row, Col, Accordion } from "react-bootstrap";
import PageHero from "@/components/PageHero";
import WhyChoose from "@/components/WhyChoose";

export default function About() {
  const faqs = [
    {
      question: "What is the experience level of Ananya Hi Solutions team?",
      answer: "Our team comprises 50+ professionals with an average experience of 7+ years in their respective fields. This includes Google Ads certified specialists, Facebook Blueprint certified marketers, certified web developers, UX/UI designers, and project managers. Our leadership team brings over 15 years of combined digital industry experience."
    },
    {
      question: "How does Ananya Hi Solutions maintain quality standards?",
      answer: "We follow industry-best practices and international quality standards including ISO-compliant processes, agile methodology for project management, code review protocols, multi-stage quality assurance testing, and continuous team training. Every project undergoes rigorous quality checks before delivery."
    },
    {
      question: "What certifications does your team hold?",
      answer: "Our team holds multiple industry certifications including Google Ads Certification, Google Analytics Certification, Facebook Blueprint Certification, HubSpot Inbound Marketing Certification, AWS Cloud Practitioner, and various programming and design certifications. We invest continuously in team development to stay current with evolving technologies."
    },
    {
      question: "How does Ananya Hi Solutions approach client relationships?",
      answer: "We believe in building long-term partnerships, not just transactional relationships. Each client receives dedicated account management, transparent communication, regular progress updates, strategic consultation, and post-project support. We measure our success by your business growth and satisfaction."
    },
    {
      question: "What is Ananya Hi Solutions' company culture and work philosophy?",
      answer: "Our culture centers on continuous innovation, collaborative teamwork, client-centric thinking, and results-driven execution. We foster a learning environment where creativity thrives, encourage open communication, embrace challenges as opportunities, and celebrate both team and client successes."
    }
  ];

  return (
    <>
      <main>
        <PageHero
          title="About Ananya Hi Solutions"
          description="Your trusted partner in Website Design & Digital Marketing. We help businesses grow online with creativity, innovation, and measurable results."
        />

        <section className="about-section py-5" style={{ backgroundColor: "#f4f4f4" }}>
          <Container>
            <Row className="align-items-center g-5">
              <Col lg={6}>
                <img
                  src="/assets/front/images/digital-marketing-office-hyderabad.jpg"
                  alt="Our Team - Ananya Hi Solutions"
                  className="img-fluid rounded shadow"
                />
              </Col>
              <Col lg={6} className="about-content">
                <h2>Who We Are</h2>
                <p>
                  Founded in 2013,{" "}
                  <a className="text-decoration-none fw-bold" href="https://www.ananyahisolutions.com" style={{ color: "#0056b3" }}>
                    Ananya Hi Solutions
                  </a>{" "}
                  has evolved into one of Hyderabad&apos;s most trusted digital transformation partners. Our journey began with a simple vision: to help businesses harness the power of digital technology to achieve extraordinary growth. Today, we&apos;re proud to be a team of 50+ passionate professionals including certified digital marketers, experienced web designers, skilled developers, creative content specialists, and strategic consultants. Each team member brings specialized expertise and unwavering commitment to client success. Our core values drive everything we do: Innovation in every solution, Transparency in all communications, Excellence in execution, and Partnership in relationships. We don&apos;t just work for our clients; we work with them as strategic partners invested in their success.
                </p>
                <p>
                  Over the years, we&apos;ve successfully delivered 500+ projects, helping businesses across India and internationally to establish powerful digital presence, generate quality leads, and scale their operations. Our client retention rate of 95% speaks to the lasting relationships we build and the consistent value we deliver.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="bg-light py-5">
          <Container>
            <div className="headings mb-5 text-center">
              <h2 className="fw-bold">Frequently Asked Questions</h2>
            </div>
            <Accordion defaultActiveKey="0" className="custom-accordion">
              {faqs.map((faq, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Container>
        </section>

        <WhyChoose />
      </main>
    </>
  );
}
