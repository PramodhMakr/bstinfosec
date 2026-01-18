import { Mail, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { handleMailto } from '../utils/mailto';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const emailBody = `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    setIsSubmitted(true);
    setTimeout(() => {
      handleMailto('info@bstinfosec.com', 'New Contact Request', emailBody);
    }, 500);
  };

  setTimeout(() => {
    setIsSubmitted(false);
    setFormData({ name: '', email: '', company: '', message: '' });
  }, 4000);

  return (
    <div className="min-h-screen bg-pattern-overlay">
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 section-gradient">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-blue-700/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">BST InfoSec</span>
            </h1>
            <p className="text-slate-700 max-w-2xl mx-auto text-lg">
              Get in touch with our cybersecurity experts for comprehensive protection solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              {isSubmitted ? (
                <div className="content-card p-8 rounded-xl text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Thank you for your message!</h3>
                  <p className="text-slate-700">Our team will respond to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-slate-700 font-semibold mb-2">Full Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full px-4 py-3 border border-blue-600/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all form-input" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-slate-700 font-semibold mb-2">Email Address</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="w-full px-4 py-3 border border-blue-600/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all form-input" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-slate-700 font-semibold mb-2">Company Name</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full px-4 py-3 border border-blue-600/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all form-input" placeholder="Your Company" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-slate-700 font-semibold mb-2">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={5} className="w-full px-4 py-3 border border-blue-600/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all form-input" placeholder="Tell us about your security needs..." />
                  </div>
                  <button type="submit" className="w-full px-8 py-4 text-white font-semibold rounded-lg transition-all shadow-lg group btn-gradient">
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform icon-hover icon-glow" />
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div className="content-card p-10 rounded-xl border-2 border-blue-600/15 hover:border-blue-600/30 transition-all cursor-pointer group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 to-blue-700/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur" />
                <div className="relative">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Quick Contact</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-slate-700 text-sm mb-2">For General Questions:</p>
                      <button 
                        onClick={() => handleMailto('info@bstinfosec.com')}
                        className="flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors group"
                      >
                        <Mail className="h-5 w-5 mr-2 icon-hover icon-glow" />
                        info@bstinfosec.com
                      </button>
                    </div>
                    <div className="border-t border-slate-200 pt-4">
                      <p className="text-slate-700 text-sm mb-2">For Sales & Business Inquiries:</p>
                      <button 
                        onClick={() => handleMailto('sales@bstinfosec.com')}
                        className="flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors group"
                      >
                        <Mail className="h-5 w-5 mr-2 icon-hover icon-glow" />
                        sales@bstinfosec.com
                      </button>
                    </div>
                    <div className="border-t border-slate-200 pt-4">
                      <p className="text-slate-700 text-sm mb-2">For Support & Incident Response:</p>
                      <button 
                        onClick={() => handleMailto('support@bstinfosec.com')}
                        className="flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors group"
                      >
                        <Mail className="h-5 w-5 mr-2 icon-hover icon-glow" />
                        support@bstinfosec.com
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content-card p-8 rounded-xl border-2 border-blue-600/15 hover:border-blue-600/30 transition-all cursor-pointer group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 to-blue-700/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur" />
                <div className="relative">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Office Hours</h3>
                  <div className="space-y-4 text-slate-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="text-blue-600 font-semibold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday - Sunday</span>
                      <span className="text-slate-500">Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content-card p-8 rounded-xl border-2 border-blue-600/15 hover:border-blue-600/30 transition-all cursor-pointer group">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600/10 to-red-700/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur" />
                <div className="relative">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Security Incident?</h3>
                  <p className="text-slate-700 mb-6">
                    For urgent security matters or immediate assistance, contact us directly. Our team is available
                    24/7 for critical security incidents.
                  </p>
                  <button 
                    onClick={() => handleMailto('support@bstinfosec.com', 'Security Incident Report', 'Please provide details about the security incident...')}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-red-700 transition-all shadow-lg hover:shadow-red-600/20 group"
                  >
                    <Mail className="h-5 w-5 mr-2 icon-hover icon-glow" />
                    Report Security Incident
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
