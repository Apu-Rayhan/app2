import React from "react";
// import {useState,useEffect} from 'react';
import axios from "axios";

const Student = () => {
  const [students, setStudents] = React.useState([]);
  // * Create Funtoin  Fetch Api
  const getAllStudent = async () => {
    try {
      const students = await axios.get("http://localhost:8080/student");
      console.log(students.data);
      setStudents(students.data);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    // async function getAllStudent(){
    //   try {
    //     const students = await axios.get("http://localhost:8080/student")
    //     console.log(students.data)
    //     setStudents(students.data)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
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
      <div className=" border p-2 m-3 ">
        <h1 className=" text-center text-xl"> student list </h1>

        <table className="border border-collapse w-10/12 m-auto ">
          <tr>
            <th className="border border-collapse w-1/5 ">Name</th>
            <th className="border border-collapse w-1/5 ">Age</th>
            <th className="border border-collapse w-1/5 ">Role</th>
            <th className="border border-collapse w-1/5 ">ID</th>
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
                  <button
                    className="bg-red-900 text-black p-1 m-1 text-lg"
                    type="button"
                    onClick={() => {
                      DeleteBtn(stu._id);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-red-900 text-black p-1 m-1 text-lg"
                    type="button"
                  >
                    Edit
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
