import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router";
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-12 pb-6 px-4 md:px-20 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & Name */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo} // replace with your logo path
              alt="logo"
              className="h-10 w-10"
            />
            <h2 className="text-xl font-semibold text-white">Libree</h2>
          </div>
          <p className="mt-3 text-sm">
            A digital home for your books. Discover, track, and share your reading journey.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Contact</h3>
          <p className="text-sm">Email: support@libree.com</p>
          <p className="text-sm">Phone: +880 1234 567890</p>
          <p className="text-sm">Address: Dhaka, Bangladesh</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Follow Us</h3>
          <div className="flex gap-4 text-lg">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF className="hover:text-white" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-white" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-white" />
            </a>
            <a href="mailto:support@libree.com">
              <FaEnvelope className="hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Libree. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
