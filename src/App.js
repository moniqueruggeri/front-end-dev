import "./App.css";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./layout/Home";
import Projects from "./layout/Projects";
import About from "./layout/About";
import LearningLab from "./components/Portfolio/LearningLabPra";
import AmigoSecretoDasCores from "./layout/AmigoSecretoDasCores";
import MyFriendIsSingle from "./layout/MyFriendIsSingle";
import Modulos from "./layout/Modulos";
import Portfolio from "./layout/Portfolio";
import Acknowledgements from "./components/Portfolio/Acknowledgements";
import Reflection from "./components/Portfolio/Reflection";
import Introduction from "./components/Portfolio/Introduction";
import AboutMePra from "./components/Portfolio/AboutMePra";
import LearningLabPra from "./components/Portfolio/LearningLabPra";
import LearningBalance from "./components/Portfolio/LearningBalance";
import FuturePlans from "./components/Portfolio/FuturePlans";

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
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/ack" element={<Acknowledgements/>}/>
        <Route path="/reflection" element={<Reflection/>}/>
        <Route path="/intro" element={<Introduction/>} />
        <Route path="/aboutmepra" element={<AboutMePra/>}/>
        <Route path="/learning-lab-pra" element={<LearningLabPra/>}/>
        <Route path="/balance" element={<LearningBalance/>}/>
        <Route path="/future" element={<FuturePlans/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
