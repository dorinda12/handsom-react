import './App.scss';
import React from 'react'
import ReactDOM from 'react-dom'

import { Home, Courses, CourseDetails } from "./imports";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
function App() {
  return (
  <>
      <ScrollToTop/>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/courses" element={<Courses/>}/>
        <Route path ="/course/:id" element={<CourseDetails />} />
      </Routes>
  </>
  );
}

export default App;
