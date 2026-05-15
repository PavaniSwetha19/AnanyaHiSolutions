"use client";

import { Container } from "react-bootstrap";

export default function Portfolio() {
  const portfolioItems = [
    {
      title: "Shanmukha Gold",
      description: "Built a strong digital presence with eye-catching creatives, AI-optimized Meta Ads, and a high-trust website that boosted engagement and conversions.",
      link: "/assets/front/portfolio/shanmukha-gold-portfolio.pdf",
      position: "left",
      align: "right-align"
    },
    {
      title: "Mad Academy",
      description: "Generated high-quality student leads and strong ROI through consistent organic posting and AI-optimized Meta Ads campaigns.",
      link: "/assets/front/portfolio/mad-academy.pdf",
      position: "right",
      align: "left-align"
    },
    {
      title: "Xena & Zuxa Beauty Spa",
      description: "Generated high-quality local spa leads using AI-optimized Meta and Google Ads, driving consistent bookings and strong ROI.",
      link: "/assets/front/portfolio/Spa.pdf",
      position: "left",
      align: "right-align"
    },
    {
      title: "Q Path Diagnostics",
      description: "Turned searches into real patient calls with ROI-driven ads and a conversion-optimized healthcare website.",
      link: "/assets/front/portfolio/qpath.pdf",
      position: "right",
      align: "left-align"
    }
  ];

  return (
    <>
      <main>
        <section className="journey-section py-5">
          <Container className="position-relative">
            {/* Section Heading */}
            <div className="text-center mb-5">
              <h1 className="journey-title">
                Our Portfolio Speaks for <span>Our Results</span>
              </h1>
              <p className="journey-subtitle">
                Every project in our portfolio represents a business that trusted us to grow online.
              </p>
            </div>

            {/* Timeline */}
            <div className="timeline">
              <span className="timeline-line"></span>

              {portfolioItems.map((item, index) => (
                <div key={index} className={`timeline-item ${item.position}`}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-card">
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>

                    <div className={`card-action ${item.align}`}>
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-show-work"
                      >
                        Show Work <span>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
