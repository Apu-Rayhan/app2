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
  React.useEffect(()=>{})
  React.useState()

  return (
    <>
      <div className="  border ">
        <table className="border border-collapse w-10/12 m-auto ">
          <tr>
            <th className="border border-collapse w-1/5 ">FirstName</th>
            <th className="border border-collapse w-1/5 ">LastNam</th>
            <th className="border border-collapse w-2/5 ">Email</th>
            <th className="border border-collapse ">Button</th>
          </tr>
          {fname.map((use)=>(
            <tr key={use.id}>
            <td className="border border-collapse text-center">{use.first_name}</td>
            <td className="border border-collapse text-center">{use.last_name}</td>
            <td className="border border-collapse text-center">{use.email}</td>
            <td className="border border-collapse text-center"><button type="button" onClick={()=>{alert("hello")}}>click</button></td>
            </tr>
          ))}
          
        </table>
      </div>
    </>
  );
};

export default ShoppingCard;

// {fname.map((use) => (
//         <div key={use.id} className=" border justify-between bg-slate-800   ">
//         <div className=" ">
//           <img src={use.avatar} alt="not found" className=" rounded-full w-20 m-auto mt-5    " />
//         </div>
//           <h1>First Name : {use.first_name}</h1>
//           <h1>Last Name : {use.last_name}</h1>
//           <h1>Email : {use.email}</h1>
//         </div>
//       ))}
