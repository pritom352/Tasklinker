import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {
  const handleForm = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Message Send successfully",
      icon: "success",
      draggable: true,
    });
  };
  return (
    <div className="bg-base-200  my-20 rounded-2xl">
      {/* Hero Section */}
      <div className="text-center px-4 sm:px-6 lg:px-16 py-10 sm:py-14 lg:py-16 bg-gradient-to-r from-[#ca99eb] to-[#89f0e3] text-white rounded-2xl">
        <Fade cascade triggerOnce>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            Get in Touch
          </h1>
          <p className="text-sm sm:text-base lg:text-lg max-w-xl mx-auto">
            Have questions or need help? We'd love to hear from you.
          </p>
        </Fade>
      </div>

      {/* Main Contact Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-14 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Contact Form */}
        <Slide direction="left" triggerOnce>
          <form
            onSubmit={handleForm}
            className=" bg-base-200 shadow-md rounded-xl p-5 sm:p-6 space-y-5 w-full"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-600">
              Send Us a Message
            </h2>
            <div>
              <label className="block text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                required
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Your Email</label>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                rows="4"
                required
                placeholder="Write your message..."
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded transition"
            >
              Send Message
            </button>
          </form>
        </Slide>

        {/* Contact Info */}
        <Slide direction="right" triggerOnce>
          <div className="space-y-5 text-sm sm:text-base text-gray-700 w-full">
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-600">
              Contact Information
            </h2>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-xl text-purple-500 mt-1" />
              <p>
                TaskLinker HQ
                <br />
                Dhaka, Bangladesh
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-xl text-purple-500 mt-1" />
              <p>+880 1234-567890</p>
            </div>
            <div className="flex items-start gap-3">
              <FaEnvelope className="text-xl text-purple-500 mt-1" />
              <p>support@tasklinker.com</p>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Contact;
