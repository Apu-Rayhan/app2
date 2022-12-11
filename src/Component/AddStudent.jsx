import React from "react";
import axios from "axios";


const AddStudent = () => {
  const [state, setState] = React.useState({
    name: "",
    age: "",
    role: "",
  });

  const [status,setStatus] = React.useState();

  const handleChange = (e) => {
    // setState({name: e.target.value})
    const value = e.target.value;
    setState({ ...state, [e.target.name]: value });
    console.log(value);
  };

  const onFormSubmit = async (e)=>{
    // e.preventDefault()
    window.location.reload(false)
    try {
      await axios.post("http://localhost:8080/student",state);
      setStatus(true);
    } catch (error) {
      console.log("Something is Wrong");
    }
  }

  if (status) {
    return <AddStudent/>
    
  }

  return (
    <div className=" bg-slate-600 w-96 p-3 inline-block m-5 ">
      <form className="    ">
        <label for="name" className=" text-lg ">Name:</label>
        <input className=" bg-transparent focus:outline-none border-b-2 border-black ml-1   "
          type="text"
          name="name"
          id="name"
          value={state.name}
          onChange={e=>handleChange(e)}
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
          onChange={e=>handleChange(e)}
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
          onChange={e=>handleChange(e)}
          placeholder=" Enter Your Role"
          required=""
        />
        <br />
        <br />
        <input className=" bg-green-400 w-28 rounded" type="submit" value="Submit" onClick={e=>onFormSubmit(e)} />
      </form>
    </div>
  );
};

export default AddStudent;
