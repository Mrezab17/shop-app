import Table from "../components/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products(props) {
  const { id } = useParams();
  const updateSubList = () => {
    return props.list.slice((parseInt(id) - 1) * 9, (parseInt(id) - 1) * 9 + 9);
  };
  const [subList, setSublist] = useState(updateSubList());

  useEffect(() => {
    setSublist(updateSubList());
  }, [id, props.list]);
  const nextPageUrl = () => {
    if (parseInt(id) === Math.floor(props.list.length / 9 + 1))
      return `/products/${parseInt(id)}`;
    else return `/products/${parseInt(id) + 1}`;
  };
  const prevPageUrl = () => {
    if (parseInt(id) === 1) return "/products/1";
    else return `/products/${parseInt(id) - 1}`;
  };
  return (
    <div className="h-screen w-screen bg-gradient-to-l from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... flex items-center justify-center">
      <div className="h-3/4 w-8/12 bg-white rounded ">
        <Table list={subList} page={id} onRemove={props.onRemove} />
        <div className="flex flex-row justify-center bg-green-700 w-full h-10">
          <Link
            to={nextPageUrl()}
            className="h-full w-2/6 text-3xl text-white hover:text-pink-600 "
          >
            <FontAwesomeIcon icon={faCircleRight} />
          </Link>
          <Link
            to={prevPageUrl()}
            className="h-full w-2/6 text-3xl text-white hover:text-pink-600"
          >
            <FontAwesomeIcon icon={faCircleLeft} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Products;
