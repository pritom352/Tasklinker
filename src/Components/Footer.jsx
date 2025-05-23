import React from "react";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 flex-wrap">
        <div className="flex-1 min-w-[250px]">
          <h2 className="text-3xl font-bold italic mb-4">
            <span className="text-blue-500">Task</span>Linker
          </h2>
          <p className="text-sm text-gray-400">
            Discover your city's vibe. Find local events, reserve seats, and
            enjoy life together.
          </p>
        </div>

        <div className="flex-1 min-w-[250px]">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold mb-3">Useful Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/terms" className="hover:text-blue-400">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-blue-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-400">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-1 min-w-[250px]">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <FaEnvelope /> pritomproshad@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt /> +8801758665178
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt /> Naogaon, BD
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-1 min-w-[250px]">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex gap-6">
              <a
                href="https://facebook.com"
                className="hover:text-blue-400 flex items-center gap-2"
              >
                <FaFacebookF size={20} /> Facebook
              </a>
              <a
                href="https://github.com"
                className="hover:text-blue-400 flex items-center gap-2"
              >
                <FaGithub size={20} /> GitHub
              </a>
              <a
                href="https://twitter.com"
                className="hover:text-blue-400 flex items-center gap-2"
              >
                <FaSquareXTwitter size={20} /> Twitter
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        VibeVenue. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
