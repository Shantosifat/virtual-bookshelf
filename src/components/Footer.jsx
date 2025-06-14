import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p>
            Email:{" "}
            <a
              href="mailto:support@skilllink.com"
              className="text-blue-400 hover:underline"
            >
              support@skilllink.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="mobile:+8801633012103"
              className="text-blue-400 hover:underline"
            >
              01633012103
            </a>
          </p>
          <p>Address: 123 Remote Blvd, Freelancer City</p>
        </div>

        {/* Terms */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a href="/terms" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="mailto:support@skilllink.com"
              className="hover:text-blue-400"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 text-center text-xs text-gray-400 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} SkillLink. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
