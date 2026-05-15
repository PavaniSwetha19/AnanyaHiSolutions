"use client";

import { Container, Row, Col, Carousel, Accordion } from "react-bootstrap";
import ServiceCard from "@/components/ServiceCard";
import WhyChoose from "@/components/WhyChoose";
import ReviewSlider from "@/components/ReviewSlider";

import { useState, useEffect } from "react";

export default function Home() {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const formatted = now.toLocaleDateString('en-GB', options).replace(' at ', ' at ');
      // The formatting usually comes as "Wednesday, 13 May 2026, 15:33:53" or similar
      // We want: "Wednesday, 13 May 2026 at 03:33:53 pm"
      const datePart = now.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
      const timePart = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
      setDateTime(`${datePart} at ${timePart}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);
  const services = [
    {
      href: "/website-design",
      icon: "bi-laptop",
      title: "Website Design",
      description: "Creative, responsive, and modern website design tailored to your business needs.",
    },
    {
      href: "/digital-marketing",
      icon: "bi-megaphone",
      title: "Digital Marketing",
      description: "Data-driven online marketing strategies to boost your visibility and conversions.",
    },
    {
      href: "/mobile-application",
      icon: "bi-phone",
      title: "Mobile Application",
      description: "Custom Android & iOS mobile apps to engage your audience on the go.",
    },
    {
      href: "/ecommerce-application-development",
      icon: "bi-cart",
      title: "eCommerce Application",
      description: "Scalable eCommerce solutions with secure payment integration.",
    },
    {
      href: "/video-production",
      icon: "bi-camera-reels",
      title: "Video Production",
      description: "Engaging video content that tells your story and attracts more customers.",
    },
    {
      href: "/software-development",
      icon: "bi-cpu",
      title: "Software Development",
      description: "Custom software solutions to streamline and grow your business.",
    },
  ];

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
        {/* Hero Slider */}
        <Carousel interval={3000} fade indicators={false}>
          {[1, 2, 3, 4, 5].map((i) => (
            <Carousel.Item key={i}>
              <img
                src={`/assets/front/images/sliders/slider${i}.jpg`}
                className="d-block w-100"
                alt={`Slide ${i}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Services Section */}
          <section className="services-section py-5">
            <Container>
              <div className="headings text-center mb-5">
                <h1 className="primaryClr fw-bold">Web Design & Development <br /> Company Hyderabad</h1>
                <p>No Salesman, Just You & Your Professional Web Expert Agency.</p>
              </div>
              <Row className="g-4">
                {services.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </Row>
            </Container>
          </section>

        {/* About Summary */}
        <section className="bg-white py-5">
          <Container>
            <div className="headings mb-3 text-center">
              <h2 className="fw-bold">Comprehensive Digital Transformation <br /> Services in Hyderabad</h2>
            </div>
            <p>Welcome to <a href="https://www.ananyahisolutions.com" className="text-decoration-none">Ananya Hi Solutions</a>, your trusted partner for comprehensive digital transformation in Hyderabad. With over a decade of experience, we specialize in creating powerful digital experiences that drive measurable business growth.</p>
            <p>Our integrated approach combines cutting-edge web design, strategic digital marketing, custom software development, and innovative mobile solutions. We serve businesses of all sizes - from ambitious startups to established enterprises - helping them establish dominant online presence and achieve sustainable growth.</p>
            <p>What sets us apart is our commitment to delivering not just services, but solutions tailored to your unique business challenges. Our team of certified experts combines technical excellence with creative innovation, ensuring every project exceeds expectations and delivers tangible ROI.</p>
            <p>Based in Hyderabad, we proudly serve clients across India and globally, bringing local expertise with international standards. Our portfolio spans multiple industries including e-commerce, healthcare, education, finance, and technology sectors.</p>
          </Container>
        </section>

        <WhyChoose />
        
        <ReviewSlider />

        {/* FAQs */}
        <section className="bg-white py-5">
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

        {/* CTA */}
        <section className="cta text-center py-5">
          <Container>
            <div className="headings mb-4">
              <h2 className="fw-bold text-white mb-3">Let’s Build Your Growth Story Together</h2>
              <p className="text-white opacity-90">
                It’s <span className="text-warning fw-bold">{dateTime}</span> – the best time to take your
                business online! Choose the right package and chat directly with our web
                experts on WhatsApp.
              </p>
            </div>
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">
              <a href="/ananya-hi-solutions-package" className="btn btn-package px-4 py-2 fw-bold shadow">
                <i className="bi bi-calendar-check me-2"></i> Choose Package
              </a>
              <a
                href="https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20need%20a%20free%20consultation."
                className="btn btn-whatsapp-cta px-4 py-2 fw-bold shadow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-whatsapp me-2"></i> Chat on WhatsApp
              </a>
            </div>
          </Container>
          <div className="cta-bottom-line"></div>
        </section>
      </main>
    </>
  );
}
