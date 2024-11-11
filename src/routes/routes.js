import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { Help } from "../pages/Help";
import { Register } from "../pages/Register";
import { NoPage } from "../pages/NoPage";
import { Client } from '../pages/Client/Client';
import { PrivateRoutes } from '.';

export const AppRoutes = () =>{
    return (
    <BrowserRouter>
        <Routes>
        <Route index element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Help" element={<Help/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Client" element={<PrivateRoutes/>}>
        <Route path="/Client" element={<Client/>}/>
         </Route>
        <Route path="*" element={<NoPage/>}/>
        </Routes>
    </BrowserRouter>
    )
};