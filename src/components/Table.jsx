import { useEffect } from "react";
import TableRow from "./TableRow";

const Table = (props) => {
  const renderHeader = () => {
    return (
      <tr>
        <th className="w-1/5 px-6 py-4 float-left border-b-yellow-200">
          نام مغازه
        </th>
        <th className="w-1/5 px-6 py-4 float-left border-b-yellow-200">قیمت</th>
        <th className="w-1/5 px-6 py-4 float-left border-b-yellow-200">
          تعداد فروش
        </th>
        <th className="w-1/5 px-6 py-4 float-left border-b-yellow-200">
          تعداد بازدید
        </th>
      </tr>
    );
  };
  const renderBody = () => {
    return (
      <>
        {props.list.map((item) => {
          return (
            <TableRow
              key={Math.random()}
              name={item.name}
              sell_count={item.sell_count}
              price={item.price}
              view={item.view}
              onRemove={() => {
                props.onRemove(item.id);
              }}
            />
          );
        })}
      </>
    );
  };
  return (
    <table className="min-w-full text-center text-sm font-light">
      {renderHeader()}
      {renderBody()}
    </table>
  );
};

export default Table;
