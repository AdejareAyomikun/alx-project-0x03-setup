import Link from "next/link";
import { FaHome } from "react-icons/fa";

const Custom404 = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen text-white">
      {/* Main Heading */}
      <h1 className="mb-4 font-bold text-6xl">Oops! 😱</h1>
      <p className="mb-8 text-2xl">
        We can't seem to find the page you're looking for.
      </p>

      {/* Funny Message */}
      <p className="mb-8 max-w-md text-lg text-center">
        Maybe it was abducted by aliens 👽, or it just took a wrong turn into
        the Internet wilderness! Either way, it's not here.
      </p>

      {/* Button to navigate back */}
      <Link
        href="/"
        className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold text-white transition duration-300"
      >
        <FaHome size={20} />
        <span>Go Back Home</span>
      </Link>
    </div>
  );
};

export default Custom404;
