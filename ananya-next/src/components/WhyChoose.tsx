import { Container, Row, Col } from "react-bootstrap";

export default function WhyChoose() {
  const features = [
    { icon: "bi-graph-up-arrow", title: "ROI Focused", description: "We deliver measurable growth with strategies built for results." },
    { icon: "bi-headset", title: "24/7 Support", description: "Round-the-clock assistance to ensure your business never stops." },
    { icon: "bi-people", title: "Expert Team", description: "Our skilled professionals bring innovation & expertise to every project." },
    { icon: "bi-award", title: "Proven Results", description: "Trusted by clients with successful projects & long-term partnerships." },
  ];

  return (
    <section className="why-us text-center text-white py-5">
      <Container>
        <div className="headings mb-0">
          <h2 className="text-white fw-bold mb-2">Why Choose Ananya Hi Solutions?</h2>
          <p className="text-white opacity-75 mb-0">No Salesman, Just You & Your Professional Web Expert Agency.</p>
        </div>

        <Row className="g-4 mt-1">
          {features.map((feature, index) => (
            <Col md={3} key={index}>
              <div className="why-card">
                <i className={`bi ${feature.icon}`}></i>
                <h5>{feature.title}</h5>
                <p>{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
