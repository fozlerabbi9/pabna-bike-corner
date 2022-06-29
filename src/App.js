import logo from './logo.svg';
import './App.css';
import Header from './ComponentFile/HeaderFile/Header';
import { Routes, Route } from "react-router-dom";
import Home from './ComponentFile/HomeFile/Home';
import Bloag from './ComponentFile/BloagFIle/Bloag';


function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Bloag></Bloag>}></Route>

      </Routes>
    </div>
  );
}

export default App;
