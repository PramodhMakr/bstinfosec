import { ChevronDown, ChevronUp, Shield, Lock, Eye, Users } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does a penetration test take?",
      answer: "Typically 3-5 business days for small to medium networks. For large enterprises, it can take 1-2 weeks. We provide a detailed timeline after initial assessment and can work around your business hours to minimize disruption.",
      category: "VAPT Services",
      icon: Eye
    },
    {
      question: "What cybersecurity regulations apply to my business?",
      answer: "Depends on your industry and location. Common regulations include GDPR (if you handle EU data), PCI DSS (payment processing), HIPAA (healthcare), and various state-specific data protection laws. We offer compliance assessments to identify applicable regulations.",
      category: "Compliance",
      icon: Shield
    },
    {
      question: "How much should a small business spend on cybersecurity?",
      answer: "Industry standard is 3-10% of IT budget. For SMBs, our services start at ₹15,000/month for 24/7 monitoring. A comprehensive security program typically ranges from ₹2-5 lakh annually depending on business size and complexity.",
      category: "Pricing",
      icon: Lock
    },
    {
      question: "What happens if you find vulnerabilities during testing?",
      answer: "We provide a detailed report with severity ratings, remediation steps, and timeline estimates. Critical issues are reported immediately. We offer remediation assistance and can re-test to verify fixes. Your data and findings remain completely confidential.",
      category: "VAPT Services",
      icon: Eye
    },
    {
      question: "Do you provide ongoing security monitoring?",
      answer: "Yes, our 24/7 SOC service includes real-time threat monitoring, incident response, and regular security assessments. We use advanced SIEM tools, threat intelligence feeds, and provide monthly security reports with actionable insights.",
      category: "SOC Services",
      icon: Shield
    },
    {
      question: "How quickly can you respond to a security incident?",
      answer: "Our SOC team responds to critical incidents within 15 minutes. For clients with our managed services, we provide immediate incident response, containment, and forensic analysis. Non-clients can purchase emergency incident response services.",
      category: "Incident Response",
      icon: Users
    },
    {
      question: "What industries do you specialize in?",
      answer: "We work with SMBs across healthcare, finance, e-commerce, manufacturing, and professional services. Our team has experience with industry-specific compliance requirements like HIPAA, PCI DSS, and sector-specific security frameworks.",
      category: "Industries",
      icon: Shield
    },
    {
      question: "Do you offer employee security training?",
      answer: "Yes, we provide comprehensive security awareness training including phishing simulation, password hygiene, data handling procedures, and incident reporting. Training can be delivered online or in-person, with regular refreshers and updates.",
      category: "Training",
      icon: Users
    },
    {
      question: "What makes you different from other cybersecurity firms?",
      answer: "We specialize in SMB needs with transparent pricing, fast response times (8 min average vs 45 min industry), and 95% client retention. Our approach is practical, business-focused, and we guarantee implementation within 48 hours.",
      category: "About Us",
      icon: Shield
    },
    {
      question: "Do you provide cybersecurity insurance assistance?",
      answer: "Yes, we help clients assess security posture for insurance applications, implement required controls, and provide documentation for cyber insurance providers. We can also assist with incident response coordination during claims.",
      category: "Insurance",
      icon: Lock
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-pattern-overlay">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600/5 via-transparent to-blue-700/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to know about our cybersecurity services
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              return (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm rounded-xl border border-blue-600/20 hover:border-blue-600/40 transition-all overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-blue-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <Icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">
                          {faq.question}
                        </h3>
                        <span className="text-sm text-blue-600">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <ChevronUp className="h-5 w-5 text-slate-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-slate-500" />
                      )}
                    </div>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-4">
                      <div className="pl-9 text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Still have questions?
              </h3>
              <p className="text-slate-600 mb-6">
                Our security experts are here to help. Get personalized advice for your business.
              </p>
              <a
                href="mailto:info@bstinfosec.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
              >
                Ask a Security Expert
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
