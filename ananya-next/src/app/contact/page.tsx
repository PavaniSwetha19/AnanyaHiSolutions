"use client";

import { Container, Row, Col, Accordion, Form, Button } from "react-bootstrap";
import PageHero from "@/components/PageHero";
import SocialFollow from "@/components/SocialFollow";

export default function Contact() {
  const faqs = [
    {
      question: "What services do you provide?",
      answer: <>We specialize in <strong>Website Design, Digital Marketing, SEO, Branding</strong> and more — helping businesses grow their online presence.</>
    },
    {
      question: "Do you offer website redesign services?",
      answer: "Yes! We can redesign and upgrade your old website into a modern, responsive, and high-performing website that fits your brand."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: <>Absolutely ✅ All our websites are built to be <strong>100% responsive</strong> — optimized for mobile, tablet, and desktop users.</>
    },
    {
      question: "How can I get a quotation?",
      answer: <>Simply <strong>contact us</strong> with your requirements, and we'll send you a customized quotation within 24 hours.</>
    },
    {
      question: "Do you provide support after website launch?",
      answer: <>Yes, we provide <strong>ongoing maintenance & support</strong> packages to keep your website secure, updated, and performing at its best.</>
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
                      <Form.Control type="text" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label>Email *</Form.Label>
                      <Form.Control type="email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPhone">
                      <Form.Label>Phone *</Form.Label>
                      <Form.Control type="tel" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formMessage">
                      <Form.Label>Message *</Form.Label>
                      <Form.Control as="textarea" rows={4} required />
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
