import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import axios from "axios";
// const client = axios.create({baseURL:"http://localhost:8080/student"});

const Student = () => {
  const [students, setStudents] = React.useState([]);
  React.useEffect(()=>{

    getAllStudent();
   },[]);

    const getAllStudent = ()=>{
      //! Get HTTP Request in React's Functional Component With Fetch API
    fetch("http://localhost:8080/student").then((result)=>{
      result.json().then((resp)=>{
        console.log("result",resp)
        setStudents(resp)
      })
    })
    };

    // const deleteUser=(id)=>{
    //   fetch(`http://localhost:8080/student/${id}`,{method:'DELETE'}).then((result)=>{
    //     result.json().then((resp)=>{
    //       console.log(resp)
    //     })
    //   })

    //     var newstudent = students.filter((item) => {
    //     return item._id !== id;
    //     });
    //     setStudents(newstudent);
    // }
    
    // const getAllStudent = async () => {
    //   // * Create Funtoin get request using axios with React hooks
  //   try {
  //     const students = await client.get();
  //     console.log(students.data);
  //     setStudents(students.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  const DeleteBtn = async (id) => {
    //* Create Delete Button
    await axios.delete(`http://localhost:8080/student/${id}`);
    // *  Delete Then Relode The pages
    var newstudent = students.filter((item) => {
      return item._id !== id;
    });
    setStudents(newstudent);
  };

  console.log(students[0])

  return (
    <>
      <div className="border w-2/5 overflow-y-auto bg-slate-600   ">
        <table className="border border-black w-full ">
          <tr>
            <th className="border border-collapse  ">Name</th>
            <th className="border border-collapse  ">Age</th>
            <th className="border border-collapse  ">Role</th>
          </tr>
          {students.map((item, index) => {
            return (
              <tr key={index}>
                <td className="border border-collapse  text-center">
                  {item.name}
                </td>
                <td className="border border-collapse  text-center">
                  {item.age}
                </td>
                <td className="border border-collapse  text-center">
                  {item.role}
                </td>
                <td className="border border-collapse  text-center">
                  <button className=" " type="button">
                    <AiFillEdit />
                  </button>
                  <button
                    className=""
                    type="button"
                    onClick={() => {
                      DeleteBtn(item._id);
                      alert(item.name)
                      // deleteUser(item._id)
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

      <div className=" overflow-y-auto">
        {students.map((item, index)=>{
          return(
            <div key={index} className=" flex w-96 h-28  my-3 rounded-md bg-slate-500 ">
              <img src="" alt="kdh" srcset="" className=" border border-black w-20 h-20 rounded-full mt-3 ml-3" />
              <div className=" w-2/5 h-20 ml-1 mt-3 ">
              <h1> Name : {item.name} </h1>
              <h1> Age : {item.age} </h1>
              <h1> Role : {item.role} </h1>
              </div>
              <div className="  w-24 h-20 mt-3">
              <button className=" bg-red-600 w-20 rounded-lg my-2" type="button">Edit<AiFillEdit /></button>
              <button className=" bg-red-600 w-20 rounded-lg my-2" type="button" onClick={() => {
                      DeleteBtn(item._id);
                      alert(item.name)
                      // deleteUser(item._id)
                    }} >Delete<AiFillDelete /></button>
              
              </div>
            </div>
          )
        })}

      </div>
    </>
  );
};

export default Student;
