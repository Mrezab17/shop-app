import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function PageNotFound(props) {
  return (
    <div className="h-screen w-screen z-40 bg-gradient-to-l from-red-600 from-10% via-pink-500 via-30% to-purple-700 to-90% ... flex items-center justify-center ">
      <div className="w-1/2 h-1/2 z-50 text-8xl space-y-5 bg-white flex-col">
        <h1 className="">404 Error</h1>
        <h1 className="">Page Not Found</h1>
        <Link to="/">
          <FontAwesomeIcon icon={faCircleLeft} className="" />
          {"    "}Return Home
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
