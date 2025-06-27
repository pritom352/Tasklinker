import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import {
  FaQuestionCircle,
  FaLifeRing,
  FaComments,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import { Link } from "react-router";

const Support = () => {
  return (
    <div className="bgbase-200 min-h-screen my-20 rounded-2xl shadow-2xl">
      {/* Hero Section */}
      <div className="text-center px-4 sm:px-6 lg:px-16 py-12 sm:py-16 bg-gradient-to-r from-[#ca99eb] to-[#89f0e3] text-white rounded-2xl">
        <Fade cascade triggerOnce>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            Need Support?
          </h1>
          <p className="text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            We're here to help you with anything related to TaskLinker.
          </p>
        </Fade>
      </div>

      {/* Support Options */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Slide direction="left" triggerOnce>
            <div className="bg-base-200 shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
              <FaQuestionCircle className="text-4xl text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-600">FAQs</h3>
              <p className="text-gray-700 text-sm">
                Find answers to common questions about posting tasks, bidding,
                and payments.
              </p>
            </div>
          </Slide>

          <Slide direction="up" triggerOnce>
            <div className="bg-base-200 shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
              <FaLifeRing className="text-4xl text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                Help Center
              </h3>
              <p className="text-gray-700 text-sm">
                Explore step-by-step guides and tutorials for using TaskLinker
                features.
              </p>
            </div>
          </Slide>

          <Slide direction="right" triggerOnce>
            <div className="bg-base-200 shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
              <FaComments className="text-4xl text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                Live Chat
              </h3>
              <p className="text-gray-700 text-sm">
                Need quick help? Our support team is available via chat during
                business hours.
              </p>
            </div>
          </Slide>
        </div>

        {/* Support Contact Box */}
        <Fade delay={200} triggerOnce>
          <div className="mt-16 text-center bg-base-200  p-8 rounded-xl">
            <FaEnvelopeOpenText className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Still need help?
            </h3>
            <p className="text-gray-700 text-sm mb-4">
              Email us at{" "}
              <span className="font-medium text-blue-500">
                pritomproshad@gmail.com
              </span>{" "}
              and we’ll get back to you as soon as possible.
            </p>
            <Link to={"/contact"}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition">
                Contact Support
              </button>
            </Link>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Support;
