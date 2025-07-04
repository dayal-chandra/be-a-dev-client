import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-base-200">
      <footer className="footer footer-horizontal footer-center max-w-7xl mx-auto  text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:scale-150 hover:text-orange-400"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:scale-150 hover:text-orange-400"
            >
              <FaYoutube size={30} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:scale-150 hover:text-orange-400"
            >
              <FaFacebookF size={30} />
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Be-A-Dev
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
