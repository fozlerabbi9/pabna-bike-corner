import logo from './logo.svg';
import './App.css';
import Header from './ComponentFile/HeaderFile/Header';
import { Routes, Route } from "react-router-dom";
import Home from './ComponentFile/HomeFile/Home';
import Bloag from './ComponentFile/BloagFIle/Bloag';
import Registation from './ComponentFile/RegistationFIle/Registation';
import Login from './ComponentFile/LoginFIle/Login';
import DynamicPage from './ComponentFile/HomeFile/DynamicPage';


function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Bloag></Bloag>}></Route>
        <Route path="/registation" element={<Registation></Registation>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='/dynamicPage/:dataId' element={<DynamicPage></DynamicPage>}></Route>

      </Routes>
    </div>
  );
}

export default App;
