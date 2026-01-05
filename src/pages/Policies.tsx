import { Shield, FileText, Lock } from 'lucide-react';

export default function Policies() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600/5 via-transparent to-blue-700/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Legal <span className="text-blue-600">Policies</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transparency, trust, and compliance are at the core of our business
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Privacy Policy */}
          <div className="bg-white/60 p-10 rounded-xl border-2 border-blue-600/20">
            <div className="flex items-center space-x-3 mb-6">
              <Lock className="h-8 w-8 text-blue-600 icon-hover" />
              <h2 className="text-3xl font-bold text-slate-900">Privacy Policy</h2>
            </div>

            <div className="space-y-6 text-slate-600">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">1. Information We Collect</h3>
                <p className="leading-relaxed">
                  BST Infosec Technologies collects information necessary to provide cybersecurity services and maintain
                  client relationships. This includes personal information (name, email, company), technical data about your
                  systems during assessments, and communication logs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">2. How We Use Your Information</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>To deliver security assessments and consulting services</li>
                  <li>To maintain communication regarding assessments and findings</li>
                  <li>To improve our service quality and security practices</li>
                  <li>To comply with legal obligations and contractual requirements</li>
                  <li>To send important security updates and notifications</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">3. Data Protection & Security</h3>
                <p className="leading-relaxed">
                  We implement industry-standard security measures to protect your data. All assessment findings, reports,
                  and sensitive information are stored securely and accessed only by authorized personnel. Data is encrypted
                  in transit and at rest using current security standards.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">4. Data Retention</h3>
                <p className="leading-relaxed">
                  Assessment reports and client data are retained for the duration of our business relationship plus 7 years
                  for compliance purposes. You may request data deletion at any time, subject to legal retention requirements.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">5. Third-Party Disclosure</h3>
                <p className="leading-relaxed">
                  We do not sell, rent, or share your personal information with third parties. Information may be shared only
                  with your explicit consent or when required by law. Subprocessors are vetted for security compliance.
                </p>
              </div>
            </div>
          </div>

          {/* Terms of Service */}
          <div className="bg-white/60 p-10 rounded-xl border-2 border-blue-600/20">
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="h-8 w-8 text-blue-600 icon-hover" />
              <h2 className="text-3xl font-bold text-slate-900">Terms of Service</h2>
            </div>

            <div className="space-y-6 text-slate-600">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">1. Service Scope</h3>
                <p className="leading-relaxed">
                  BST Infosec provides cybersecurity assessments, penetration testing, consulting, and related services as
                  agreed in individual contracts. Our services are provided on an "as-is" basis. We make reasonable efforts to
                  identify vulnerabilities but cannot guarantee discovery of all security issues.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">2. Client Responsibilities</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Provide accurate information about systems and infrastructure to be assessed</li>
                  <li>Obtain proper authorization before engaging our services</li>
                  <li>Notify us of any restrictions or protected systems before assessment begins</li>
                  <li>Implement recommended security improvements in a timely manner</li>
                  <li>Maintain confidentiality of assessment findings and reports</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">3. Assessment Procedures</h3>
                <p className="leading-relaxed">
                  All assessments follow industry-standard methodologies. We conduct tests only within agreed scope and
                  timeframes. Testing will be performed in a manner to minimize business impact. Emergency procedures will be
                  followed if issues arise during testing.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">4. Reporting & Findings</h3>
                <p className="leading-relaxed">
                  Detailed reports will be provided detailing findings, risk ratings, and remediation recommendations. Reports
                  are confidential and intended for authorized client personnel only. Findings should be treated as sensitive
                  security information.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">5. Limitation of Liability</h3>
                <p className="leading-relaxed">
                  BST Infosec's liability is limited to the amount paid for services. We are not responsible for losses
                  resulting from security breaches that occur despite our recommendations or for issues arising from failure
                  to implement recommended security measures.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">6. Payment Terms</h3>
                <p className="leading-relaxed">
                  Payment is due according to the agreed contract terms. Late payments may result in service suspension.
                  Refunds are provided only if services cannot be completed as agreed.
                </p>
              </div>
            </div>
          </div>

          {/* Non-Disclosure Agreement */}
          <div className="bg-white/60 p-10 rounded-xl border-2 border-blue-600/20">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="h-8 w-8 text-blue-600 icon-hover" />
              <h2 className="text-3xl font-bold text-slate-900">Non-Disclosure Agreement (NDA)</h2>
            </div>

            <div className="space-y-6 text-slate-600">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">1. Confidential Information</h3>
                <p className="leading-relaxed">
                  During our engagement, BST Infosec receives confidential information about client systems, architectures,
                  security measures, and business operations. All such information is treated as strictly confidential and will
                  not be disclosed without written authorization.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">2. Protection Obligations</h3>
                <p className="leading-relaxed">
                  BST Infosec commits to:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Restrict access to confidential information to authorized personnel only</li>
                  <li>Use industry-standard security measures to protect information</li>
                  <li>Return or destroy all client materials upon engagement completion</li>
                  <li>Maintain confidentiality for a period of 5 years after engagement ends</li>
                  <li>Not use client information for purposes other than the agreed assessment</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">3. Exclusions</h3>
                <p className="leading-relaxed">
                  Information that is public domain, already known to us, or required to be disclosed by law is not covered by
                  this NDA. We may disclose information if required by law, court order, or regulatory authority, and we will
                  attempt to provide prior notice when legally permissible.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">4. Employee & Contractor Obligations</h3>
                <p className="leading-relaxed">
                  All BST Infosec employees and contractors sign confidentiality agreements and are trained on information
                  protection. We ensure compliance with all confidentiality obligations through regular audits and security
                  procedures.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">5. Breach Notification</h3>
                <p className="leading-relaxed">
                  In the unlikely event of unauthorized disclosure of confidential information, we will notify the client
                  immediately and take all necessary steps to remediate the situation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">6. Legal Recourse</h3>
                <p className="leading-relaxed">
                  Violation of this NDA may result in legal action. The client agrees to these terms by engaging BST Infosec
                  for services.
                </p>
              </div>
            </div>
          </div>

          {/* Compliance Statement */}
          <div className="bg-gradient-to-br from-blue-600/10 to-blue-700/10 p-10 rounded-xl border-2 border-blue-600/20">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Compliance Statement</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              BST Infosec Technologies commits to operating in compliance with all applicable laws, regulations, and industry
              standards. This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li>GDPR compliance for handling European customer data</li>
              <li>CCPA compliance for California resident information</li>
              <li>ISO 27001 information security management principles</li>
              <li>OWASP security testing standards and guidelines</li>
              <li>NIST Cybersecurity Framework alignment</li>
              <li>SOC 2 security and confidentiality principles</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-4">
              Clients are required to comply with all applicable laws when engaging our services and implementing security
              recommendations.
            </p>
          </div>

          {/* Contact for Legal Matters */}
          <div className="bg-white/60 p-10 rounded-xl border-2 border-blue-600/20 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Questions About Our Policies?</h3>
            <p className="text-slate-600 mb-6">
              For inquiries regarding privacy, terms, or NDA matters, please contact us at:
            </p>
            <a
              href="mailto:info@bstinfosec.com"
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
            >
              info@bstinfosec.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
