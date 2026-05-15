"use client";

import { Container, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

export default function ReviewSlider() {
  // Duplicating the reviews to ensure the loop works smoothly when slidesPerView is 3
  const reviews = [
    {
      name: "Rahul Sharma",
      location: "Hyderabad, India",
      image: "/assets/front/images/review/review.jpg",
      text: "“Ananya Hi Solutions built my website and handled SEO. Within 3 months my leads doubled. Truly ROI-focused company!”",
    },
    {
      name: "Priya Reddy",
      location: "Secunderabad, India",
      image: "/assets/front/images/review/review.jpg",
      text: "“Very professional team! They designed a modern website for my boutique and helped with digital marketing. Highly recommend!”",
    },
    {
      name: "Arjun Patel",
      location: "Bangalore, India",
      image: "/assets/front/images/review/review.jpg",
      text: "“They manage my eCommerce store & ads. Great ROI and continuous support. I trust them fully with my online business.”",
    },
    {
      name: "Rahul Sharma",
      location: "Hyderabad, India",
      image: "/assets/front/images/review/review.jpg",
      text: "“Ananya Hi Solutions built my website and handled SEO. Within 3 months my leads doubled. Truly ROI-focused company!”",
    },
    {
      name: "Priya Reddy",
      location: "Secunderabad, India",
      image: "/assets/front/images/review/review.jpg",
      text: "“Very professional team! They designed a modern website for my boutique and helped with digital marketing. Highly recommend!”",
    },
    {
      name: "Arjun Patel",
      location: "Bangalore, India",
      image: "/assets/front/images/review/review.jpg",
      text: "“They manage my eCommerce store & ads. Great ROI and continuous support. I trust them fully with my online business.”",
    },
  ];

  return (
    <section className="reviews py-5 bg-light overflow-hidden">
      <Container>
        <div className="headings text-center mb-5">
          <h2 className="fw-bold">What Our Customers Say</h2>
          <p>No Salesman, Just You & Your Professional Web Expert Agency.</p>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="review-swiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <Card className="review-card p-4 h-100 shadow-sm text-center">
                <div className="mx-auto mb-3">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="review-img rounded-circle"
                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                  />
                </div>
                <Card.Body className="p-0">
                  <h5 className="mb-1 fw-bold text-dark">{review.name}</h5>
                  <small className="text-muted fst-italic d-block mb-2">{review.location}</small>
                  <div className="stars mb-3">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill text-warning me-1"></i>
                    ))}
                  </div>
                  <Card.Text className="review-text">
                    {review.text}
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
