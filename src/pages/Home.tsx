import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, ArrowRight, Zap } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';
import ImageSlider from '../components/ImageSlider';
import { useEffect } from 'react';

export default function Home() {
  // SEO Optimization
  useEffect(() => {
    document.title = 'Affordable Cybersecurity Services for SMBs | VAPT, 24/7 SOC | BST InfoSec';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Enterprise-grade cybersecurity starting at ₹15,000/month. VAPT testing, 24/7 SOC monitoring, and compliance management. Protect your SMB from cyber attacks in 48 hours.');
    }
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'cybersecurity services for small business, affordable penetration testing, 24/7 security monitoring, VAPT services pricing, SMB security solutions, compliance management, cybersecurity consulting');
    }
  }, []);
  const coreServices = [
    {
      icon: Eye,
      title: 'VAPT Services',
      subtitle: 'Starting at ₹25,000',
      description: 'Complete penetration testing in 3-5 business days. Identify 95%+ vulnerabilities including OWASP Top 10, network misconfigurations, and API security gaps. Get detailed remediation reports with priority scoring.',
      process: 'Discovery → Scanning → Exploitation → Reporting → Retesting',
    },
    {
      icon: Shield,
      title: '24/7 Security Operations',
      subtitle: 'Starting at ₹15,000/month',
      description: 'Real-time threat monitoring and incident response. Our SOC detects and responds to threats in under 15 minutes. Includes SIEM, threat intelligence, and monthly security reports.',
      process: 'Setup → Monitoring → Detection → Response → Reporting',
    },
    {
      icon: Lock,
      title: 'Compliance Management',
      subtitle: 'Starting at ₹20,000/month',
      description: 'GDPR, PCI DSS, ISO 27001 compliance in 60-90 days. Automated gap analysis, policy creation, audit support, and employee training programs.',
      process: 'Assessment → Gap Analysis → Implementation → Audit → Certification',
    },
  ];

  const whyChoose = [
    '24/7 security monitoring and incident response',
    'Comprehensive penetration testing and vulnerability assessment',
    'Compliance management for various industries',
    'Expert team with proven cybersecurity solutions',
  ];

  return (
    <div className="min-h-screen bg-pattern-overlay">
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden section-gradient">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-blue-700/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-rich-gradient border border-blue-600/30 rounded-full">
                <span className="text-white text-sm font-semibold">SMB Security Solutions</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Stop Cyber Attacks Before
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
                  They Cost You Everything
                </span>
              </h1>
              <p className="text-base text-slate-700 mb-4 leading-relaxed max-w-2xl font-semibold">
                Enterprise-grade cybersecurity starting at just ₹15,000/month. Our SOC, VAPT, and compliance services help protect your business.
              </p>
              <p className="text-sm text-slate-600 mb-8 leading-relaxed max-w-2xl">
                Our security team is ready to help you secure your digital infrastructure with proven solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-lg transition-all shadow-lg group btn-gradient"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform icon-hover" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/80 text-slate-700 font-semibold rounded-lg hover:bg-white/90 border border-blue-600/30 transition-all group content-card"
                >
                  <Zap className="mr-2 h-5 w-5 text-blue-600 icon-hover" />
                  Get Free Security Assessment
                </Link>
              </div>
            </div>
            <div className="lg:block">
              <ImageSlider 
                images={[
                  "/assets/stripped-03.jpg",
                  "/assets/stripped-05.jpg", 
                  "/assets/stripped-06.jpg"
                ]}
                autoPlay={true}
                interval={4000}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-blue-700/10 border-y border-blue-600/20 section-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What We Serve
            </h2>
            <p className="text-slate-700 max-w-2xl mx-auto">
              Customized security solutions for organizations at every stage of growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              'Small & Medium Businesses',
              'Startups & Growing Enterprises',
              'Cost-Conscious Organizations',
              'Growth-Focused Businesses',
            ].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-3 content-card p-6 rounded-xl border border-blue-600/15 hover:border-blue-600/30 transition-all">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse flex-shrink-0"></div>
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-blue-700/10 border-y border-blue-600/20 section-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our Core Services</h2>
            <p className="text-slate-700 max-w-2xl mx-auto">
              Comprehensive cybersecurity solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="group relative content-card p-8 rounded-xl border-2 border-blue-600/15 hover:border-blue-600/40 transition-all"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-blue-700/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur" />
                <div className="relative">
                  <service.icon className="h-14 w-14 text-blue-600 mb-4 icon-hover-float" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-blue-600 text-sm font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-slate-700">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform icon-hover" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 section-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Why Choose BST InfoSec?</h2>
              <div className="space-y-4">
                {whyChoose.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 animate-pulse"></div>
                    <span className="text-slate-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 overflow-hidden">
              <OptimizedImage
                src="/assets/stripped-06.jpg"
                alt="Security Team"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/15 to-blue-700/15 border-y border-blue-600/25 section-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Secure Your Business Before Threats Strike
          </h2>
          <p className="text-slate-700 mb-8 text-lg">
            Get a free security assessment and discover vulnerabilities in your infrastructure today.
          </p>
          <a
            href="mailto:info@bstinfosec.com"
            className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-lg transition-all shadow-lg group btn-gradient"
          >
            Request Free Assessment
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}
