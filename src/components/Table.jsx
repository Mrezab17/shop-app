import { useEffect } from "react";

const Table = (props) => {
  const renderHeader = () => {
    return (
      <tr>
        <th className="w-1/5 px-6 py-4 float-left border-b-yellow-200">نام</th>
        <th className="w-1/5 px-6 py-4 float-left border-b-yellow-200">قیمت</th>
        <th className="w-1/5 px-6 py-4 float-left border-b-yellow-200">دسته</th>
        <th className="w-1/5 px-6 py-4 float-left border-b-yellow-200">
          امتیاز
        </th>
      </tr>
    );
  };
  const renderBody = () => {};
  return (
    <table className="min-w-full text-center text-sm font-light">
      {renderHeader()}
      {renderBody()}
    </table>
  );
};

export default Table;
