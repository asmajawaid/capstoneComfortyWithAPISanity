import React from "react";
import { TiLocation } from "react-icons/ti";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { HiOutlineTrophy } from "react-icons/hi2";
import { LuBadgeAlert } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";

export default function Contact() {
  return (
    <>
       <div className="w-full px-4 sm:px-6 lg:px-8">
            {/* HEADING */}
            <div className="flex flex-col justify-center items-center text-center my-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black mb-4">
                Get In Touch With Us
              </h1>
              <p className="max-w-2xl text-sm sm:text-base lg:text-lg text-gray-700">
                For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
              </p>
            </div>
      
            {/* CONTACT INFORMATION AND FORM */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* CONTACT INFORMATION */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <TiLocation className="text-[#029FAE] w-8 h-8" />
                  <div>
                    <h2 className="text-xl font-medium">Address</h2>
                    <p className="text-sm text-gray-600">
                      236 5th SE Avenue, New York NY10000, United States
                    </p>
                  </div>
                </div>
      
                <div className="flex items-start space-x-4">
                  <FaPhone className="text-[#029FAE] w-6 h-6" />
                  <div>
                    <h2 className="text-xl font-medium">Phone</h2>
                    <p className="text-sm text-gray-600">
                      Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
                    </p>
                  </div>
                </div>
      
                <div className="flex items-start space-x-4">
                  <MdOutlineAccessTimeFilled className="text-[#029FAE] w-6 h-6" />
                  <div>
                    <h2 className="text-xl font-medium">Working Time</h2>
                    <p className="text-sm text-gray-600">
                      Monday-Friday: 9:00 - 22:00 <br /> Saturday-Sunday: 9:00 - 21:00
                    </p>
                  </div>
                </div>
              </div>
      
              {/* FORM */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:border-[#029FAE] focus:ring focus:ring-[#029FAE] focus:ring-opacity-50"
                      placeholder="Enter your name"
                    />
                  </div>
      
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:border-[#029FAE] focus:ring focus:ring-[#029FAE] focus:ring-opacity-50"
                      placeholder="Enter your email"
                    />
                  </div>
      
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:border-[#029FAE] focus:ring focus:ring-[#029FAE] focus:ring-opacity-50"
                      placeholder="Enter subject"
                    />
                  </div>
      
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:border-[#029FAE] focus:ring focus:ring-[#029FAE] focus:ring-opacity-50"
                      placeholder="Write your message"
                    ></textarea>
                  </div>
      
                  <button
                    type="submit"
                    className="w-full bg-[#029FAE] text-white py-2 px-4 rounded-md hover:bg-[#007580] focus:outline-none focus:ring focus:ring-[#007580] focus:ring-opacity-50"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
      
            {/* INFO BOXES */}
            <div className="bg-[#F4F4F4] text-black mt-12 py-12 px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="flex items-center space-x-4">
                  <HiOutlineTrophy className="w-12 h-12" />
                  <div>
                    <h3 className="text-lg font-semibold">High Quality</h3>
                    <p className="text-sm">Crafted from top materials</p>
                  </div>
                </div>
      
                <div className="flex items-center space-x-4">
                  <LuBadgeAlert className="w-12 h-12" />
                  <div>
                    <h3 className="text-lg font-semibold">Warranty Protection</h3>
                    <p className="text-sm">Over 2 years</p>
                  </div>
                </div>
      
                <div className="flex items-center space-x-4">
                  <BiSupport className="w-12 h-12" />
                  <div>
                    <h3 className="text-lg font-semibold">24/7 Support</h3>
                    <p className="text-sm">Dedicated support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  );
}