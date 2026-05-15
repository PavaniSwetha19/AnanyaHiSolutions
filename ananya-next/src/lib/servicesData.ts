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
        link: "ecommerce-application-development",
      },
    ],
    fullDetails: `
      <section class='bg-light py-5'>
        <div class='container'>
          <h2>Professional Website Design and Development Services in Hyderabad</h2>
          <p>In today's digital-first world, your website is often the first impression potential customers have of your business...</p>
          <p>We specialize in diverse web solutions including corporate websites, e-commerce platforms, portfolio sites, and more.</p>
        </div>
      </section>
    `,
    faqs: [
      {
        question: "What technologies does Ananya Hi Solutions use for website development?",
        answer: "We work with modern technologies including HTML5, CSS3, JavaScript frameworks (React, Vue, Angular), PHP frameworks (Laravel, CodeIgniter), and more.",
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
    },
    subSection: {
      heading: "Comprehensive Digital Marketing Solutions for Startups & Brands",
      description: "Get SEO-friendly campaigns, social media strategies, paid ads & analytics-driven marketing that drive growth.",
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
    ],
    faqs: [
      {
        question: "What digital marketing services does Ananya Hi Solutions offer?",
        answer: "We provide comprehensive digital marketing including SEO, PPC advertising, social media marketing, and more.",
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
      subHeading: "Boost your website’s visibility and attract more organic traffic with our proven SEO strategies.",
    },
    detailSection: {
      heading1: "Why Choose Ananya Hi Solutions for SEO Services in Hyderabad?",
      paragraph1: "At Ananya Hi Solutions, we provide data-driven SEO services tailored to your business goals. Our SEO experts in Hyderabad specialize in on-page, off-page, local, and technical SEO.",
      image: "assets/front/images/services/seo-services-hyderabad.jpg",
      imageAlt: "seo company in hyderabad",
      heading2: "Comprehensive SEO Services We Offer",
      paragraph2: "Our SEO services in Hyderabad cover everything your website needs to perform and rank well on Google.",
      benefits: [
        "On-page & Off-page SEO optimization",
        "Local SEO for Google Maps & regional targeting",
        "Keyword research & content strategy",
        "Monthly reports & transparent tracking",
      ],
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
      heading: "Social Media Marketing Agency in Hyderabad",
      subHeading: "Boost your online presence with creative and result-driven social media marketing.",
    },
    detailSection: {
      heading1: "Why Choose Ananya Hi Solutions as Your Social Media Marketing Agency in Hyderabad?",
      paragraph1: "At Ananya Hi Solutions, we create data-driven and engaging social media campaigns that deliver real results.",
      image: "assets/front/images/services/social-media-marketing-services-hyderabad.jpg",
      imageAlt: "social media marketing agency hyderabad",
      heading2: "Our Social Media Marketing Expertise",
      paragraph2: "We manage end-to-end social media marketing campaigns for businesses across industries.",
      benefits: [
        "Custom social media strategy for your brand",
        "Professional content creation & post design",
        "Paid ads management on Facebook & Instagram",
        "Monthly growth & engagement reporting",
      ],
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
      subHeading: "Build high-performance iOS & Android apps that are user-friendly, SEO-optimized, and drive engagement. Ananya Hi Solutions helps startups & brands grow with custom mobile solutions.",
      trustBadges: [
        { icon: "bi-check-circle-fill", text: "50+ Apps Delivered", color: "#2ecc71" },
        { icon: "bi-star-fill", text: "Rated 5/5 by clients for mobile app solutions", color: "#f1c40f" }
      ]
    },
    subSection: {
      heading: "Custom Mobile App Solutions for Startups & Brands",
      description: "Get SEO-friendly, high-converting mobile apps for Android & iOS platforms. We specialize in responsive, fast, and engaging apps that generate leads and sales.",
    },
    items: [
      {
        title: "iOS App Development",
        description: "Create responsive and engaging iOS apps that perform flawlessly on iPhones & iPads.",
        icon: "bi-apple",
        link: "ios-app-development-services-hyderabad",
        color: "#007AFF", // iOS Blue
      },
      {
        title: "Android App Development",
        description: "Build high-quality Android apps optimized for performance and user experience.",
        icon: "bi-android2",
        link: "android-app-development-services-hyderabad",
        color: "#3DDC84", // Android Green
      },
    ],
    fullDetails: `
      <section class="container py-5">
        <div class="row">
          <div class="col-12">
            <h2 class="fw-bold mb-4 text-dark">Custom Mobile App Development Services in Hyderabad</h2>
            <p class="mb-3 text-muted">
              Mobile applications have become essential business tools, providing direct customer engagement, enhanced brand loyalty, and new revenue streams. Ananya Hi Solutions delivers innovative, user-centric mobile applications that transform how businesses connect with their customers.
            </p>
          </div>
        </div>
      </section>
    `,
    faqs: [
      {
        question: "What is the difference between native and hybrid mobile app development?",
        answer: "Native apps are built specifically for iOS or Android using platform-specific languages (Swift for iOS, Kotlin for Android), offering best performance, full platform features, and optimal user experience but requiring separate development for each platform. Hybrid apps use cross-platform frameworks (React Native, Flutter) allowing single codebase for both platforms, faster development, and lower costs, with slightly reduced performance for complex features.",
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
      paragraph1: "Our iOS app development team in Hyderabad combines technical expertise with creative design to build apps that stand out in the App Store.",
      image: "assets/front/images/services/ios-application-development-hyderabad.jpg",
      imageAlt: "ios app development company hyderabad",
      heading2: "Our iOS App Development Expertise",
      paragraph2: "We specialize in building native iOS apps that deliver smooth performance, intuitive design, and strong user engagement.",
      benefits: [
        "Custom iOS app design and development",
        "User-friendly UI/UX for enhanced engagement",
        "App Store deployment & submission support",
      ],
    },
    ctaFinal: {
      heading: "Ready to Launch Your iOS App?",
      subHeading: "Get your iOS application developed by Hyderabad's trusted mobile app development company.",
      buttonText: "Chat on WhatsApp",
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
      subHeading: "Transform your business ideas into high-performing Android apps with Ananya Hi Solutions.",
      ctaButton: {
        text: "Get FREE Consultation",
        link: "https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20an%20Android%20app%20project.",
        icon: "bi-whatsapp",
        className: "btn-whatsapp",
      },
    },
    detailSection: {
      heading1: "Why Choose Ananya Hi Solutions for Android App Development in Hyderabad?",
      paragraph1: "Our Android app development team in Hyderabad combines technical expertise with creative design.",
      image: "assets/front/images/services/android-application-development-hyderabad.jpg",
      imageAlt: "android app development company hyderabad",
      heading2: "Our Android App Development Expertise",
      paragraph2: "We specialize in developing native Android applications with smooth performance.",
      benefits: [
        "Custom Android app design and development",
        "User-friendly UI/UX for enhanced engagement",
      ],
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
      subHeading: "Launch a high-converting e-commerce store with secure payment gateways, responsive design, and SEO-friendly structure. We create both single-vendor and multi-vendor stores that help businesses boost sales online.",
      trustBadges: [
        { icon: "bi-check-circle-fill", text: "100+ E-commerce Stores Delivered", color: "#2ecc71" },
        { icon: "bi-star-fill", text: "Rated 5/5 for reliability and performance", color: "#f1c40f" }
      ],
      ctaButton: {
        text: "Choose Package",
        link: "/ananya-hi-solutions-package",
        icon: "bi-cart-check",
        className: "btn-package",
      }
    },
    subSection: {
      heading: "Custom E-commerce Solutions for Single & Multi Vendor Stores",
      description: "Get SEO-friendly, mobile-optimized e-commerce websites with shopping carts, vendor dashboards, and analytics. Trusted by startups & brands in Hyderabad for online growth.",
    },
    items: [
      {
        title: "Single Vendor Store",
        description: "A fully customizable WooCommerce or Shopify store for a single vendor with SEO optimization to drive traffic and sales.",
        icon: "bi-cart-fill",
        link: "single-vendor-ecommerce-website",
        color: "#1485cb",
      },
      {
        title: "Multi Vendor Marketplace",
        description: "Enterprise-level multi-vendor marketplace optimized for SEO, performance, and seamless vendor management.",
        icon: "bi-grid-fill",
        link: "multi-vendor-ecommerce-marketplace",
        color: "#1485cb",
      },
    ],
    fullDetails: `
      <section class="container py-5">
        <div class="row">
          <div class="col-12">
            <h2 class="fw-bold mb-4 text-dark text-center">Powerful E-Commerce Development Services in Hyderabad</h2>
            <p class="mb-3 text-muted">
              E-commerce is transforming retail, and a powerful online store is essential for business success. Ananya Hi Solutions specializes in developing robust, scalable e-commerce solutions that drive sales, enhance customer experience, and streamline operations.
            </p>
          </div>
        </div>
      </section>
    `,
    faqs: [
      {
        question: "What e-commerce platforms does Ananya Hi Solutions work with?",
        answer: "We specialize in Shopify, WooCommerce, Magento, and custom e-commerce development using PHP/Laravel.",
      },
    ],
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
      heroImage: "assets/front/images/sliders/slider2.jpg",
      ctaButton: {
        text: "Get FREE Consultation",
        link: "https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20a%20single%20vendor%20ecommerce%20project.",
        icon: "bi-whatsapp",
        className: "btn-whatsapp",
      },
    },
    detailSection: {
      heading1: "Why Choose Ananya Hi Solutions for Single Vendor eCommerce Development?",
      paragraph1: "Our team in Hyderabad specializes in creating custom single vendor eCommerce platforms with user-friendly admin panels, seamless payment integration, and responsive design.",
      image: "assets/front/images/services/single-vendor-ecommerce-hyderabad.jpg",
      imageAlt: "single vendor ecommerce development hyderabad",
      heading2: "Our Single Vendor eCommerce Expertise",
      paragraph2: "We provide end-to-end solutions for single vendor eCommerce stores including product listing, shopping cart, payment gateway integration, and analytics.",
      benefits: [
        "Custom product catalog and inventory management",
        "Secure payment gateway integration",
        "Mobile-responsive and SEO-optimized design",
        "Order management and analytics dashboard",
        "Scalable architecture for future growth",
      ],
      packageHtml: `
        <div class="card shadow-sm border-primary">
          <div class="card-header bg-primary text-white text-center py-3">
            <h5 class="mb-0 fw-bold">Custom Single Vendor eCommerce Solutions</h5>
            <small>Sell Products Online Easily & Efficiently</small>
          </div>
          <div class="card-body p-4">
            <p class="card-text text-muted text-center">
              Looking to launch a professional online store? <strong>Ananya Hi Solutions</strong> offers expert <strong>single vendor eCommerce development in Hyderabad</strong>.
            </p>
            <div class="text-center mt-4">
              <a href="https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20a%20single%20vendor%20ecommerce%20project." class="btn btn-primary rounded-pill px-4 py-2 shadow-sm">
                <i class="bi bi-cart-fill me-2"></i> Talk to Our eCommerce Experts
              </a>
            </div>
          </div>
        </div>
      `,
    },
    ctaFinal: {
      heading: "Ready to Launch Your E-commerce Store?",
      subHeading: "Get your online store designed by Hyderabad's trusted e-commerce development company.",
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
      heroImage: "assets/front/images/sliders/slider3.jpg",
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
      image: "assets/front/images/services/multi-vendor-marketplace-hyderabad.jpg",
      imageAlt: "multi vendor marketplace development hyderabad",
      heading2: "Our Multi Vendor Marketplace Expertise",
      paragraph2: "We provide end-to-end multi vendor solutions including vendor onboarding, product catalog management, order management, payment gateway integration, and analytics dashboards. Our marketplaces are mobile-responsive, SEO-friendly, and built for scalability to support business growth.",
      benefits: [
        "Vendor dashboard & management tools",
        "Product catalog and inventory management",
        "Secure payment gateway integration",
        "Mobile-responsive and SEO-optimized design",
        "Analytics & reporting for vendors and admin",
      ],
      packageHtml: `
        <div class="card shadow-sm border-info">
          <div class="card-header bg-info text-white text-center py-3">
            <h5 class="mb-0 fw-bold">Professional Multi Vendor Marketplace Solutions</h5>
            <small>Connect Multiple Sellers & Grow Your Online Platform</small>
          </div>
          <div class="card-body p-4">
            <p class="card-text text-muted text-center">
              Want to launch a robust multi vendor marketplace? <strong>Ananya Hi Solutions</strong> provides expert <strong>multi vendor marketplace development services in Hyderabad</strong> that combine intuitive design, powerful features, and seamless functionality. Enable multiple vendors to sell online and grow your platform efficiently.
            </p>
            <div class="text-center mt-4">
              <p class="small fw-bold mb-3">Start your multi vendor platform today!</p>
              <a href="https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20a%20multi%20vendor%20marketplace%20project." class="btn btn-info text-white rounded-pill px-4 py-2 shadow-sm">
                <i class="bi bi-grid-3x3-gap-fill me-2"></i> Talk to Our Marketplace Experts
              </a>
            </div>
          </div>
        </div>
      `,
    },
    ctaFinal: {
      heading: "Ready to Scale Your Marketplace?",
      subHeading: "Get your multi-vendor platform developed by Hyderabad's leading marketplace experts.",
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
        answer: "The cost depends on various factors such as video length, type of production (live action vs. animation), number of shooting days, equipment required, and complexity of post-production. We offer competitive packages tailored to different budgets.",
      },
      {
        question: "What is the typical timeline for video production projects?",
        answer: "A standard video project can take anywhere from 1 to 4 weeks, depending on the complexity. This includes pre-production (planning/scripting), production (filming), and post-production (editing/revisions).",
      },
      {
        question: "How do you ensure video content aligns with brand identity?",
        answer: "We start every project with a detailed consultation to understand your brand guidelines, target audience, and core message. Throughout the scriptwriting and editing phases, we ensure visuals and tone remain consistent with your brand.",
      },
      {
        question: "What video formats and platforms do you optimize content for?",
        answer: "We provide videos in all standard high-definition formats (MP4, MOV) and can optimize them specifically for platforms like YouTube (16:9), Instagram/TikTok (9:16), or LinkedIn, ensuring maximum engagement on each channel.",
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
      image: "assets/front/images/services/corporate-video-shoot-hyderabad.jpg",
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
      footerImage: "assets/front/images/services/corporate-video-shoot-hyderabad.jpg",
      packageHtml: `
        <div class="card shadow-sm border-primary">
          <div class="card-header bg-primary text-white text-center py-3">
            <h5 class="mb-0 fw-bold">Elevate Your Brand with Professional Corporate Videos</h5>
            <small>Create videos that engage your audience, boost visibility, and grow your business.</small>
          </div>
          <div class="card-body p-4">
            <p class="card-text text-muted text-center">
              Discover how Ananya Hi Solutions in Hyderabad can help you produce corporate videos that showcase your brand, communicate your story, and connect with your audience effectively. Fill out the form to discuss your project and get personalized expert guidance.
            </p>
            <div class="text-center mt-4">
              <a href="https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20a%20corporate%20video%20project." class="btn btn-primary rounded-pill px-4 py-2 shadow-sm">
                <i class="bi bi-camera-video-fill me-2"></i> Start Your Corporate Video Project Today
              </a>
            </div>
          </div>
        </div>
      `,
    },
    ctaFinal: {
      heading: "Ready to Tell Your Brand Story?",
      subHeading: "Get your corporate video produced by Hyderabad's trusted production house.",
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
        <div class="card shadow-sm border-primary">
          <div class="card-header bg-primary text-white text-center py-3">
            <h5 class="mb-0 fw-bold">Drive Engagement with Promotional Marketing Videos</h5>
            <small>Create compelling videos that capture attention and boost conversions.</small>
          </div>
          <div class="card-body p-4">
            <p class="card-text text-muted text-center">
              Want to promote your products or services effectively? Ananya Hi Solutions offers expert promotional marketing video production in Hyderabad that combines creativity, storytelling, and professional execution. Fill out the form to discuss your project and get a tailored solution for your brand.
            </p>
            <div class="text-center mt-4">
              <a href="https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20a%20promotional%20marketing%20video%20project." class="btn btn-primary rounded-pill px-4 py-2 shadow-sm">
                <i class="bi bi-play-circle-fill me-2"></i> Start Your Promotional Video Project
              </a>
            </div>
          </div>
        </div>
      `,
    },
    ctaFinal: {
      heading: "Ready to Boost Your Brand Awareness?",
      subHeading: "Get your promotional video produced by Hyderabad's trusted production house.",
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
        <div class="card shadow-sm border-primary">
          <div class="card-header bg-primary text-white text-center py-3">
            <h5 class="mb-0 fw-bold">Professional Event Coverage & Highlights</h5>
            <small>Capture every detail and create engaging highlight videos for your events.</small>
          </div>
          <div class="card-body p-4">
            <p class="card-text text-muted text-center">
              Want to make your events memorable? Ananya Hi Solutions offers expert event coverage and highlight video production in Hyderabad. From corporate events to product launches, we ensure every key moment is captured creatively and professionally. Fill out the form to discuss your project and get tailored solutions.
            </p>
            <div class="text-center mt-4">
              <a href="https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20an%20event%20coverage%20project." class="btn btn-primary rounded-pill px-4 py-2 shadow-sm">
                <i class="bi bi-calendar-check-fill me-2"></i> Book Your Event Coverage Today
              </a>
            </div>
          </div>
        </div>
      `,
    },
    ctaFinal: {
      heading: "Ready to Capture Your Event?",
      subHeading: "Get your event covered by Hyderabad's professional production team.",
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
        <div class="card shadow-sm border-primary">
          <div class="card-header bg-primary text-white text-center py-3">
            <h5 class="mb-0 fw-bold">Create Engaging Product Explainer Videos</h5>
            <small>Simplify your product story and boost customer understanding.</small>
          </div>
          <div class="card-body p-4">
            <p class="card-text text-muted text-center">
              Want your customers to understand your product instantly? Ananya Hi Solutions provides expert product explainer video production services in Hyderabad. We create compelling videos that showcase your product features, explain usage, and highlight benefits. Fill out the form to discuss your project and get a tailored solution.
            </p>
            <div class="text-center mt-4">
              <a href="https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20a%20product%20explainer%20video%20project." class="btn btn-primary rounded-pill px-4 py-2 shadow-sm">
                <i class="bi bi-play-btn-fill me-2"></i> Start Your Explainer Video Project
              </a>
            </div>
          </div>
        </div>
      `,
    },
    ctaFinal: {
      heading: "Ready to Simplify Your Product Story?",
      subHeading: "Get your product explainer video produced by Hyderabad's professional production team.",
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
        <div class="card shadow-sm border-primary">
          <div class="card-header bg-primary text-white text-center py-3">
            <h5 class="mb-0 fw-bold">Engage Your Audience with Social Media Videos</h5>
            <small>Create videos that grab attention, go viral, and boost engagement.</small>
          </div>
          <div class="card-body p-4">
            <p class="card-text text-muted text-center">
              Want to grow your social media presence? Ananya Hi Solutions offers expert social media video production services in Hyderabad. We craft compelling videos for Instagram, Facebook, YouTube, and LinkedIn that connect with your audience and elevate your brand. Fill out the form to discuss your project and get a custom strategy.
            </p>
            <div class="text-center mt-4">
              <a href="https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20a%20social%20media%20video%20project." class="btn btn-primary rounded-pill px-4 py-2 shadow-sm">
                <i class="bi bi-share-fill me-2"></i> Start Your Social Media Video Project
              </a>
            </div>
          </div>
        </div>
      `,
    },
    ctaFinal: {
      heading: "Ready to Boost Your Engagement?",
      subHeading: "Get your social media content produced by Hyderabad's professional production team.",
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
        <div class="card shadow-sm border-primary">
          <div class="card-header bg-primary text-white text-center py-3">
            <h5 class="mb-0 fw-bold">Create Stunning Music Videos</h5>
            <small>Bring your music to life with high quality visuals and creative storytelling.</small>
          </div>
          <div class="card-body p-4">
            <p class="card-text text-muted text-center">
              Want your music to reach more fans and create a visual impact? Ananya Hi Solutions provides expert music video production services in Hyderabad. We handle everything from concept and choreography to filming and post-production. Fill out the form to discuss your project and get a tailor-made solution.
            </p>
            <div class="text-center mt-4">
              <a href="https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20a%20music%20video%20project." class="btn btn-primary rounded-pill px-4 py-2 shadow-sm">
                <i class="bi bi-music-player-fill me-2"></i> Start Your Music Video Project
              </a>
            </div>
          </div>
        </div>
      `,
    },
    ctaFinal: {
      heading: "Ready to Create Your Music Video?",
      subHeading: "Get your music video produced by Hyderabad's professional production team.",
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
        <div class="card shadow-sm border-primary">
          <div class="card-header bg-primary text-white text-center py-3">
            <h5 class="mb-0 fw-bold">Professional Short Film Production</h5>
            <small>Transform your ideas into captivating short films.</small>
          </div>
          <div class="card-body p-4">
            <p class="card-text text-muted text-center">
              Want to create a cinematic short film that captivates your audience? Ananya Hi Solutions provides expert short film production services in Hyderabad. We handle everything from concept development to final editing. Fill out the form to discuss your project and receive a customized production plan.
            </p>
            <div class="text-center mt-4">
              <a href="https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20a%20short%20film%20project." class="btn btn-primary rounded-pill px-4 py-2 shadow-sm">
                <i class="bi bi-film me-2"></i> Start Your Short Film Project
              </a>
            </div>
          </div>
        </div>
      `,
    },
    ctaFinal: {
      heading: "Ready to Tell Your Story?",
      subHeading: "Get your short film or web series produced by Hyderabad's cinematic experts.",
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
      subHeading: "Get scalable, secure, and SEO optimized software solutions tailored for your business needs. Ananya Hi Solutions specializes in CRM, Billing, College & Learning Management Software that help you streamline operations and drive growth.",
      trustPara: "✅ 50+ Custom Software Projects Delivered | ⭐ Rated 5/5 by Businesses & Institutions",
      ctaButton: {
        text: "Choose Package",
        link: "/ananya-hi-solutions-package",
        icon: "bi-cart-check",
        className: "btn-package",
      },
    },
    subSection: {
      heading: "Software Development Services for Businesses & Institutions",
      description: "We build custom software solutions designed to automate workflows, increase productivity, and improve customer experience. From CRM to LMS, our expert team delivers high-performance applications.",
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
            <p class="mb-3 text-muted text-center">
              Custom software development empowers businesses to address unique operational challenges, improve efficiency, and gain competitive advantages. Ananya Hi Solutions delivers tailored software solutions that streamline processes, enhance productivity, and drive digital transformation.
            </p>
            <p class="mb-3 text-muted">
              Our software development expertise encompasses enterprise resource planning (ERP) systems integrating all business functions, customer relationship management (CRM) platforms optimizing sales and customer service, inventory and supply chain management solutions, human resource management systems (HRMS), accounting and financial management software, project management applications, and custom business automation tools.
            </p>
            <p class="mb-3 text-muted">
              We leverage modern technologies and frameworks including Python (Django, Flask) for rapid development, PHP (Laravel, CodeIgniter) for web applications, Java for enterprise solutions, .NET for Windows-based systems, Node.js for real-time applications, and cloud technologies (AWS, Azure, Google Cloud) for scalable deployments. Our solutions are platform-agnostic and integrate seamlessly with existing systems.
            </p>
            <p class="mb-3 text-muted">
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
        answer: "Custom software is built specifically for your unique business processes, providing exactly the features you need without unnecessary complexity. Unlike off-the-shelf software, you own the solution, it can scale with your business, and it integrates perfectly with your existing workflows.",
      },
      {
        question: "What is the typical cost and timeline for custom software development?",
        answer: "Costs and timelines vary based on project complexity, features, and platform requirements. A small internal tool might take 4-8 weeks, while a comprehensive enterprise ERP could take several months. We provide detailed estimates after an initial discovery phase.",
      },
      {
        question: "How do you ensure software scalability and future-proofing?",
        answer: "We use modern, modular architectures and industry-standard technologies that allow for easy expansion. Our code follows best practices, and we design databases to handle growth while ensuring the platform can be updated with new features as your business evolves.",
      },
      {
        question: "What ongoing maintenance and support do you provide for custom software?",
        answer: "We offer comprehensive post-launch support including bug fixes, security updates, performance monitoring, and feature enhancements. We also provide documentation and training to ensure your team can use the software effectively.",
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
      image: "assets/front/images/services/crm-software-development-hyderabad.jpg",
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
        <div class="card shadow-sm border-primary">
          <div class="card-header bg-primary text-white text-center py-3">
            <h5 class="mb-0 fw-bold">Custom CRM Software Solutions</h5>
            <small>Automate, manage, and grow your business efficiently.</small>
          </div>
          <div class="card-body p-4">
            <p class="card-text text-muted text-center">
              Want to streamline your business processes and manage customer relationships effectively? Ananya Hi Solutions provides expert CRM software development services in Hyderabad. Our team delivers tailor-made solutions for sales automation, lead management, analytics, and reporting. Fill out the form to discuss your CRM project and get a custom solution.
            </p>
            <div class="text-center mt-4">
              <a href="https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20a%20CRM%20software%20project." class="btn btn-primary rounded-pill px-4 py-2 shadow-sm">
                <i class="bi bi-gear-fill me-2"></i> Get Your Custom CRM Solution
              </a>
            </div>
          </div>
        </div>
      `,
    },
    ctaFinal: {
      heading: "Ready to Launch Your Business CRM?",
      subHeading: "Get your custom CRM software developed by Hyderabad's trusted software experts.",
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
        <div class="card shadow-sm border-primary">
          <div class="card-header bg-primary text-white text-center py-3">
            <h5 class="mb-0 fw-bold">Custom Billing Software Solutions</h5>
            <small>Automate your invoicing and manage payments efficiently.</small>
          </div>
          <div class="card-body p-4">
            <p class="card-text text-muted text-center">
              Want to streamline your billing and payment process? Ananya Hi Solutions offers expert billing software development services in Hyderabad. Our team delivers tailor-made solutions for invoicing, payment tracking, tax calculation, and reporting. Fill out the form to discuss your project and get a custom solution.
            </p>
            <div class="text-center mt-4">
              <a href="https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20a%20billing%20software%20project." class="btn btn-primary rounded-pill px-4 py-2 shadow-sm">
                <i class="bi bi-calculator-fill me-2"></i> Get Your Custom Billing Software
              </a>
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
        <div class="card shadow-sm border-primary">
          <div class="card-header bg-primary text-white text-center py-3">
            <h5 class="mb-0 fw-bold">Custom College Management Software</h5>
            <small>Automate academic and administrative processes efficiently.</small>
          </div>
          <div class="card-body p-4">
            <p class="card-text text-muted text-center">
              Want to simplify college operations and improve efficiency? Ananya Hi Solutions provides expert College Management Software services in Hyderabad. We handle everything from admissions, attendance, examinations, fee management, to reporting. Fill out the form to discuss your project and get a tailor-made solution.
            </p>
            <div class="text-center mt-4">
              <a href="https://wa.me/917673935353?text=Hi%20Ananya%20Team,%20I%20want%20to%20discuss%20a%20college%20management%20software%20project." class="btn btn-primary rounded-pill px-4 py-2 shadow-sm">
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
};
