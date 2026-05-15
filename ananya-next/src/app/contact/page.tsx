"use client";

import { Container, Row, Col, Accordion, Form, Button } from "react-bootstrap";
import PageHero from "@/components/PageHero";
import SocialFollow from "@/components/SocialFollow";

export default function Contact() {
  const faqs = [
    {
      question: "What services does Ananya Hi Solutions provide in Hyderabad?",
      answer: "Ananya Hi Solutions offers comprehensive digital services including website design and development, digital marketing (SEO, PPC, social media), mobile application development, e-commerce solutions, video production, and custom software development. We provide end-to-end digital transformation solutions for businesses of all sizes."
    },
    {
      question: "How does Ananya Hi Solutions ensure quality in digital marketing campaigns?",
      answer: "We employ data-driven strategies with continuous monitoring and optimization. Our certified digital marketing experts use advanced analytics, A/B testing, and industry-leading tools to track KPIs, measure ROI, and refine campaigns for maximum performance. We provide transparent monthly reports showing measurable results."
    },
    {
      question: "What makes Ananya Hi Solutions different from other digital agencies in Hyderabad?",
      answer: "Our key differentiators include 10+ years of proven experience, a team of certified experts, integrated service offerings under one roof, customized solutions rather than templates, transparent pricing, dedicated account management, and a proven track record of delivering measurable ROI for clients across diverse industries."
    },
    {
      question: "How long does it typically take to complete a website design project?",
      answer: "Project timelines vary based on complexity and requirements. A standard business website takes 4-6 weeks, while complex e-commerce platforms or custom web applications may take 8-12 weeks. We provide detailed project timelines during consultation and maintain regular communication throughout the development process."
    },
    {
      question: "What industries does Ananya Hi Solutions specialize in serving?",
      answer: "We have extensive experience serving diverse industries including e-commerce, healthcare, education, real estate, manufacturing, finance, technology startups, hospitality, and professional services. Our adaptable approach allows us to understand unique industry challenges and deliver tailored solutions that drive results in any sector."
    }
  ];

  return (
    <>
      <main>
        <PageHero
          title="Contact Us"
          description="We’re here to help! Whether you need a new website, marketing strategy, or support — our Hyderabad team is just a click away."
        />

        <section className="contact-section py-5">
          <Container>
            <Row className="g-5">
              {/* Form */}
              <Col lg={6}>
                <div className="contact-info-card shadow-sm h-100">
                  <div className="headings mb-4">
                    <h2 className="primaryClr">Get in Touch</h2>
                  </div>

                  <Form>
                    <Form.Group className="mb-3" controlId="formName">
                      <Form.Label>Full Name *</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label>Email *</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPhone">
                      <Form.Label>Phone *</Form.Label>
                      <Form.Control type="tel" placeholder="Enter phone number" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formMessage">
                      <Form.Label>Message *</Form.Label>
                      <Form.Control as="textarea" rows={4} placeholder="Your message" required />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                      <i className="bi bi-send-fill me-2"></i> Send Message
                    </Button>
                  </Form>
                </div>
              </Col>

              {/* Contact Info */}
              <Col lg={6}>
                <div className="contact-info-card shadow-sm mb-4">
                  <div className="headings mb-4">
                    <h2 className="primaryClr">Our Office</h2>
                  </div>

                  <p><i className="bi bi-geo-alt-fill me-2 text-primary"></i> 401 Sravya Vatika, Greenlands, Begumpet, Hyderabad, Telangana-500016</p>
                  <p>
                    <i className="bi bi-telephone-fill me-2 text-primary"></i>
                    <a href="tel:+917673935353" className="contact-link">(+91) 76739-35353</a>
                  </p>
                  <p>
                    <i className="bi bi-envelope-fill me-2 text-primary"></i>
                    <a href="mailto:info@ananyahisolutions.com" className="contact-link">info@ananyahisolutions.com</a>
                  </p>
                  <p>
                    <i className="bi bi-whatsapp me-2 text-primary"></i>
                    <a href="https://wa.me/917673935353" target="_blank" rel="noopener noreferrer" className="contact-link">Chat on WhatsApp</a>
                  </p>
                </div>

                <div className="map-box shadow-sm rounded overflow-hidden" style={{ height: "350px" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6024941622372!2d78.45525757516587!3d17.43085398346383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9183fd7f0d1b%3A0x33152b32540e8bdc!2sAnanya%20Hi%20Solutions!5e0!3m2!1sen!2sin!4v1765180884703!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="bg-light py-5">
          <Container>
            <div className="text-center mb-5">
              <h2 className="primaryClr fw-bold">❓ Frequently Asked Questions</h2>
              <p className="text-muted">Clear answers to help you understand our services better.</p>
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

        <SocialFollow />
      </main>
    </>
  );
}
