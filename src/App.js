import "./App.css";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./layout/Home";
import Projects from "./layout/Projects";
import About from "./layout/About";
import LearningLab from "./layout/LearningLab";
import AmigoSecretoDasCores from "./layout/AmigoSecretoDasCores";
import MyFriendIsSingle from "./layout/MyFriendIsSingle";
import Modulos from "./layout/Modulos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/myfriendissingle" element={<MyFriendIsSingle/>}/>
        <Route path="/learning-lab" element={<LearningLab/>}/>
        <Route path="/amigosecretodascores" element={<AmigoSecretoDasCores/>}/>
        <Route path="/modulos" element={<Modulos/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
