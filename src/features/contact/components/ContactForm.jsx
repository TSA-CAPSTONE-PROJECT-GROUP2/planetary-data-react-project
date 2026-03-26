export default function ContactForm() {<link rel="stylesheet" href="style.css" />} {
  return (
<html>
<form id="contact-form">
  <h2>Have Questions About Planetary Science?</h2>
  <p>
    Interested in learning more about space, astronomy, or how planetary data is collected and analyzed? 
    Reach out and we'll get back to you.
  </p>

  <!-- ROW 1 -->
  <div class="row">
    <div class="form-group">
      <label for="name">Full Name *</label>
      <input type="text" id="name" placeholder="Full name" required>
    </div>

    <div class="form-group">
      <label for="email">Email *</label>
      <input type="email" id="email" placeholder="example@gmail.com" required>
    </div>
  </div>

  <!-- ROW 2 -->
  <div class="row">
    <div class="form-group">
      <label for="city">City *</label>
      <select id="city" required>
        <option value="">Select City</option>
       <option value="">Abia</option>
       <option value="">Abuja</option>
       <option value="">Adamawa</option>
       <option value="">Akwa Ibom</option>
       <option value="">Anambra</option>
       <option value="">Bauchi</option>
       <option value="">Bayelsa</option>
       <option value="">Benue</option>
       <option value="">Boronu</option>
       <option value="">Cross River</option>
       <option value="">Delta</option>
       <option value="">Ebonyi</option>
       <option value="">Edo</option>
       <option value="">Ekiti</option>
       <option value="">Enugu</option>
       <option value="">Gombe</option>
       <option value="">Imo</option>
       <option value="">Jigawa</option>
       <option value="">Kaduna</option>
       <option value="">Kano</option>
       <option value="">Katsina</option>
       <option value="">Kebbi</option>
       <option value="">Kogi</option>
       <option value="">Kwara</option>
       <option value="">Lagos</option>
       <option value="">Nasarawa</option>
       <option value="">Niger</option>
       <option value="">Ogun</option>
       <option value="">Ondo</option>
       <option value="">Osun</option>
       <option value="">Oyo</option>
       <option value="">Plateau</option>
       <option value="">Rivers</option>
       <option value="">Sokoto</option>
       <option value="">Taraba</option>
       <option value="">Yobe</option>
       <option value="">Zamfara</option>
      </select>
    </div>

    <div class="form-group">
      <label for="phone">Phone Number *</label>
      <input type="text" id="phone" placeholder="Enter phone number" required>
    </div>
  </div>

  <!-- MESSAGE -->
  <div class="form-group">
    <label for="message">Message *</label>
    <textarea id="message" maxlength="100" placeholder="Enter Your Message" ></textarea>
    <small id="charCount">100 characters</small>
  </div>

  <!-- CONTACT METHOD -->
  <div class="form-group options-column"></div>

  <p>How should we contact you?</p>
    <label><input type="radio" name="contact"> Phone</label>
    <label><input type="radio" name="contact"> Email</label>
    <label><input type="radio" name="contact"> Both</label>
  

  <!-- SOURCE -->
  <p>How did you hear about us?</p>
  
    <label><input type="checkbox"> Friend</label>
    <label><input type="checkbox"> TS Academy</label>
    <label><input type="checkbox"> Others</label>
  </div>
<div>
  <button type="submit">Submit</button>

  <p id="errorMsg"></p>

</form>
</html>
  )
}