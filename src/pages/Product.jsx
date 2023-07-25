import { useParams } from "react-router-dom";

function Product(props) {
  const { id } = useParams();
  const item = props.list[id - 1];

  return (
    <div className="h-screen w-screen bg-gradient-to-l from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... px-40 py-10">
      <div className="h-full w-full bg-white rounded-xl flex bg-transparent">
        <div className={`basis-1/3 flex-col bg-transparent`}>
          <div className={`h-1/4 flex-row bg-opacity-5  text-4xl`}>
            <h1>{item.name}</h1>
          </div>

          <div className={`h-2/4 flex-row `}>
            <p>{item.description}</p>
          </div>
          <div className={`h-1/4 flex-row `}>
            <div className={`h-1/4 flex-row `}>
              <p>{`تعداد فروش : ${item.sell_count}`}</p>
            </div>
            <div className={`h-1/4 flex-row `}>
              <p>{`تعداد بازدید : ${item.view}`}</p>
            </div>
            <div className={`h-1/4 flex-row `}>
              <p>{`قیمت: ${item.price}`}</p>
            </div>
          </div>
        </div>
        <div className={`basis-2/3 flex-col `}>
          <div className={`h-full flex-row  `}>
            <img
              src="https://json.xstack.ir//storage/5/conversions/1-product-image.jpg"
              alt=""
              className="h-full w-full rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="basis-1/3 bg-yellow-200"></div>;
    </div>
  );
}

export default Product;
