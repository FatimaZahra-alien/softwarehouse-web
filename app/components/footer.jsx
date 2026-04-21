"use client";

import Link from "next/link";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Row: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Column 1: Customer Service */}
          <div className="text-sm space-y-2">
            <h3 className="font-semibold text-white">Customer Service</h3>
            <p>Tel: 8660597655</p>
            <p>Tel: 9986035545</p>
            <p>Tel: 080-49707643</p>

            <h3 className="font-semibold text-white mt-4">Email</h3>
            <p>contact@softwareshouse.com</p>
          </div>

          {/* Column 2: Locations */}
          <div className="text-sm space-y-2">
            <h3 className="font-semibold text-white">Locations</h3>
            <p>Location 1: #4,12 A main road, BTM Layout Stage 1, Bangalore 560029</p>
            <p>Location 2: #10,100 Feed Ring Road, Puneeth Rajkumar Road, BTM Layout Stage 2, Bangalore 560076, Next to VI Store</p>
            <p>Location 3: #12, BTM Layout Ring Road, next to water tank, BTM Layout Stage 2, Bangalore 560076</p>
          </div>

          {/* Column 3: Social Media */}
          <div className="flex flex-col items-start md:items-end space-y-4">
            <h3 className="font-semibold text-white">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" aria-label="LinkedIn" className="hover:text-white transition">
                <FaLinkedinIn size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-white transition">
                <FaFacebookF size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white transition">
                <FaTwitter size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white transition">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Row: Legal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} SoftwareHouse. All rights reserved.
          </p>

          <div className="flex gap-6 justify-center md:justify-start">
            <Link href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

