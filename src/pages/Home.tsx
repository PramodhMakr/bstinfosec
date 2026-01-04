import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Cloud, FileCheck, Users, ArrowRight, CheckCircle, Zap, ExternalLink } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-900">
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                <span className="text-cyan-400 text-sm font-semibold">SMB Security Solutions</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Secure Your Digital
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Future Today
                </span>
              </h1>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed max-w-2xl">
                Enterprise-Level Security With Budget Flexibility
              </p>
              <p className="text-base text-gray-400 mb-8 leading-relaxed max-w-2xl">
                Protect your digital infrastructure without breaking the bank. BST InfoSec delivers tailored
                cybersecurity solutions designed for small and medium-sized businesses seeking growth-aligned security
                strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-cyan-500/20 group"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="mailto:info@bstinfosec.com"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gray-800/80 text-white font-semibold rounded-lg hover:bg-gray-700 border border-cyan-500/30 transition-all group"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Get Free Assessment
                </a>
              </div>
            </div>
            <div className="hidden lg:block relative h-96">
              <div
                className="absolute inset-0 rounded-2xl overflow-hidden"
                style={{
                  backgroundImage: 'url(/src/assets/stripped-02.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/80 p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="text-5xl font-bold text-cyan-400 mb-2">200+</div>
              <div className="text-gray-400 text-sm mb-2">Happy Clients</div>
              <p className="text-gray-500 text-xs">Trusted by SMBs and growing enterprises</p>
            </div>
            <div className="bg-gray-900/80 p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="text-5xl font-bold text-cyan-400 mb-2">98%</div>
              <div className="text-gray-400 text-sm mb-2">Client Satisfaction</div>
              <p className="text-gray-500 text-xs">Consistently delivering results</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What We Serve
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
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
              <div key={idx} className="flex items-center space-x-3 bg-gray-800/50 p-6 rounded-lg border border-cyan-500/10 hover:border-cyan-500/30 transition-all">
                <CheckCircle className="h-6 w-6 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Core Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive cybersecurity solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/40 p-8 rounded-xl border border-cyan-500/10 hover:border-cyan-500/40 transition-all hover:bg-gray-800/60"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur" />
                <div className="relative">
                  <service.icon className="h-14 w-14 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-cyan-400 text-sm font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Why Choose BST InfoSec?</h2>
              <div className="space-y-4">
                {whyChoose.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-cyan-400 mt-1" />
                    </div>
                    <span className="text-gray-300 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: 'url(/src/assets/stripped-06.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-y border-cyan-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Secure Your Business Before Threats Strike
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Get a free security assessment and discover vulnerabilities in your infrastructure today.
          </p>
          <a
            href="mailto:info@bstinfosec.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-all shadow-lg hover:shadow-cyan-500/20 group"
          >
            Request Free Assessment
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}
