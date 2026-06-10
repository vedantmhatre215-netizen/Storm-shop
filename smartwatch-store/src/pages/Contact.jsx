import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '4rem auto', padding: '2rem', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
      <h2 style={{ marginTop: 0, textAlign: 'center' }}>Get In Touch</h2>
      {submitted ? (
        <div style={{ backgroundColor: '#dcfce7', color: '#15803d', padding: '1rem', borderRadius: '6px', textAlign: 'center', fontWeight: 'bold' }}>
          Thank you! Your message has been sent successfully.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.3rem', fontWeight: '600' }}>Name</label>
            <input type="text" required style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.3rem', fontWeight: '600' }}>Email</label>
            <input type="email" required style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.3rem', fontWeight: '600' }}>Message</label>
            <textarea rows="4" required style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: '1px solid #cbd5e1' }}></textarea>
          </div>
          <button type="submit" style={{ backgroundColor: '#2563eb', color: '#fff', border: 'none', padding: '0.75rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}>
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}