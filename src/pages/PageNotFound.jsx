import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="h-screen w-screen flex justify-center">
      <div className="w-full h-full z-50 bg-black text-white flex-col">
        <div className="basis-1/3">
          <h1 className=" ">Error 404 </h1>
        </div>
        <div className="basis-1/3">
          <p>Page Not Found</p>
        </div>
        <div className="basis-1/3">
          <Link to="/" className="text-8xl block">
            <FontAwesomeIcon icon={faCircleLeft} />
            {"    "}Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
