import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ErrorPage = (props) => {
  const errorContentHandler = () => {
    if (props.error == "404") return "Page Not Found";
    return "I Don't Know";
  };
  return (
    <div className="h-screen w-screen flex justify-center">
      <div className="w-full h-full z-50 bg-black text-white flex-col px-48 py-24 space-y-14">
        <div className="w-full text-6xl flex justify-center">
          <h1 className=" ">Error {props.error} </h1>
        </div>
        <div className="w-full text-6xl flex justify-center">
          <p>{errorContentHandler()}</p>
        </div>
        <div className="w-full text-6xl flex justify-center">
          <Link to="/" className="text-6xl block">
            <FontAwesomeIcon icon={faCircleLeft} />
            {"    "}Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
