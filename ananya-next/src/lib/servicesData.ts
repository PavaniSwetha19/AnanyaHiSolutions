export interface Service {
  slug: string;
  type: "category" | "detail";
  meta: {
    title: string;
    description: string;
  };
  hero: {
    heading: string;
    subHeading: string;
    trustPara?: string;
    trustBadges?: { icon: string; text: string; color?: string }[];
    heroImage?: string;
    ctaButton?: { text: string; link: string; icon: string; className: string };
  };
  // For Category View
  subSection?: {
    heading: string;
    description: string;
  };
  items?: {
    title: string;
    description: string;
    icon: string;
    link: string;
    color?: string;
  }[];
  fullDetails?: string;
  faqs?: {
    question: string;
    answer: string;
  }[];
  // For Detail View
  detailSection?: {
    heading1: string;
    paragraph1: string;
    packageHtml?: string;
    image: string;
    imageAlt: string;
    heading2: string;
    paragraph2: string;
    benefits: string[];
    footerImage?: string;
  };
  ctaFinal?: { heading: string; subHeading: string; buttonText: string };
}

export const servicesData: Record<string, Service> = {
  "website-design": {
    slug: "website-design",
    type: "category",
    meta: {
      title: "Website Design & Development Company Hyderabad | Ananya Hi Solutions",
      description: "Professional website design and development services in Hyderabad. Responsive, SEO-optimized, conversion-focused websites.",
    },
    hero: {
      heading: "Website Design Company in Hyderabad",
      subHeading: "Ananya Hi Solutions is your trusted partner for affordable, SEO-friendly & mobile-optimized website design in Hyderabad. We create websites that not only look stunning but also bring you more traffic, leads & sales.",
      trustPara: "100+ Websites Delivered in Hyderabad | Rated 5/5 by Local Businesses",
      ctaButton: {
        text: "Choose Package",
        link: "/ananya-hi-solutions-package",
        icon: "bi-cart-check",
        className: "btn-package",
      },
    },
    subSection: {
      heading: "Website Development Agency in Hyderabad for Startups & Brands",
      description: "Get SEO-friendly static, dynamic, and e-commerce websites that drive traffic, leads & sales.",
    },
    items: [
      {
        title: "Static Website",
        description: "Perfect for startups & small businesses, fast loading & SEO ready.",
        icon: "bi-file-code",
        link: "static-website-design-services-hyderabad",
      },
      {
        title: "Dynamic Website",
        description: "Custom CMS solutions for blogs, portfolios & corporate websites.",
        icon: "bi-layout-text-sidebar-reverse",
        link: "dynamic-website-design-services-hyderabad",
      },
      {
        title: "E-commerce Website",
        description: "Full-featured online stores with payment gateways & analytics.",
        icon: "bi-cart3",
        link: "https://www.ananyahisolutions.com/ecommerce-website-developers-hyderabad",
      },
    ],
    fullDetails: `
      <section class='py-5' style='background-color: #ffffff;'>
        <div class='container text-center'>
          <h2>Professional Website Design and Development Services in Hyderabad</h2>
          <p style='text-align: justify;'>In today's digital-first world, your website is often the first impression potential customers have of your business. At Ananya Hi Solutions, we create stunning, high-performance websites that not only look exceptional but drive real business results.</p>
          <p style='text-align: justify;'>Our website design and development services combine aesthetic excellence with technical sophistication. Every website we build is fully responsive (mobile, tablet, desktop), optimized for search engines, designed for fast loading speeds, and focused on user experience and conversion optimization.</p>
          <p style='text-align: justify;'>We specialize in diverse web solutions including corporate websites, e-commerce platforms, portfolio sites, landing pages, web applications, CMS-based sites (WordPress, Drupal, Joomla), and custom PHP/Python/Node.js development. Whether you need a simple brochure site or a complex web application, we have the expertise to deliver.</p>
          <p style='text-align: justify;'>Our development process follows industry best practices: comprehensive discovery and planning, wireframing and prototyping, custom design creation, agile development methodology, rigorous testing across devices and browsers, SEO optimization, and comprehensive training and documentation. We ensure every website is secure, scalable, and maintainable.</p>
        </div>
      </section>
    `,
    faqs: [
      {
        question: "What technologies does Ananya Hi Solutions use for website development?",
        answer: "We work with modern technologies including HTML5, CSS3, JavaScript frameworks (React, Vue, Angular), PHP frameworks (Laravel, CodeIgniter), Python (Django, Flask), Node.js, WordPress, Shopify, Magento, and databases like MySQL, PostgreSQL, and MongoDB. We select the optimal technology stack based on your specific requirements.",
      },
      {
        question: "How much does website design and development cost at Ananya Hi Solutions?",
        answer: "Website costs vary based on complexity, features, and requirements. A basic business website starts from ₹9,000, while e-commerce platforms range from ₹75,000 to ₹3,00,000+. Custom web applications are quoted based on detailed requirements. We provide transparent, detailed quotes with no hidden costs after thorough consultation.",
      },
      {
        question: "What is included in your website design package?",
        answer: "Our comprehensive packages include custom responsive design, content management system, SEO-friendly structure, contact forms, Google Analytics integration, social media integration, SSL certificate setup, up to 10-15 pages, image optimization, cross-browser compatibility testing, 3 months technical support, and basic SEO setup. Advanced features are available in premium packages.",
      },
      {
        question: "How do you ensure websites are mobile-friendly and responsive?",
        answer: "Every website we build follows mobile-first design principles and responsive web design best practices. We test extensively across multiple devices (smartphones, tablets, desktops), browsers (Chrome, Firefox, Safari, Edge), and screen sizes to ensure consistent, optimal user experience everywhere. We use flexible grids, scalable images, and CSS media queries.",
      },
      {
        question: "What ongoing support do you provide after website launch?",
        answer: "We provide comprehensive post-launch support including 3 months free technical support, security updates and patches, performance monitoring, content updates (in select packages), backup management, bug fixes, hosting assistance, and analytics reporting. Extended maintenance packages are available for ongoing support and enhancements.",
      },
    ],
  },
  "digital-marketing": {
    slug: "digital-marketing",
    type: "category",
    meta: {
      title: "Best Digital Marketing Agency Hyderabad | SEO, PPC, Social Media Services",
      description: "Top digital marketing agency in Hyderabad offering SEO, PPC, social media marketing, content marketing & lead generation.",
    },
    hero: {
      heading: "Digital Marketing Services in Hyderabad",
      subHeading: "Boost your business with SEO, social media marketing, PPC, email marketing & content strategies from Ananya Hi Solutions.",
      trustPara: "✅ Trusted by 100+ local businesses in Hyderabad | ⭐ Rated 5/5 for digital marketing results",
      ctaButton: {
        text: "Choose Package",
        link: "/ananya-hi-solutions-package",
        icon: "bi-cart-check",
        className: "btn-package",
      },
    },
    subSection: {
      heading: "Comprehensive Digital Marketing Solutions for Startups & Brands",
      description: "Get <strong>SEO-friendly campaigns, social media strategies, paid ads & analytics-driven marketing</strong> that drive growth. We help you attract more traffic, generate leads & convert sales.",
    },
    items: [
      {
        title: "Search Engine Optimization (SEO)",
        description: "Optimize your website to rank higher on Google and attract organic traffic.",
        icon: "bi-search",
        link: "seo-service-provider-hyderabad",
      },
      {
        title: "Social Media Marketing (SMM)",
        description: "Grow your brand on platforms like Facebook, Instagram, LinkedIn, and more.",
        icon: "bi-facebook",
        link: "social-media-marketing-services-hyderabad",
      },
      {
        title: "Pay-Per-Click Advertising (PPC)",
        description: "Targeted campaigns on Google Ads and social media to get instant leads.",
        icon: "bi-currency-dollar",
        link: "ppc-services-hyderabad",
      },
      {
        title: "Content Marketing",
        description: "Create SEO-friendly content that engages your audience and builds authority.",
        icon: "bi-pencil-square",
        link: "content-marketing-services-hyderabad",
      },
      {
        title: "Email Marketing",
        description: "Reach your customers directly with high-converting email campaigns.",
        icon: "bi-envelope-heart",
        link: "email-marketing-services-hyderabad",
      },
    ],
    fullDetails: `
      <section class="py-5 bg-white">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h2 class="fw-bold mb-4 text-start">Results-Driven Digital Marketing Services in Hyderabad</h2>
              <p class="text-start mb-4" style="color: #444; line-height: 1.7;">
                In the competitive digital landscape, strategic marketing is essential for business growth. <a href="/" class="text-primary text-decoration-none fw-semibold border-bottom border-primary">Ananya Hi Solutions</a> is Hyderabad's premier digital marketing agency, delivering data-driven campaigns that generate qualified leads, increase brand visibility, and maximize return on investment.
              </p>
              <p class="text-start mb-4" style="color: #444; line-height: 1.7;">
                Our comprehensive digital marketing services encompass Search Engine Optimization (SEO) for organic rankings, Pay-Per-Click (PPC) advertising for immediate results, Social Media Marketing across all major platforms, Content Marketing that engages and converts, Email Marketing for nurturing leads, Conversion Rate Optimization, and comprehensive Analytics and Reporting.
              </p>
              <p class="text-start mb-4" style="color: #444; line-height: 1.7;">
                What distinguishes our approach is our commitment to understanding your business goals, target audience, and competitive landscape before crafting customized strategies. We don't believe in one-size-fits-all solutions. Every campaign is meticulously planned, executed with precision, and continuously optimized based on real-time data and performance metrics.
              </p>
              <p class="text-start mb-0" style="color: #444; line-height: 1.7;">
                Our certified digital marketing team stays ahead of algorithm updates, platform changes, and industry trends to ensure your campaigns remain effective. We've helped businesses across industries achieve 200-400% increases in organic traffic, 3-5X ROI on ad spend, and substantial growth in qualified leads and conversions.
              </p>
            </div>
          </div>
        </div>
      </section>
    `,
    faqs: [
      {
        question: "What digital marketing services does Ananya Hi Solutions offer?",
        answer: "We provide comprehensive digital marketing including SEO (on-page, off-page, technical, local), PPC advertising (Google Ads, Bing Ads), social media marketing (Facebook, Instagram, LinkedIn, Twitter), content marketing, email marketing, influencer marketing, online reputation management, conversion rate optimization, and marketing automation. We create integrated strategies tailored to your goals.",
      },
      {
        question: "How long does it take to see results from SEO services?",
        answer: "SEO is a long-term strategy that typically shows initial improvements in 3-4 months, with significant results in 6-12 months. Timeframes vary based on competition, current website status, and target keywords. We provide monthly progress reports showing improvements in rankings, traffic, and conversions. Quick wins like technical SEO fixes can show immediate impact.",
      },
      {
        question: "What is the average ROI clients achieve with your PPC campaigns?",
        answer: "Our PPC campaigns typically deliver 300-500% ROI, though results vary by industry, competition, and budget. We focus on qualified lead generation rather than just clicks. Our certified Google Ads specialists optimize campaigns continuously for cost-per-acquisition, conversion rates, and return on ad spend through strategic keyword selection, ad copy testing, and landing page optimization.",
      },
      {
        question: "How do you measure and report digital marketing performance?",
        answer: "We use advanced analytics tools (Google Analytics, Search Console, SEMrush, Ahrefs) to track comprehensive KPIs including organic traffic, keyword rankings, conversion rates, bounce rates, engagement metrics, lead quality, and ROI. Clients receive detailed monthly reports with actionable insights, competitive analysis, and strategic recommendations for continuous improvement.",
      },
      {
        question: "What makes Ananya Hi Solutions effective at social media marketing?",
        answer: "Our social media success stems from strategic audience research, platform-specific content creation, consistent posting schedules, community engagement, influencer partnerships, paid social advertising, A/B testing, and data-driven optimization. We create authentic brand voices that resonate with target audiences, driving engagement, followers, and conversions across all major platforms.",
      },
    ],
  },
  "static-website-design-services-hyderabad": {
    slug: "static-website-design-services-hyderabad",
    type: "detail",
    meta: {
      title: "Static Website Design Services in Hyderabad | Ananya Hi Solutions",
      description: "Get a professional, fast-loading, mobile-friendly website for your business starting at just ₹3,999!",
    },
    hero: {
      heading: "Static Website Design Services in Hyderabad",
      subHeading: "Get a professional, fast-loading, mobile-friendly website for your business starting at just ₹3,999!",
      ctaButton: {
        text: "Get FREE Consultation",
        link: "https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20need%20a%20free%20consultation.",
        icon: "bi-whatsapp",
        className: "btn-whatsapp",
      },
    },
    detailSection: {
      heading1: "Why Ananya Hi Solutions is The Best Static Website Design Company in Hyderabad?",
      paragraph1: "At Ananya Hi Solutions, we combine creativity, performance, and technology to deliver the best static website design services in Hyderabad. Our team focuses on crafting visually appealing, fast-loading, and SEO-friendly websites that help your business stand out online. With a strong track record of satisfied clients, modern design practices, and affordable pricing, we ensure your website not only looks great but also drives real business results.",
      image: "assets/front/images/services/informative-website-design-hyderabad.jpg",
      imageAlt: "website design company hyderabad",
      heading2: "Industries We Serve with Static Website Design",
      paragraph2: "At Ananya Hi Solutions, we provide custom static website design services in Hyderabad for a wide range of industries including startups, corporates, educational institutions, and more.",
      benefits: [
        "Fast-loading, error-free websites",
        "SEO-ready structure with meta optimization",
        "100% mobile-responsive & cross-browser compatible",
        "Affordable packages for startups & local businesses",
      ],
      packageHtml: `
        <div class='package-card h-100 shadow-sm border-0 rounded-4 overflow-hidden'>
          <div class='package-header text-white text-center py-4' style='background-color:#3498db'>
            <h5 class='mb-1 fw-bold'>Starter Static Website</h5>
            <p class='mb-0 small'>Perfect for Small Businesses</p>
          </div>
          <div class='package-body p-4 bg-white'>
            <ul class='list-unstyled mb-4 feature-list'>
              <li class='mb-2'><i class='bi bi-check-circle-fill text-success me-2'></i>Up to 6 Web Pages Website.</li>
              <li class='mb-2'><i class='bi bi-check-circle-fill text-success me-2'></i>FREE Web Hosting & SSL for 1 year.</li>
              <li class='mb-2'><i class='bi bi-check-circle-fill text-success me-2'></i>1 Week FREE Support After Deployment.</li>
              <li class='mb-2'><i class='bi bi-check-circle-fill text-success me-2'></i>Responsive Design.</li>
              <li class='mb-2 text-muted' style='filter: blur(2px); opacity: 0.8;'><i class='bi bi-check-circle-fill text-success me-2'></i>Basic SEO Setup.</li>
              <li class='mb-2 text-muted' style='filter: blur(2px); opacity: 0.8;'><i class='bi bi-check-circle-fill text-success me-2'></i>Browser Compatibility Testing.</li>
              <li class='mb-2 text-muted' style='filter: blur(2px); opacity: 0.8;'><i class='bi bi-check-circle-fill text-success me-2'></i>Google Page Speed Optimized.</li>
            </ul>
            
            <div class='text-center mt-4 pt-2 border-top'>
              <p class='small fw-bold mb-3 text-dark'>Want to know what's inside our hidden plans?</p>
              <a id='unlock-static-pkg' href='/package-details/static-website-package-hyderabad' class='btn btn-primary rounded-pill px-4 py-2 shadow-sm d-inline-flex align-items-center gap-2' style='background-color: #064267; border: none; color: #fff !important;'>
                <i class='bi bi-unlock-fill'></i> Unlock Full Packages
              </a>
            </div>
          </div>
        </div>
      `,
    },
  },
  "dynamic-website-design-services-hyderabad": {
    slug: "dynamic-website-design-services-hyderabad",
    type: "detail",
    meta: {
      title: "Dynamic Website Design Services in Hyderabad | Ananya Hi Solutions",
      description: "Build a powerful, feature-rich, and responsive dynamic website starting at just ₹14,999!",
    },
    hero: {
      heading: "Dynamic Website Design Services in Hyderabad",
      subHeading: "Build a powerful, feature-rich, and responsive dynamic website starting at just ₹14,999! Perfect for businesses that want control, flexibility, and scalability.",
      ctaButton: {
        text: "Get FREE Consultation",
        link: "https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20need%20a%20free%20consultation.",
        icon: "bi-whatsapp",
        className: "btn-whatsapp",
      },
    },
    detailSection: {
      heading1: "Why Choose Ananya Hi Solutions for Dynamic Website Design in Hyderabad?",
      paragraph1: "At Ananya Hi Solutions, we specialize in creating custom dynamic websites that are secure, scalable, and easy to manage.",
      image: "assets/front/images/services/dynamic-website-development-services-hyderabad.jpg",
      imageAlt: "dynamic website design company hyderabad",
      heading2: "Industries We Serve with Dynamic Website Design",
      paragraph2: "We provide dynamic website development services in Hyderabad for startups, SMEs, corporates, and enterprises across industries — including education, healthcare, eCommerce, real estate, logistics, and hospitality. Our dynamic websites are built for performance, functionality, and future scalability — giving you full control over content and user experience.",
      benefits: [
        "Easy-to-manage CMS-based websites",
        "Database-driven functionality",
        "Secure admin panel for content updates",
        "SEO-friendly and mobile-optimized design",
        "Fast loading and scalable architecture",
      ],
      packageHtml: `
          <div class='package-card h-100 shadow-sm border-0 rounded-4 overflow-hidden'>
            <div class='package-header text-white text-center py-4' style='background-color:#1485cb'>
              <h5 class='mb-1 fw-bold'>Starter Dynamic Website</h5>
              <p class='mb-0 small'>Ideal for Growing Businesses</p>
            </div>
            <div class='package-body p-4 bg-white'>
              <ul class='list-unstyled mb-4 feature-list'>
                <li class='mb-2'><i class='bi bi-check-circle-fill text-success me-2'></i>Up to 10 Dynamic Pages with CMS.</li>
                <li class='mb-2'><i class='bi bi-check-circle-fill text-success me-2'></i>Admin Panel to Manage Content.</li>
                <li class='mb-2'><i class='bi bi-check-circle-fill text-success me-2'></i>FREE Web Hosting & SSL for 1 year.</li>
                <li class='mb-2'><i class='bi bi-check-circle-fill text-success me-2'></i>SEO-Friendly URL Structure.</li>
                <li class='mb-2 text-muted' style='filter: blur(2px); opacity: 0.8;'><i class='bi bi-check-circle-fill text-success me-2'></i>Database Integration (MySQL).</li>
                <li class='mb-2 text-muted' style='filter: blur(2px); opacity: 0.8;'><i class='bi bi-check-circle-fill text-success me-2'></i>Responsive & Secure Coding.</li>
                <li class='mb-2 text-muted' style='filter: blur(2px); opacity: 0.8;'><i class='bi bi-check-circle-fill text-success me-2'></i>1 Month Free Technical Support.</li>
              </ul>
              
              <div class='text-center mt-4 pt-2 border-top'>
                <p class='small fw-bold mb-3 text-dark'>Want to explore advanced plans?</p>
                <a id='unlock-dynamic-pkg' href='/package-details/dynamic-website-package-hyderabad' class='btn btn-primary rounded-pill px-4 py-2 shadow-sm d-inline-flex align-items-center gap-2' style='background-color: #0066a2; border: 8px solid #d0e7ff; color: #fff !important; font-weight: 700;'>
                  <i class='bi bi-unlock-fill'></i> Unlock Full Packages
                </a>
              </div>
            </div>
          </div>
        `,
    },
  },
  "seo-service-provider-hyderabad": {
    slug: "seo-service-provider-hyderabad",
    type: "detail",
    meta: {
      title: "SEO Services in Hyderabad | Improve Your Google Rankings",
      description: "Boost your website’s visibility and attract more organic traffic with our proven SEO strategies.",
    },
    hero: {
      heading: "SEO Services in Hyderabad | Improve Your Google Rankings",
      subHeading: "Boost your website's visibility and attract more organic traffic with our proven SEO strategies. We help your business rank higher on Google and generate qualified leads consistently.",
      ctaButton: {
        text: "Get FREE Consultation",
        link: "https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20need%20a%20free%20consultation.",
        icon: "bi-whatsapp",
        className: "btn-whatsapp",
      },
    },
    detailSection: {
      heading1: "Why Choose Ananya Hi Solutions for SEO Services in Hyderabad?",
      paragraph1: "At Ananya Hi Solutions, we provide data-driven SEO services tailored to your business goals. Our SEO experts in Hyderabad specialize in on-page, off-page, local, and technical SEO to deliver measurable results. We help your business increase visibility, improve search rankings, and achieve long-term growth.",
      image: "assets/front/images/services/seo-services-hyderabad.jpg",
      imageAlt: "seo company in hyderabad",
      heading2: "Comprehensive SEO Services We Offer",
      paragraph2: "Our SEO services in Hyderabad cover everything your website needs to perform and rank well on Google. From technical SEO and content strategy to link building and analytics — we deliver holistic solutions that strengthen your online presence.",
      benefits: [
        "On-page & Off-page SEO optimization",
        "Local SEO for Google Maps & regional targeting",
        "Keyword research & content strategy",
        "Monthly reports & transparent tracking",
        "Long-term organic traffic growth",
      ],
      packageHtml: `
        <div class='package-card h-100 shadow-sm border-0 rounded-4 overflow-hidden'>
          <div class='package-header text-white text-center py-4' style='background-color:#4a9fd4'>
            <h5 class='mb-1 fw-bold'>Professional SEO Services</h5>
            <p class='mb-0 small'>Designed for Business Growth & Visibility</p>
          </div>
          <div class='package-body p-4 bg-white'>
            <ul class='list-unstyled mb-4 feature-list'>
              <li class='mb-2'><i class='bi bi-check-circle-fill text-success me-2'></i>Comprehensive Website SEO Audit</li>
              <li class='mb-2'><i class='bi bi-check-circle-fill text-success me-2'></i>Keyword Research & Competitor Analysis</li>
              <li class='mb-2'><i class='bi bi-check-circle-fill text-success me-2'></i>On-page & Technical Optimization</li>
              <li class='mb-2'><i class='bi bi-check-circle-fill text-success me-2'></i>Local SEO & Google Business Optimization</li>
              <li class='mb-2 text-muted' style='filter: blur(2px); opacity: 0.8;'><i class='bi bi-check-circle-fill text-success me-2'></i>High-quality Backlink Strategy</li>
              <li class='mb-2 text-muted' style='filter: blur(2px); opacity: 0.8;'><i class='bi bi-check-circle-fill text-success me-2'></i>Monthly Performance Reporting</li>
              <li class='mb-2 text-muted' style='filter: blur(2px); opacity: 0.8;'><i class='bi bi-check-circle-fill text-success me-2'></i>Continuous Monitoring & Improvement</li>
            </ul>
            
            <div class='text-center mt-4 pt-2 border-top'>
              <p class='small fw-bold mb-3 text-dark'>Want to explore our full SEO strategy?</p>
              <a id='unlock-seo-pkg' href='/ananya-hi-solutions-package' class='btn btn-primary rounded-pill px-4 py-2 shadow-sm d-inline-flex align-items-center gap-2' style='background-color: #0070bb; border: none; color: #fff !important;'>
                <i class='bi bi-unlock-fill'></i> Discover More
              </a>
            </div>
          </div>
        </div>
      `,
    },
  },
  "social-media-marketing-services-hyderabad": {
    slug: "social-media-marketing-services-hyderabad",
    type: "detail",
    meta: {
      title: "Social Media Marketing Agency in Hyderabad | Grow Your Brand Online",
      description: "Boost your online presence with creative and result-driven social media marketing.",
    },
    hero: {
      heading: "Social Media Marketing Agency in Hyderabad | Grow Your Brand Online",
      subHeading: "Boost your online presence with creative and result-driven social media marketing. We help your business connect with the right audience and build a powerful brand presence across all major platforms.",
      ctaButton: {
        text: "Get FREE Consultation",
        link: "https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20need%20a%20free%20consultation.",
        icon: "bi-whatsapp",
        className: "btn-whatsapp",
      },
    },
    detailSection: {
      heading1: "Why Choose Ananya Hi Solutions as Your Social Media Marketing Agency in Hyderabad?",
      paragraph1: "At Ananya Hi Solutions, we create data-driven and engaging social media campaigns that deliver real results. Whether you're looking to build brand awareness, generate leads, or increase sales — our social media experts help you achieve your business goals through creative visuals, targeted ads, and performance analytics. We handle everything from content creation to audience growth and paid campaigns.",
      image: "assets/front/images/services/social-media-marketing-services-hyderabad.jpg",
      imageAlt: "social media marketing agency hyderabad",
      heading2: "Our Social Media Marketing Expertise",
      paragraph2: "We manage end-to-end social media marketing campaigns for businesses across industries — including retail, education, hospitality, healthcare, real estate, and more. Our focus is on building brand trust, growing followers, and generating measurable engagement that converts.",
      benefits: [
        "Custom social media strategy for your brand",
        "Professional content creation & post design",
        "Paid ads management on Facebook & Instagram",
        "Monthly growth & engagement reporting",
        "Dedicated social media manager for your brand",
      ],
      packageHtml: `
        <div class='package-card h-100 shadow-sm border-0 rounded-4 overflow-hidden'>
          <div class='package-header text-white text-center py-4' style='background-color:#4a9fd4'>
            <h5 class='mb-1 fw-bold'>Professional Social Media Marketing</h5>
            <p class='mb-0 small'>Engage, Inspire, and Convert Your Audience</p>
          </div>
          <div class='package-body p-4 bg-white'>
            <ul class='list-unstyled mb-4 feature-list'>
              <li class='mb-2'><i class='bi bi-check-circle-fill text-success me-2'></i>Creative Posts for Facebook, Instagram & LinkedIn</li>
              <li class='mb-2'><i class='bi bi-check-circle-fill text-success me-2'></i>Monthly Content Strategy & Calendar</li>
              <li class='mb-2'><i class='bi bi-check-circle-fill text-success me-2'></i>Ad Campaign Setup & Management</li>
              <li class='mb-2'><i class='bi bi-check-circle-fill text-success me-2'></i>Audience Targeting & Growth Strategy</li>
              <li class='mb-2 text-muted' style='filter: blur(2px); opacity: 0.8;'><i class='bi bi-check-circle-fill text-success me-2'></i>Competitor & Trend Analysis</li>
              <li class='mb-2 text-muted' style='filter: blur(2px); opacity: 0.8;'><i class='bi bi-check-circle-fill text-success me-2'></i>Performance Report & Analytics</li>
              <li class='mb-2 text-muted' style='filter: blur(2px); opacity: 0.8;'><i class='bi bi-check-circle-fill text-success me-2'></i>Hashtag & Engagement Optimization</li>
            </ul>
            
            <div class='text-center mt-4 pt-2 border-top'>
              <p class='small fw-bold mb-3 text-dark'>Want to explore our full social media marketing plans?</p>
              <a id='unlock-smm-pkg' href='/ananya-hi-solutions-package' class='btn btn-primary rounded-pill px-4 py-2 shadow-sm d-inline-flex align-items-center gap-2' style='background-color: #0070bb; border: none; color: #fff !important;'>
                <i class='bi bi-unlock-fill'></i> View Full Packages
              </a>
            </div>
          </div>
        </div>
      `,
    },
  },
  "mobile-application": {
    slug: "mobile-application",
    type: "category",
    meta: {
      title: "Mobile App Development Company in Hyderabad | iOS & Android",
      description: "Top-rated mobile app development company in Hyderabad. We build high-performance iOS & Android apps for startups and brands.",
    },
    hero: {
      heading: "Mobile App Development Company in Hyderabad",
      subHeading: "Build high-performance <strong>iOS & Android apps</strong> that are user-friendly, SEO-optimized, and drive engagement. Ananya Hi Solutions helps startups & brands grow with custom mobile solutions.",
      trustPara: "✅ 50+ Apps Delivered | ⭐ Rated 5/5 by clients for mobile app solutions",
      ctaButton: {
        text: "Choose Package",
        link: "/ananya-hi-solutions-package",
        icon: "bi-cart-check",
        className: "btn-package",
      },
    },
    subSection: {
      heading: "Custom Mobile App Solutions for Startups & Brands",
      description: "Get <strong>SEO-friendly, high-converting mobile apps</strong> for Android & iOS platforms. We specialize in responsive, fast, and engaging apps that generate leads and sales.",
    },
    items: [
      {
        title: "iOS App Development",
        description: "Create responsive and engaging iOS apps that perform flawlessly on iPhones & iPads.",
        icon: "bi-apple",
        link: "ios-app-development-services-hyderabad",
        color: "#003d69", // Dark Blue
      },
      {
        title: "Android App Development",
        description: "Build high-quality Android apps optimized for performance and user experience.",
        icon: "bi-android2",
        link: "android-app-development-services-hyderabad",
        color: "#003d69", // Dark Blue
      },
    ],
    fullDetails: `
      <section class="py-5 bg-white">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h2 class="fw-bold mb-4 text-start">Custom Mobile App Development Services in Hyderabad</h2>
              <p class="text-start mb-4" style="color: #444; line-height: 1.7;">
                <a href="/mobile-application" class="text-primary text-decoration-none fw-semibold border-bottom border-primary">Mobile applications</a> have become essential business tools, providing direct customer engagement, enhanced brand loyalty, and new revenue streams. Ananya Hi Solutions delivers innovative, user-centric mobile applications that transform how businesses connect with their customers.
              </p>
              <p class="text-start mb-4" style="color: #444; line-height: 1.7;">
                Our mobile app development expertise spans native iOS development (Swift, Objective-C), native Android development (Kotlin, Java), hybrid app development (React Native, Flutter), and progressive web apps (PWA). We build apps across categories including e-commerce, on-demand services, social networking, enterprise solutions, gaming, education, and healthcare.
              </p>
              <p class="text-start mb-4" style="color: #444; line-height: 1.7;">
                Every mobile application we develop follows user-centered design principles, ensuring intuitive navigation, engaging interfaces, and seamless user experiences. Our development process includes comprehensive market research, detailed wireframing and prototyping, agile development methodology, rigorous quality assurance, app store optimization, and post-launch support and updates.
              </p>
              <p class="text-start mb-0" style="color: #444; line-height: 1.7;">
                Security, performance, and scalability are fundamental to our approach. We implement robust security protocols, optimize for fast loading and minimal battery consumption, ensure compatibility across devices and OS versions, and build scalable architectures that grow with your user base.
              </p>
            </div>
          </div>
        </div>
      </section>
    `,
    faqs: [
      {
        question: "What is the difference between native and hybrid mobile app development?",
        answer: "Native apps are built specifically for iOS or Android using platform-specific languages (Swift for iOS, Kotlin for Android), offering best performance, full platform features, and optimal user experience but requiring separate development for each platform. Hybrid apps use cross-platform frameworks (React Native, Flutter) allowing single codebase for both platforms, faster development, and lower costs, with slightly reduced performance for complex features.",
      },
      {
        question: "How much does mobile app development cost at Ananya Hi Solutions?",
        answer: "Mobile app costs vary significantly based on complexity, features, platform, and design requirements. Simple apps start from ₹1,50,000, medium complexity apps range ₹3,00,000-₹8,00,000, and complex enterprise apps can exceed ₹10,00,000. We provide detailed cost breakdowns after analyzing requirements, considering design, development, testing, deployment, and maintenance.",
      },
      {
        question: "What is the typical timeline for developing a mobile application?",
        answer: "Simple apps take 2–3 months, medium apps 4–6 months, and complex enterprise applications 6–12+ months. Timeline includes planning, design, development, testing, and deployment with clear milestones.",
      },
      {
        question: "How do you ensure mobile app security and data protection?",
        answer: "We implement comprehensive security measures including encrypted data transmission (SSL/TLS), secure authentication (OAuth, JWT), encrypted local storage, API security, secure payment gateway integration, regular security audits, compliance with data protection regulations (GDPR, etc.), secure backend infrastructure, and protection against common vulnerabilities (SQL injection, XSS, etc.).",
      },
      {
        question: "What post-launch support do you provide for mobile applications?",
        answer: "Our post-launch support includes bug fixes and technical support (3-6 months free), performance monitoring and optimization, OS compatibility updates, feature enhancements, app store management, user analytics and reporting, server maintenance, and ongoing consultation. Extended Annual Maintenance Contracts (AMC) are available for continuous support, updates, and improvements.",
      },
    ],
  },
  "ios-app-development-services-hyderabad": {
    slug: "ios-app-development-services-hyderabad",
    type: "detail",
    meta: {
      title: "iOS App Development Services in Hyderabad | iPhone & iPad Apps",
      description: "Top iOS app development company in Hyderabad. We build high-performance, scalable, and user-friendly iPhone and iPad applications.",
    },
    hero: {
      heading: "iOS App Development Services in Hyderabad | Build High-Quality Apps",
      subHeading: "Transform your idea into a powerful iOS app with Ananya Hi Solutions. We develop feature-rich, scalable, and user-friendly iPhone and iPad applications that engage users, enhance business growth, and deliver a seamless mobile experience.",
      ctaButton: {
        text: "Get FREE Consultation",
        link: "https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20an%20iOS%20app%20project.",
        icon: "bi-whatsapp",
        className: "btn-whatsapp",
      },
    },
    detailSection: {
      heading1: "Why Choose Ananya Hi Solutions for iOS App Development in Hyderabad?",
      paragraph1: "Our iOS app development team in Hyderabad combines technical expertise with creative design to build apps that stand out in the App Store. From concept to deployment, we follow a structured process including UI/UX design, app development, testing, and App Store submission. Whether you need a startup app, enterprise solution, or custom business app, we deliver high-quality iOS solutions that meet your goals.",
      image: "assets/front/images/services/ios-application-development-hyderabad.jpg",
      imageAlt: "ios app development company hyderabad",
      heading2: "Our iOS App Development Expertise",
      paragraph2: "We specialize in building native iOS apps that deliver smooth performance, intuitive design, and strong user engagement. Our team uses Swift and Objective-C, following best practices to ensure your app is secure, fast, and App Store-ready.",
      benefits: [
        "Custom iOS app design and development",
        "User-friendly UI/UX for enhanced engagement",
        "App Store deployment & submission support",
        "Integration with APIs and third-party services",
        "Ongoing maintenance and performance optimization",
      ],
      packageHtml: `
        <div class="card shadow-sm border-0 rounded-4 overflow-hidden h-100">
          <div class="card-header text-white text-center py-4" style="background: linear-gradient(135deg, #1485cb 0%, #064267 100%);">
            <h5 class="mb-1 fw-bold">Professional iOS App Development</h5>
            <p class="mb-0 small">From Idea to App Store Success</p>
          </div>
          <div class="card-body p-4 bg-white">
            <p class="card-text text-center mb-4" style="color: #444; line-height: 1.7;">
              Looking to launch a robust iOS application for iPhone or iPad? <strong>Ananya Hi Solutions</strong> offers expert <strong>iOS app development services in Hyderabad</strong> that focus on performance, usability, and scalability. We turn your ideas into apps that engage users and drive business growth.
            </p>
            <div class="text-center mt-4">
              <p class="small fw-bold mb-3 text-dark">Start building your iOS app today!</p>
              <a href="/contact" class="btn btn-primary rounded-pill px-4 py-2 shadow-sm d-inline-flex align-items-center gap-2" style="background-color: #0070bb; border: none; color: #fff !important;">
                <i class="bi bi-phone-fill"></i> Talk to Our iOS Experts
              </a>
            </div>
          </div>
        </div>
      `,
    },
  },
  "android-app-development-services-hyderabad": {
    slug: "android-app-development-services-hyderabad",
    type: "detail",
    meta: {
      title: "Android App Development Services in Hyderabad | Powerful Mobile Apps",
      description: "Best Android app development company in Hyderabad. We build high-performing, custom, and scalable Android apps for smartphones and tablets.",
    },
    hero: {
      heading: "Android App Development Services in Hyderabad | Build Powerful Mobile Apps",
      subHeading: "Transform your business ideas into high-performing Android apps with Ananya Hi Solutions. We develop custom, user-friendly, and scalable Android applications that engage users, enhance brand visibility, and deliver seamless mobile experiences.",
      ctaButton: {
        text: "Get FREE Consultation",
        link: "https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20an%20Android%20app%20project.",
        icon: "bi-whatsapp",
        className: "btn-whatsapp",
      },
    },
    detailSection: {
      heading1: "Why Choose Ananya Hi Solutions for Android App Development in Hyderabad?",
      paragraph1: "Our Android app development team in Hyderabad combines technical expertise with creative design to build apps that stand out in the Google Play Store. From concept and UI/UX design to development, testing, and deployment, we ensure your Android app is fully optimized, secure, and performance-ready. Whether you need a startup app, enterprise solution, or custom business application, we deliver exceptional Android solutions that meet your business goals.",
      image: "assets/front/images/services/android-application-development-hyderabad.jpg",
      imageAlt: "android app development company hyderabad",
      heading2: "Our Android App Development Expertise",
      paragraph2: "We specialize in developing native Android applications with smooth performance, intuitive UI/UX, and strong user engagement. Our team uses Java and Kotlin, following industry best practices to deliver apps that are secure, fast, and Google Play-ready.",
      benefits: [
        "Custom Android app design and development",
        "User-friendly UI/UX for enhanced engagement",
        "Google Play deployment & submission support",
        "Integration with APIs and third-party services",
        "Ongoing maintenance and performance optimization",
      ],
      packageHtml: `
        <div class="card shadow-sm border-0 rounded-4 overflow-hidden h-100">
          <div class="card-header text-white text-center py-4" style="background: linear-gradient(135deg, #1485cb 0%, #064267 100%);">
            <h5 class="mb-1 fw-bold">Professional Android App Development</h5>
            <p class="mb-0 small">From Concept to Google Play Success</p>
          </div>
          <div class="card-body p-4 bg-white">
            <p class="card-text text-center mb-4" style="color: #444; line-height: 1.7;">
              Want to launch a robust Android application for smartphones and tablets? <strong>Ananya Hi Solutions</strong> offers expert <strong>Android app development services in Hyderabad</strong> that focus on performance, scalability, and user engagement. We bring your ideas to life with apps that stand out and deliver results.
            </p>
            <div class="text-center mt-4">
              <p class="small fw-bold mb-3 text-dark">Start building your Android app today!</p>
              <a href="/contact" class="btn btn-primary rounded-pill px-4 py-2 shadow-sm d-inline-flex align-items-center gap-2" style="background-color: #0070bb; border: none; color: #fff !important;">
                <i class="bi bi-phone-fill"></i> Talk to Our Android Experts
              </a>
            </div>
          </div>
        </div>
      `,
    },
    ctaFinal: {
      heading: "Ready to Launch Your Android App?",
      subHeading: "Get your Android application developed by Hyderabad's trusted mobile app development company.",
      buttonText: "Chat on WhatsApp",
    },
  },
  "ecommerce-application-development": {
    slug: "ecommerce-application-development",
    type: "category",
    meta: {
      title: "E-commerce Website Development Company in Hyderabad | Single & Multi Vendor",
      description: "Top e-commerce website development company in Hyderabad. We build high-converting WooCommerce, Shopify, and custom e-commerce stores.",
    },
    hero: {
      heading: "E-commerce Website Development in Hyderabad",
      subHeading: "Launch a <strong>high-converting e-commerce store</strong> with secure payment gateways, responsive design, and SEO-friendly structure. We create both <strong>single-vendor and multi-vendor stores</strong> that help businesses boost sales online.",
      trustPara: "✅ 100+ E-commerce Stores Delivered | ⭐ Rated 5/5 for reliability and performance",
      ctaButton: {
        text: "Choose Package",
        link: "/ananya-hi-solutions-package",
        icon: "bi-cart-check",
        className: "btn-package",
      },
    },
    subSection: {
      heading: "Custom E-commerce Solutions for Single & Multi Vendor Stores",
      description: "Get <strong>SEO-friendly, mobile-optimized e-commerce websites</strong> with shopping carts, vendor dashboards, and analytics. Trusted by startups & brands in Hyderabad for online growth.",
    },
    items: [
      {
        title: "Single Vendor Store",
        description: "A fully customizable WooCommerce or Shopify store for a single vendor with SEO optimization to drive traffic and sales.",
        icon: "bi-cart-check",
        link: "single-vendor-ecommerce-website",
        color: "#003d69",
      },
      {
        title: "Multi Vendor Marketplace",
        description: "Enterprise-level multi-vendor marketplace optimized for SEO, performance, and seamless vendor management.",
        icon: "bi-columns-gap",
        link: "multi-vendor-ecommerce-marketplace",
        color: "#003d69",
      },
    ],
    fullDetails: `
      <section class="py-5 bg-white">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h2 class="fw-bold mb-4 text-start">Powerful E-Commerce Development Services in Hyderabad</h2>
              <p class="text-start mb-4" style="color: #444; line-height: 1.7;">
                E-commerce is transforming retail, and a powerful online store is essential for business success. Ananya Hi Solutions specializes in developing robust, scalable e-commerce solutions that drive sales, enhance customer experience, and streamline operations.
              </p>
              <p class="text-start mb-4" style="color: #444; line-height: 1.7;">
                We build comprehensive e-commerce platforms using leading technologies including Shopify for rapid deployment, WooCommerce for WordPress integration, Magento for enterprise-scale solutions, custom PHP frameworks for unique requirements, and headless commerce architectures for maximum flexibility. Our solutions support B2C, B2B, marketplace, and subscription-based business models.
              </p>
              <p class="text-start mb-4" style="color: #444; line-height: 1.7;">
                Every e-commerce platform we develop includes essential features: intuitive product catalog management, advanced search and filtering, secure payment gateway integration (Razorpay, PayU, CCAvenue, Stripe, PayPal), multi-currency and multi-language support, inventory management, order processing automation, customer account management, wishlist and cart abandonment recovery, and comprehensive analytics dashboards.
              </p>
              <p class="text-start mb-0" style="color: #444; line-height: 1.7;">
                We understand e-commerce success requires more than technology. Our solutions incorporate conversion optimization strategies, mobile-first responsive design, fast page loading for better user experience and SEO, secure checkout processes to build customer trust, email marketing integration, social media integration, and SEO-optimized product pages to maximize organic visibility.
              </p>
            </div>
          </div>
        </div>
      </section>
    `,
    faqs: [
      {
        question: "What is the difference between native and hybrid mobile app development?",
        answer: "Native apps are built specifically for iOS or Android using platform-specific languages (Swift for iOS, Kotlin for Android), offering best performance, full platform features, and optimal user experience but requiring separate development for each platform. Hybrid apps use cross-platform frameworks (React Native, Flutter) allowing single codebase for both platforms, faster development, and lower costs, with slightly reduced performance for complex features.",
      },
      {
        question: "How much does mobile app development cost at Ananya Hi Solutions?",
        answer: "Mobile app costs vary significantly based on complexity, features, platform, and design requirements. Simple apps start from ₹1,50,000, medium complexity apps range ₹3,00,000-₹8,00,000, and complex enterprise apps can exceed ₹10,00,000. We provide detailed cost breakdowns after analyzing requirements.",
      },
      {
        question: "What is the typical timeline for developing a mobile application?",
        answer: "Simple apps take 2–3 months, medium apps 4–6 months, and complex enterprise applications 6–12+ months. Timeline includes planning, design, development, testing, and deployment with clear milestones.",
      },
      {
        question: "How do you ensure mobile app security and data protection?",
        answer: "We use SSL/TLS encryption, OAuth/JWT authentication, secure APIs, encrypted storage, GDPR compliance, security audits, and protection against SQL injection and XSS vulnerabilities.",
      },
      {
        question: "What post-launch support do you provide for mobile applications?",
        answer: "Bug fixes, performance monitoring, OS updates, feature enhancements, analytics, server maintenance, and AMC support packages are available.",
      },
      {
        question: "What e-commerce platforms does Ananya Hi Solutions work with?",
        answer: "We work with Shopify, Shopify Plus, WooCommerce, Magento, PrestaShop, OpenCart, and custom PHP/Laravel frameworks. Platform selection depends on business size, budget, scalability, and feature requirements.",
      },
      {
        question: "How do you ensure e-commerce website security and PCI compliance?",
        answer: "We implement SSL encryption, PCI DSS compliance, secure gateways, vulnerability scanning, fraud detection, admin access controls, regular backups, and protection against SQL injection and XSS attacks.",
      },
      {
        question: "What payment gateways can be integrated into e-commerce websites?",
        answer: "We integrate Razorpay, PayU, CCAvenue, Instamojo, Paytm, Stripe, PayPal, Square, Authorize.net, UPI, wallets, COD, and bank transfers to maximize conversions.",
      },
      {
        question: "How do you optimize e-commerce websites for conversions?",
        answer: "We optimize checkout flow, product media, SEO descriptions, reviews, recommendations, urgency triggers, trust badges, mobile UX, and A/B testing to increase sales.",
      },
      {
        question: "What ongoing support is provided for e-commerce platforms?",
        answer: "Support includes updates, security patches, payment maintenance, inventory help, backups, performance tuning, feature additions, campaign support, and analytics reporting with custom maintenance plans.",
      },
    ],
    ctaFinal: {
      heading: "Ready to Launch Your E-commerce Store?",
      subHeading: "Get your static website designed by Hyderabad's trusted web design company.",
      buttonText: "Talk to Our Experts",
    },
  },
  "single-vendor-ecommerce-website": {
    slug: "single-vendor-ecommerce-website",
    type: "detail",
    meta: {
      title: "Single Vendor E-commerce Website Development Hyderabad | Ananya Hi Solutions",
      description: "Build your own online store with our professional single vendor e-commerce development services in Hyderabad. Secure, scalable, and user-friendly.",
    },
    hero: {
      heading: "Single Vendor eCommerce Development in Hyderabad | Build Your Online Store",
      subHeading: "Launch your own online store with a robust single vendor eCommerce platform. At Ananya Hi Solutions, we develop feature-rich, secure, and scalable eCommerce websites that help businesses sell products online and grow their digital presence in Hyderabad.",
      heroImage: "",
      ctaButton: {
        text: "Get FREE Consultation",
        link: "https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20a%20single%20vendor%20ecommerce%20project.",
        icon: "bi-whatsapp",
        className: "btn-whatsapp",
      },
    },
    detailSection: {
      heading1: "Why Choose Ananya Hi Solutions for Single Vendor eCommerce <br /> Development?",
      paragraph1: "Our team in Hyderabad specializes in creating custom single vendor eCommerce platforms with user-friendly admin panels, seamless payment integration, and responsive design. From product catalog management to order processing and analytics, we provide end-to-end solutions that make selling online simple and efficient.",
      image: "assets/front/images/services/ecommerce-web-developer.jpg",
      imageAlt: "single vendor ecommerce development hyderabad",
      heading2: "Our Single Vendor eCommerce Expertise",
      paragraph2: "We provide end-to-end solutions for single vendor eCommerce stores including product listing, shopping cart, payment gateway integration, and analytics. Our platforms are mobile-responsive, SEO-friendly, and optimized for performance to ensure your customers have a smooth shopping experience.",
      benefits: [
        "Custom product catalog and inventory management",
        "Secure payment gateway integration",
        "Mobile-responsive and SEO-optimized design",
        "Order management and analytics dashboard",
        "Scalable architecture for future growth",
      ],
      packageHtml: `
        <h4 class="fw-bold mb-3"><span class="me-2">🎁</span> Want to See Our Full Package Details?</h4>
        <p class="text-muted mb-4 small">Fill out the short form to instantly unlock our complete package information.</p>
        <div class="card shadow-sm border-0" style="border-radius: 15px; overflow: hidden;">
          <div class="card-header text-white text-center py-3" style="background: linear-gradient(135deg, #1485cb 0%, #1164a3 100%); border: none;">
            <h5 class="mb-1 fw-bold">Custom Single Vendor eCommerce Solutions</h5>
            <p class="mb-0 small">Sell Products Online Easily & Efficiently</p>
          </div>
          <div class="card-body p-4 bg-white">
            <p class="card-text text-center mb-4" style="color: #444; line-height: 1.7;">
              Looking to launch a professional online store? <strong>Ananya Hi Solutions</strong> offers expert <strong>single vendor eCommerce development in Hyderabad</strong> that combines beautiful design, powerful features, and seamless functionality. Grow your online business with a website that attracts customers and boosts sales.
            </p>
            <div class="text-center mt-4">
              <p class="small fw-bold mb-3 text-dark">Start your online store today!</p>
              <a href="/contact" class="btn btn-primary rounded-pill px-4 py-2 shadow-sm d-inline-flex align-items-center gap-2" style="background-color: #0070bb; border: none; color: #fff !important;">
                <i class="bi bi-cart-fill"></i> Talk to Our eCommerce Experts
              </a>
            </div>
          </div>
        </div>
      `,
    },
    ctaFinal: {
      heading: "Ready to Launch Your Business Website?",
      subHeading: "Get your static website designed by Hyderabad's trusted web design company.",
      buttonText: "Chat on WhatsApp",
    },
  },
  "multi-vendor-ecommerce-marketplace": {
    slug: "multi-vendor-ecommerce-marketplace",
    type: "detail",
    meta: {
      title: "Multi Vendor Marketplace Development Hyderabad | Build Amazon-like Platform",
      description: "Launch a powerful multi-vendor marketplace in Hyderabad. We build scalable, secure platforms with vendor dashboards and advanced management features.",
    },
    hero: {
      heading: "Multi Vendor Marketplace Development in Hyderabad | Expand Your Online Business",
      subHeading: "Build a scalable multi vendor marketplace with Ananya Hi Solutions. Enable multiple sellers to list products, manage orders, and reach customers through a powerful, secure, and SEO-friendly platform in Hyderabad.",
      ctaButton: {
        text: "Get FREE Consultation",
        link: "https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20a%20multi%20vendor%20marketplace%20project.",
        icon: "bi-whatsapp",
        className: "btn-whatsapp",
      },
    },
    detailSection: {
      heading1: "Why Choose Ananya Hi Solutions for Multi Vendor Marketplace Development?",
      paragraph1: "Our team in Hyderabad specializes in creating custom multi vendor eCommerce platforms that allow multiple sellers to operate seamlessly. From product management, order tracking, and vendor dashboards to secure payment processing and analytics, we deliver end-to-end solutions that empower your marketplace and maximize sales potential.",
      image: "assets/front/images/services/ecommerce-web-developer.jpg",
      imageAlt: "multi vendor marketplace development hyderabad",
      heading2: "Our Multi Vendor Marketplace Expertise",
      paragraph2: "We provide end-to-end multi vendor solutions including vendor onboarding, product catalog management, order management, payment gateway integration, and analytics dashboards. Our marketplaces are mobile-responsive, SEO-friendly, and built for scalability to support business growth.",
      benefits: [
        "Vendor dashboard & management tools",
        "Product catalog and inventory management",
        "Secure payment gateway integration",
        "Mobile-responsive and SEO-optimized design",
        "Commission management and split payments",
      ],
      packageHtml: `
        <h4 class="fw-bold mb-3"><span class="me-2">🎁</span> Want to See Our Full Package Details?</h4>
        <p class="text-muted mb-4 small">Fill out the short form to instantly unlock our complete package information.</p>
        <div class="card shadow-sm border-0" style="border-radius: 15px; overflow: hidden;">
          <div class="card-header text-white text-center py-3" style="background: linear-gradient(135deg, #1485cb 0%, #1164a3 100%); border: none;">
            <h5 class="mb-1 fw-bold">Professional Multi Vendor Marketplace Solutions</h5>
            <p class="mb-0 small">Connect Multiple Sellers & Grow Your Online Platform</p>
          </div>
          <div class="card-body p-4 bg-white">
            <p class="card-text text-center mb-4" style="color: #444; line-height: 1.7;">
              Want to launch a robust multi vendor marketplace? <strong>Ananya Hi Solutions</strong> provides expert <strong>multi vendor marketplace development services in Hyderabad</strong> that combine intuitive design, powerful features, and seamless functionality. Enable multiple vendors to sell online and grow your platform efficiently.
            </p>
            <div class="text-center mt-4">
              <p class="small fw-bold mb-3 text-dark">Start your multi vendor platform today!</p>
              <a href="/contact" class="btn btn-primary rounded-pill px-4 py-2 shadow-sm d-inline-flex align-items-center gap-2" style="background-color: #0070bb; border: none; color: #fff !important;">
                <i class="bi bi-shop"></i> Talk to Our Marketplace Experts
              </a>
            </div>
          </div>
        </div>
      `,
    },
    ctaFinal: {
      heading: "Ready to Launch Your Business Website?",
      subHeading: "Get your static website designed by Hyderabad's trusted web design company.",
      buttonText: "Chat on WhatsApp",
    },
  },
  "video-production": {
    slug: "video-production",
    type: "category",
    meta: {
      title: "Best Video Production Company in Hyderabad | Corporate & Marketing Videos",
      description: "Professional video production services in Hyderabad. We create high-quality corporate films, promotional videos, explainer videos, and social media content.",
    },
    hero: {
      heading: "Video Production Services in Hyderabad",
      subHeading: "Create high-quality, engaging, and SEO-optimized videos that connect with your audience and boost brand visibility. We provide end-to-end video production services for businesses, brands, and creators.",
      trustPara: "✅ 200+ Videos Delivered | 🎬 Trusted by Startups, Corporates & Creators",
      ctaButton: {
        text: "Choose Package",
        link: "/ananya-hi-solutions-package",
        icon: "bi-cart-check",
        className: "btn-package",
      },
    },
    subSection: {
      heading: "Professional Video Production Solutions",
      description: "From corporate films to social media content, we craft videos that tell stories, engage customers, and drive conversions. Our video team ensures top-quality visuals, editing, and marketing impact.",
    },
    items: [
      {
        title: "Corporate Video Production",
        description: "Professional corporate films to showcase your brand, culture, and success stories.",
        icon: "bi-building",
        link: "corporate-video-shoot-hyderabad",
      },
      {
        title: "Promotional Marketing Videos",
        description: "Attractive marketing videos to promote your products, services, and offers.",
        icon: "bi-bullseye",
        link: "promotional-marketing-videos-hyderabad",
      },
      {
        title: "Event Coverage & Highlights",
        description: "Full event coverage with cinematic highlights and engaging edits.",
        icon: "bi-camera-reels",
        link: "event-coverage-services-hyderabad",
      },
      {
        title: "Product Explainer Videos",
        description: "Simple and creative videos to explain your products and boost conversions.",
        icon: "bi-box-seam",
        link: "product-explainer-video-services-hyderabad",
      },
      {
        title: "Social Media Video Content",
        description: "Short-form video content optimized for Instagram, Facebook & YouTube.",
        icon: "bi-instagram",
        link: "social-media-video-production-hyderabad",
      },
      {
        title: "Music Video Production",
        description: "Creative music videos with cinematic visuals and high-end editing.",
        icon: "bi-music-note-beamed",
        link: "music-video-production-services-hyderabad",
      },
      {
        title: "Short Films & Web Series Production",
        description: "End-to-end production for short films and web series with professional crews.",
        icon: "bi-film",
        link: "short-film-production-hyderabad",
      },
    ],
    fullDetails: `
      <section class="container py-5">
        <div class="row">
          <div class="col-12">
            <h2 class="fw-bold mb-4 text-dark">Professional Video Production Services in Hyderabad</h2>
            <p class="mb-3 text-muted">
              Video content has emerged as the most engaging and effective medium for digital communication. Ananya Hi Solutions offers professional video production services that capture attention, communicate messages effectively, and drive audience engagement across all digital platforms.
            </p>
            <p class="mb-3 text-muted">
              Our comprehensive video production services include corporate videos showcasing company culture and values, product demonstration videos highlighting features and benefits, explainer videos simplifying complex concepts, social media video content optimized for each platform, testimonial videos building credibility, training and educational videos, event coverage, and animated videos for abstract concepts.
            </p>
            <p class="mb-3 text-muted">
              We manage the entire video production process from concept development and scriptwriting, professional filming with high-quality equipment and lighting, expert editing and post-production, motion graphics and animation, voice-over recording in multiple languages, background music and sound design, color grading for a professional look, to final delivery in multiple formats optimized for YouTube, Instagram, LinkedIn, and websites.
            </p>
            <p class="mb-3 text-muted">
              Our experienced production team combines creative storytelling with technical excellence, ensuring every video aligns with your brand identity, resonates with target audiences, and achieves marketing objectives. Whether you need a 30-second social media clip or a comprehensive corporate documentary, we deliver exceptional results.
            </p>
          </div>
        </div>
      </section>
    `,
    faqs: [
      {
        question: "What types of video production services does Ananya Hi Solutions offer?",
        answer: "We offer comprehensive video services including corporate promotional videos, product demonstration and unboxing videos, explainer and whiteboard animation videos, customer testimonial videos, social media content (Instagram Reels, YouTube Shorts, TikTok), training and e-learning videos, event coverage and documentation, brand story videos, and 2D/3D animation videos. Each service is customized to meet specific marketing objectives.",
      },
      {
        question: "How much does professional video production cost?",
        answer: "Video production costs vary based on complexity, duration, location shooting requirements, and post-production needs. Simple social media videos start from ₹15,000, professional corporate videos range ₹50,000-₹2,00,000, and complex animated or multi-location productions can exceed ₹3,00,000. We provide detailed quotes after understanding requirements, including scripting, filming, editing, and revisions.",
      },
      {
        question: "What is the typical timeline for video production projects?",
        answer: "Production timelines depend on video complexity and requirements. Simple videos take 1-2 weeks (including 2-3 days filming, 5-7 days editing), standard corporate videos require 3-4 weeks, and complex productions with animation or multiple locations need 6-8 weeks. The process includes pre-production planning, filming, editing and revisions, and final delivery with regular updates throughout.",
      },
      {
        question: "How do you ensure video content aligns with brand identity?",
        answer: "We conduct thorough brand discovery sessions covering brand guidelines, colors, fonts, tone, and messaging. Our creative team develops concepts and storyboards for approval before filming, ensures consistent visual style, incorporates brand elements (logos, colors, music), and provides multiple revision rounds to perfectly align with brand identity and marketing objectives.",
      },
      {
        question: "What video formats and platforms do you optimize content for?",
        answer: "We deliver videos optimized for all major platforms including YouTube (HD, 4K), Instagram (Feed, Stories, Reels, IGTV), Facebook, LinkedIn, Twitter, TikTok, website embedding, presentations, and broadcast. Each platform requires specific aspect ratios (16:9, 9:16, 1:1), durations, and technical standards which we optimize for maximum engagement.",
      },
    ],
  },
  "corporate-video-shoot-hyderabad": {
    slug: "corporate-video-shoot-hyderabad",
    type: "detail",
    meta: {
      title: "Corporate Video Production Services Hyderabad | Showcase Your Brand",
      description: "Tell your brand story with professionally crafted corporate videos. High-quality production for business growth, brand credibility, and audience engagement.",
    },
    hero: {
      heading: "Corporate Video Production Services in Hyderabad | Showcase Your Brand",
      subHeading: "Tell your brand story with professionally crafted corporate videos. At Ananya Hi Solutions, we produce high-quality videos that engage your audience, enhance brand credibility, and drive business growth in Hyderabad.",
      ctaButton: {
        text: "Get FREE Consultation",
        link: "https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20a%20corporate%20video%20project.",
        icon: "bi-whatsapp",
        className: "btn-whatsapp",
      },
    },
    detailSection: {
      heading1: "Why Choose Ananya Hi Solutions for Corporate Video Production?",
      paragraph1: "Our team in Hyderabad specializes in creating impactful corporate videos that communicate your brand message clearly and creatively. From concept development, scripting, and storyboarding to filming, editing, and post-production, we ensure your videos resonate with your target audience and leave a lasting impression.",
      image: "assets/front/images/services/video-production-services-hyderabad.jpg",
      imageAlt: "corporate video production hyderabad",
      heading2: "Our Corporate Video Expertise",
      paragraph2: "We produce a wide range of corporate videos including promotional videos, product demos, explainer videos, training videos, and event coverage. Our videos are designed to engage audiences, improve brand awareness, and increase conversions, all optimized for web and social media platforms.",
      benefits: [
        "High-quality video production from concept to final edit",
        "Engaging storytelling to communicate your brand effectively",
        "Professional filming, editing, and post-production",
        "Optimized for web, social media, and presentations",
        "Enhances brand credibility and audience engagement",
      ],
      footerImage: "",
      packageHtml: `
        <div class="card shadow-sm border-0 video-package-card" style="border-radius: 15px; overflow: hidden;">
          <div class="card-header text-white text-center py-3" style="background-color: #4ea8de; border: none;">
            <h5 class="mb-0 fw-bold">🎬 Elevate Your Brand with Professional Corporate Videos</h5>
            <p class="mb-0 small">Create videos that engage your audience, boost visibility, and grow your business.</p>
          </div>
          <div class="card-body p-4 text-center">
            <p class="card-text text-muted mb-4">
              Discover how Ananya Hi Solutions in Hyderabad can help you produce corporate videos that showcase your brand, communicate your story, and connect with your audience effectively. Fill out the form to discuss your project and get personalized expert guidance.
            </p>
            <a href="https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20a%20corporate%20video%20project." class="btn text-white rounded-pill px-4 py-2 shadow-sm btn-video-project" style="background-color: #1485cb; border: none;">
              <i class="bi bi-camera-video-fill me-2"></i> Start Your Corporate Video Project Today
            </a>
          </div>
        </div>
      `,
    },
    ctaFinal: {
      heading: "Ready to Launch Your Business Website?",
      subHeading: "Get your static website designed by Hyderabad's trusted web design company.",
      buttonText: "Chat on WhatsApp",
    },
  },
  "promotional-marketing-videos-hyderabad": {
    slug: "promotional-marketing-videos-hyderabad",
    type: "detail",
    meta: {
      title: "Promotional Marketing Video Services Hyderabad | Boost Brand Awareness",
      description: "Drive sales and engagement with high-impact promotional marketing videos. Professional production in Hyderabad for product launches and campaigns.",
    },
    hero: {
      heading: "Promotional Marketing Video Services in Hyderabad | Boost Your Brand Awareness",
      subHeading: "Engage your audience and drive sales with high-impact promotional marketing videos. At Ananya Hi Solutions, we create videos that communicate your brand message effectively, inspire action, and increase conversions for businesses in Hyderabad.",
      ctaButton: {
        text: "Get FREE Consultation",
        link: "https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20a%20promotional%20marketing%20video%20project.",
        icon: "bi-whatsapp",
        className: "btn-whatsapp",
      },
    },
    detailSection: {
      heading1: "Why Choose Ananya Hi Solutions for Promotional Marketing Videos?",
      paragraph1: "Our team in Hyderabad specializes in producing promotional marketing videos that capture attention and communicate your brand story clearly. From creative concept development, scripting, and storyboarding to filming, animation, and post-production, we deliver videos designed to generate leads and grow your business online.",
      image: "assets/front/images/services/video-production-services-hyderabad.jpg",
      imageAlt: "promotional marketing video production hyderabad",
      heading2: "Our Promotional Marketing Video Expertise",
      paragraph2: "We create promotional videos for product launches, service marketing, social media campaigns, and digital advertising. Our videos are crafted to be engaging, persuasive, and optimized for web and social media, helping your brand reach the right audience effectively.",
      benefits: [
        "Creative video concept and storyboard",
        "High-quality filming, animation, and editing",
        "Optimized for web, social media, and campaigns",
        "Boosts brand awareness and engagement",
        "Drive leads and increase conversions effectively",
      ],
      packageHtml: `
        <div class="card shadow-sm border-0 video-package-card" style="border-radius: 15px; overflow: hidden;">
          <div class="card-header text-white text-center py-3" style="background-color: #4ea8de; border: none;">
            <h5 class="mb-0 fw-bold">🎬 Drive Engagement with Promotional Marketing Videos</h5>
            <p class="mb-0 small">Create compelling videos that capture attention and boost conversions.</p>
          </div>
          <div class="card-body p-4 text-center">
            <p class="card-text text-muted mb-4">
              Want to promote your products or services effectively? <strong>Ananya Hi Solutions</strong> offers expert <strong>promotional marketing video production in Hyderabad</strong> that combines creativity, storytelling, and professional execution. Fill out the form to discuss your project and get a tailored solution for your brand.
            </p>
            <a href="https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20a%20promotional%20marketing%20video%20project." class="btn text-white rounded-pill px-4 py-2 shadow-sm btn-video-project" style="background-color: #1485cb; border: none;">
              <i class="bi bi-play-circle-fill me-2"></i> Start Your Promotional Video Project
            </a>
          </div>
        </div>
      `,
    },
    ctaFinal: {
      heading: "Ready to Launch Your Business Website?",
      subHeading: "Get your static website designed by Hyderabad's trusted web design company.",
      buttonText: "Chat on WhatsApp",
    },
  },
  "event-coverage-services-hyderabad": {
    slug: "event-coverage-services-hyderabad",
    type: "detail",
    meta: {
      title: "Event Coverage & Highlight Video Services Hyderabad | Capture Every Moment",
      description: "Professional event coverage and highlight video production in Hyderabad. Cinematic storytelling for corporate events, launches, and conferences.",
    },
    hero: {
      heading: "Event Coverage & Highlights Services in Hyderabad | Capture Every Moment",
      subHeading: "Make your events unforgettable with professional event coverage and highlight videos. At Ananya Hi Solutions, we capture every moment with precision and creativity, helping businesses, corporates, and organizations showcase their events effectively in Hyderabad.",
      ctaButton: {
        text: "Get FREE Consultation",
        link: "https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20an%20event%20coverage%20project.",
        icon: "bi-whatsapp",
        className: "btn-whatsapp",
      },
    },
    detailSection: {
      heading1: "Why Choose Ananya Hi Solutions for Event Coverage & Highlights?",
      paragraph1: "Our Hyderabad-based team specializes in covering corporate events, conferences, product launches, workshops, and social gatherings. We provide full event coverage with cinematic highlight reels that tell your story, engage your audience, and create lasting impressions. From planning and filming to editing and post-production, we handle every detail professionally.",
      image: "assets/front/images/services/video-production-services-hyderabad.jpg",
      imageAlt: "event coverage services hyderabad",
      heading2: "Our Event Coverage Expertise",
      paragraph2: "We provide complete event coverage services including filming, live streaming, and creating highlight reels. Our videos are designed to engage viewers, promote your brand, and preserve the most important moments of your events. Optimized for social media and presentations, our videos help you reach your audience effectively.",
      benefits: [
        "Comprehensive event filming and coverage",
        "Professional highlight video creation",
        "Engaging storytelling for corporate and social events",
        "Optimized for social media and online promotion",
        "High-quality production and post-production editing",
      ],
      packageHtml: `
        <div class="card shadow-sm border-0 video-package-card" style="border-radius: 15px; overflow: hidden;">
          <div class="card-header text-white text-center py-3" style="background-color: #4ea8de; border: none;">
            <h5 class="mb-0 fw-bold">🎬 Professional Event Coverage & Highlights</h5>
            <p class="mb-0 small">Capture every detail and create engaging highlight videos for your events.</p>
          </div>
          <div class="card-body p-4 text-center">
            <p class="card-text text-muted mb-4">
              Want to make your events memorable? <strong>Ananya Hi Solutions</strong> offers expert <strong>event coverage and highlight video production in Hyderabad</strong>. From corporate events to product launches, we ensure every key moment is captured creatively and professionally. Fill out the form to discuss your project and get tailored solutions.
            </p>
            <a href="https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20an%20event%20coverage%20project." class="btn text-white rounded-pill px-4 py-2 shadow-sm btn-video-project" style="background-color: #1485cb; border: none;">
              <i class="bi bi-calendar-check-fill me-2"></i> Book Your Event Coverage Today
            </a>
          </div>
        </div>
      `,
    },
    ctaFinal: {
      heading: "Ready to Launch Your Business Website?",
      subHeading: "Get your static website designed by Hyderabad's trusted web design company.",
      buttonText: "Chat on WhatsApp",
    },
  },
  "product-explainer-video-services-hyderabad": {
    slug: "product-explainer-video-services-hyderabad",
    type: "detail",
    meta: {
      title: "Product Explainer Video Services Hyderabad | Simplify Your Product",
      description: "Boost conversions with professional product explainer videos. Expert animation and live-action video production in Hyderabad to showcase your features.",
    },
    hero: {
      heading: "Product Explainer Video Services in Hyderabad | Simplify & Promote Your Product",
      subHeading: "Showcase your products clearly and effectively with professional explainer videos. At Ananya Hi Solutions, we create engaging and informative videos that help your customers understand your product, improve conversions, and enhance brand visibility in Hyderabad.",
      ctaButton: {
        text: "Get FREE Consultation",
        link: "https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20a%20product%20explainer%20video%20project.",
        icon: "bi-whatsapp",
        className: "btn-whatsapp",
      },
    },
    detailSection: {
      heading1: "Why Choose Ananya Hi Solutions for Product Explainer Videos?",
      paragraph1: "Our Hyderabad-based team specializes in creating animated and live-action product explainer videos that communicate your product features and benefits clearly. From scriptwriting, storyboarding, animation, and filming to post-production, we deliver videos designed to engage your audience and drive results.",
      image: "assets/front/images/services/video-production-services-hyderabad.jpg",
      imageAlt: "product explainer video services hyderabad",
      heading2: "Our Product Explainer Video Expertise",
      paragraph2: "We produce engaging animated and live-action explainer videos for websites, apps, and product launches. Our videos simplify complex concepts, highlight product benefits, and improve conversions. Optimized for web, social media, and presentations, they help your brand connect effectively with your audience.",
      benefits: [
        "Clear product explanation through animated or live-action videos",
        "Engaging storytelling to highlight key product benefits",
        "High-quality filming, animation, and editing",
        "Optimized for web, social media, and presentations",
        "Increase conversions and customer understanding effectively",
      ],
      packageHtml: `
        <div class="card shadow-sm border-0 video-package-card" style="border-radius: 15px; overflow: hidden;">
          <div class="card-header text-white text-center py-3" style="background-color: #4ea8de; border: none;">
            <h5 class="mb-0 fw-bold">🎬 Create Engaging Product Explainer Videos</h5>
            <p class="mb-0 small">Simplify your product story and boost customer understanding.</p>
          </div>
          <div class="card-body p-4 text-center">
            <p class="card-text text-muted mb-4">
              Want your customers to understand your product instantly? <strong>Ananya Hi Solutions</strong> provides expert <strong>product explainer video production services in Hyderabad</strong>. We create compelling videos that showcase your product features, explain usage, and highlight benefits. Fill out the form to discuss your project and get a tailored solution.
            </p>
            <a href="https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20a%20product%20explainer%20video%20project." class="btn text-white rounded-pill px-4 py-2 shadow-sm btn-video-project" style="background-color: #1485cb; border: none;">
              <i class="bi bi-play-btn-fill me-2"></i> Start Your Explainer Video Project
            </a>
          </div>
        </div>
      `,
    },
    ctaFinal: {
      heading: "Ready to Launch Your Business Website?",
      subHeading: "Get your static website designed by Hyderabad's trusted web design company.",
      buttonText: "Chat on WhatsApp",
    },
  },
  "social-media-video-production-hyderabad": {
    slug: "social-media-video-production-hyderabad",
    type: "detail",
    meta: {
      title: "Social Media Video Production Services Hyderabad | Boost Engagement",
      description: "Increase your reach with short, engaging social media videos. Expert reels, ads, and storytelling video production in Hyderabad for all platforms.",
    },
    hero: {
      heading: "Social Media Video Production Services in Hyderabad | Boost Engagement & Reach",
      subHeading: "Capture attention on social platforms with professionally crafted social media videos. At Ananya Hi Solutions, we create videos optimized for Instagram, Facebook, YouTube, and other platforms to increase engagement, followers, and conversions.",
      ctaButton: {
        text: "Get FREE Consultation",
        link: "https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20a%20social%20media%20video%20project.",
        icon: "bi-whatsapp",
        className: "btn-whatsapp",
      },
    },
    detailSection: {
      heading1: "Why Choose Ananya Hi Solutions for Social Media Video Production?",
      paragraph1: "Our team in Hyderabad specializes in creating social media videos that are short, engaging, and shareable. From promotional clips, reels, and ads to brand storytelling videos, we design content that resonates with your audience, enhances your brand presence, and drives measurable results.",
      image: "assets/front/images/services/video-production-services-hyderabad.jpg",
      imageAlt: "social media video production hyderabad",
      heading2: "Our Social Media Video Expertise",
      paragraph2: "We produce social media videos for brand promotion, ads, reels, stories, and influencer marketing. Our videos are designed to capture attention, drive engagement, and increase brand visibility across platforms. Optimized for vertical and horizontal formats, they help your brand reach and convert the right audience effectively.",
      benefits: [
        "Short, engaging, and shareable videos for social platforms",
        "Creative storytelling to enhance brand identity",
        "Optimized for Instagram, Facebook, YouTube, LinkedIn, and TikTok",
        "Professional editing, animations, and effects",
        "Increase engagement, followers, and conversions effectively",
      ],
      packageHtml: `
        <div class="card shadow-sm border-0 video-package-card" style="border-radius: 15px; overflow: hidden;">
          <div class="card-header text-white text-center py-3" style="background-color: #4ea8de; border: none;">
            <h5 class="mb-0 fw-bold">🎬 Engage Your Audience with Social Media Videos</h5>
            <p class="mb-0 small">Create videos that grab attention, go viral, and boost engagement.</p>
          </div>
          <div class="card-body p-4 text-center">
            <p class="card-text text-muted mb-4">
              Want to grow your social media presence? <strong>Ananya Hi Solutions</strong> offers expert <strong>social media video production services in Hyderabad</strong>. We craft compelling videos for Instagram, Facebook, YouTube, and LinkedIn that connect with your audience and elevate your brand. Fill out the form to discuss your project and get a custom strategy.
            </p>
            <a href="https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20a%20social%20media%20video%20project." class="btn text-white rounded-pill px-4 py-2 shadow-sm btn-video-project" style="background-color: #1485cb; border: none;">
              <i class="bi bi-share-fill me-2"></i> Start Your Social Media Video Project
            </a>
          </div>
        </div>
      `,
    },
    ctaFinal: {
      heading: "Ready to Launch Your Business Website?",
      subHeading: "Get your static website designed by Hyderabad's trusted web design company.",
      buttonText: "Chat on WhatsApp",
    },
  },
  "music-video-production-services-hyderabad": {
    slug: "music-video-production-services-hyderabad",
    type: "detail",
    meta: {
      title: "Music Video Production Services Hyderabad | Cinematic Visuals",
      description: "Bring your music to life with professional music video production in Hyderabad. Stunning visuals, choreography, and expert editing for artists and bands.",
    },
    hero: {
      heading: "Music Video Production Services in Hyderabad | Create Captivating Visuals",
      subHeading: "Bring your music to life with professional music video production. At Ananya Hi Solutions, we create visually stunning music videos that resonate with your audience, amplify your brand, and increase engagement in Hyderabad.",
      ctaButton: {
        text: "Get FREE Consultation",
        link: "https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20a%20music%20video%20project.",
        icon: "bi-whatsapp",
        className: "btn-whatsapp",
      },
    },
    detailSection: {
      heading1: "Why Choose Ananya Hi Solutions for Music Video Production?",
      paragraph1: "Our Hyderabad-based team specializes in producing high-quality music videos for artists, bands, and brands. From concept development, choreography, filming, and lighting to editing, visual effects, and color grading, we ensure your music video stands out and creates a lasting impact on your audience.",
      image: "assets/front/images/services/video-production-services-hyderabad.jpg",
      imageAlt: "music video production hyderabad",
      heading2: "Our Music Video Expertise",
      paragraph2: "We produce music videos for solo artists, bands, and brands, combining storytelling, choreography, and cinematic visuals. Our videos are optimized for YouTube, Instagram, and other platforms to increase audience engagement and build your brand identity.",
      benefits: [
        "Cinematic music video production from concept to final edit",
        "Choreography, filming, lighting, and post-production",
        "Engaging storytelling and visual effects",
        "Optimized for YouTube, Instagram, and social media platforms",
        "Enhances brand identity and fan engagement",
      ],
      packageHtml: `
        <div class="card shadow-sm border-0 video-package-card" style="border-radius: 15px; overflow: hidden;">
          <div class="card-header text-white text-center py-3" style="background-color: #4ea8de; border: none;">
            <h5 class="mb-0 fw-bold">🎬 Create Stunning Music Videos</h5>
            <p class="mb-0 small">Bring your music to life with high quality visuals and creative storytelling.</p>
          </div>
          <div class="card-body p-4 text-center">
            <p class="card-text text-muted mb-4">
              Want your music to reach more fans and create a visual impact? <strong>Ananya Hi Solutions</strong> provides expert <strong>music video production services in Hyderabad</strong>. We handle everything from concept and choreography to filming and post-production. Fill out the form to discuss your project and get a tailor-made solution.
            </p>
            <a href="https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20a%20music%20video%20project." class="btn text-white rounded-pill px-4 py-2 shadow-sm btn-video-project" style="background-color: #1485cb; border: none;">
              <i class="bi bi-music-player-fill me-2"></i> Start Your Music Video Project
            </a>
          </div>
        </div>
      `,
    },
    ctaFinal: {
      heading: "Ready to Launch Your Business Website?",
      subHeading: "Get your static website designed by Hyderabad's trusted web design company.",
      buttonText: "Chat on WhatsApp",
    },
  },
  "short-film-production-hyderabad": {
    slug: "short-film-production-hyderabad",
    type: "detail",
    meta: {
      title: "Short Film & Web Series Production Hyderabad | Cinematic Storytelling",
      description: "Transform your vision into cinematic reality. Professional short film and web series production in Hyderabad with expert scripting, filming, and post-production.",
    },
    hero: {
      heading: "Short Film Video Production Services in Hyderabad | Tell Your Story Cinematically",
      subHeading: "Bring your creative vision to life with professional short film production. At Ananya Hi Solutions, we produce compelling short films that engage audiences, convey stories effectively, and showcase your talent or brand in Hyderabad.",
      ctaButton: {
        text: "Get FREE Consultation",
        link: "https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20a%20short%20film%20project.",
        icon: "bi-whatsapp",
        className: "btn-whatsapp",
      },
    },
    detailSection: {
      heading1: "Why Choose Ananya Hi Solutions for Short Film Production?",
      paragraph1: "Our Hyderabad-based team specializes in producing high-quality short films for storytellers, artists, and brands. From scripting, storyboarding, and casting to filming, editing, and post-production, we ensure your film delivers maximum impact and resonates with your audience.",
      image: "assets/front/images/services/video-production-services-hyderabad.jpg",
      imageAlt: "short film production hyderabad",
      heading2: "Our Short Film Production Expertise",
      paragraph2: "We produce short films that are visually engaging and emotionally compelling. Our services include scripting, pre-production planning, filming, editing, color grading, and sound design. Optimized for festivals, social media, and online platforms, our short films help you tell your story effectively.",
      benefits: [
        "Cinematic short film production from concept to final cut",
        "Professional scripting, storyboarding, and casting",
        "High-quality filming, editing, sound design, and color grading",
        "Optimized for festivals, social media, and online platforms",
        "Engage audiences with compelling storytelling and visuals",
      ],
      packageHtml: `
        <div class="card shadow-sm border-0 video-package-card" style="border-radius: 15px; overflow: hidden;">
          <div class="card-header text-white text-center py-3" style="background-color: #4ea8de; border: none;">
            <h5 class="mb-0 fw-bold">🎬 Professional Short Film Production</h5>
            <p class="mb-0 small">Transform your ideas into captivating short films.</p>
          </div>
          <div class="card-body p-4 text-center">
            <p class="card-text text-muted mb-4">
              Want to create a cinematic short film that captivates your audience? <strong>Ananya Hi Solutions</strong> provides expert <strong>short film production services in Hyderabad</strong>. We handle everything from concept development to final editing. Fill out the form to discuss your project and receive a customized production plan.
            </p>
            <a href="https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20a%20short%20film%20project." class="btn text-white rounded-pill px-4 py-2 shadow-sm btn-video-project" style="background-color: #1485cb; border: none;">
              <i class="bi bi-film me-2"></i> Start Your Short Film Project
            </a>
          </div>
        </div>
      `,
    },
    ctaFinal: {
      heading: "Ready to Launch Your Business Website?",
      subHeading: "Get your static website designed by Hyderabad's trusted web design company.",
      buttonText: "Chat on WhatsApp",
    },
  },
  "software-development": {
    slug: "software-development",
    type: "category",
    meta: {
      title: "Custom Software Development Company in Hyderabad | Ananya Hi Solutions",
      description: "Get scalable, secure, and SEO optimized software solutions tailored for your business needs. CRM, Billing, College & Learning Management Software.",
    },
    hero: {
      heading: "Custom Software Development Company in Hyderabad",
      subHeading: "Get <strong>scalable, secure, and SEO-optimized software solutions</strong> tailored for your business needs. Ananya Hi Solutions specializes in <strong>CRM, Billing, College & Learning Management Software</strong> that help you streamline operations and drive growth.",
      trustPara: "✅ 50+ Custom Software Projects Delivered | ⭐ Rated 5/5 by Businesses & Institutions",
      ctaButton: {
        text: "Choose Package",
        link: "/ananya-hi-solutions-package",
        icon: "bi-cart-check",
        className: "btn-package",
      },
    },
    subSection: {
      heading: "Software Development Services for <br className='d-none d-md-block' /> Businesses & Institutions",
      description: "We build <strong>custom software solutions</strong> designed to automate workflows, increase productivity, and improve customer experience. From CRM to LMS, our expert team delivers high-performance applications.",
    },
    items: [
      {
        title: "CRM Software Development",
        description: "Custom CRM solutions to manage leads, sales, and customer relationships effectively.",
        icon: "bi-people",
        link: "crm-software-development-services-hyderabad",
      },
      {
        title: "Billing Software Development",
        description: "Smart billing & invoicing software with GST-ready features and real-time reporting.",
        icon: "bi-receipt",
        link: "billing-software-development-services-hyderabad",
      },
      {
        title: "College Management Software",
        description: "Comprehensive college ERP with student management, attendance, fees & exam modules.",
        icon: "bi-mortarboard",
        link: "college-management-software-hyderabad",
      },
      {
        title: "Learning Management Software (LMS)",
        description: "Feature-rich LMS platforms for e-learning, course tracking, and student engagement.",
        icon: "bi-book",
        link: "lms-software-development-services-hyderabad",
      },
    ],
    fullDetails: `
      <section class="container py-5">
        <div class="row">
          <div class="col-12">
            <h2 class="fw-bold mb-4 text-dark text-center">Custom Software Development Services in Hyderabad</h2>
            <p class="mb-3 text-muted" style="text-align: justify;">
              Custom software development empowers businesses to address unique operational challenges, improve efficiency, and gain competitive advantages. Ananya Hi Solutions delivers tailored software solutions that streamline processes, enhance productivity, and drive digital transformation.
            </p>
            <p class="mb-3 text-muted" style="text-align: justify;">
              Our software development expertise encompasses enterprise resource planning (ERP) systems integrating all business functions, customer relationship management (CRM) platforms optimizing sales and customer service, inventory and supply chain management solutions, human resource management systems (HRMS), accounting and financial management software, project management applications, and custom business automation tools.
            </p>
            <p class="mb-3 text-muted" style="text-align: justify;">
              We leverage modern technologies and frameworks including Python (Django, Flask) for rapid development, PHP (Laravel, CodeIgniter) for web applications, Java for enterprise solutions, .NET for Windows-based systems, Node.js for real-time applications, and cloud technologies (AWS, Azure, Google Cloud) for scalable deployments. Our solutions are platform-agnostic and integrate seamlessly with existing systems.
            </p>
            <p class="mb-3 text-muted" style="text-align: justify;">
              Our development methodology follows agile principles with regular sprints, continuous stakeholder involvement, iterative development and feedback cycles, comprehensive testing at every stage, detailed documentation, and seamless deployment. We ensure solutions are scalable to accommodate business growth, secure with industry-standard protocols, maintainable with clean code practices, and user-friendly with intuitive interfaces.
            </p>
          </div>
        </div>
      </section>
    `,
    faqs: [
      {
        question: "What types of custom software does Ananya Hi Solutions develop?",
        answer: "We develop comprehensive software solutions including ERP systems for integrated business management, CRM platforms for customer relationship optimization, inventory and supply chain management systems, HRMS for employee management, accounting and billing software, project management tools, workflow automation applications, API development and integrations, and SaaS (Software as a Service) platforms. All solutions are customized to specific business requirements.",
      },
      {
        question: "How does custom software development differ from off-the-shelf solutions?",
        answer: "Custom software is specifically designed for your unique business processes, workflows, and requirements, offering perfect-fit functionality, competitive advantages, easier integration with existing systems, and no recurring licensing fees. Off-the-shelf software offers faster deployment and lower initial costs but may require process changes, includes unused features, has limitations, and incurs ongoing subscription costs. We help evaluate the best approach.",
      },
      {
        question: "What is the typical cost and timeline for custom software development?",
        answer: "Costs vary significantly based on complexity, features, integrations, and user scale. Simple automation tools start from ₹2,00,000, medium complexity applications range ₹5,00,000–₹15,00,000, and enterprise-level systems can exceed ₹25,00,000. Timelines range from 3 months for simple applications to 12+ months for complex enterprise systems. We provide detailed project estimates after requirements analysis.",
      },
      {
        question: "How do you ensure software scalability and future-proofing?",
        answer: "We build scalable architectures using modular design principles, cloud-based infrastructure for flexible resource allocation, microservices architecture for independent scaling, efficient database design and optimization, API-first development for easy integrations, strict code quality standards, comprehensive documentation, and technology choices aligned with long-term support. Regular performance testing ensures systems handle growth.",
      },
      {
        question: "What ongoing maintenance and support do you provide for custom software?",
        answer: "We offer comprehensive post-deployment support including bug fixes and technical assistance, regular security updates and patches, performance monitoring and optimization, feature enhancements based on user feedback, server and database maintenance, backup and disaster recovery management, user training and documentation, and technology upgrades. Annual Maintenance Contracts (AMC) are available with defined SLAs and response times.",
      },
    ],
  },
  "crm-software-development-services-hyderabad": {
    slug: "crm-software-development-services-hyderabad",
    type: "detail",
    meta: {
      title: "CRM Software Development Services in Hyderabad | Sales Automation",
      description: "Custom CRM software development in Hyderabad. Automate your sales, manage leads, and enhance customer relationships with scalable and secure CRM solutions.",
    },
    hero: {
      heading: "CRM Software Development Services in Hyderabad | Streamline Your Business",
      subHeading: "Manage your customer relationships efficiently with custom CRM software from Ananya Hi Solutions. Our solutions help businesses in Hyderabad automate sales, improve communication, and enhance customer satisfaction.",
      ctaButton: {
        text: "Get FREE Consultation",
        link: "https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20a%20CRM%20software%20project.",
        icon: "bi-whatsapp",
        className: "btn-whatsapp",
      },
    },
    detailSection: {
      heading1: "Why Choose Ananya Hi Solutions for CRM Software Development?",
      paragraph1: "We specialize in developing custom CRM software tailored to your business needs. Our Hyderabad-based team creates scalable, secure, and user-friendly CRM solutions that streamline sales, marketing, and support processes. From lead management to analytics, our CRM systems empower your team to deliver better customer experiences.",
      image: "assets/front/images/services/crm-software-development-services-hyderabad.jpg",
      imageAlt: "crm software development hyderabad",
      heading2: "Our CRM Software Expertise",
      paragraph2: "We develop CRM solutions for businesses of all sizes, from startups to enterprises. Our CRM systems are designed for seamless lead management, sales tracking, marketing automation, and customer support. With real-time analytics and reporting, our software helps you make informed decisions and grow your business efficiently.",
      benefits: [
        "Custom CRM solutions tailored to your business processes",
        "Sales and lead management automation",
        "Real-time analytics and reporting",
        "Enhanced customer communication and satisfaction",
        "Secure, scalable, and user-friendly design",
      ],
      packageHtml: `
        <div class="card shadow-sm crm-package-card">
          <div class="card-header text-white text-center py-3">
            <h5 class="mb-0 fw-bold">💻 Custom CRM Software Solutions</h5>
            <small>Automate, manage, and grow your business efficiently.</small>
          </div>
          <div class="card-body p-4">
            <p class="card-text text-muted text-center">
              Want to streamline your business processes and manage customer relationships effectively? <strong>Ananya Hi Solutions</strong> provides expert <strong>CRM software development services in Hyderabad</strong>. Our team delivers tailor-made solutions for sales automation, lead management, analytics, and reporting. Fill out the form to discuss your CRM project and get a custom solution.
            </p>
            <div class="text-center mt-4">
              <a href="https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20a%20CRM%20software%20project." class="btn text-white rounded-pill px-4 py-2 shadow-sm" style="background-color: #1485cb; border: 1px solid #1485cb;">
                <i class="bi bi-gear-fill me-2"></i> Get Your Custom CRM Solution
              </a>
            </div>
          </div>
        </div>
      `,
    },
    ctaFinal: {
      heading: "Ready to Launch Your Business Website?",
      subHeading: "Get your static website designed by Hyderabad's trusted web design company.",
      buttonText: "Chat on WhatsApp",
    },
  },
  "billing-software-development-services-hyderabad": {
    slug: "billing-software-development-services-hyderabad",
    type: "detail",
    meta: {
      title: "Billing Software Development Services in Hyderabad | GST Invoicing",
      description: "Custom billing software development in Hyderabad. Automate your invoicing, track payments, and manage taxes with GST-integrated billing solutions.",
    },
    hero: {
      heading: "Billing Software Development Services in Hyderabad | Automate Your Invoicing",
      subHeading: "Simplify your billing process and improve accuracy with custom billing software from Ananya Hi Solutions. Our solutions help businesses in Hyderabad automate invoicing, manage payments, and maintain records efficiently.",
      ctaButton: {
        text: "Get FREE Consultation",
        link: "https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20a%20billing%20software%20project.",
        icon: "bi-whatsapp",
        className: "btn-whatsapp",
      },
    },
    detailSection: {
      heading1: "Why Choose Ananya Hi Solutions for Billing Software Development?",
      paragraph1: "We specialize in creating secure and user-friendly billing software tailored to your business needs. Our Hyderabad-based team delivers software that streamlines invoice generation, payment tracking, tax calculation, and reporting, helping you save time and reduce errors.",
      image: "assets/front/images/services/billing-software-development-hyderabad.jpg",
      imageAlt: "billing software development hyderabad",
      heading2: "Our Billing Software Expertise",
      paragraph2: "We develop billing software for businesses of all sizes. Our solutions include invoice creation, payment tracking, GST/tax integration, automated reminders, and reporting. Designed for accuracy and efficiency, our software helps you manage finances effectively and improve business operations.",
      benefits: [
        "Custom billing software tailored to your business processes",
        "Automated invoice generation and payment tracking",
        "Integrated tax/GST calculation and reporting",
        "Secure, scalable, and user-friendly interface",
        "Improved accuracy, efficiency, and financial management",
      ],
      packageHtml: `
        <div class="card shadow-sm" style="border: 1px solid #1789d6;">
          <div class="card-header text-white text-center py-3" style="background-color: #1789d6; border-bottom: none;">
            <h5 class="mb-0 fw-bold">💻 Custom Billing Software Solutions</h5>
            <small>Automate your invoicing and manage payments efficiently.</small>
          </div>
          <div class="card-body p-4">
            <p class="card-text text-muted text-center">
              Want to streamline your billing and payment process? <strong>Ananya Hi Solutions</strong> offers expert <strong>billing software development services in Hyderabad</strong>. Our team delivers tailor-made solutions for invoicing, payment tracking, tax calculation, and reporting. Fill out the form to discuss your project and get a custom solution.
            </p>
            <div class="text-center mt-4">
              <div class="d-inline-block rounded-pill" style="padding: 6px; background-color: #f0f6fa;">
                <a href="https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20a%20billing%20software%20project." class="btn text-white rounded-pill px-4 py-2 m-0" style="background-color: #064267; border: none;">
                  <i class="bi bi-file-earmark-text-fill me-2"></i> Get Your Custom Billing Software
                </a>
              </div>
            </div>
          </div>
        </div>
      `,
    },
    ctaFinal: {
      heading: "Ready to Automate Your Billing?",
      subHeading: "Get your custom billing software developed by Hyderabad's trusted software experts.",
      buttonText: "Chat on WhatsApp",
    },
  },
  "college-management-software-hyderabad": {
    slug: "college-management-software-hyderabad",
    type: "detail",
    meta: {
      title: "College Management Software Hyderabad | Education ERP Solutions",
      description: "Comprehensive college management software in Hyderabad. Automate admissions, attendance, exams, and fee management with secure and scalable education ERP.",
    },
    hero: {
      heading: "College Management Software in Hyderabad | Streamline Academic Operations",
      subHeading: "Manage your college efficiently with custom College Management Software from Ananya Hi Solutions. Automate admissions, attendance, examinations, and reporting to ensure smooth academic operations in Hyderabad.",
      ctaButton: {
        text: "Get FREE Consultation",
        link: "https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20a%20college%20management%20software%20project.",
        icon: "bi-whatsapp",
        className: "btn-whatsapp",
      },
    },
    detailSection: {
      heading1: "Why Choose Ananya Hi Solutions for College Management Software?",
      paragraph1: "We specialize in developing comprehensive College Management Software tailored to the unique needs of educational institutions. Our Hyderabad-based team delivers scalable, secure, and user-friendly solutions for student management, faculty administration, fee management, and analytics.",
      image: "assets/front/images/services/college-management-software-hyderabad.jpg",
      imageAlt: "college management software hyderabad",
      heading2: "Our College Management Software Expertise",
      paragraph2: "We develop College Management Software for streamlined operations including student registration, timetable management, attendance tracking, fee management, examination scheduling, and reporting. Our software ensures data accuracy, security, and efficiency for educational institutions.",
      benefits: [
        "Custom software tailored for academic and administrative processes",
        "Student, faculty, and attendance management",
        "Examination scheduling and automated result management",
        "Fee management, reporting, and analytics",
        "Secure, scalable, and user-friendly design for colleges",
      ],
      packageHtml: `
        <div class="card shadow-sm crm-package-card">
          <div class="card-header text-white text-center py-3">
            <h5 class="mb-0 fw-bold">💻 Custom College Management Software</h5>
            <small>Automate academic and administrative processes efficiently.</small>
          </div>
          <div class="card-body p-4">
            <p class="card-text text-muted text-center">
              Want to simplify college operations and improve efficiency? <strong>Ananya Hi Solutions</strong> provides expert <strong>College Management Software services in Hyderabad</strong>. We handle everything from admissions, attendance, examinations, fee management, to reporting. Fill out the form to discuss your project and get a custom solution.
            </p>
            <div class="text-center mt-4">
              <a href="https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20a%20college%20management%20software%20project." class="btn text-white rounded-pill px-4 py-2 shadow-sm" style="background-color: #0b6fa8; border: 1px solid #0b6fa8;">
                <i class="bi bi-mortarboard-fill me-2"></i> Get Your College Management Solution
              </a>
            </div>
          </div>
        </div>
      `,
    },
    ctaFinal: {
      heading: "Ready to Digitise Your College?",
      subHeading: "Get your custom education ERP developed by Hyderabad's trusted software experts.",
      buttonText: "Chat on WhatsApp",
    },
  },
  "lms-software-development-services-hyderabad": {
    slug: "lms-software-development-services-hyderabad",
    type: "detail",
    meta: {
      title: "LMS Software Development Hyderabad | E-learning Platform Solutions",
      description: "Custom Learning Management System (LMS) development in Hyderabad. Build engaging e-learning platforms with course management and progress tracking.",
    },
    hero: {
      heading: "Learning Management System (LMS) Software in Hyderabad | Streamline Online Education",
      subHeading: "Deliver engaging online courses and training programs with custom LMS software from Ananya Hi Solutions. Our solutions help educational institutions and corporate trainers in Hyderabad manage courses, learners, and assessments efficiently.",
      ctaButton: {
        text: "Get FREE Consultation",
        link: "https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20an%20LMS%20software%20project.",
        icon: "bi-whatsapp",
        className: "btn-whatsapp",
      },
    },
    detailSection: {
      heading1: "Why Choose Ananya Hi Solutions for LMS Software Development?",
      paragraph1: "We specialize in developing custom Learning Management Systems that are scalable, secure, and user-friendly. Our Hyderabad-based team provides LMS solutions that include course creation, learner management, assessments, progress tracking, and reporting—enabling effective online education and training.",
      image: "assets/front/images/services/e-learning-software-development.jpg",
      imageAlt: "lms software development hyderabad",
      heading2: "Our LMS Software Expertise",
      paragraph2: "We develop LMS software for educational institutions and corporate training programs. Our solutions include online course management, learner enrollment, assessments, progress tracking, certifications, and reporting. The LMS ensures an engaging and efficient learning experience.",
      benefits: [
        "Custom LMS software tailored to your learning requirements",
        "Course creation, learner management, and assessment tools",
        "Progress tracking, reporting, and certification management",
        "Secure, scalable, and user-friendly platform for learners and instructors",
        "Optimized for e-learning, online training, and corporate programs",
      ],
      packageHtml: `
        <div class="card shadow-sm border-primary">
          <div class="card-header bg-primary text-white text-center py-3">
            <h5 class="mb-0 fw-bold">Custom Learning Management System</h5>
            <small>Manage courses, learners, and assessments efficiently.</small>
          </div>
          <div class="card-body p-4">
            <p class="card-text text-muted text-center">
              Want to deliver engaging online courses and training programs? Ananya Hi Solutions offers expert LMS software development services in Hyderabad. We handle everything from course creation, learner management, assessments, to reporting. Fill out the form to discuss your project and get a tailor-made LMS solution.
            </p>
            <div class="text-center mt-4">
              <a href="https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20an%20LMS%20software%20project." class="btn btn-primary rounded-pill px-4 py-2 shadow-sm">
                <i class="bi bi-mortarboard-fill me-2"></i> Get Your Custom LMS Solution
              </a>
            </div>
          </div>
        </div>
      `,
    },
    ctaFinal: {
      heading: "Ready to Launch Your E-learning Platform?",
      subHeading: "Get your custom LMS developed by Hyderabad's trusted software experts.",
      buttonText: "Chat on WhatsApp",
    },
  },
  "ppc-services-hyderabad": {
    slug: "ppc-services-hyderabad",
    type: "detail",
    meta: {
      title: "Google Ads Agency in Hyderabad | PPC Management Services",
      description: "Maximize your ROI with data-driven Google Ads campaigns. Our certified PPC experts help you generate quality leads and boost conversions.",
    },
    hero: {
      heading: "Google Ads Agency in Hyderabad | PPC Management Services",
      subHeading: "Maximize your ROI with data-driven Google Ads campaigns. Our certified PPC experts help you generate quality leads and boost conversions through strategic ad management.",
      ctaButton: {
        text: "Get FREE Consultation",
        link: "https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20need%20a%20free%20consultation.",
        icon: "bi-whatsapp",
        className: "btn-whatsapp",
      },
    },
    detailSection: {
      heading1: "Why Choose Ananya Hi Solutions as Your Google Ads Agency in Hyderabad?",
      paragraph1: "At Ananya Hi Solutions, we manage Google Ads campaigns that deliver measurable results. From keyword research and audience targeting to ad copy creation and conversion tracking — we handle every step strategically. Our focus is on optimizing your ad spend and generating more qualified leads for your business.",
      image: "assets/front/images/services/google-ad-agency-hyderabad.jpg",
      imageAlt: "google ads agency in hyderabad",
      heading2: "Our Google Ads Management Expertise",
      paragraph2: "We help businesses across Hyderabad generate consistent, high-quality leads with performance-driven Google Ads campaigns. Whether you want to promote your services, increase sales, or expand reach — our team creates campaigns that deliver results with measurable ROI.",
      benefits: [
        "Certified Google Ads experts",
        "ROI-focused PPC strategy",
        "Smart keyword targeting & bidding",
        "Conversion tracking & performance reports",
        "Ongoing optimization & dedicated support",
      ],
      packageHtml: `
        <div class='package-card h-100 shadow-sm border-0 rounded-4 overflow-hidden'>
          <div class='package-header text-white text-center py-4' style='background-color:#4a9fd4'>
            <h5 class='mb-1 fw-bold'>Professional Google Ads Management</h5>
            <p class='mb-0 small'>Drive Instant Leads & Conversions</p>
          </div>
          <div class='package-body p-4 bg-white'>
            <ul class='list-unstyled mb-4 feature-list'>
              <li class='mb-2'><i class='bi bi-check-circle-fill text-success me-2'></i>Keyword Research & Campaign Setup</li>
              <li class='mb-2'><i class='bi bi-check-circle-fill text-success me-2'></i>Search, Display & Remarketing Ads</li>
              <li class='mb-2'><i class='bi bi-check-circle-fill text-success me-2'></i>Landing Page & Conversion Optimization</li>
              <li class='mb-2'><i class='bi bi-check-circle-fill text-success me-2'></i>Ad Copywriting & A/B Testing</li>
              <li class='mb-2 text-muted' style='filter: blur(2px); opacity: 0.8;'><i class='bi bi-check-circle-fill text-success me-2'></i>Daily Campaign Monitoring & Adjustments</li>
              <li class='mb-2 text-muted' style='filter: blur(2px); opacity: 0.8;'><i class='bi bi-check-circle-fill text-success me-2'></i>Monthly Performance Reporting</li>
              <li class='mb-2 text-muted' style='filter: blur(2px); opacity: 0.8;'><i class='bi bi-check-circle-fill text-success me-2'></i>Expert Account Manager Support</li>
            </ul>
            
            <div class='text-center mt-4 pt-2 border-top'>
              <p class='small fw-bold mb-3 text-dark'>Want to see how we can scale your ad performance?</p>
              <a id='unlock-ppc-pkg' href='/ananya-hi-solutions-package' class='btn btn-primary rounded-pill px-4 py-2 shadow-sm d-inline-flex align-items-center gap-2' style='background-color: #0070bb; border: none; color: #fff !important;'>
                <i class='bi bi-unlock-fill'></i> View Full Packages
              </a>
            </div>
          </div>
        </div>
      `,
    },
  },
  "content-marketing-services-hyderabad": {
    slug: "content-marketing-services-hyderabad",
    type: "detail",
    meta: {
      title: "Content Marketing Services in Hyderabad | Boost Your Brand Visibility",
      description: "Build authority and grow your brand with strategic, SEO-driven content marketing. At Ananya Hi Solutions, we create content that attracts, engages, and converts.",
    },
    hero: {
      heading: "Content Marketing Services in Hyderabad | Boost Your Brand Visibility",
      subHeading: "Turn your content into a growth engine! At Ananya Hi Solutions, we create strategic, SEO-driven content that attracts, engages, and converts. Build authority, increase website traffic, and grow your brand presence with our content marketing services in Hyderabad.",
      ctaButton: {
        text: "Get FREE Consultation",
        link: "https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20need%20a%20free%20consultation.",
        icon: "bi-whatsapp",
        className: "btn-whatsapp",
      },
    },
    detailSection: {
      heading1: "Why Choose Ananya Hi Solutions for Content Marketing in Hyderabad?",
      paragraph1: "We believe great content builds trust and drives measurable business growth. Our content marketing team in Hyderabad combines creativity with data-driven insights to deliver high-quality blogs, articles, videos, and social media content that resonates with your audience. From keyword research to storytelling and publishing — we handle it all to help you dominate search results and connect authentically with customers.",
      image: "assets/front/images/services/content-marketing-services-hyderabad.jpg",
      imageAlt: "content marketing services in hyderabad",
      heading2: "Our Content Marketing Expertise",
      paragraph2: "We help brands tell stories that inspire action. Whether you're launching a new website, promoting a product, or nurturing leads — our content strategies ensure that your message reaches the right audience, at the right time, through the right channels.",
      benefits: [
        "SEO-driven content strategies for organic growth",
        "Audience-focused storytelling and brand positioning",
        "Consistent tone and messaging across platforms",
        "Enhanced brand authority through valuable content",
        "Data-backed insights for measurable performance",
      ],
      packageHtml: `
        <div class='package-card h-100 shadow-sm border-0 rounded-4 overflow-hidden'>
          <div class='package-header text-white text-center py-4' style='background-color:#4a9fd4'>
            <h5 class='mb-1 fw-bold'>Grow Your Brand with Strategic Content Marketing</h5>
            <p class='mb-0 small'>Engage, Educate, and Convert with Powerful Content</p>
          </div>
          <div class='package-body p-4 bg-white'>
            <p class='text-muted small mb-4'>
              Looking to strengthen your online presence and attract more qualified leads? Ananya Hi Solutions offers comprehensive content marketing services in Hyderabad that blend creativity with SEO expertise. We help your business stand out through engaging blog posts, optimized web copy, and social media storytelling that builds trust and drives conversions.
            </p>
            
            <div class='text-center mt-4 pt-2 border-top'>
              <p class='small fw-bold mb-3 text-dark'>Let's create content that makes your brand unforgettable!</p>
              <a id='talk-content-experts' href='/contact' class='btn btn-primary rounded-pill px-4 py-2 shadow-sm d-inline-flex align-items-center gap-2' style='background-color: #0070bb; border: none; color: #fff !important;'>
                <i class='bi bi-chat-dots-fill'></i> Talk to Our Content Experts
              </a>
            </div>
          </div>
        </div>
      `,
    },
  },
  "email-marketing-services-hyderabad": {
    slug: "email-marketing-services-hyderabad",
    type: "detail",
    meta: {
      title: "Email Marketing Services in Hyderabad | Drive Engagement & Conversions",
      description: "Reach your audience directly and drive measurable results with expertly crafted email campaigns. Boost engagement and nurture leads with Ananya Hi Solutions.",
    },
    hero: {
      heading: "Email Marketing Services in Hyderabad | Drive Engagement & Conversions",
      subHeading: "Reach your audience directly and drive measurable results with expertly crafted email campaigns. At Ananya Hi Solutions, we create personalized, high-converting email marketing strategies to boost engagement, nurture leads, and increase sales for businesses in Hyderabad.",
      ctaButton: {
        text: "Get FREE Consultation",
        link: "https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20need%20a%20free%20consultation.",
        icon: "bi-whatsapp",
        className: "btn-whatsapp",
      },
    },
    detailSection: {
      heading1: "Why Choose Ananya Hi Solutions for Email Campaigns in Hyderabad?",
      paragraph1: "Our email marketing specialists design campaigns that resonate with your audience. From audience segmentation, personalized content, and responsive design to A/B testing and performance analytics — we ensure every email delivers maximum impact. Whether you want to launch newsletters, product promotions, or lead nurturing sequences, we handle everything end-to-end to grow your business.",
      image: "assets/front/images/services/email-marketing-services-hyderabad.jpg",
      imageAlt: "email marketing services in hyderabad",
      heading2: "Our Email Marketing Expertise",
      paragraph2: "We create targeted campaigns that nurture leads, improve customer retention, and increase ROI. Our team uses advanced segmentation, automation, and performance tracking to ensure every email reaches the right audience, with the right message, at the right time.",
      benefits: [
        "Personalized email campaigns for higher engagement",
        "Responsive design for all devices",
        "Segmentation & automation for maximum efficiency",
        "Data-driven strategy & performance analytics",
        "Boost ROI and subscriber loyalty",
      ],
      packageHtml: `
        <div class='package-card h-100 shadow-sm border-0 rounded-4 overflow-hidden'>
          <div class='package-header text-white text-center py-4' style='background-color:#4a9fd4'>
            <h5 class='mb-1 fw-bold'>Boost Your Business with Targeted Email Campaigns</h5>
            <p class='mb-0 small'>Engage, Nurture, & Convert Your Subscribers</p>
          </div>
          <div class='package-body p-4 bg-white'>
            <p class='text-muted small mb-4'>
              Looking to increase engagement and drive sales through email marketing? <strong>Ananya Hi Solutions</strong> offers professional <strong>email campaign services in Hyderabad</strong> that combine creative content, responsive design, and data-driven strategies. We help your brand communicate effectively with your audience and turn subscribers into loyal customers.
            </p>
            
            <div class='text-center mt-4 pt-2 border-top'>
              <p class='small fw-bold mb-3 text-dark'>Start sending impactful emails today!</p>
              <a id='talk-email-experts' href='/contact' class='btn btn-primary rounded-pill px-4 py-2 shadow-sm d-inline-flex align-items-center gap-2' style='background-color: #0070bb; border: none; color: #fff !important;'>
                <i class='bi bi-envelope-fill'></i> Talk to Our Email Experts
              </a>
            </div>
          </div>
        </div>
      `,
    },
  },
};
