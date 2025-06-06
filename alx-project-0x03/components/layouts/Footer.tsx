import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-10 text-white">
      <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mx-auto container">
        <div>
          <h3 className="mb-4 font-bold text-xl">Splash App</h3>
          <p className="mb-4 text-gray-400">
            Your one-stop platform for all your needs. Connecting people,
            creating opportunities.
          </p>
          <p className="text-gray-400">
            © 2024 Splash App. All rights reserved.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-lg">Useful Links</h4>
          <ul>
            <li className="mb-2">
              <a
                href="/about"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/services"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Services
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/contact"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-lg">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
