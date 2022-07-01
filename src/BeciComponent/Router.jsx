import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={Home()} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<h1>project </h1>} />
        <Route path="/login" element={<h1>login and Singin Pages </h1>} />
        <Route path="/*" element={<h1> Pages Not Fount </h1>} />
      </Routes>
    </>
  );
};

export default Router;
