import { useParams } from "react-router-dom";

function Product(props) {
  const { id } = useParams();
  const item = props.list[id];

  return (
    <div className="h-screen w-screen bg-gradient-to-l from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... px-40 py-10">
      <div className="h-full w-full bg-white rounded flex">
        <div className={`basis-1/3 flex-col bg-black`}></div>
        <div className={`basis-1/3 flex-col `}></div>
        <div className={`basis-1/3 flex-col `}></div>
      </div>
      <div className="basis-1/3 bg-yellow-200"></div>;
    </div>
  );
}

export default Product;
