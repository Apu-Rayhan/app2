import React from "react";

const Input = () => {
    const[state,setState]= React.useState({
        name:"",
        age:"",
        role:""

    })

    const handleChange = (e)=>{
        // setState({name: e.target.value})
        const value = e.target.value;
        setState({...state,[e.target.name]:value})
        console.log(value)

    }




  return (
    <div className="border">
      <form >
        <label for="fname">Name:</label>
        <input type="text" name="name" value={state.name} onChange={handleChange} id="name"  />
        <br />
        <br />
        <label for="lname">Age:</label>
        <input type="text" name="age" value={state.age} onChange={handleChange} id="age"  />
        <br />
        <br />
        <label for=""> Role </label>
        <input type="number" name="role" id="" value={state.role} onChange={handleChange} />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Input;
