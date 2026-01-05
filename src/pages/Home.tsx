import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Cloud, FileCheck, Users, ArrowRight, CheckCircle, Zap, ExternalLink } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

export default function Home() {
  const coreServices = [
    {
      icon: Eye,
      title: 'VAPT Services',
      subtitle: 'Identify & Eliminate Risks',
      description: 'Vulnerability Assessment & Penetration Testing - Identify security gaps before attackers exploit them.',
    },
    {
      icon: Shield,
      title: 'Network & Infrastructure',
      subtitle: 'Secure Foundation',
      description: 'Secure network architecture, firewall configuration, and access controls designed for scalability.',
    },
    {
      icon: Lock,
      title: 'Security Operations Center',
      subtitle: '24/7 Protection',
      description: '24/7 monitoring, threat detection, and incident response for continuous protection of your business.',
    },
  ];

  const whyChoose = [
    'Business-first cybersecurity approach',
    'Tailored solutions, not generic tools',
    'Focus on prevention, detection, and response',
    'Security strategies aligned with growth',
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-blue-700/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-blue-600/10 border border-blue-600/30 rounded-full">
                <span className="text-blue-600 text-sm font-semibold">SMB Security Solutions</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Secure Your Digital
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
                  Future Today
                </span>
              </h1>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed max-w-2xl">
                Enterprise-Level Security With Budget Flexibility
              </p>
              <p className="text-base text-slate-500 mb-8 leading-relaxed max-w-2xl">
                Protect your digital infrastructure without breaking the bank. BST InfoSec delivers tailored
                cybersecurity solutions designed for small and medium-sized businesses seeking growth-aligned security
                strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-blue-600/20 group"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform icon-hover" />
                </Link>
                <a
                  href="mailto:info@bstinfosec.com"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 font-semibold rounded-lg hover:bg-slate-50 border border-blue-600/30 transition-all group"
                >
                  <Zap className="mr-2 h-5 w-5 text-blue-600 icon-hover" />
                  Get Free Assessment
                </a>
              </div>
            </div>
            <div className="hidden lg:block relative h-96">
              <OptimizedImage
                src="/assets/stripped-03.jpg"
                alt="Cybersecurity Team"
                className="absolute inset-0 rounded-2xl overflow-hidden"
                removeBorder={true}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-700/20 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/50 p-6 rounded-lg border-2 border-blue-600/10 hover:border-blue-600/30 transition-all hover:shadow-lg hover:shadow-blue-600/10">
              <div className="text-5xl font-bold text-blue-600 mb-2">30+</div>
              <div className="text-slate-600 text-sm mb-2">Happy Clients</div>
              <p className="text-slate-500 text-xs">Trusted by SMBs and growing enterprises</p>
            </div>
            <div className="bg-white/50 p-6 rounded-lg border-2 border-blue-600/10 hover:border-blue-600/30 transition-all hover:shadow-lg hover:shadow-blue-600/10">
              <div className="text-5xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-slate-600 text-sm mb-2">Client Satisfaction</div>
              <p className="text-slate-500 text-xs">Consistently delivering results</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What We Serve
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
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
              <div key={idx} className="flex items-center space-x-3 bg-white/50 p-6 rounded-lg border border-blue-600/10 hover:border-blue-600/30 transition-all">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 icon-hover" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our Core Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive cybersecurity solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/40 p-8 rounded-xl border-2 border-blue-600/10 hover:border-blue-600/40 transition-all hover:bg-white/60"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-blue-700/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur" />
                <div className="relative">
                  <service.icon className="h-14 w-14 text-blue-600 mb-4 icon-hover-float" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-blue-600 text-sm font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-slate-600">{service.description}</p>
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

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Why Choose BST InfoSec?</h2>
              <div className="space-y-4">
                {whyChoose.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-blue-600 mt-1 icon-hover" />
                    </div>
                    <span className="text-slate-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <OptimizedImage
                src="/assets/stripped-06.jpg"
                alt="Security Team"
                className="absolute inset-0"
                removeBorder={true}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-700/20 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-blue-700/10 border-y border-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Secure Your Business Before Threats Strike
          </h2>
          <p className="text-slate-700 mb-8 text-lg">
            Get a free security assessment and discover vulnerabilities in your infrastructure today.
          </p>
          <a
            href="mailto:info@bstinfosec.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/20 group"
          >
            Request Free Assessment
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}
