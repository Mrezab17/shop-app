import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <div className="bg-emerald-500 fixed top-0 left-0 z-10 w-32 h-screen transition-transform -translate-x-full sm:translate-x-0">
      <div className="w-full h-1/6   items-center justify-center flex">
        <Link
          to="/"
          className="text-white text-5xl hover:text-6xl hover:text-gray-600"
        >
          <FontAwesomeIcon icon={faHome} className="" />
        </Link>
      </div>
      <div className="w-full h-1/6   items-center justify-center flex">
        <Link
          to="/"
          className="text-white text-5xl hover:text-6xl hover:text-gray-600"
        >
          <FontAwesomeIcon icon={faPlus} className="" />
        </Link>
      </div>
      <div className="w-full h-1/6   items-center justify-center flex">
        <Link
          to="/cart"
          className="text-white text-5xl hover:text-6xl hover:text-gray-600"
        >
          <FontAwesomeIcon icon={faShoppingCart} className="" />
        </Link>
      </div>
      <div className="w-full h-1/6   items-center justify-center flex">
        <Link
          to="/paying"
          className="text-white text-5xl hover:text-6xl hover:text-gray-600"
        >
          <FontAwesomeIcon icon={faCreditCard} className="" />
        </Link>
      </div>
      <div className="w-full h-1/6   items-center justify-center flex">
        <Link
          to="/mail"
          className="text-white text-5xl hover:text-6xl hover:text-gray-600"
        >
          <FontAwesomeIcon icon={faEnvelope} className="" />
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
