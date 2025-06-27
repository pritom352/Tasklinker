import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router";
import logo from "../assets/TaskLinker Logo Design.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 ">
      <div className="max-w-6/7  mx-auto flex flex-col md:flex-row justify-between gap-8 flex-wrap">
        {/* Logo and About */}
        <div className="flex-1 min-w-[250px]">
          <img
            src={logo}
            className="w-[100px] h-[40px] md:w-[150px] md:h-[50px] "
            alt=""
          />
          <p className="text-sm text-gray-400">
            TaskLinker is a freelance task marketplace where you can post or
            pick up tasks. Connect, collaborate, and get work done efficiently.
          </p>
        </div>

        {/* Useful Links */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link className="hover:text-blue-500" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-500" to="/aboutUs">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-500" to="/contact">
                Contact
              </Link>
            </li>

            <li>
              <Link className="hover:text-blue-500" to="/support">
                Support
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-500" to="/browseTasks">
                Browse Tasks
              </Link>
            </li>

            <li>
              <Link className="hover:text-blue-500" to="/dashbord">
                Dashbord
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex flex-col gap-3 text-gray-300">
            <a
              href="https://www.facebook.com/pritom.proshad.2024"
              className="hover:text-blue-400 flex items-center gap-2"
              target="_blank"
            >
              <FaFacebookF size={20} /> Facebook
            </a>
            <a
              href="https://www.linkedin.com/in/pritom-proshad-254330362/"
              className="hover:text-blue-400 flex items-center gap-2"
              target="_blank"
            >
              <FaLinkedinIn size={20} /> LinkedIn
            </a>
            <a
              href="https://github.com/pritom352"
              className="hover:text-blue-400 flex items-center gap-2"
              target="_blank"
            >
              <FaGithub size={20} /> GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} TaskLinker. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
