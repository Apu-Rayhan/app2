import React from "react";
import FakerData from "../BeciComponent/FakerData";

const ShoppingCard = () => {
  const fakeData = FakerData();
  const fname = fakeData.users;
  console.log(fname);
  // console.log(fakeData.employees);

  // const avata = fakeData.employees[0].avatar;
  // console.log(avata)
  // <img src={avata} alt="" srcset="" />

  return (
    <>
      {fname.map((use) => (
        <div key={use.id} className="use">
          <img src={use.avatar} alt="not found" />
          <h1>{use.first_name}</h1>
          <h1>{use.last_name}</h1>
        </div>
      ))}
    </>
  );
};

export default ShoppingCard;
