import React, { useEffect, useState } from 'react';
import SectionTitle from '../components/SectionTitle';

const API = import.meta.env.VITE_API_URL || '/api/volunteers';

const readJsonResponse = async (response) => {
  const text = await response.text();
  if (!text) {
    return null;
  }

  try {
    return JSON.parse(text);
  } catch (err) {
    throw new Error('Server returned an invalid response.');
  }
};

export default function Volunteer(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('Community Outreach');
  const [note, setNote] = useState('');
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [formError, setFormError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleEmailChange = (val) => {
    setEmail(val);
    const v = val.trim();
    if (!v) {
      setEmailError('Email is required');
      return;
    }
    if (!emailRegex.test(v)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  useEffect(() => {
    fetchVolunteers();
  }, []);

  const fetchVolunteers = async () => {
    setLoading(true);
    try {
      const res = await fetch(API);
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await readJsonResponse(res);
      setVolunteers(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setVolunteers([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const vEmail = email.trim();
    setFormError('');
    setSuccessMessage('');

    if (!name.trim() || !vEmail) {
      setFormError('Name and email are required.');
      return;
    }
    if (emailError || !emailRegex.test(vEmail)) {
      setFormError('Please provide a valid email address.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          role: role.trim(),
          note: note.trim()
        })
      });

      const payload = await readJsonResponse(res);
      if (!res.ok) {
        throw new Error(payload?.error || 'Failed to register');
      }

      const created = payload;
      setVolunteers(prev => [created, ...prev]);
      setName('');
      setEmail('');
      setPhone('');
      setRole('Community Outreach');
      setNote('');
      setEmailError('');
      setSuccessMessage('Thank you for registering as a volunteer!');
    } catch (err) {
      console.error(err);
      setFormError(err.message || 'Registration failed. Try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section volunteer-luxury" id="volunteer">
      <div className="container volunteer-shell">
        <div className="volunteer-banner">
          <div>
            <p className="eyebrow">Serve with compassion</p>
            <h2>Join hands to create lasting change.</h2>
          </div>
          <div className="volunteer-badges">
            <span>Community impact</span>
            <span>Trusted service</span>
            <span>Volunteer-led</span>
          </div>
        </div>

        <div className="contact-grid volunteer-grid">
          <div className="volunteer-story-card">
            <SectionTitle>Volunteer With Us</SectionTitle>
            <p>
              We are always looking for kind-hearted volunteers who can help with food drives, school mentoring, events, fundraising, and community outreach. Your time and effort can directly change the lives of families and children who need support.
            </p>
            <ul className="contact-list volunteer-list">
              <li>Food packing and community meal service</li>
              <li>School support and mentoring for children</li>
              <li>Healthcare camp coordination and outreach</li>
              <li>Fundraising and event logistics support</li>
            </ul>

            <div className="current-volunteers">
              <SectionTitle>Current Volunteers</SectionTitle>
              {loading ? (
                <p>Loading volunteers...</p>
              ) : volunteers.length === 0 ? (
                <p>No volunteers registered yet.</p>
              ) : (
                <ul className="volunteer-list-grid">
                  {volunteers.map(v => (
                    <li key={v.id} className="volunteer-item">
                      <div className="volunteer-avatar">{v.name.charAt(0).toUpperCase()}</div>
                      <div className="volunteer-info">
                        <strong>{v.name}</strong>
                        <span>{v.email}</span>
                        {v.phone ? <span>{v.phone}</span> : null}
                        {v.role ? <small>Role: {v.role}</small> : null}
                        {v.note ? <small>{v.note}</small> : null}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="contact-card volunteer-form-card">
            <h4>Ready to serve?</h4>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
              <input type="email" placeholder="Email" value={email} onChange={e => handleEmailChange(e.target.value)} />
              {emailError ? <div style={{color:'red', fontSize:12, marginTop:6}}>{emailError}</div> : null}
              <input type="tel" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} />
              <select
                value={role}
                onChange={e => setRole(e.target.value)}
                className="volunteer-select"
              >
                <option>Community Outreach</option>
                <option>Food Distribution</option>
                <option>Education Support</option>
                <option>Healthcare Support</option>
                <option>Fundraising</option>
                <option>Event Support</option>
              </select>
              <textarea rows="4" placeholder="Tell us how you would like to contribute" value={note} onChange={e => setNote(e.target.value)} />
              {formError ? <div style={{color:'red', fontSize:12, marginTop:6}}>{formError}</div> : null}
              {successMessage ? <div style={{color:'green', fontSize:12, marginTop:6}}>{successMessage}</div> : null}
              <button type="submit" className="button" disabled={submitting || !!emailError}>{submitting ? 'Submitting...' : 'Join as volunteer'}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
