import { Target, Eye, Award, Users, Shield, TrendingUp, CheckCircle, Award as AwardIcon, ExternalLink, Mail } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We operate with the highest ethical standards and transparency in all our engagements.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every security assessment and consulting engagement.',
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your security needs are our priority. We tailor solutions to fit your unique requirements.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We stay ahead of emerging threats with cutting-edge security methodologies.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600/5 via-transparent to-blue-700/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              About <span className="text-blue-600">BST InfoSec</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Trusted cybersecurity partner for small and medium-sized businesses
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Who We Are</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  BST InfoSec Technologies is a cybersecurity solutions provider focused on helping small and
                  medium-sized businesses secure their digital infrastructure. We are dedicated to delivering
                  tailored security solutions that align with your business goals and budget.
                </p>
                <p>
                  Our approach combines proactive security, continuous monitoring, and risk-driven strategies to
                  protect businesses without slowing down operations or impacting sales. We believe security shouldn't
                  be a barrier to growth—it should enable it.
                </p>
                <p>
                  With our business-first mindset, we deliver solutions that are practical, cost-effective, and
                  directly address your security challenges. We partner with you as a trusted advisor, not just a
                  service provider.
                </p>
                <div className="mt-6">
                  <a
                    href="https://www.linkedin.com/company/bst-infosec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                  >
                    Visit us on LinkedIn
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/60 p-8 rounded-xl border-2 border-blue-600/20 hover:border-blue-600/40 transition-all hover:shadow-lg hover:shadow-blue-600/10">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-slate-600 text-sm">Client Satisfaction</div>
              </div>
              <div className="bg-white/60 p-8 rounded-xl border-2 border-blue-600/20 hover:border-blue-600/40 transition-all hover:shadow-lg hover:shadow-blue-600/10">
                <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
                <div className="text-slate-600 text-sm">Happy Clients</div>
              </div>
              <div className="bg-white/60 p-8 rounded-xl border border-blue-600/20 hover:border-blue-600/40 transition-all hover:shadow-lg hover:shadow-blue-600/10 col-span-2">
                <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
                <div className="text-slate-600 text-sm">Security Experts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1">
              <div className="relative h-96 rounded-xl overflow-hidden">
                <OptimizedImage
                  src="/assets/04.jpg"
                  alt="Office Environment"
                  className="absolute inset-0"
                  removeBorder={true}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-700/20 rounded-xl" />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Meet Our Leadership</h2>
              <div className="bg-white/50 p-8 rounded-xl border border-blue-600/20">
                <div className="flex items-start space-x-4 mb-6">
                  <AwardIcon className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1 icon-hover" />
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">Pramodh Prathap</h3>
                    <p className="text-blue-600 font-semibold mb-4">Founder & CEO</p>
                    <div className="space-y-2 text-slate-600 text-sm">
                      <p className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0 icon-hover" />
                        Certified Ethical Hacker (CEH)
                      </p>
                      <p className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0 icon-hover" />
                        CompTIA Network+
                      </p>
                      <p className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0 icon-hover" />
                        CompTIA Security+
                      </p>
                      <p className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0 icon-hover" />
                        MSSP Expert
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Pramodh brings extensive cybersecurity expertise and a passion for protecting businesses of all
                  sizes. His vision is to make enterprise-level security accessible and affordable for SMBs seeking to
                  grow securely.
                </p>
                <div className="mt-4">
                  <a
                    href="mailto:ceo@bstinfosec.com"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                  >
                    <Mail className="mr-2 h-4 w-4 icon-hover" />
                    ceo@bstinfosec.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white/50 p-10 rounded-xl border-2 border-blue-600/20 hover:border-blue-600/40 transition-all">
              <Target className="h-12 w-12 text-blue-600 mb-4 icon-hover-float" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To empower small and medium-sized businesses with affordable, tailored cybersecurity solutions
                that protect their digital infrastructure without breaking the bank. We are committed to delivering
                practical solutions that enable business growth while maintaining robust security.
              </p>
            </div>

            <div className="bg-white/50 p-10 rounded-xl border-2 border-blue-600/20 hover:border-blue-600/40 transition-all">
              <Eye className="h-12 w-12 text-blue-600 mb-4 icon-hover-float" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the trusted cybersecurity partner for growth-focused SMBs, recognized for delivering
                business-aligned security strategies that prevent threats, optimize performance, and accelerate
                digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Principles that guide every decision and every engagement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/40 p-8 rounded-xl border-2 border-blue-600/10 hover:border-blue-600/40 transition-all group"
              >
                <value.icon className="h-12 w-12 text-blue-600 mb-4 icon-hover-float group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            Why Choose <span className="text-blue-600">BST InfoSec</span>?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="bg-white/50 p-6 rounded-xl border border-blue-600/20 hover:border-blue-600/40 transition-all group">
              <h4 className="text-lg font-bold text-blue-600 mb-3 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Business-First Approach
              </h4>
              <p className="text-slate-600 text-sm">
                We understand your business goals. Security solutions that enable growth, not hinder it.
              </p>
            </div>
            <div className="bg-white/50 p-6 rounded-xl border border-blue-600/20 hover:border-blue-600/40 transition-all group">
              <h4 className="text-lg font-bold text-blue-600 mb-3 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Tailored Solutions
              </h4>
              <p className="text-slate-600 text-sm">
                No generic tools or cookie-cutter approaches. Every solution is customized to your needs.
              </p>
            </div>
            <div className="bg-white/50 p-6 rounded-xl border border-blue-600/20 hover:border-blue-600/40 transition-all group">
              <h4 className="text-lg font-bold text-blue-600 mb-3 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Prevention to Response
              </h4>
              <p className="text-slate-600 text-sm">
                From vulnerability identification to incident response, we've got you covered end-to-end.
              </p>
            </div>
            <div className="bg-white/50 p-6 rounded-xl border border-blue-600/20 hover:border-blue-600/40 transition-all group">
              <h4 className="text-lg font-bold text-blue-600 mb-3 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Growth Aligned
              </h4>
              <p className="text-slate-600 text-sm">
                Security strategies designed to scale with your business and support your growth objectives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
