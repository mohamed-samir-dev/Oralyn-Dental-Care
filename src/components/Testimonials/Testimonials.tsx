import "./Testimonials.css";
import { testimonials } from "../../constants";
import { useTestimonials } from "../../hooks/Testimonial";

const Testimonials: React.FC = () => {
  const {
    currentIndex,
    setCurrentIndex,
    nextTestimonial,
    prevTestimonial,
    current,
  } = useTestimonials();

  return (
    <section
      className="testimonials-section"
      aria-labelledby="testimonials-heading"
    >
      <div className="container">
        <div className="testimonials-header">
          <p className="testimonials-subtitle">Patient Stories</p>
          <h2 id="testimonials-heading" className="testimonials-title">
            Transforming Smiles, Changing Lives
          </h2>
          <p className="testimonials-description">
            Discover why thousands of patients trust Oralyn for their dental
            care
          </p>
        </div>

        <div className="testimonial-container">
          <button
            className="nav-arrow nav-arrow-left"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="testimonial-card">
            <div className="quote-icon">"</div>

            <div className="testimonial-content">
              <div className="stars">
                {Array.from({ length: current.rating }, (_, i) => (
                  <span key={i} className="star" aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>

              <p className="testimonial-text">{current.text}</p>

              <div className="patient-info">
                <div className="patient-avatar">
                  <img src={current.image} alt={current.name} />
                </div>
                <div className="patient-details">
                  <h3 className="patient-name">{current.name}</h3>
                  <p className="patient-title">{current.title}</p>
                  <span className="treatment-badge">{current.treatment}</span>
                </div>
              </div>
            </div>
          </div>

          <button
            className="nav-arrow nav-arrow-right"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="testimonial-navigation">
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
