import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faStepForward } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const TableRow = (props) => {
  const [bgColor, setBgColor] = useState("bg-gray-300");
  const [txtColor, setTxtColor] = useState("text-gray-300");
  const handleMouseEnter = () => {
    setBgColor("bg-red-500");
    setTxtColor("text-white");
  };
  const handleMouseLeave = () => {
    setBgColor("bg-gray-300");
    setTxtColor("text-gray-300");
  };

  return (
    <tr
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`bg-gray-300 text-black `}
    >
      <td className="w-1/5 px-6 py-4 float-left border-b-yellow-200">
        {props.name}
      </td>
      <td className="w-1/5 px-6 py-4 float-left border-b-yellow-200">
        {props.price}
      </td>
      <td className="w-1/5 px-6 py-4 float-left border-b-yellow-200">
        {props.sell_count}
      </td>
      <td className="w-1/5 px-6 py-4 float-left border-b-yellow-200">
        {props.view}
      </td>
      <td className="w-1/5 float-left border-b-yellow-200 p-0 flex">
        <div
          className={`${
            bgColor + " " + txtColor
          }  w-full h-full items-center justify-center text-2xl mt-2`}
        >
          <a
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={props.onRemove}
            className={`${
              bgColor + " " + txtColor
            }  w-full h-full items-center justify-center text-2xl mt-2`}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </a>
        </div>
        <div
          className={`${
            (bgColor === "bg-red-500" ? "bg-green-500" : "bg-gray-300") +
            " " +
            txtColor
          }  w-full h-full items-center justify-center text-2xl mt-2`}
        >
          <Link
            to={`/product/${props.id}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`${
              (bgColor === "bg-red-500" ? "bg-green-500" : "bg-gray-300") +
              " " +
              txtColor
            } w-full h-full items-center justify-center text-2xl mt-2`}
          >
            <FontAwesomeIcon icon={faStepForward} />
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
