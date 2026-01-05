import { Eye, Lock, Shield, Cloud, BarChart3, Users, CheckCircle, Zap } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: Eye,
      title: 'Vulnerability Assessment & Penetration Testing (VAPT)',
      subtitle: 'Identify Security Gaps Before Attackers Do',
      description:
        'Comprehensive security testing that simulates real-world attacks to uncover vulnerabilities in your infrastructure, applications, and networks.',
      benefits: [
        'Identify security gaps before attackers exploit them',
        'Simulate real-world attacks to uncover vulnerabilities',
        'Applications, networks, and infrastructure testing',
        'Detailed remediation guidance with actionable insights',
        'Vulnerability severity scoring and prioritization',
        'Post-assessment consultation and support',
      ],
    },
    {
      icon: Lock,
      title: 'Web & API Security Testing',
      subtitle: 'Secure Your Applications',
      description:
        'In-depth security assessment of your web applications and APIs following OWASP Top 10 and industry best practices.',
      benefits: [
        'OWASP Top 10 vulnerability testing',
        'API security assessment and validation',
        'Authentication and authorization testing',
        'Business logic flaw detection',
        'Input validation and injection testing',
        'Secure coding recommendations',
      ],
    },
    {
      icon: Shield,
      title: 'Network & Infrastructure Security',
      subtitle: 'Fortify Your Foundation',
      description:
        'Secure network architecture, firewall configuration, and access controls designed for scalability and performance without compromising security.',
      benefits: [
        'Network penetration testing',
        'Firewall and router configuration review',
        'Segmentation and isolation testing',
        'Network device security audit',
        'VPN security assessment',
        'Infrastructure hardening guidance',
      ],
    },
    {
      icon: Cloud,
      title: 'Cloud Security Assessments',
      subtitle: 'Secure Your Cloud Infrastructure',
      description:
        'Specialized security testing for cloud environments including AWS, Azure, and Google Cloud. Identify misconfigurations and access control issues.',
      benefits: [
        'Cloud configuration review and compliance',
        'IAM policy assessment and optimization',
        'Storage and database security audit',
        'Container and serverless security testing',
        'Multi-cloud security evaluation',
        'Cloud-native best practices guidance',
      ],
    },
    {
      icon: BarChart3,
      title: 'Security Operations Center (SOC)',
      subtitle: '24/7 Continuous Protection',
      description:
        'Round-the-clock monitoring, threat detection, and incident response to ensure continuous protection of your business against emerging threats.',
      benefits: [
        '24/7 monitoring and threat detection',
        'Real-time incident response',
        'Security event log analysis',
        'Threat intelligence integration',
        'Alert triage and escalation',
        'Monthly security reports and analytics',
      ],
    },
    {
      icon: Users,
      title: 'Security Consulting',
      subtitle: 'Strategic Security Guidance',
      description:
        'Expert cybersecurity consulting to help you build and maintain a robust security program aligned with your business objectives.',
      benefits: [
        'Security strategy development',
        'Security architecture design',
        'Incident response planning',
        'Security awareness training programs',
        'Threat modeling and risk assessment',
        'Technology evaluation and recommendations',
      ],
    },
  ];

  const whyChoose = [
    {
      icon: Zap,
      title: 'Proactive Security',
      description: 'We identify threats before they become incidents'
    },
    {
      icon: Shield,
      title: 'Continuous Monitoring',
      description: 'Real-time threat detection and response'
    },
    {
      icon: CheckCircle,
      title: 'Risk-Driven Strategy',
      description: 'Solutions based on actual business risk'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with real-world experience'
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600/5 via-transparent to-blue-700/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions designed for SMBs seeking growth-aligned security strategies
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-start ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="bg-white/60 p-10 rounded-xl border border-blue-600/20 hover:border-blue-600/40 transition-all">
                  <service.icon className="h-16 w-16 text-blue-600 mb-6 icon-hover-float" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">{service.title}</h2>
                  <p className="text-blue-600 font-semibold mb-4 text-lg">{service.subtitle}</p>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="bg-white/50 p-10 rounded-xl border border-blue-600/10">
                  {index === 0 && (
                    <div className="mb-6">
                      <OptimizedImage
                        src="/assets/stripped-02.jpg"
                        alt="Vulnerability Assessment Service"
                        className="rounded-xl w-full h-48 object-cover"
                        removeBorder={true}
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Key Benefits:</h3>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0 icon-hover" />
                        <span className="text-slate-600 leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Why Choose Our Services?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Our approach combines proactive security, continuous monitoring, and risk-driven strategies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="bg-white/60 p-8 rounded-xl border border-blue-600/10 hover:border-blue-600/40 transition-all group text-center"
              >
                <item.icon className="h-12 w-12 text-blue-600 mb-4 mx-auto icon-hover-float" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-blue-700/10 border-y border-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Ready to Strengthen Your Security?
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            Let's assess your security posture and provide actionable recommendations tailored to your business.
          </p>
          <a
            href="mailto:info@bstinfosec.com?subject=Security%20Consultation%20Request"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/20"
          >
            Request a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
