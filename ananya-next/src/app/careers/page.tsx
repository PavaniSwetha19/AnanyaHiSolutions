"use client";

import { Container, Row, Col, Alert } from "react-bootstrap";
import PageHero from "@/components/PageHero";

export default function Careers() {
  // Static data for now. In a real app, this would come from an API or DB.
  const jobs = [
    {
      id: 1,
      title: "Content Creator",
      qualification: "B.Sc",
      experience: "Min 2 Yrs",
      location: "Hyderabad, Telangana"
    }
  ];

  return (
    <>
      <main>
        <PageHero
          title="Careers at Ananya Hi Solutions"
          description="Join a fast-growing digital agency where innovation, learning and real-world impact come together. Build your career with a team that values skills, creativity and ambition."
          showCTA={false}
        />

        <section className="job-section py-5" id="job-openings">
          <Container>
            <h2 className="section-title text-center mb-5">Current Job Openings</h2>

            <Row className="g-4">
              {jobs.length > 0 ? (
                jobs.map((job) => (
                  <Col lg={4} md={6} key={job.id}>
                    <div className="job-card">
                      <h4>{job.title}</h4>
                      <ul>
                        <li><strong>Qualification:</strong> {job.qualification}</li>
                        <li><strong>Experience:</strong> {job.experience}</li>
                        <li><strong>Location:</strong> {job.location}</li>
                      </ul>

                      <div className="mt-4">
                        <a href={`/job-details/${job.id}`} className="btn btn-primary w-100">
                          View Full Job Details
                        </a>
                      </div>
                    </div>
                  </Col>
                ))
              ) : (
                <Col xs={12} className="text-center">
                  <Alert variant="warning" className="p-4">
                    🚀 No job openings available right now. Check back soon or follow us on social media for updates!
                  </Alert>
                </Col>
              )}
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}
