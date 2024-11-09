import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Help from "./pages/Help";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import Client from './pages/Client';
import './style.css';


function App() {
  return (
  <>
   <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Help" element={<Help/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Client" element={<Client/>}/>
      <Route path="*" element={<NoPage/>}/>
    </Routes>
   </BrowserRouter>
  </>
  );
}

export default App;
