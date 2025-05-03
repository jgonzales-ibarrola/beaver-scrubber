import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white border-t border-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold mb-4">Beaver Scrubber Cleaning Co.</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Providing professional cleaning and power washing services in Lucena City, Quezon Province, Philippines.
            </p>
            <div className="flex gap-6">
              <Link href="https://www.facebook.com/profile.php?id=61576119441266" target="_blank" className="text-gray-400 hover:text-blue-600 transition duration-300">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://www.instagram.com/beaverscrubbercleaningco/" target="_blank" className="text-gray-400 hover:text-blue-600 transition duration-300">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-blue-600 transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#booking" className="text-gray-400 hover:text-blue-600 transition duration-300">
                  Book Now
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-blue-600 transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-blue-600 transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-blue-600 transition duration-300">
                  Professional Cleaning
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-blue-600 transition duration-300">
                  Power Washing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-blue-600 transition duration-300">
                  Kitchen Cleaning
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-blue-600 transition duration-300">
                  Bedroom Cleaning
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Beaver Scrubber Cleaning Co. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {/* <Link href="#" className="text-sm text-gray-400 hover:text-blue-600 transition duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-blue-600 transition duration-300">
              Terms of Service
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
