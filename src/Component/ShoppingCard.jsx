import React from "react";
import FakerData from "../BeciComponent/FakerData";

const ShoppingCard = () => {
  const fakeData = FakerData();
  console.log(fakeData);
  // console.log(fakeData.employees);

  const avata = fakeData.employees[0].avatar;
  // console.log(avata)

  return (
    <>
      <img src={avata} alt="" srcset="" />
    </>
  );
};

export default ShoppingCard;
