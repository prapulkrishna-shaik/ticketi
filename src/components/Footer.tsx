
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-16 border-t bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Tickety</h3>
            <p className="text-sm text-gray-600">
              Book tickets for your favorite events, concerts, movies, and more.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-600 hover:text-tickety-purple">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-600 hover:text-tickety-purple">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-tickety-purple">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Help</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-tickety-purple">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-tickety-purple">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-tickety-purple">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-tickety-purple">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Tickety. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
