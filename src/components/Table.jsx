import { useEffect } from "react";

const Table = (props) => {
  //   useEffect(() => {
  //     tags += `<tr>
  //                 <td>Name</td>
  //                 <td>نام</td>
  //                 <td>قیمت</td>
  //                 <td>تغییرات</td>
  //             </tr>`;
  //   }, [props.table]);
  let tags = "";

  return (
    <table>
      <thead>
        <td>نام</td>
        <td>قیمت</td>
        <td>تغییرات</td>
      </thead>
    </table>
  );
};

export default Table;
