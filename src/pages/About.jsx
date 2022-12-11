import React from "react";
import ShoppingCard from "../Component/ShoppingCard";
import Student from "../Component/Student";
import AddStudent from "../Component/AddStudent";

const About = () => {
  return (
    <>
      <div className=" flex border border-black w-full h-96 mt-5 ">
      <AddStudent />
      <Student />
      </div>
      <ShoppingCard />
    </>
  );
};

export default About;
