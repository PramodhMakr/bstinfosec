import { Mail, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

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
    const mailtoLink = `mailto:info@bstinfosec.com?subject=New Contact Request&body=${encodeURIComponent(emailBody)}`;

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
    <div className="min-h-screen bg-slate-50">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600/5 via-transparent to-blue-700/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Get in <span className="text-blue-600">Touch</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
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
                className="bg-white/60 p-8 rounded-xl border border-blue-600/20 hover:border-blue-600/40 transition-all group text-center"
              >
                <info.icon className="h-12 w-12 text-blue-600 mb-4 mx-auto icon-hover-float" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">{info.title}</h3>
                <p className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">{info.value}</p>
              </a>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
              <p className="text-slate-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours. Or reach out directly to
                <a href="mailto:info@bstinfosec.com" className="text-blue-600 hover:text-blue-700 ml-1 font-semibold transition-colors">
                  info@bstinfosec.com
                </a>
              </p>

              {isSubmitted ? (
                <div className="p-6 bg-green-50 border border-green-200 rounded-lg text-center shadow-md">
                  <p className="text-green-800 font-semibold">Thank you for your message! Our team will respond to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-blue-600/20 rounded-lg focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 bg-white/60 text-slate-900 placeholder-slate-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-blue-600/20 rounded-lg focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 bg-white/60 text-slate-900 placeholder-slate-500"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 border border-blue-600/20 rounded-lg focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 bg-white/60 text-slate-900 placeholder-slate-500"
                      placeholder="Acme Corporation"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-blue-600/20 rounded-lg focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 bg-white/60 text-slate-900 placeholder-slate-500 resize-none"
                      placeholder="Tell us about your security needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div className="bg-white/60 p-10 rounded-xl border border-blue-600/20 hover:bg-blue-50/50 transition-all cursor-pointer">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-slate-600 text-sm mb-2">For General Questions:</p>
                    <a
                      href="mailto:info@bstinfosec.com"
                      className="flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    >
                      <Mail className="h-5 w-5 mr-2 icon-hover" />
                      info@bstinfosec.com
                    </a>
                  </div>
                  <div className="border-t border-slate-200 pt-4">
                    <p className="text-slate-600 text-sm mb-2">For Sales & Business Inquiries:</p>
                    <a
                      href="mailto:sales@bstinfosec.com"
                      className="flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    >
                      <Mail className="h-5 w-5 mr-2 icon-hover" />
                      sales@bstinfosec.com
                    </a>
                  </div>
                  <div className="border-t border-slate-200 pt-4">
                    <p className="text-slate-600 text-sm mb-2">For Support & Incident Response:</p>
                    <a
                      href="mailto:support@bstinfosec.com"
                      className="flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    >
                      <Mail className="h-5 w-5 mr-2 icon-hover" />
                      support@bstinfosec.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 p-8 rounded-xl border border-blue-600/20 hover:bg-blue-50/50 transition-all cursor-pointer">
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

              <div className="bg-gradient-to-br from-blue-600/10 to-blue-700/10 p-8 rounded-xl border border-blue-600/20 hover:from-blue-600/20 hover:to-blue-700/20 transition-all cursor-pointer">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Security Incident?</h3>
                <p className="text-slate-600 mb-6">
                  For urgent security matters or immediate assistance, contact us directly. Our team is available
                  24/7 for critical security incidents.
                </p>
                <a
                  href="mailto:support@bstinfosec.com"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-all"
                >
                  <Mail className="h-5 w-5 mr-2 icon-hover" />
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