"use client";

import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from "next/navigation";
import { useState, useRef } from "react";
import PageHero from "@/components/PageHero";

export default function JobDetails() {
  const params = useParams();
  const jobId = params.id;

  // In a real app, you would fetch job details based on ID.
  // For now, we only have one job (Content Creator).
  const job = {
    title: "Content Creator",
    meta: "Location: Hyderabad, Telangana | Experience: Min 2 yrs | Qualification: B.Sc",
    description: "Join our dynamic team as a Lead Content Writer where you will leverage your expertise in script writing content and copy writing and UX writing to craft compelling narratives that align with our content strategy. With 2 years of experience you will play a pivotal role in enhancing user engagement and driving brand consistency. This is an office-based role with no travel required offering a day shift schedule.",
    experience: "2 years",
    skills: [
      "Technical Skills: Script Writing Content and copy writing UX Writing Content Strategy",
      "Technology: Digital Learning",
      "Shift: Day"
    ],
    responsibilities: [
      "Develop and implement content strategies that align with the company's objectives and enhance user engagement.",
      "Collaborate with cross-functional teams to create cohesive and compelling content across various platforms.",
      "Lead the script writing process for multimedia projects ensuring clarity and engagement.",
      "Oversee the creation of copy that resonates with target audiences and drives brand consistency.",
      "Provide UX writing expertise to enhance user experience and interface design.",
      "Conduct thorough research to inform content creation and ensure accuracy and relevance.",
      "Analyze content performance metrics to refine strategies and improve outcomes.",
      "Mentor junior writers providing guidance and feedback to enhance their skills.",
      "Ensure all content adheres to brand guidelines and maintains a consistent voice.",
      "Stay updated with industry trends to incorporate innovative approaches in content creation.",
      "Manage multiple projects simultaneously ensuring timely delivery and quality standards.",
      "Collaborate with designers and developers to ensure content is effectively integrated into digital platforms.",
      "Facilitate workshops and brainstorming sessions to generate creative content ideas.",
      "Possess a strong background in script writing content and copy writing and UX writing.",
      "Demonstrate expertise in developing and executing content strategies.",
      "Exhibit excellent communication and collaboration skills.",
      "Have a keen eye for detail and a passion for storytelling.",
      "Show proficiency in using content management systems and analytics tools."
    ],
    location: "Begumpet, Hyderabad",
    type: "Content Writer"
  };

  const [showForm, setShowForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (showForm) {
    return (
      <main className="job-details-page">
        <section className="hero-about text-center">
          <Container className="position-relative z-2">
            <h1 className="fw-bold display-5">Careers at Ananya Hi Solutions</h1>
            <p>
              We are not just offering a job—we’re offering a place where your skills matter, your ideas are heard, and your growth becomes our priority. Join us and build a career where every day moves you closer to becoming the best version of yourself.
            </p>
          </Container>
        </section>

        <section className="py-5 bg-light">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8}>
                <Card className="border-0 shadow-sm rounded-4 p-4 p-md-5">
                  <Card.Body>
                    {isSubmitted ? (
                      <div className="text-center py-5">
                        <div className="mb-4">
                          <svg className="text-success mx-auto" width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"/>
                          </svg>
                        </div>
                        <h2 className="fw-bold mb-3 text-dark">Application Submitted Successfully!</h2>
                        <p className="text-muted leading-relaxed max-width-600 mx-auto fs-5">
                          Thank you for your interest in joining Ananya Hi Solutions! Your resume has been uploaded, and our hiring team has received your application. We will review your profile and contact you soon.
                        </p>
                        <div className="mt-5 d-flex flex-wrap justify-content-center gap-3">
                          <button 
                            onClick={() => { 
                              setIsSubmitted(false); 
                              setShowForm(false); 
                            }} 
                            className="btn btn-primary px-4 py-2.5 fw-bold rounded-pill shadow-sm pulsing-button"
                          >
                            Back to Job Details
                          </button>
                          <a 
                            href="/careers" 
                            className="btn btn-outline-primary px-4 py-2.5 fw-bold rounded-pill shadow-sm"
                            style={{ borderColor: '#1485cb', color: '#1485cb' }}
                            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#1485cb'; e.currentTarget.style.color = '#fff'; }}
                            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#1485cb'; }}
                          >
                            Browse More Jobs
                          </a>
                        </div>
                      </div>
                    ) : (
                      <>
                        <h2 className="text-center fw-bold mb-5">Apply for this Job</h2>
                        <form onSubmit={(e) => {
                          e.preventDefault();
                          const fileInput = fileInputRef.current;
                          if (fileInput && fileInput.files && fileInput.files.length > 0) {
                            const file = fileInput.files[0];
                            const fileName = file.name.toLowerCase();
                            const allowedExtensions = [".pdf", ".doc", ".docx"];
                            const isValid = allowedExtensions.some(ext => fileName.endsWith(ext));
                            
                            if (!isValid) {
                              alert("Error: Only PDF, DOC, and DOCX files are allowed as resumes!");
                              return;
                            }
                          }
                          setIsSubmitted(true);
                        }}>
                          <div className="mb-4">
                            <label className="fw-bold mb-2">Job Applied For</label>
                            <select className="form-select rounded-3 p-2 px-3 border-secondary-subtle" defaultValue="">
                              <option value="" disabled>Select Job</option>
                              <optgroup label="Development">
                                <option>Full Stack Developer</option>
                                <option>MERN Stack Developer</option>
                                <option>Web Developer</option>
                                <option>React JS Developer</option>
                                <option>Android Developer</option>
                              </optgroup>
                              <optgroup label="Marketing">
                                <option>Digital Marketing Executive</option>
                                <option>SEO Specialist</option>
                                <option>Paid Ads Expert</option>
                                <option>SEO Executive</option>
                                <option>Social Media Executive</option>
                                <option>Content Writer</option>
                                <option>Telecaller</option>
                                <option>Field Marketing Executive</option>
                              </optgroup>
                              <optgroup label="Designing">
                                <option>Graphic Designer</option>
                                <option>Video Editor</option>
                                <option>Graphic & Video Editor</option>
                                <option>UI/UX Designer</option>
                              </optgroup>
                              <optgroup label="Training">
                                <option>SAP FICO Trainer</option>
                                <option>Digital Marketing Trainer</option>
                                <option>Full Stack Trainer</option>
                              </optgroup>
                            </select>
                          </div>

                          <div className="mb-4">
                            <label className="fw-bold mb-2">Full Name</label>
                            <input type="text" className="form-control rounded-3 p-2 px-3 border-secondary-subtle" required />
                          </div>

                          <div className="mb-4">
                            <label className="fw-bold mb-2">Email</label>
                            <input type="email" className="form-control rounded-3 p-2 px-3 border-secondary-subtle" required />
                          </div>

                          <div className="mb-4">
                            <label className="fw-bold mb-2">Phone Number</label>
                            <input type="tel" className="form-control rounded-3 p-2 px-3 border-secondary-subtle" required />
                          </div>

                          <div className="mb-4">
                            <label className="fw-bold mb-2">Full Address</label>
                            <input type="text" className="form-control rounded-3 p-2 px-3 border-secondary-subtle" required />
                          </div>

                          <div className="mb-5">
                            <label className="fw-bold mb-2">Upload Resume (PDF/DOC)</label>
                            <div className="input-group">
                              <input 
                                type="file" 
                                ref={fileInputRef}
                                accept=".pdf,.doc,.docx"
                                className="form-control rounded-3 border-secondary-subtle" 
                                required 
                              />
                            </div>
                          </div>

                          <div className="text-start">
                            <button type="submit" className="btn btn-primary px-4 py-2 fw-bold rounded-pill shadow-sm pulsing-button">
                              Submit Application
                            </button>
                          </div>
                        </form>
                      </>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        <style jsx>{`
          .hero-about {
            background: linear-gradient(rgba(6, 66, 103, 0.92), rgba(6, 66, 103, 0.92)),
              url('/assets/front/images/digital-marketing-office-hyderabad.jpg') center/cover no-repeat;
            padding: 90px 0;
            color: #fff;
          }
        `}</style>
      </main>
    );
  }

  return (
    <main className="job-details-page">
      <section className="hero-about text-center">
        <Container className="position-relative z-2">
          <h1 className="fw-bold display-5">{job.title} – Careers at Ananya Hi Solutions</h1>
          <p className="lead fw-medium text-white">
            {job.meta.split("|").map((part, index, arr) => {
              const splitIdx = part.indexOf(":");
              if (splitIdx === -1) return <span key={index}>{part}</span>;
              const label = part.substring(0, splitIdx).trim();
              const value = part.substring(splitIdx + 1);
              return (
                <span key={index}>
                  <strong>{label}:</strong>{value}
                  {index < arr.length - 1 && " | "}
                </span>
              );
            })}
          </p>
        </Container>
      </section>

      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="border-0 shadow-sm rounded-4 p-4 p-md-5">
                <Card.Body>
                  <div className="mb-5">
                    <h3 className="fw-bold mb-4">Job Description</h3>
                    <p className="text-muted leading-relaxed">{job.description}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="fw-bold mb-3">Experience :</h4>
                    <p className="text-muted">{job.experience}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="fw-bold mb-3">Required Skills :</h4>
                    <ol className="text-muted">
                      {job.skills.map((skill, idx) => (
                        <li key={idx} className="mb-2">{skill}</li>
                      ))}
                    </ol>
                  </div>

                  <div className="mb-5">
                    <h4 className="fw-bold mb-3">Responsibilities :</h4>
                    <ol className="text-muted">
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx} className="mb-2">{resp}</li>
                      ))}
                    </ol>
                  </div>

                  <div className="mb-4">
                    <h4 className="fw-bold mb-1">Job Location :</h4>
                    <p className="text-muted">{job.location}</p>
                  </div>

                  <div className="mb-5">
                    <h4 className="fw-bold mb-1">Job Type :</h4>
                    <p className="text-muted">{job.type}</p>
                  </div>
                </Card.Body>
              </Card>

              <div className="mt-4">
                <button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setShowForm(true);
                  }} 
                  className="btn btn-apply-now"
                >
                  Apply Now
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <style jsx>{`
        .hero-about {
          background: linear-gradient(rgba(6, 66, 103, 0.92), rgba(6, 66, 103, 0.92)),
            url('/assets/front/images/digital-marketing-office-hyderabad.jpg') center/cover no-repeat;
          padding: 90px 0;
          color: #fff;
        }
        .leading-relaxed {
          line-height: 1.8;
        }
        .pulsing-button {
          animation: breathingShadow 3s ease-in-out infinite;
          background-color: #0e527a !important;
          border: none !important;
          transition: all 0.3s ease;
        }
        @keyframes breathingShadow {
          0%, 100% { 
            box-shadow: 0 5px 15px rgba(14, 82, 122, 0.1); 
          }
          50% { 
            box-shadow: 0 12px 30px rgba(14, 82, 122, 0.35); 
          }
        }
      `}</style>
    </main>
  );
}
