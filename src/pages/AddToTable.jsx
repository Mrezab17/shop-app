import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";

import Form from "../components/Form";

function AddToTable(props) {
  return (
    <div className="h-screen w-screen bg-gradient-to-l from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... flex items-center justify-center">
      <div className="h-3/4 w-8/12 bg-white rounded ">
        <Form />
      </div>
    </div>
  );
}

export default AddToTable;
