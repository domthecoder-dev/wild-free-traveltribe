import React, { useRef, useState } from 'react';
import './FormSection.css';

// *** VERIFIED GOOGLE FORM IDs (These are correct!) ***
const FORM_ACTION_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdGQxmJsGOOPnVsUNj2GbEMJbdzSKw98zMA6taoZeT-lRT-5g/formResponse";
const NAME_ENTRY_ID = "entry.969956669";
const EMAIL_ENTRY_ID = "entry.1635358047";

const PDF_URL = '/WelcomePacket.pdf'; // <<< UPDATE THIS PATH
const PDF_FILENAME = 'Welcome-Packet.pdf'; // Display name for the file

function FormSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false); // New state for success message

  const nameRef = useRef(null);
  const emailRef = useRef(null);

  // Validation functions (removed for brevity, assume they are still here)
  const validateName = (value) => /^[a-zA-Z\s'-]+$/.test(value) || value.length === 0;
  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || value.length === 0;

  const handleValidation = () => {
    // ... (Your validation logic here, it remains the same)
    const currentName = nameRef.current.value;
    const currentEmail = emailRef.current.value;

    setName(currentName);
    setEmail(currentEmail);

    setIsNameValid(validateName(currentName));
    setIsEmailValid(validateEmail(currentEmail));
  };

  const isFormValid = isNameValid && isEmailValid && name.length > 0 && email.length > 0;

  // 💥 NEW: Async function to handle submission without redirect
  const handleSubmit = async (e) => {
    e.preventDefault(); // 🛑 STOP THE DEFAULT BROWSER SUBMISSION (Prevents redirect!)

    if (!isFormValid) {
      return; // Don't submit if validation fails (shouldn't happen with disabled button, but is safe)
    }

    // 1. Create the data payload for the POST request
    const data = new URLSearchParams();
    data.append(NAME_ENTRY_ID, name);
    data.append(EMAIL_ENTRY_ID, email);

    try {
      // 2. Send the request silently
      await fetch(FORM_ACTION_URL, {
        method: 'POST',
        body: data,
        // Google Forms ignores standard content-types when accepting URLSearchParams
        mode: 'no-cors' // Critical for Google Forms fetch requests
      });

      // 3. Success Feedback
      setIsSubmitted(true);
      setName(''); // Clear inputs on success
      setEmail('');
      // You can add a success message or redirect to a thank-you section here.

    } catch (error) {
      console.error('Submission Error:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };


  return (
    <section id="Form" className="FormSec-container">
      <h2>Get to Know the Tribe</h2>
      <p>Leave your details below and get a FREE Welcome Packet!</p>

      <form
        // 💡 Use the new handleSubmit function
        onSubmit={handleSubmit}
        className="Custom-Form"
      >

        {/* ... (Your Name and Email field JSX using refs and handleValidation) ... */}

        {/* Name Field */}
        <div className="Form-Group">
          <label htmlFor="clientName">Your Name *</label>
          <input
            type="text" id="clientName" name={NAME_ENTRY_ID} ref={nameRef}
            value={name} onChange={handleValidation} onBlur={handleValidation} required
            aria-invalid={!isNameValid}
          />
          {!isNameValid && <p className="Error-Text">Name cannot contain numbers or special characters.</p>}
        </div>

        {/* Email Field */}
        <div className="Form-Group">
          <label htmlFor="clientEmail">Your Email *</label>
          <input
            type="email" id="clientEmail" name={EMAIL_ENTRY_ID} ref={emailRef}
            value={email} onChange={handleValidation} onBlur={handleValidation} required
            aria-invalid={!isEmailValid}
          />
          {!isEmailValid && <p className="Error-Text">Please enter a valid email address (must include @ and .).</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="Submit-Button"
          disabled={!isFormValid || isSubmitted}
        >
          {isSubmitted ? 'Thank You!' : 'Get My Checklist'}
        </button>
        {isSubmitted &&
          // State is 'Submitted': Show the download link
          <p>✅ Download Packet: &nbsp;
          <a
            href={PDF_URL}
            download={PDF_FILENAME} 
          >
            {PDF_FILENAME}
          </a></p>
        }
      </form>

      {/* Optional: Add a success indicator outside the form */}
    </section>
  );
}

export default FormSection;