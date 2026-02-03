import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-8">
        {/* Branding & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span className="font-bold text-3xl">FoodieXpress</span>
            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:text-yellow-200"><FaFacebookF /></a>
              <a href="#" className="hover:text-yellow-200"><FaTwitter /></a>
              <a href="#" className="hover:text-yellow-200"><FaInstagram /></a>
              <a href="#" className="hover:text-yellow-200"><FaLinkedinIn /></a>
              <a href="#" className="hover:text-yellow-200"><FaGithub /></a>
            </div>
          </div>
          <span className="text-sm md:text-right">
            © {new Date().getFullYear()} FoodieXpress. All rights reserved.
          </span>
        </div>

        {/* Why Choose Us */}
        <div className="grid md:grid-cols-2 gap-6 text-sm text-white/90">
          <div>
            <h3 className="text-lg font-semibold mb-2">Why Choose Us?</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Fresh and hygienic meals delivered fast</li>
              <li>Wide range of cuisines and categories</li>
              <li>Responsive mobile-friendly design</li>
              <li>Easy-to-use interface with cart and profile</li>
              <li>Secure login and user-friendly navigation</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>Email: support@foodiexpress.com</p>
            <p>Phone: +91-9876543210</p>
            <p>Address: 123, Food Street, Flavor City, India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
