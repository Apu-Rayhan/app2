import React from "react";

const AddStudent = () => {
  const [state, setState] = React.useState({
    name: "",
    age: "",
    role: "",
  });

  const handleChange = (e) => {
    // setState({name: e.target.value})
    const value = e.target.value;
    setState({ ...state, [e.target.name]: value });
    console.log(value);
  };

  return (
    <div className="border w-96 p-3 inline-block ">
      <form className="    ">
        <label for="name" className=" text-lg ">Name:</label>
        <input className=" bg-transparent focus:outline-none border-b-2 border-black ml-1   "
          type="text"
          name="name"
          id="name"
          value={state.name}
          onChange={handleChange}
          placeholder=" Enter Your Name"
          required=""
        />
        <br />
        <br />
        <label for="age" className=" text-lg ">Age:</label>
        <input className=" bg-transparent focus:outline-none border-b-2 border-black ml-1   "
          type="text"
          name="age"
          value={state.age}
          onChange={handleChange}
          placeholder=" Enter Your Age"
          required=""
          id="age"
        />
        <br />
        <br />
        <label for="" className=" text-lg "> Role </label>
        <input className=" bg-transparent focus:outline-none border-b-2 border-black ml-1   "
          type="number"
          name="role"
          id=""
          value={state.role}
          onChange={handleChange}
          placeholder=" Enter Your Role"
          required=""
        />
        <br />
        <br />
        <input className=" bg-green-400 w-28 rounded" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddStudent;
