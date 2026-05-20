import React from "react";
import assets from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-slate-50 dark:bg-gray-900 pt-16 sm:pt-20 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10">
        
        <div>
          <img src={assets.logo} className="w-32 mb-4" alt="" />

          <p className="text-sm text-gray-600 dark:text-gray-300 leading-6">
            We build modern digital experiences that help brands grow faster
            with strategy, design, and development.
          </p>
        </div>

        
        <div className="flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-300">
          <p className="font-semibold text-gray-900 dark:text-white mb-2">
            Quick Links
          </p>

          <a href="#" className="hover:text-primary">
            Home
          </a>
          <a href="#services" className="hover:text-primary">
            Services
          </a>
          <a href="#our-work" className="hover:text-primary">
            Our Work
          </a>
          <a href="#contact-us" className="hover:text-primary">
            Contact
          </a>
        </div>

        
        <div className="flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-300">
          <p className="font-semibold text-gray-900 dark:text-white mb-2">
            Contact
          </p>

          <p>Email: support@yourbrand.com</p>
          <p>Phone: +91 98765 43210</p>

          <div className="flex gap-3 mt-2">
            <img
              src={assets.facebook_icon}
              className="w-5 cursor-pointer"
              alt=""
            />
            <img
              src={assets.twitter_icon}
              className="w-5 cursor-pointer"
              alt=""
            />
            <img
              src={assets.instagram_icon}
              className="w-5 cursor-pointer"
              alt=""
            />
          </div>
        </div>
      </div>

      
      <div className="border-t border-gray-300 dark:border-gray-700 py-5 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
