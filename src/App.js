import './App.scss';
import React from 'react';
import { Home, Courses, CourseDetails } from "./imports";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login.Js';
function App() {
  return (
  <>
      <ScrollToTop/>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/courses" element={<Courses/>}/>
        <Route path ="/course/:id" element={<CourseDetails />} />
        <Route path ="/registe" element={<Register/>} />
        <Route path ="/sign-in" element={<Login/>}/>
      </Routes>
  </>
  );
}

export default App;
