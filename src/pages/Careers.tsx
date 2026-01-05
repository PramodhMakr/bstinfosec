import { Users, TrendingUp, Heart, Award, Mail, Briefcase, CheckCircle } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

export default function Careers() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Professional Growth',
      description: 'Continuous learning opportunities and industry certifications',
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with experienced security professionals',
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible working arrangements and wellness programs',
    },
    {
      icon: Award,
      title: 'Competitive Benefits',
      description: 'Industry-leading compensation and benefits package',
    },
  ];

  const openPositions = [
    {
      title: 'Penetration Tester',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      description:
        'Conduct security assessments for enterprise clients. You will perform vulnerability identification, simulate real-world attacks, and provide detailed remediation guidance. This role offers hands-on experience with the latest security tools and methodologies.',
      requirements: [
        '1+ year of experience in penetration testing or vulnerability assessment',
        'Knowledge of web application and network security concepts',
        'Experience with common security tools (Burp Suite, Metasploit, Nmap, etc.)',
        'Strong report writing and communication skills',
        'Ability to learn and adapt quickly to new technologies',
        'Passion for security and continuous learning',
      ],
    },
    {
      title: 'Security Analyst',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      description:
        'Join our security operations team to monitor, analyze, and respond to security incidents. You will participate in threat analysis, assist with security assessments, and help protect our clients from evolving threats.',
      requirements: [
        '1+ year of experience in cybersecurity or related field',
        'Knowledge of security frameworks (NIST, ISO 27001 basics)',
        'Familiarity with SIEM tools and log analysis concepts',
        'Understanding of common attack vectors and mitigation techniques',
        'Strong analytical and problem-solving abilities',
        'Excellent communication and documentation skills',
      ],
    },
    {
      title: 'Security Consultant',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      description:
        'Work directly with clients to assess their security posture, develop security strategies, and provide expert guidance on security best practices and compliance requirements. You will be a trusted advisor to our clients.',
      requirements: [
        '3+ years of experience in security assessments and consulting',
        'Knowledge of compliance frameworks (PCI DSS, HIPAA, GDPR, etc.)',
        'Understanding of enterprise security architectures',
        'Excellent client-facing and presentation skills',
        'Ability to translate technical concepts for business stakeholders',
        'Strong understanding of risk assessment methodologies',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600/5 via-transparent to-blue-700/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Join <span className="text-blue-600">Our Team</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Build your career with a leading cybersecurity firm and make a real impact protecting businesses
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Why Work With BST InfoSec?</h2>
              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <benefit.icon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0 icon-hover" />
                    <div>
                      <h3 className="text-slate-900 font-semibold">{benefit.title}</h3>
                      <p className="text-slate-500 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/50 rounded-2xl border border-blue-600/20 p-8 backdrop-blur-sm">
              <OptimizedImage
                src="/assets/stripped-03.jpg"
                alt="Team Culture"
                className="rounded-xl w-full h-auto object-cover"
                removeBorder={true}
              />
            </div>
          </div>

          <div className="bg-white/60 p-10 rounded-xl border border-blue-600/20">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Culture</h3>
            <div className="grid md:grid-cols-2 gap-8 text-slate-600 leading-relaxed">
              <div>
                <p className="mb-4">
                  At BST InfoSec Technologies, we foster a culture of innovation, collaboration, and continuous
                  learning. Our team is made up of passionate cybersecurity professionals dedicated to protecting
                  businesses and sharing knowledge.
                </p>
                <p>
                  We believe that our team members are our greatest asset. We invest in professional development,
                  provide access to training resources, and encourage knowledge sharing across all levels. Your growth
                  is our priority.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  We combine proactive security, continuous monitoring, and risk-driven strategies to protect
                  businesses without slowing down operations. Our approach is business-first, recognizing that
                  security should enable growth, not hinder it.
                </p>
                <p>
                  Work-life balance is important to us. We offer flexible working arrangements, competitive
                  compensation, comprehensive benefits, and a supportive environment where you can excel both
                  professionally and personally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our Roles & Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Explore how our team helps businesses with these core services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                title: 'VAPT Services',
                desc: 'Identify security gaps before attackers exploit them'
              },
              {
                title: 'Security Operations Center',
                desc: '24/7 monitoring, threat detection, and incident response'
              },
              {
                title: 'Network & Infrastructure Security',
                desc: 'Secure network architecture and access controls'
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white/60 p-6 rounded-xl border-2 border-blue-600/20 hover:border-blue-600/40 transition-all">
                <h4 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h4>
                <p className="text-slate-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Open Positions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Explore exciting opportunities to work with cutting-edge cybersecurity technologies
            </p>
          </div>

          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-white/60 p-10 rounded-xl border border-blue-600/20 hover:border-blue-600/40 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="inline-flex items-center text-blue-600">
                        <Briefcase className="h-4 w-4 mr-2" />
                        {position.type}
                      </span>
                      <span className="text-slate-500">{position.location}</span>
                    </div>
                  </div>
                  <a
                    href="mailto:careers@bstinfosec.com"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all h-fit"
                  >
                    Apply Now
                  </a>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">{position.description}</p>

                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">What We're Looking For:</h4>
                  <ul className="space-y-3">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start text-slate-600">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0 icon-hover" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-blue-700/10 border-y border-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Ready to Apply?</h2>
          <p className="text-slate-600 mb-8 text-lg">
            Don't see the perfect role? We're always looking for talented security professionals. Send us your
            resume and let's talk about how you can grow with us.
          </p>
          <a
            href="mailto:careers@bstinfosec.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
          >
            <Mail className="mr-2 h-5 w-5 icon-hover" />
            careers@bstinfosec.com
          </a>
        </div>
      </section>
    </div>
  );
}
