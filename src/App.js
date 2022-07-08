import logo from './logo.svg';
import './App.css';
import Header from './ComponentFile/HeaderFile/Header';
import { Routes, Route } from "react-router-dom";
import Home from './ComponentFile/HomeFile/Home';
import Bloag from './ComponentFile/BloagFIle/Bloag';
import Registation from './ComponentFile/RegistationFIle/Registation';
import Login from './ComponentFile/LoginFIle/Login';
import DynamicPage from './ComponentFile/HomeFile/DynamicPage';
import ManageData from './ComponentFile/ManageDataFile/ManageData';
import Additem from './ComponentFile/AddItemFile/Additem';
import Requireauth from './ComponentFile/RequireAuthFile/Requireauth';
import MyItem from './ComponentFile/MyitemFile/MyItem';
import Footer from './ComponentFile/FooterFile/Footer';
import 'aos/dist/aos.css';


function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Bloag></Bloag>}></Route>

        <Route path="/manageData" element={
          <Requireauth>
            <ManageData></ManageData>
          </Requireauth>
        }></Route>

        <Route path="/addItem" element={
          <Requireauth>
            <Additem></Additem>
          </Requireauth>
        }></Route>

        <Route path='/dynamicPage/:dataId' element={
          <Requireauth>
            <DynamicPage></DynamicPage>
          </Requireauth>
        }></Route>

        <Route path='/myItem' element={
          <Requireauth>
            <MyItem></MyItem>
          </Requireauth>
        }></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/registation" element={<Registation></Registation>}></Route>

      </Routes>

      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
