import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { FaUserTie, FaClock, FaHandshake, FaTasks } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-base-200 rounded-2xl min-h-screen my-20">
      {/* Hero Section */}
      <div className="text-center px-4 sm:px-10 lg:px-24 py-16  rounded-2xl sm:py-20 bg-gradient-to-r from-[#ca99eb] to-[#89f0e3] text-white">
        <Fade cascade triggerOnce>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Welcome to TaskLinker
          </h1>
          <p className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
            Your trusted freelance task marketplace — find work or get work
            done, faster.
          </p>
        </Fade>
      </div>

      {/* Mission & What We Offer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-10 lg:px-24 py-12 sm:py-16">
        <div className="grid md:grid-cols-2 gap-10 sm:gap-12 items-center">
          <Slide direction="left" triggerOnce>
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                We aim to bridge the gap between everyday individuals and
                talented freelancers. Our platform empowers people to post small
                tasks and get them done efficiently while giving freelancers the
                chance to earn by doing what they love.
              </p>
            </div>
          </Slide>

          <Slide direction="right" triggerOnce>
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">
                What We Offer
              </h2>
              <ul className="text-gray-700 space-y-3 text-base sm:text-lg">
                <li>🔹 Fast and secure task posting</li>
                <li>🔹 Easy bidding process</li>
                <li>🔹 Protected user accounts (Firebase)</li>
                <li>🔹 Responsive, user-friendly interface</li>
                <li>🔹 Real-time updates and task tracking</li>
              </ul>
            </div>
          </Slide>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-base-200 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-10 lg:px-24 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-10 sm:mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
            <Fade cascade damping={0.2} triggerOnce>
              {[
                {
                  icon: (
                    <FaUserTie className="text-4xl text-purple-500 mb-4 mx-auto" />
                  ),
                  title: "Skilled Freelancers",
                  desc: "Find experts in writing, design, marketing, and tech.",
                },
                {
                  icon: (
                    <FaClock className="text-4xl text-purple-500 mb-4 mx-auto" />
                  ),
                  title: "On-Time Delivery",
                  desc: "Tasks are prioritized based on deadlines.",
                },
                {
                  icon: (
                    <FaHandshake className="text-4xl text-purple-500 mb-4 mx-auto" />
                  ),
                  title: "Fair Bidding",
                  desc: "Freelancers can bid within their skill and budget.",
                },
                {
                  icon: (
                    <FaTasks className="text-4xl text-purple-500 mb-4 mx-auto" />
                  ),
                  title: "Simple Task Management",
                  desc: "Easy-to-use dashboard to manage posted and active tasks.",
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="bg-base-200 h-full flex flex-col items-center justify-between p-6 rounded-xl shadow hover:shadow-lg transition text-center"
                >
                  {card.icon}
                  <h3 className="font-semibold text-lg sm:text-xl mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    {card.desc}
                  </p>
                </div>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
