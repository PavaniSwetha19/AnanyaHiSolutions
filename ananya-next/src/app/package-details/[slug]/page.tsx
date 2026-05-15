"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import WhyChoose from "@/components/WhyChoose";
import confetti from "canvas-confetti";

const packageNames: { [key: string]: string } = {
  "social-media-marketing-package-hyderabad": "Social Media Marketing",
  "google-ads-package-hyderabad": "Google Ads/PPC Ads",
  "seo-package-hyderabad": "Search Engine Optimization(SEO)",
  "static-website-package-hyderabad": "Starter Static Website",
  "dynamic-website-package-hyderabad": "Dynamic Website",
  "ecommerce-website-package-hyderabad": "E-Commerce Website",
  "spa-package-hyderabad": "Spa Packages",
};

export default function PackageDetailsLeadGen() {
  const params = useParams();
  const slug = params?.slug as string;
  const packageName = packageNames[slug] || "Digital";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    source: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    source: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  
  useEffect(() => {
    if (isSubmitted) {
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

      function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
      }

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        // Start from top (y: 0) and random x positions
        confetti({ 
          ...defaults, 
          particleCount, 
          origin: { x: Math.random(), y: 0 },
          gravity: 1.2,
          scalar: 0.8,
          drift: Math.random() - 0.5 
        });
      }, 250);
      
      return () => clearInterval(interval);
    }
  }, [isSubmitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      fullName: formData.fullName ? "" : "The Full Name field is required.",
      email: formData.email ? "" : "The Email field is required.",
      phone: formData.phone ? "" : "The Phone Number field is required.",
      source: (formData.source && formData.source !== "-- Select Source --") ? "" : "The Referral Source field is required.",
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some(err => err !== "")) {
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const marketingPlans = {
    "Social Media Marketing": [
      {
        name: "Basic Plan",
        price: "₹16,999 + GST/Month",
        icon: "bi-star-fill",
        color: "#1485cb",
        features: [
          "Facebook, Instagram Platform",
          "Social Media Audit for All Platforms",
          "Standard 10 to 12 Creative Design Per Month",
          "2 Revision per Post",
          "5 to 6 Reels Per Month",
          "Standard Content Calendar Creation",
          "Monthly Performance Report",
          "Trending-Based Creative Posts",
          "Description, Hashtag Research & Optimization",
          "AI-Powered Creative",
          "Profile Optimization",
          "Meta Business Suite(Setup)",
          "Ad Manager (Setup)",
          "Paid Ad Campaigns(Setup & Manage FB/IG Ads Campaigns)",
          "Only 2 Ads Campaign Setup",
          "Audience Targeting",
          "Ad Budget Management(Daily/weekly Budget Allocation & Ad Optimization)",
          "Audience Research(Demographics, Interests & Behavior Insights)",
          "Best ROI",
          "Campaign Objectives",
          "All the festival posters are included in the given commitment."
        ]
      },
      {
        name: "Standard Plan",
        price: "₹22,999 + GST/Month",
        icon: "bi-gem",
        color: "#f39c12",
        features: [
          "Facebook, Instagram Platforms & Google Business Profile",
          "Social Media Audit for All Platforms",
          "Premium 12 to 15 Creative Design Per Month",
          "3 Revision per Post",
          "8 to 10 Reels Per Month",
          "Premium Content Calendar Creation",
          "Weekly Performance Report",
          "Trending-Based Creative Posts",
          "Description, Hashtag Research & Optimization",
          "AI-Powered Creative",
          "Profile Optimization",
          "Meta Business Suite(Setup)",
          "Ad Manager (Setup)",
          "Paid Ad Campaigns(Setup & Manage FB/IG Ads Campaigns)",
          "3 Ads Campaign Setup",
          "Audience Targeting",
          "Ad Budget Management(Daily/weekly Budget Allocation & Ad Optimization)",
          "Audience Research(Demographics, Interests & Behavior Insights)",
          "ROI Funnel Strategy",
          "Campaign Objectives",
          "Brand Health Check Across All Platforms",
          "Competitor & Market Research",
          "Community Building",
          "Analytics, Performance Monitoring & Reporting",
          "Business Manager(Setup)",
          "Remarketing",
          "Pixel Setup",
          "Ads A/B Testing(Testing Different Creatives, Copies, CTA)",
          "Conversion & ROI Tracking",
          "Ad Creative Design(Images, Videos, Carousel Ads)",
          "Strategy & Planning",
          "High Conversion",
          "Ad Placement(Optimize Auto/Manual Placements Across Mobile/ Tablet and Computer)",
          "All the festival posters are included in the given commitment."
        ]
      },
      {
        name: "Premium Plan",
        price: "₹49,999 + GST/Month",
        icon: "bi-trophy-fill",
        color: "#9b59b6",
        features: [
          "Facebook, Instagram, Google Business Profile & YouTube",
          "Social Media Audit for All Platforms",
          "Premium 12 to 15 Creative Design Per Month",
          "3 Revision per Post",
          "12 to 15 Reels Per Month",
          "2 shoots ( camera shoot) - each shoot duration 6 hours",
          "Premium Content Calendar Creation",
          "Weekly Performance Report",
          "Trending-Based Creative Posts",
          "Festival & National Day Posts(creative posters for special occasions)",
          "Description, Hashtag Research & Optimization",
          "AI-Powered Creative",
          "Profile Optimization",
          "Meta Business Suite(Setup)",
          "Ad Manager (Setup)",
          "Paid Ad Campaigns(Setup & Manage FB/IG Ads Campaigns)",
          "4 Ads Campaign Setup",
          "Audience Targeting",
          "Ad Budget Management(Daily/weekly Budget Allocation & Ad Optimization)",
          "Audience Research(Demographics, Interests & Behavior Insights)",
          "ROI Funnel Strategy",
          "Campaign Objectives",
          "Community Building",
          "Analytics, Performance Monitoring & Reporting",
          "Remarketing",
          "Pixel Setup",
          "Ads A/B Testing(Testing Different Creatives, Copies, CTA)",
          "Conversion & ROI Tracking",
          "Ad Creative Design(Images, Videos, Carousel Ads)",
          "Strategy & Planning",
          "High Conversion",
          "Ad Placement(Optimize Auto/Manual Placements Across Mobile/ Tablet and Computer)",
          "All the festival posters are included in the given commitment.",
          "Youtube SEO",
          "6 to 8 videos for YouTube - duration (3-5 mins), 6 to 8 thumbnails."
        ]
      }
    ],
    "Google Ads/PPC Ads": [
      {
        name: "Basic Plan",
        price: "₹9,999 + GST/Month",
        icon: "bi-star-fill",
        color: "#1485cb",
        features: [
          "Campaign Setup for Search Ads",
          "Daily Ads Optimization",
          "Budget Optimization Guidance",
          "Basic Keyword Research (8-10 keywords)",
          "Ad Copywriting (Up to 3 Ad Variations)",
          "Location Targeting Setup",
          "Ad Extensions Setup (Call, Location, Sitelink)",
          "Conversion Tracking Setup",
          "Weekly Performance Report",
          "Budget Optimization Guidance",
          "Click & Conversion Analysis",
          "Monthly Report & Insights"
        ]
      },
      {
        name: "Standard Plan",
        price: "₹16,999 + GST/Month",
        icon: "bi-gem",
        color: "#f39c12",
        features: [
          "Everything in Basic",
          "Campaign Setup for Search & Display Ads",
          "Advanced Keyword Research (15-20 keywords)",
          "Ad Copywriting (Up to 5 Ad Variations)",
          "Location & Device Targeting Setup",
          "Ad Extensions Setup (Call, Location, Sitelink, Callout)",
          "Conversion Tracking Setup",
          "Daily Ads Optimization & Bid Adjustments",
          "A/B Testing for Ads & Landing Pages",
          "Competitor Ads Analysis",
          "Advanced Negative Keywords Optimization",
          "Monthly Performance Report & ROI Insights",
          "Dedicated Google Ads Manager"
        ]
      },
      {
        name: "Premium Plan",
        price: "₹26,999 + GST/Month",
        icon: "bi-trophy-fill",
        color: "#9b59b6",
        features: [
          "Everything in Standard",
          "Campaign Setup for Search, Display & Shopping Ads",
          "Comprehensive Keyword Research (50+ keywords)",
          "Ad Copywriting & Creative Banner Design",
          "Audience Segmentation & Demographic Targeting",
          "A/B Testing for Ads, Landing Pages & CTAs",
          "CRO Suggestions",
          "Remarketing Setup (Visitors Retargeting)",
          "Conversion Rate Optimization Suggestions",
          "Advanced Negative Keywords Optimization",
          "Pixel & Conversion Tracking Setup",
          "Daily Ads Optimization & Bid Management",
          "Competitor & Market Analysis",
          "Weekly Performance Reports & Recommendations",
          "ROI Funnel Strategy & Scaling Consultation",
          "Shopping Ads (for eCommerce)",
          "YouTube Video Ads Setup (Optional)",
          "Dedicated Senior Google Ads Specialist",
          "High Conversion Strategy & Planning"
        ]
      }
    ],
    "Search Engine Optimization(SEO)": [
      {
        name: "Basic Plan",
        price: "₹11,999 + GST/Month",
        icon: "bi-star-fill",
        color: "#1485cb",
        features: [
          "Website SEO Audit & Report",
          "Basic Keyword Research (10-15 Keywords)",
          "On-Page Optimization (Meta Tags, Titles, Descriptions)",
          "Technical SEO Setup (Robots.txt, Sitemap, Canonical Tags)",
          "Google Search Console & Analytics Setup",
          "Mobile & Page Speed Optimization",
          "Image Optimization (Alt Tags & Compression)",
          "Internal Linking Optimization",
          "Local SEO Setup (Google My Business Optimization)",
          "Monthly Ranking Performance Report",
          "Basic Backlink Suggestions",
          "Competitor Keyword Overview",
          "Best ROI-Focused SEO Strategy"
        ]
      },
      {
        name: "Standard Plan",
        price: "₹16,999 + GST/Month",
        icon: "bi-gem",
        color: "#f39c12",
        features: [
          "Everything in Basic",
          "Advanced Keyword Research (20-30 Keywords)",
          "Comprehensive On-Page SEO (Schema, Structured Data, OG Tags)",
          "Technical SEO Audit & Fixes",
          "Off-Page SEO",
          "High-Quality Backlink Building (10-15 Links/Month)",
          "Local SEO Optimization",
          "Google My Business Optimization & Posting (4 Posts/Month)",
          "Content Optimization for Existing Pages",
          "Landing Page SEO Recommendations",
          "Monthly Keyword Ranking Report",
          "Competitor SEO Analysis & Strategy",
          "Image, Video & Blog SEO Optimization",
          "Dedicated SEO Account Manager",
          "Best ROI-Focused SEO Strategy"
        ]
      },
      {
        name: "Premium Plan",
        price: "₹24,999 + GST/Month",
        icon: "bi-trophy-fill",
        color: "#9b59b6",
        features: [
          "Everything in Standard",
          "Advanced Keyword Research (40+ Keywords)",
          "Content Strategy & Blog Writing (Up to 4 Blogs/Month)",
          "Authority Backlink Building (30+ High-DA Links/Month)",
          "Guest Posting & Outreach Campaigns",
          "Advanced Technical SEO (Core Web Vitals, Crawl Budget Optimization)",
          "Local SEO Domination for Hyderabad (Citations, Reviews, NAP Consistency)",
          "Competitor Gap Analysis & Content Clusters",
          "Conversion Rate Optimization (CRO) Suggestions",
          "Schema Markup Implementation (FAQ, Product, Review, Local)",
          "Monthly Detailed SEO Reports & Growth Insights",
          "E-commerce / Service Page SEO Optimization",
          "Brand Visibility & Reputation Management",
          "Dedicated Senior SEO Expert & Strategy Consultation",
          "High Conversion SEO Strategy & Continuous Monitoring",
          "Best ROI-Focused SEO Campaign"
        ]
      }
    ],
    "Starter Static Website": [
      {
        name: "Basic Plan",
        price: "₹5,999 + GST",
        icon: "bi-star-fill",
        color: "#1485cb",
        features: [
          "Single Page Website (Scrolling Layout)",
          "Modern Mobile-Friendly Design",
          "Eye-Catching Hero Banner with CTA Button",
          "Business Info, Services, Gallery & Contact Section",
          "WhatsApp & Call Button Integration",
          "Free Contact Form Setup (Email or WhatsApp Lead)",
          "Social Media Links Integration",
          "Basic SEO Setup (Meta Title, Description, Keywords)",
          "Google Map Embed for Location",
          "Delivery Within 3 Working Days",
          "1 Free Revision",
          "Perfect for Startups, Freelancers & Local Businesses",
          "Mobile-Friendly/Responsive Design",
          "Effective Call-To-Actions & Easy Navigation",
          "Brand Typography & Color Code",
          "Complete Deployment"
        ]
      },
      {
        name: "Standard Plan",
        price: "₹9,999 + GST",
        icon: "bi-gem",
        color: "#f39c12",
        features: [
          "Everything in Basic",
          "Free Hosting & SSL for 1 Year",
          "Up to 5 Pages, Extra Per Page Cost not Included (Home, About, Services, Gallery, Contact)",
          "Custom Brand-Based Design & Color Theme",
          "Optimized Image & Banner Design",
          "Basic On-Page SEO Optimization",
          "Google Analytics & Search Console Integration",
          "Faster Loading (Speed Optimization)",
          "Lead Capture Form with Email Alerts",
          "1 Month Free Maintenance Support",
          "Delivery Within 5-7 Working Days",
          "Great for Local Businesses & Agencies"
        ]
      },
      {
        name: "Premium Plan",
        price: "₹11,999 + GST",
        icon: "bi-trophy-fill",
        color: "#9b59b6",
        features: [
          "Everything in Standard",
          "Up to 8 Static Website Pages (Extra Per Page Cost not Included)",
          "Advanced UI/UX Design with Animation & Motion Effects",
          "SEO-Optimized Structure for Higher Google Ranking",
          "Content Writing Support (Up to 800 Words)",
          "Interactive Elements (Counters, Sliders, Reviews, etc.)",
          "Call-to-Action Strategy for More Leads",
          "Google Business Profile Setup Assistance",
          "Priority Support with Faster Delivery",
          "Delivery Within 10-15 Working Days",
          "Google Page Speed Optimized (Loads Fast Even on Weak Networks)",
          "Unlimited Copyright-Free Stock Images",
          "Copyright-Free Unique Website Content",
          "SEO Optimized Code (Semantic Tags & Meta Tags)",
          "Secure & Error-Free Coding",
          "Unique User Interactive UI/UX",
          "UI/UX Testing",
          "Browser Compatibility Testing",
          "Less Scroll for Better User Experience",
          "Minified CSS/JS",
          "Perfect for Professionals & Established Businesses"
        ]
      }
    ],
    "Dynamic Website": [
      {
        name: "Basic Plan",
        price: "₹15,999 + GST",
        icon: "bi-star-fill",
        color: "#1485cb",
        features: [
          "Dynamic 4-5 Page Website",
          "Free SSL Certificate for 1 Year",
          "Free Web Hosting for 1 Year",
          "Effective Call-To-Actions & Easy Navigation",
          "Mobile-Friendly / Responsive Design",
          "Google PageSpeed Optimized",
          "Google Map, WhatsApp & Social Media Integration",
          "SEO Optimized Code (Meta Title, Description, Keywords)",
          "Copyright-Free Stock Images",
          "Contact Form for Capturing Business Leads",
          "Secure & Error-Free Coding",
          "Fast Loading Speed Optimization",
          "1 Week Free Support After Deployment",
          "Delivery Within 10-15 Working Days",
          "Complete Deployment",
          "Perfect for Local Businesses & Startups"
        ]
      },
      {
        name: "Standard Plan",
        price: "₹26,999 + GST",
        icon: "bi-gem",
        color: "#f39c12",
        features: [
          "Everything in Basic",
          "Up to 10 Dynamic Pages (Extra Page Cost ₹800/Page)",
          "Advanced Admin Panel with User Management",
          "Unlimited Dynamic Web Pages (CMS Ready)",
          "Dynamic Content Rendering (Real-Time Updates)",
          "Brand Typography & Color Code Customization",
          "Google Analytics & Search Console Integration",
          "Effective Call-To-Actions & Lead Conversion Layouts",
          "Content Optimization for Better Search Ranking",
          "Browser Compatibility Testing (All Devices)",
          "Minified CSS/JS for Faster Performance",
          "Database Integration with Error-Free Validation",
          "Secure Admin Authentication & Authorization",
          "2 Weeks Free Support After Deployment",
          "Ideal for Growing Businesses & Agencies"
        ]
      },
      {
        name: "Premium Plan",
        price: "₹39,999 + GST",
        icon: "bi-trophy-fill",
        color: "#9b59b6",
        features: [
          "Everything in Standard",
          "Custom UI/UX Design with Interactive Animations",
          "Dynamic Modules (Blogs, Services, Testimonials, Gallery, etc.)",
          "Admin Dashboard with Full CRUD Functionality",
          "Role-Based Admin Access (Multiple User Levels)",
          "SEO-Friendly URL Structure & Schema Markup",
          "Unlimited Dynamic Content & Media Uploads",
          "Comprehensive Security (Form Validation, CSRF, XSS Protection)",
          "Website UI/UX Testing for Better User Experience",
          "Less Scroll, Better Engagement Layout",
          "Conversion-Focused Call-to-Action Strategy",
          "Copyright-Free Unique Website Content",
          "Analytics & Performance Monitoring Dashboard",
          "1 Month Free Maintenance & Technical Support",
          "Unique UI/UX",
          "Faster Delivery (Within 15-20 Working Days)",
          "Dynamic Content Rendering",
          "Error-Free, Well-Commented Code",
          "Best for Professional & Corporate Websites"
        ]
      }
    ],
    "E-Commerce Website": [
      {
        name: "Basic Plan",
        price: "₹29,999 + GST",
        icon: "bi-star-fill",
        color: "#1485cb",
        features: [
          "Dynamic eCommerce Website with 5-10 Products",
          "WordPress Technology",
          "Free SSL Certificate for 1 Year",
          "Free Web Hosting for 1 Year",
          "Copyright-Free Unique Website Content & Stock Images",
          "Unique & User Interactive UI/UX",
          "Effective Call-To-Actions & Easy Navigation",
          "Mobile-Friendly / Responsive Design",
          "Google Page Speed Optimized",
          "Shopping Cart & Checkout System",
          "Customer Login / Signup",
          "Admin Dashboard for Basic Store Management",
          "1 Contact Form for Capturing Leads",
          "Social Media & WhatsApp Integration",
          "SEO Optimized Code for Homepage & Product Pages",
          "Secure & Error-Free Coding",
          "Browser Compatibility Testing",
          "1 Week Free Support After Deployment",
          "Delivery Within 15-20 Working Days",
          "Complete Deployment",
          "Perfect for Small Businesses & Startups"
        ]
      },
      {
        name: "Standard Plan",
        price: "₹44,999 + GST",
        icon: "bi-gem",
        color: "#f39c12",
        features: [
          "Everything in Basic",
          "Up to 50 Products",
          "Framework Technology",
          "Advanced Admin Dashboard (Add/Edit/Delete Products, Categories)",
          "Payment Gateway Integration (Razorpay, PayPal, etc.)",
          "Order & Customer Management System",
          "Discount Coupons & Promo Code Setup",
          "Product Filters & Search Functionality",
          "Google Analytics & Search Console Integration",
          "SEO Optimized Product & Category Pages",
          "Brand Typography & Color Customization",
          "Unlimited Stock Images for Products",
          "Lead Capture Form for Marketing",
          "2 Weeks Free Support After Deployment",
          "Delivery Within 25-30 Working Days",
          "Ideal for Growing Online Stores & Local Businesses"
        ]
      },
      {
        name: "Premium Plan",
        price: "₹3,21,999 + GST",
        icon: "bi-trophy-fill",
        color: "#9b59b6",
        features: [
          "Everything in Standard",
          "Unlimited Products & Categories",
          "React JS & Next.JS",
          "Advanced UI/UX Design with Animations",
          "Multiple Payment & Shipping Options",
          "Delivery Order Confirmation",
          "Customer Wishlist & Reviews Integration",
          "Advanced Product Filters & Sorting",
          "Dynamic Offers",
          "Inventory & Stock Management Automation",
          "Email/SMS Notifications for Orders",
          "Analytics Dashboard for Sales & Revenue",
          "Conversion-Oriented Landing Pages for Products",
          "Advanced SEO (On-Page + Schema Markup)",
          "Security & Backup Setup",
          "UI/UX Testing",
          "1 Month Free Maintenance & Support",
          "Shopping Cart & Checkout System",
          "Customer, Delivery Boy & Owner Login / Signup",
          "Minified CSS/JS",
          "Perfect for Professional Businesses & Growing eCommerce Stores"
        ]
      }
    ],
    "Spa Packages": [
      {
        name: "Basic Plan",
        price: "₹9,999 + GST/Month",
        icon: "bi-star-fill",
        color: "#1485cb",
        features: [
          "Facebook & Instagram Platforms",
          "9 posters",
          "1 Ad Setup",
          "1 Revision per Post",
          "Monthly Performance Report",
          "Trending-Based Creative Posts",
          "Description, Hashtag Research & Optimization",
          "AI-Powered Creative",
          "Profile Optimization",
          "Ad Manager (Setup)",
          "Audience Targeting",
          "Ad Budget Management (Daily/weekly Budget Allocation & Ad Optimization)",
          "Audience Research (Demographics, Interests & Behavior Insights)",
          "Best ROI & Campaign Objectives",
          "Social Media Audit for All Platforms"
        ]
      },
      {
        name: "Standard Plan",
        price: "₹12,999 + GST/Month",
        icon: "bi-gem",
        color: "#f39c12",
        features: [
          "Facebook & Instagram Platforms",
          "12 posters",
          "2 Ads Setup",
          "1 Revision per Post",
          "Monthly Performance Report",
          "Trending-Based Creative Posts",
          "Description, Hashtag Research & Optimization",
          "AI-Powered Creative",
          "Profile Optimization",
          "Ad Manager (Setup)",
          "Audience Targeting",
          "Ad Budget Management (Daily/weekly Budget Allocation & Ad Optimization)",
          "Audience Research (Demographics, Interests & Behavior Insights)",
          "Best ROI & Campaign Objectives",
          "Social Media Audit for All Platforms"
        ]
      },
      {
        name: "Premium Plan",
        price: "₹15,999 + GST/Month",
        icon: "bi-trophy-fill",
        color: "#9b59b6",
        features: [
          "Facebook & Instagram Platforms",
          "15 posters",
          "3 Ads Setup",
          "1 AI Reels",
          "1 Revision per Post",
          "Monthly Performance Report",
          "Trending-Based Creative Posts",
          "Description, Hashtag Research & Optimization",
          "AI-Powered Creative",
          "Profile Optimization",
          "Ad Manager (Setup)",
          "Audience Targeting",
          "Ad Budget Management (Daily/weekly Budget Allocation & Ad Optimization)",
          "Audience Research (Demographics, Interests & Behavior Insights)",
          "Best ROI & Campaign Objectives",
          "Social Media Audit for All Platforms"
        ]
      }
    ]
  };

  const currentPlans = marketingPlans[packageName as keyof typeof marketingPlans] || marketingPlans["Social Media Marketing"];

  if (isSubmitted) {
    return (
      <main className="thank-you-page">
        <section className="py-5 text-white text-center d-flex align-items-center" style={{ background: "linear-gradient(90deg, #2ecc71 0%, #10a37f 100%)", minHeight: "500px", borderBottom: "5px solid #2ecc71" }}>
          <Container>
            <div className="mb-4 d-flex justify-content-center">
              <div className="bg-white rounded-circle d-flex align-items-center justify-content-center floating-tick" style={{ width: "80px", height: "80px", boxShadow: "0 0 40px rgba(255, 255, 255, 0.6)" }}>
                <i className="bi bi-check-lg fs-2 fw-bold" style={{ color: "#2ecc71", WebkitTextStroke: "1px #2ecc71" }}></i>
              </div>
            </div>
            <h1 className="fw-bold display-6 mb-3">Thank You, <span style={{ color: "#ffcc33" }}>{formData.fullName}</span></h1>
            <p className="lead mx-auto fw-medium" style={{ maxWidth: "800px" }}>
              We truly appreciate your interest in our <span style={{ color: "#ffcc33" }}>{packageName}</span> package. You're just one step away from transforming your business digitally 🚀
            </p>
          </Container>
        </section>

        <section className="py-5 bg-light">
          <Container>
            <div className="text-center mb-5">
              <h2 className="fw-bold">Choose Your Perfect Plan</h2>
              <p className="text-muted">Choose the plan that fits your vision — and let's build your digital success together!</p>
            </div>

            <div className="bg-white p-4 p-md-5 rounded-5 shadow-lg border mb-5">
              <Row className="g-4">
                {currentPlans.map((plan, idx) => (
                  <Col lg={4} key={idx}>
                    <div className="plan-card bg-white rounded-4 border p-3 d-flex flex-column transition-all shadow-sm">
                      {/* Inner Header Card - Standardized Theme with Floating Animation */}
                      <div 
                        className="rounded-4 p-4 text-center mb-4 border-0 floating-plan-header" 
                        style={{ 
                          background: "linear-gradient(135deg, #def7e9 0%, #ffffff 100%)",
                          boxShadow: "0 10px 25px rgba(20, 168, 0, 0.08)",
                        }}
                      >
                        <i className={`bi ${plan.icon} display-5 mb-2 d-block`} style={{ color: plan.color }}></i>
                        <h5 className="fw-bold mb-0" style={{ color: "#00897b" }}>{plan.name}</h5>
                      </div>

                      {/* Price Pill - Standardized Theme */}
                      <div className="text-center mb-4">
                        <div 
                          className="px-4 py-2 rounded-pill d-inline-block fw-bold border-0" 
                          style={{ 
                            background: "#dcfce7", // Consistent medium-light green
                            color: "#1a1a1a",
                            fontSize: "0.9rem"
                          }}
                        >
                          {plan.price}
                        </div>
                      </div>

                      <div className="px-3 flex-grow-1">
                        <ul className="list-unstyled small mb-0 fw-medium">
                          {plan.features.map((feature, fIdx) => (
                            <li key={fIdx} className="mb-2 d-flex align-items-start text-start text-dark">
                              <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-3 pt-0 mt-auto text-center">
                        {(packageName.includes("Marketing") || packageName.includes("Ads") || packageName.includes("SEO") || packageName.includes("Spa")) && (
                          <div 
                            className="p-2 rounded text-center mb-3 small fw-medium"
                            style={{ 
                              backgroundColor: "#fff9db", 
                              border: "1px solid #ffe066",
                              color: "#856404"
                            }}
                          >
                            Campaign charge not included.
                          </div>
                        )}
                        
                        <a 
                          href={`https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20am%20interested%20in%20the%20${plan.name}%20for%20${packageName}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn py-2 fw-bold rounded-pill d-flex align-items-center justify-content-center transition-all shadow-sm"
                          style={{ 
                            backgroundColor: "#2ecc71", 
                            border: "none",
                            color: "#fff"
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#27ae60";
                            e.currentTarget.style.transform = "scale(1.02)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#2ecc71";
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                        >
                          <i className="bi bi-whatsapp me-2 fs-5"></i> Select {plan.name}
                        </a>
                        <p className="small text-muted mt-2 mb-0 text-center fw-bold">One of our experts will contact you soon.</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>

            <style jsx>{`
              .plan-card {
                transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                cursor: pointer;
              }
              .plan-card:hover {
                transform: translateY(-10px);
                box-shadow: 0 15px 35px rgba(0,0,0,0.1) !important;
                filter: brightness(1.02);
              }
            `}</style>
          </Container>
        </section>
      </main>
    );
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <main className="lead-gen-page">
      <section className="py-5 text-white text-center" style={{ backgroundColor: "#0e527a", minHeight: "80vh", display: "flex", alignItems: "center" }}>
        <Container>
          <div className="mb-5">
            <h1 className="fw-bold display-5">
              Get Full <span style={{ color: "#ffcc33" }}>{packageName}</span> <br /> Package Details
            </h1>
            <p className="lead mx-auto fw-semibold" style={{ maxWidth: "900px", color: "#cccccc" }}>
              Fill in your details and we'll send your complete package info instantly — pricing, <br /> features & offers.
            </p>
          </div>

          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="lead-form-card bg-white p-4 p-md-5 rounded-4 shadow-lg text-start">
                <Form onSubmit={handleSubmit}>
                  <Row className="g-4">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="text-dark fw-bold small mb-2">Full Name</Form.Label>
                        <div className="input-group">
                          <span className="input-group-text bg-light border-end-0"><i className="bi bi-person text-primary"></i></span>
                          <Form.Control 
                            type="text" 
                            name="fullName"
                             className={`bg-light border-start-0 ${errors.fullName ? "is-invalid" : ""}`}
                            value={formData.fullName}
                            onChange={handleChange}
                          />
                        </div>
                        {errors.fullName && <div className="text-danger small mt-1 fw-medium">{errors.fullName}</div>}
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="text-dark fw-bold small mb-2">Email Address</Form.Label>
                        <div className="input-group">
                          <span className="input-group-text bg-light border-end-0"><i className="bi bi-envelope text-primary"></i></span>
                          <Form.Control 
                            type="email" 
                            name="email"
                             className={`bg-light border-start-0 ${errors.email ? "is-invalid" : ""}`}
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                        {errors.email && <div className="text-danger small mt-1 fw-medium">{errors.email}</div>}
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="text-dark fw-bold small mb-2">Phone Number</Form.Label>
                        <div className="input-group">
                          <span className="input-group-text bg-light border-end-0"><i className="bi bi-telephone text-primary"></i></span>
                          <Form.Control 
                            type="tel" 
                            name="phone"
                             className={`bg-light border-start-0 ${errors.phone ? "is-invalid" : ""}`}
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                        {errors.phone && <div className="text-danger small mt-1 fw-medium">{errors.phone}</div>}
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="text-dark fw-bold small mb-2">How did you hear about us?</Form.Label>
                        <div className="input-group">
                          <span className="input-group-text bg-light border-end-0"><i className="bi bi-megaphone text-primary"></i></span>
                          <Form.Select 
                            name="source"
                            className={`bg-light border-start-0 ${errors.source ? "is-invalid" : ""}`}
                            value={formData.source}
                            onChange={handleChange}
                          >
                            <option>-- Select Source --</option>
                            <option>Facebook</option>
                            <option>Instagram</option>
                            <option>YouTube</option>
                            <option>LinkedIn</option>
                            <option>Website</option>
                            <option>Friend / Referral</option>
                            <option>Other</option>
                          </Form.Select>
                        </div>
                        {errors.source && <div className="text-danger small mt-1 fw-medium">{errors.source}</div>}
                      </Form.Group>
                    </Col>
                  </Row>

                  <div className="text-center mt-5">
                    <Button type="submit" variant="primary" className="btn-package-submit animate-slide px-5 py-3 rounded-pill fw-bold border-0" style={{ background: "#064267", boxShadow: "0 4px 15px rgba(6, 66, 103, 0.3)" }}>
                      <i className="bi bi-envelope-fill me-2"></i> Get My Full Package Info
                    </Button>
                    <p className="mt-3 text-dark small mb-0 fw-bold">
                      We respect your privacy. No spam — Only package details in your inbox.
                    </p>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <WhyChoose />

      <style jsx>{`
        .lead-gen-page {
          background-color: #0e527a;
        }
        .lead-form-card {
          border: 1px solid rgba(0,0,0,0.05);
        }
        .form-control:focus, .form-select:focus {
          box-shadow: none;
          border-color: #1485cb;
        }
        .input-group-text {
          border-color: #dee2e6;
        }
        .floating-tick {
          animation: floatTick 2s ease-in-out infinite;
        }
        @keyframes floatTick {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .floating-plan-header {
          animation: floatPlan 1.5s ease-in-out infinite;
        }
        @keyframes floatPlan {
          0%, 100% { transform: translateY(0) scale(1); box-shadow: 0 10px 25px rgba(20, 168, 0, 0.08); }
          50% { transform: translateY(-12px) scale(1.03); box-shadow: 0 20px 40px rgba(20, 168, 0, 0.2); }
        }
      `}</style>
    </main>
  );
}
