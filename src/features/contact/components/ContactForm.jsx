import { useState, useRef } from "react";

export default function ContactForm() {
  const [charCount, setCharCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const formData = new FormData(e.target);
      
      const response = await fetch("/api/tsacademy.php", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus({ 
          type: "success", 
          message: "Thank you! Your message has been sent successfully. We'll get back to you soon." 
        });
        formRef.current.reset();
        setCharCount(0);
      } else {
        throw new Error("Server responded with an error.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus({ 
        type: "error", 
        message: "Oops! Something went wrong. Please try again later or contact us directly." 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header text-left">
          <h2 className="section-title">Have Questions About Planetary Science?</h2>
          <p className="section-subtitle">
            Interested in learning more about space, astronomy, or how planetary data is collected and analyzed? Reach out and we'll get back to you.
          </p>
        </div>

        <form 
          id="contact-form" 
          className="contact-form" 
          onSubmit={handleSubmit}
          ref={formRef}
        >
          {/* Row 1: Name and Email */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name <span className="req">*</span></label>
              <input type="text" id="name" name="name" placeholder="Full name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email <span className="req">*</span></label>
              <input type="email" id="email" name="email" placeholder="name@example.com" required />
            </div>
          </div>

          {/* Row 2: City and Phone */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">City <span className="req">*</span></label>
              <select id="city" name="city" required defaultValue="">
                <option value="" disabled>Select City</option>
                <option value="Abia">Abia</option>
                <option value="Abuja">Abuja</option>
                <option value="Adamawa">Adamawa</option>
                <option value="Akwa Ibom">Akwa Ibom</option>
                <option value="Anambra">Anambra</option>
                <option value="Bauchi">Bauchi</option>
                <option value="Bayelsa">Bayelsa</option>
                <option value="Benue">Benue</option>
                <option value="Borno">Borno</option>
                <option value="Cross River">Cross River</option>
                <option value="Delta">Delta</option>
                <option value="Ebonyi">Ebonyi</option>
                <option value="Edo">Edo</option>
                <option value="Ekiti">Ekiti</option>
                <option value="Enugu">Enugu</option>
                <option value="Gombe">Gombe</option>
                <option value="Imo">Imo</option>
                <option value="Jigawa">Jigawa</option>
                <option value="Kaduna">Kaduna</option>
                <option value="Kano">Kano</option>
                <option value="Katsina">Katsina</option>
                <option value="Kebbi">Kebbi</option>
                <option value="Kogi">Kogi</option>
                <option value="Kwara">Kwara</option>
                <option value="Lagos">Lagos</option>
                <option value="Nasarawa">Nasarawa</option>
                <option value="Niger">Niger</option>
                <option value="Ogun">Ogun</option>
                <option value="Ondo">Ondo</option>
                <option value="Osun">Osun</option>
                <option value="Oyo">Oyo</option>
                <option value="Plateau">Plateau</option>
                <option value="Rivers">Rivers</option>
                <option value="Sokoto">Sokoto</option>
                <option value="Taraba">Taraba</option>
                <option value="Yobe">Yobe</option>
                <option value="Zamfara">Zamfara</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number <span className="req">*</span></label>
              <input type="tel" id="phone" name="phone" pattern="[0-9\+\-\s]{10,15}" placeholder="Please enter a valid phone number" required />
            </div>
          </div>

          {/* Row 3: Message and Options */}
          <div className="form-row-complex">
            <div className="form-group message-group">
              <label htmlFor="message">Message <span className="req">*</span></label>
              <textarea 
                id="message" 
                name="message"
                maxLength="100" 
                placeholder="Enter Your Message" 
                required
                onChange={(e) => setCharCount(e.target.value.length)}
              ></textarea>
              <small className="char-count">{100 - charCount} characters remaining</small>
            </div>

            <div className="form-options-column">
              <div className="options-box">
                <p className="options-title">How should we contact you?</p>
                <div className="option-group">
                  <label><input type="radio" name="contact_method" value="Phone" required /> Phone</label>
                  <label><input type="radio" name="contact_method" value="Email" /> Email</label>
                  <label><input type="radio" name="contact_method" value="Both" /> Both</label>
                </div>
              </div>

              <div className="options-box">
                <p className="options-title">How did you hear about us?</p>
                <div className="option-group">
                  <label><input type="checkbox" name="referral_source" value="Friend" /> Friend</label>
                  <label><input type="checkbox" name="referral_source" value="TS Academy" /> TS Academy</label>
                  <label><input type="checkbox" name="referral_source" value="Others" /> Others</label>
                </div>
              </div>
            </div>
          </div>

          <div className="form-footer">
            <button 
              type="submit" 
              className="btn-primary submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit"}
              {!isSubmitting && (
                <span className="btn-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                </span>
              )}
            </button>
          </div>
          
          {status.type && (
            <p className={`status-msg ${status.type}`}>
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}