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
      <section className="continer">
        <div className=" flex flex-wrap m-auto">
          {users.map((user) => (
            <div key={user.id} className=" w-1/4 my-10 mx-10 border   ">
              <h5> ID Non : {user.id}</h5>
              <h5> Name : {user.name}</h5>
              <h5> UserName : {user.username}</h5>
              <h5> Email : {user.email}</h5>
              <h5> WebSite : {user.website}</h5>
              <h5> Phone : {user.phone}</h5>
              <h5> Company Name : {user.company.name}</h5>
              <h5> City Name : {user.address.city}</h5>
              <h5> ZipCode : {user.address.zipcode}</h5>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default IdCard;
