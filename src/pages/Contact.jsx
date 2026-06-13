import React, { useState } from 'react';

export default function Contact() {
  // ==========================================
  // STEP 1: DROP YOUR FORMSPREE ID RIGHT HERE!
  // ==========================================
  // Replace 'YOUR_FORMSPREEE_ID_HERE' with the code Formspree gives you (e.g., "xbjnqeyo")
  const FORMSPREE_ID = 'YOUR_FORMSPREEE_ID_HERE'; 

  // State to capture input values dynamically
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Track changes inside input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle live form submission via API fetch
  const handleSubmission = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // The application automatically plugs your ID in right here:
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Message dispatched successfully to the Zicson Enterprise framework pipeline!');
        // Clear fields on successful delivery
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Transmission failed. Formspree endpoint not set up yet, but your UI is working perfectly!');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Network issue detected. Unable to reach the notification service.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="inner-content-layout">
      {/* Visual Header */}
      <div className="page-header">
        <h2>Initiate Connection</h2>
        <p>Submit your target specifications below to begin engineering configurations.</p>
      </div>
      
      {/* Beautiful Form Layout matching image_de83e1.png */}
      <form onSubmit={handleSubmission} style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '500px', marginTop: '30px' }}>
        <input 
          type="text" 
          name="name"
          placeholder="Full Name" 
          value={formData.name}
          onChange={handleChange}
          required 
          style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', padding: '15px', borderRadius: '8px', color: 'white', outline: 'none' }} 
        />
        <input 
          type="email" 
          name="email"
          placeholder="Email Address" 
          value={formData.email}
          onChange={handleChange}
          required 
          style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', padding: '15px', borderRadius: '8px', color: 'white', outline: 'none' }} 
        />
        <textarea 
          rows="5" 
          name="message"
          placeholder="Project goals and baseline constraints..." 
          value={formData.message}
          onChange={handleChange}
          required 
          style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', padding: '15px', borderRadius: '8px', color: 'white', outline: 'none' }} 
        ></textarea>
        
        <button 
          type="submit" 
          className="btn btn-primary" 
          disabled={isSubmitting}
          style={{ alignSelf: 'flex-start', opacity: isSubmitting ? 0.6 : 1 }}
        >
          {isSubmitting ? 'Sending Brief...' : 'Dispatch Brief'}
        </button>
      </form>
    </div>
  );
}