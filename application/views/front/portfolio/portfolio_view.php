<section class="journey-section py-5">
  <div class="container position-relative">

    <!-- Section Heading -->
    <div class="text-center mb-5">
      <h1 class="journey-title">
        Our Portfolio Speaks for <span>Our Results</span>
      </h1>
      <p class="journey-subtitle">
        Every project in our portfolio represents a business that trusted us to grow online.
      </p>
    </div>

    <!-- Timeline -->
    <div class="timeline">
      <span class="timeline-line"></span>

      <!-- Item 1 -->
      <div class="timeline-item left">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <h5>Shanmukha Gold</h5>
          <p>Built a strong digital presence with eye-catching creatives, AI-optimized Meta Ads, and a high-trust website that boosted engagement and conversions.</p>

          <div class="card-action right-align">
            <a href="<?= base_url('assets/front/portfolio/shanmukha-gold-portfolio.pdf') ?>" class="btn-show-work">
              Show Work <span>→</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Item 2 -->
      <div class="timeline-item right">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <h5>Mad Academy</h5>
          <p>Generated high-quality student leads and strong ROI through consistent organic posting and AI-optimized Meta Ads campaigns.</p>

          <div class="card-action left-align">
            <a href="<?= base_url('assets/front/portfolio/mad-academy.pdf') ?>" class="btn-show-work">
              Show Work <span>→</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Item 3 -->
      <div class="timeline-item left">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <h5>Xena & Zuxa Beauty Spa</h5>
          <p>Generated high-quality local spa leads using AI-optimized Meta and Google Ads, driving consistent bookings and strong ROI.</p>

          <div class="card-action right-align">
            <a href="<?= base_url('assets/front/portfolio/Spa.pdf') ?>" class="btn-show-work">
              Show Work <span>→</span>
            </a>
          </div>
        </div>
      </div>


       <div class="timeline-item right">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <h5>Q Path Diagnostics</h5>
          <p>Turned searches into real patient calls with ROI-driven ads and a conversion-optimized healthcare website.</p>

          <div class="card-action left-align">
            <a href="<?= base_url('assets/front/portfolio/qpath.pdf') ?>" class="btn-show-work">
              Show Work <span>→</span>
            </a>
          </div>
        </div>
      </div>






    </div>
  </div>
</section>


<style>
  /* Section */
.journey-section {
  background: radial-gradient(circle at top, #0b1a2a, #050b14);
  color: #e5e7eb;
}

/* Heading */
.journey-title {
  font-size: 2.5rem;
  font-weight: 700;
}

.journey-title span {
  color: #22d3ee;
}

.journey-subtitle {
  color: #94a3b8;
  max-width: 650px;
  margin: auto;
}

/* Timeline */
.timeline {
  position: relative;
  max-width: 900px;
  margin: auto;
}

.timeline-line {
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, #22d3ee, transparent);
  transform: translateX(-50%);
}

/* Timeline Item */
.timeline-item {
  position: relative;
  width: 50%;
  padding: 30px 40px;
}

.timeline-item.left {
  left: 0;
  text-align: right;
}

.timeline-item.right {
  left: 50%;
}

/* Card */
.timeline-card {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(14px);
  border-radius: 16px;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 0 30px rgba(34, 211, 238, 0.15);
}

/* Dot */
.timeline-dot {
  position: absolute;
  top: 42px;
  width: 14px;
  height: 14px;
  background: #22d3ee;
  border-radius: 50%;
  box-shadow: 0 0 12px #22d3ee;
}

.timeline-item.left .timeline-dot {
  right: -7px;
}

.timeline-item.right .timeline-dot {
  left: -7px;
}

/* Action Wrapper (KEY FIX) */
.card-action {
  display: flex;
  margin-top: 14px;
}

.card-action.right-align {
  justify-content: flex-end;
}

.card-action.left-align {
  justify-content: flex-start;
}

/* Animated Button */
.btn-show-work {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  font-size: 14px;
  border-radius: 30px;
  color: #0b1a2a;
  background: #22d3ee;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 0 12px rgba(34, 211, 238, 0.6);
  transition: all 0.3s ease;
}

.btn-show-work span {
  transition: transform 0.3s ease;
}

.btn-show-work:hover {
  background: #67e8f9;
  box-shadow: 0 0 22px rgba(34, 211, 238, 1);
  transform: translateY(-2px);
}

.btn-show-work:hover span {
  transform: translateX(6px);
}

/* Mobile */
@media (max-width: 768px) {
  .timeline-line {
    left: 10px;
  }

  .timeline-item {
    width: 100%;
    padding-left: 40px;
    text-align: left;
    left: 0 !important;
  }

  .timeline-dot {
    left: 3px !important;
  }

  .card-action {
    justify-content: flex-start !important;
  }
}

</style>