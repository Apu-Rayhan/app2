import React from 'react';
import { Routes, Route} from 'react-router-dom';

const Router = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<h1>hello </h1>}/>
    <Route path='/about' element={<h1>about </h1>}/>
    <Route path='/project' element={<h1>project </h1>}/>
    
    </Routes>

    
    
    
    </>
  )
}

export default Router