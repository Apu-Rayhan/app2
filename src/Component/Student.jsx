import React from "react";
// import AddStudent from "./AddStudent";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
// import {useState,useEffect} from 'react';
import axios from "axios";

const Student = () => {
  const [students, setStudents] = React.useState([]);

  React.useEffect(() => {
    // * Create Funtoin  Fetch Api get request using axios with React hooks
    const getAllStudent = async () => {
      try {
        const students = await axios.get("http://localhost:8080/student");
        console.log(students.data);
        setStudents(students.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllStudent();
  }, []);
  //* Create Delete Button
  const DeleteBtn = async (id) => {
    await axios.delete(`http://localhost:8080/student/${id}`);
    // *  Delete Then Relode The pages
    var newstudent = students.filter((item) => {
      return item._id !== id;
    });
    setStudents(newstudent);
  };

  return (
    <>
      <div className="border w-3/5 overflow-y-auto bg-slate-600   ">
        <table className="border border-black w-full ">
          <tr>
            <th className="border border-collapse  ">Name</th>
            <th className="border border-collapse  ">Age</th>
            <th className="border border-collapse  ">Role</th>
          </tr>
          {students.map((stu, i) => {
            return (
              <tr key={i}>
                <td className="border border-collapse  text-center">
                  {stu.name}
                </td>
                <td className="border border-collapse  text-center">
                  {stu.age}
                </td>
                <td className="border border-collapse  text-center">
                  {stu.role}
                </td>
                <td className="border border-collapse  text-center">
                  <button className=" " type="button">
                    <AiFillEdit />
                  </button>
                  <button
                    className=""
                    type="button"
                    onClick={() => {
                      DeleteBtn(stu._id);
                    }}
                  >
                    <AiFillDelete />
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Student;
