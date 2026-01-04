import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { createMailtoLink } from '../utils/emailHandler';

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

    // Create email body from form data
    const emailBody = `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    // Create mailto link
    const mailtoLink = createMailtoLink('info@bstinfosec.com', 'New Contact Request', emailBody);

    // Show success message
    setIsSubmitted(true);

    // Open email client
    setTimeout(() => {
      window.location.href = mailtoLink;
    }, 500);

    // Reset form and hide message after 4 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 4000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'General Inquiries',
      value: 'info@bstinfosec.com',
      href: 'mailto:info@bstinfosec.com',
    },
    {
      icon: Mail,
      title: 'Sales & Business',
      value: 'sales@bstinfosec.com',
      href: 'mailto:sales@bstinfosec.com',
    },
    {
      icon: Mail,
      title: 'Support & Incident',
      value: 'support@bstinfosec.com',
      href: 'mailto:support@bstinfosec.com',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Get in <span className="text-cyan-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as
            possible.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="bg-gray-800/40 p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all group text-center"
              >
                <info.icon className="h-12 w-12 text-cyan-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                <p className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">{info.value}</p>
              </a>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
              <p className="text-gray-400 mb-8">
                Fill out the form below and our team will get back to you within 24 hours. Or reach out directly to
                <a href="mailto:info@bstinfosec.com" className="text-cyan-400 hover:text-cyan-300 ml-1 font-semibold transition-colors">
                  info@bstinfosec.com
                </a>
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    placeholder="Tell us about your security needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-4 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-all shadow-lg hover:shadow-cyan-500/20 group"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>

                {isSubmitted && (
                  <div className="bg-green-500/10 border border-green-500/50 text-green-400 px-4 py-4 rounded-lg text-center">
                    <p className="font-semibold mb-1">Thank you for reaching out!</p>
                    <p className="text-sm">Our team will connect with you within 24 hours. Opening your email client now...</p>
                  </div>
                )}
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-800/40 p-8 rounded-xl border border-cyan-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">Quick Contact Options</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm mb-2">For General Questions:</p>
                    <a
                      href="mailto:info@bstinfosec.com"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                    >
                      <Mail className="h-5 w-5 mr-2" />
                      info@bstinfosec.com
                    </a>
                  </div>
                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-gray-400 text-sm mb-2">For Sales & Business Inquiries:</p>
                    <a
                      href="mailto:sales@bstinfosec.com"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                    >
                      <Mail className="h-5 w-5 mr-2" />
                      sales@bstinfosec.com
                    </a>
                  </div>
                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-gray-400 text-sm mb-2">For Support & Incident Response:</p>
                    <a
                      href="mailto:support@bstinfosec.com"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                    >
                      <Mail className="h-5 w-5 mr-2" />
                      support@bstinfosec.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/40 p-8 rounded-xl border border-cyan-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">Office Hours</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-cyan-400 font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 rounded-xl border border-cyan-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">Security Incident?</h3>
                <p className="text-gray-300 mb-6">
                  For urgent security matters or immediate assistance, contact us directly. Our team is available
                  24/7 for critical security incidents.
                </p>
                <a
                  href="mailto:support@bstinfosec.com"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-all"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Report Security Incident
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
