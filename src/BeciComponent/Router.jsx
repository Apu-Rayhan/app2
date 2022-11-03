import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Project from "../pages/Project";
import Login from "../Component/Login";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={Home()} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/*" element={<h1> Pages Not Fount </h1>} />
      </Routes>
    </>
  );
};

export default Router;
