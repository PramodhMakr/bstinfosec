import { Link } from 'react-router-dom';
import { Shield, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-8 w-8 text-cyan-400" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">BST Infosec</span>
                <span className="text-xs text-cyan-400">Technologies</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Leading cybersecurity services provider, dedicated to protecting your digital assets
              and ensuring robust security infrastructure for enterprises worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/policies" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Policies & Legal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Emails</h3>
            <ul className="space-y-3">
              <li>
                <p className="text-gray-500 text-xs mb-1">General Inquiries:</p>
                <a
                  href="mailto:info@bstinfosec.com"
                  className="flex items-center text-gray-400 hover:text-cyan-400 text-sm transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  info@bstinfosec.com
                </a>
              </li>
              <li>
                <p className="text-gray-500 text-xs mb-1">Sales & Business:</p>
                <a
                  href="mailto:sales@bstinfosec.com"
                  className="flex items-center text-gray-400 hover:text-cyan-400 text-sm transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  sales@bstinfosec.com
                </a>
              </li>
              <li>
                <p className="text-gray-500 text-xs mb-1">Support & Incident:</p>
                <a
                  href="mailto:support@bstinfosec.com"
                  className="flex items-center text-gray-400 hover:text-cyan-400 text-sm transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  support@bstinfosec.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} BST Infosec Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
