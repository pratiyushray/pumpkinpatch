import React from "react";
import { Link } from "react-router-dom";
import "../Components/Footer.css";

function Footer() {
  function scrollToTop() {
    if (
      document.body.scrollTop !== 0 ||
      document.documentElement.scrollTop !== 0
    ) {
      window.scrollBy(0, -30);
      requestAnimationFrame(scrollToTop);
    }
  }
  return (
    <div className="mt-8">
      <footer className="bg-white dark:bg-[#5b3ca9]">
        <div
          className="footer text-[#ffffff] text-center pt-2 pb-2"
          onClick={scrollToTop}
        >
          <button className="btn__back text-sm" onClick={scrollToTop}>
            Back to top
          </button>
        </div>
        <hr />
        <div className="grid grid-cols-2 gap-8 px-6 py-4 md:grid-cols-4">
          <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
              Resources
            </h2>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-2">
                <Link
                  to="/"
                  className="hover:underline text-sm"
                  onClick={scrollToTop}
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/about"
                  className="hover:underline text-sm"
                  onClick={scrollToTop}
                >
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/curriculum"
                  className="hover:underline text-sm"
                  onClick={scrollToTop}
                >
                  Curriculum
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/careers"
                  className="hover:underline text-sm"
                  onClick={scrollToTop}
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
              Help center
            </h2>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-2">
                <a
                  href="https://www.facebook.com/profile.php?id=61550834611528&mibextid=D4KYlr"
                  className="hover:underline text-sm"
                  target="__blank"
                  onClick={scrollToTop}
                >
                  Instagram
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.facebook.com/profile.php?id=61550834611528&mibextid=D4KYlr"
                  className="hover:underline text-sm"
                  target="__blank"
                  onClick={scrollToTop}
                >
                  Facebook
                </a>
              </li>
              <li className="mb-2">
                <Link
                  to="/contact"
                  className="hover:underline text-sm"
                  onClick={scrollToTop}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
              Legal
            </h2>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-2">
                <a href="/" className="hover:underline text-sm">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
              LOCATE US
            </h2>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-2">
                <iframe
                  id="gmapLocate"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14042.695394543367!2d77.33647839913519!3d28.3687086113397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc9baaaaaaab%3A0xa8016a6d75334ade!2sPumpkin%20Patch%20Kindergarten!5e0!3m2!1sen!2sin!4v1693906060632!5m2!1sen!2sin"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-2 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-xs text-gray-500 dark:text-gray-300 sm:text-center">
            © 2023 <a href="/">Pumpkin Patch™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
            <a
              href="https://www.facebook.com/profile.php?id=61550834611528&mibextid=D4KYlr"
              target="__blank"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="/"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Instagram page</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
