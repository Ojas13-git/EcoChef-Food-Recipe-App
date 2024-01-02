import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-white  px-3 md:px-4 lg:px-5 mb-10 py-4 shadow-md">
      <Link to="/" className="TITLE-TEXT text-xl font-bold text-red-500">
        EcoChef
      </Link>
      <div className="flex gap-3 text-md justify-center items-center text-gray-600">
        <Link to="/about" className="hover:text-black">
          About
        </Link>
        <Link to="/login" className="hover:text-black">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
