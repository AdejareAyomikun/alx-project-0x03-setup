import Link from "next/link";
import Button from "../common/Button";

const Header: React.FC = () => {
  return (
    <header className="fixed bg-white shadow-md w-full">
      <div className="flex justify-between items-center mx-auto px-4 md:px-8 py-6 container">
        <Link
          href="/"
          className="font-bold text-gray-800 text-3xl md:text-5xl tracking-tight"
        >
          Splash App
        </Link>

        {/* Button Group */}
        <div className="flex gap-4">
          <Button buttonLabel="Sign In" buttonBackgroundColor="red" />
          <Button buttonLabel="Sign Up" buttonBackgroundColor="blue" />
        </div>
      </div>
    </header>
  );
};

export default Header;
