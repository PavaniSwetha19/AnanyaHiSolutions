"use client";

import { Container, Row, Col } from "react-bootstrap";
import WhyChoose from "@/components/WhyChoose";

export default function Packages() {
  const marketingPackages = [
    {
      title: "Social Media Marketing",
      subtitle: "Creative, Consistent & Conversion-Focused",
      color: "#1485cb",
      features: [
        "15-18 High-Quality Creative Posts.",
        "Competitor Analysis.",
        "Paid Meta Ads.",
        "Strategy & Content Calendar.",
      ],
      blurredFeatures: [
        "Monthly Insights & ROI Reports",
        "Social Media Manager Support.",
      ],
      link: "social-media-marketing-package-hyderabad"
    },
    {
      title: "Google Ads/PPC Ads",
      subtitle: "From Clicks to Customers",
      color: "#25D366",
      features: [
        "Ads Account Setup & Audit.",
        "Advanced Keyword Research.",
        "Conversion Tracking.",
        "Audience Targeting Strategies.",
      ],
      blurredFeatures: [
        "Daily Campaign Monitoring",
        "Ads Specialist Support",
      ],
      link: "google-ads-package-hyderabad"
    },
    {
      title: "Search Engine Optimization(SEO)",
      subtitle: "From Keywords to Conversions",
      color: "#f6b93b",
      features: [
        "Free Website Audit.",
        "Keyword Research & Strategy.",
        "Competitor Analysis & Reporting.",
        "High-Quality Backlink Building.",
      ],
      blurredFeatures: [
        "On-Page SEO Optimization.",
        "Monthly Performance & Ranking Reports.",
      ],
      link: "seo-package-hyderabad"
    }
  ];

  const websitePackages = [
    {
      title: "Starter Static Website",
      subtitle: "Perfect for Small Businesses",
      color: "#1485cb",
      features: [
        "Delivery Within 3 Working Days.",
        "FREE Web Hosting & SSL for 1 year.",
        "1 Week FREE Support After Deployment.",
        "Responsive Design.",
      ],
      blurredFeatures: [
        "Basic SEO Setup.",
        "Browser Compatibility Testing.",
        "Google Page Speed Optimized.",
      ],
      link: "static-website-package-hyderabad"
    },
    {
      title: "Dynamic Website",
      subtitle: "Best for Growing Businesses",
      color: "#25D366",
      features: [
        "Unlimited Dynamic Web Pages Website.",
        "FREE Web Hosting & SSL for 1 year.",
        "1 Week FREE Support After Deployment.",
        "Responsive Design.",
      ],
      blurredFeatures: [
        "Basic SEO Setup.",
        "Browser Compatibility Testing.",
        "Google Page Speed Optimized.",
      ],
      link: "dynamic-website-package-hyderabad"
    },
    {
      title: "E-Commerce Website",
      subtitle: "Ideal for Online Stores",
      color: "#f6b93b",
      features: [
        "Add & Manage Unlimited Store Products.",
        "Shopping Cart System.",
        "Easy Checkout System.",
        "Secure Payment Gateway Integration.",
      ],
      blurredFeatures: [
        "Basic SEO Setup.",
        "Browser Compatibility Testing.",
        "Google Page Speed Optimized.",
      ],
      link: "ecommerce-website-package-hyderabad"
    }
  ];

  const specialPackages = [
    {
      title: "Spa Packages",
      subtitle: "Perfect for Small Businesses",
      color: "#1485cb",
      features: [
        "Performance Insights Report.",
        "Social Media Setup (Instagram & Facebook).",
        "Social Media Management.",
        "Content Strategy & Planning.",
      ],
      blurredFeatures: [
        "Basic SEO Setup.",
        "Browser Compatibility Testing.",
        "Google Page Speed Optimized.",
      ],
      link: "spa-package-hyderabad"
    }
  ];

  return (
    <>
      <main>
        <section className="packages-section pt-5 bg-white">
          <Container>
            <div className="text-center mb-5">
              <h2 className="fw-bold display-6">Digital Marketing Packages</h2>
              <p className="text-muted lead">Ads That Work While You Sleep.</p>
            </div>
            <Row className="g-4">
              {marketingPackages.map((pkg, index) => (
                <Col md={6} lg={4} key={index}>
                  <PackageCard pkg={pkg} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="packages-section py-5">
          <Container>
            <div className="text-center mb-5">
              <h2 className="fw-bold display-6">Website Packages</h2>
              <p className="text-muted lead">No More Website Worries. Say Goodbye to Website Concerns.</p>
            </div>
            <Row className="g-4">
              {websitePackages.map((pkg, index) => (
                <Col md={6} lg={4} key={index}>
                  <PackageCard pkg={pkg} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="packages-section py-5 bg-white">
          <Container>
            <div className="text-center mb-5">
              <h2 className="fw-bold display-6">Special Packages</h2>
              <p className="text-muted lead">Exclusive Packages Crafted Just for You ✨.</p>
            </div>
            <Row className="g-4">
              {specialPackages.map((pkg, index) => (
                <Col md={6} lg={4} key={index}>
                  <PackageCard pkg={pkg} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <WhyChoose />
      </main>
    </>
  );
}

function PackageCard({ pkg }: { pkg: any }) {
  return (
    <div className="package-card h-100 shadow-sm">
      <div 
        className="package-header text-white text-center py-4 rounded-top" 
        style={{ backgroundColor: pkg.color, color: pkg.color === "#f6b93b" ? "#000" : "#fff" }}
      >
        <h5 className="mb-1">{pkg.title}</h5>
        <p className="mb-0">{pkg.subtitle}</p>
      </div>
      <div className="package-body p-4">
        <ul className="list-unstyled mb-4 feature-list">
          {pkg.features.map((feature: string, i: number) => (
            <li key={i}><i className="bi bi-check-circle-fill text-success me-2"></i>{feature}</li>
          ))}
          {pkg.blurredFeatures.map((feature: string, i: number) => (
            <li key={i} className="blurred"><i className="bi bi-check-circle-fill text-success me-2"></i>{feature}</li>
          ))}
        </ul>
        <div className="my-2 text-center">
          <h6 className="fw-bold text-dark">Want to know what’s inside our hidden plans?</h6>
          <a href={`/package-details/${pkg.link}`} className="btn btn-gradient">
            <i className="bi bi-unlock-fill me-2"></i>Unlock Full Packages
          </a>
        </div>
      </div>
    </div>
  );
}
