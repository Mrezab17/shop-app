import Table from "../components/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";

function Products(props) {
  return (
    <div className="h-screen w-screen bg-gradient-to-l from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... flex items-center justify-center">
      <div className="h-3/4 w-8/12 bg-white rounded ">
        <Table list={props.list} />
        <div className="flex flex-row justify-center bg-green-700 w-full h-10">
          <button className="h-full w-1/6 text-3xl text-white hover:text-pink-600 ">
            <FontAwesomeIcon icon={faCircleRight} />
          </button>
          <button className="h-full w-1/6 text-3xl text-white hover:text-pink-600">
            <FontAwesomeIcon icon={faCircleLeft} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
