import React, { useState, useEffect } from "react";

const IdCard = () => {
  const [users, setUsers] = useState([]);
  const API_URL = "https://jsonplaceholder.typicode.com/users";

  // The separate async function
  const getUsers = async () => {
    const response = await fetch(API_URL);
    const userdata = await response.json();
    setUsers(userdata);
  };

  useEffect(() => {
    getUsers();
  }, []);

  console.log(users[0]);

  return (
    <>
      <section className="continer  ">
        <div className=" flex flex-wrap  ">
          {users.map((user) => (
            <div key={user.id} className=" w-1/4 my-5 mx-5 rounded-2xl  p-10 bg-slate-800  ">

            <h5 className=" flex justify-center items-center pl-10"> Company Name <br/>{user.company.name}</h5>
            <img src="https://www.ansarvdpcollege.edu.bd/images/student_img/190050039.png" alt="sempol" srcset="" className=" w-24 inline my-5 ml-16" />

              <h5> ID Non : {user.id}</h5>
              <h5> Name : {user.name}</h5>
              <h5> UserName : {user.username}</h5>
              <h5> Email : {user.email}</h5>
              <h5> WebSite : {user.website}</h5>
              <h5> Phone : {user.phone}</h5>
              <p> City Name : {user.address.city} <span>ZipCode : {user.address.zipcode}</span></p>
              
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default IdCard;
