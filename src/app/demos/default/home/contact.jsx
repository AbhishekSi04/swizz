import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import TopNavbar1 from './components/TopNavbar1';
import Footer from '@/components/Footer';
import PageMetaData from '@/components/PageMetaData';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactPage = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [sending, setSending] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({ type: 'error', message: 'Email service is not configured.' });
      return;
    }
    try {
      setSending(true);
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      formRef.current?.reset();
    } catch (err) {
      setStatus({ type: 'error', message: 'Failed to send. Please try again.' });
    } finally {
      setSending(false);
    }
  };

  return <>
    <PageMetaData title="Contact Us" />
    <TopNavbar1 />
    <main className="py-6">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="mb-4">Contact Us</h2>
            {status.message && (
              <div className={`alert ${status.type === 'success' ? 'alert-success' : 'alert-danger'}`} role="alert">
                {status.message}
              </div>
            )}
            <form ref={formRef} onSubmit={onSubmit} encType="multipart/form-data" className="card border p-4 rounded-3">
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Name</label>
                  <input name="user_name" required className="form-control" placeholder="Your name" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input type="email" name="user_email" required className="form-control" placeholder="you@example.com" />
                </div>
                <div className="col-12">
                  <label className="form-label">Subject</label>
                  <input name="subject" required className="form-control" placeholder="Subject" />
                </div>
                <div className="col-12">
                  <label className="form-label">Message</label>
                  <textarea name="message" required rows={5} className="form-control" placeholder="Write your message here..." />
                </div>
                <div className="col-12">
                  <label className="form-label">Attachment (optional)</label>
                  <input type="file" name="attachment" className="form-control" />
                  <small className="text-muted">You can attach an image or PDF.</small>
                </div>
                <div className="col-12 d-flex justify-content-end">
                  <button className="btn btn-primary" type="submit" disabled={sending}>
                    {sending ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>;
};

export default ContactPage;


