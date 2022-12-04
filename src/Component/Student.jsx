import React from 'react';
import axios from 'axios';

const Student = () => {

    const [students , setStudents]= React.useState([]);
    // const fetchPost = async()=>{
    //     const response = await fetch();
    //     const data = await response.json();
    //     setData(data);
    //     console.log(data)
    // }
    
    const fetchPost = async ()=>{
        try {
            const students = await axios.get("http://localhost:8080/student")
            setStudents(students)
            console.log(students)
            
            
        } catch (error) {
            console.log(error);
            
        }
    }
    React.useState(()=>{fetchPost()},[])
    
    

  return (
    <>
    <h1> student list </h1>
    
    
    </>
  )
}

export default Student