import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiChevronsUp } from "react-icons/fi";

const Footer = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This makes the scrolling smooth
    });
  }

  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:items-center">
          <div className="text-center md:text-left">
            <h2 className="text-white font-bold text-xl">
              BOOK MOVERS NEAR YOU
            </h2>
            <p className="mt-2 text-2xl text-white">(123) 456-7890</p>
          </div>

          <div className="flex flex-col items-center gap-2 ">
            <FiChevronsUp
              size={25}
              className="animate-bounce cursor-pointer hover:text-white duration-100"
              onClick={scrollToTop}
            />{" "}
            Go to Top
          </div>

          {/* Social Icons */}
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        {/* <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 text-center md:text-left">
          <div>
            <h3 className="text-white font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Mover Login
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold">Partners</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Become a Partner
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Affiliate Program
                </a>
              </li>
            </ul>
          </div>
        </div> */}

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center md:flex md:justify-between">
          <p>© 2024 Movers. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="hover:underline px-2">
              Terms
            </a>
            <a href="#" className="hover:underline px-2">
              Privacy
            </a>
            <a href="#" className="hover:underline px-2">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
