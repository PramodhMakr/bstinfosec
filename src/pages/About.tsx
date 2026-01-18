import { Target, Award, Users, Shield, TrendingUp, CheckCircle, Award as AwardIcon, ExternalLink, Mail, Linkedin } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    window.scrollTo(0, 0);
    navigate('/contact');
  };

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
    <div className="min-h-screen bg-soft-slate">
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
              <div className="bg-white/60 p-8 rounded-xl border-2 border-blue-600/20 hover:border-blue-600/40 transition-all hover:shadow-lg hover:shadow-blue-600/10 flex items-center justify-center">
                <a
                  href="https://www.linkedin.com/company/bst-infosec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <Linkedin className="h-12 w-12 mb-2" />
                  <span className="text-sm font-semibold">Visit LinkedIn</span>
                </a>
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
              <div className="relative h-96 overflow-hidden">
                <OptimizedImage
                  src="/assets/04.jpg"
                  alt="Office Environment"
                  className="absolute inset-0"
                />
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
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/60 p-6 rounded-lg border border-blue-600/10 hover:border-blue-600/30 transition-all hover:shadow-lg hover:shadow-blue-600/10">
                <value.icon className="h-12 w-12 text-blue-600 mb-4 mx-auto icon-hover-float" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-blue-700/10 border-y border-blue-600/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose BST InfoSec?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The advantages of partnering with our security experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Team',
                description: 'Certified security professionals with years of experience in cybersecurity',
                icon: Users
              },
              {
                title: 'Customized Solutions',
                description: 'Tailored security strategies that fit your specific business needs',
                icon: Target
              },
              {
                title: '24/7 Support',
                description: 'Round-the-clock security monitoring and incident response services',
                icon: Shield
              },
              {
                title: 'Visit Us',
                description: 'Schedule a consultation with our security experts',
                icon: TrendingUp
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/60 p-6 rounded-lg border border-blue-600/10 hover:border-blue-600/30 transition-all hover:shadow-lg hover:shadow-blue-600/10">
                <feature.icon className="h-12 w-12 text-blue-600 mb-4 mx-auto icon-hover-float" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Secure Your Business?</h2>
          <p className="text-slate-600 mb-8 text-lg">
            Let's discuss how we can protect your digital infrastructure with our comprehensive security solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@bstinfosec.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-blue-600/20"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get Free Consultation
            </a>
            <button
              onClick={handleContactClick}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 font-semibold rounded-lg hover:bg-slate-50 border border-blue-600/30 transition-all"
            >
              <ExternalLink className="mr-2 h-5 w-5 text-blue-600" />
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
