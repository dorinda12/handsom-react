import './App.scss';
import { Home, Courses, CourseDetails } from "./imports";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  return (
  <>
    <Router>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/courses" element={<Courses/>}/>
        <Route path ="/course/:id" element={<CourseDetails />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;
