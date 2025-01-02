import "./App.css";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./layout/Home";
import Projects from "./layout/Projects";
import About from "./layout/About";
import Literatvs from "./layout/Literatvs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/literatvs" element={<Literatvs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
