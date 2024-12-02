import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { Help } from "../pages/Help";
import { Register } from "../pages/Register";
import { NoPage } from "../pages/NoPage";
import { CollectionPoints } from '../pages/CollectionPoints';
import { Profile } from '../pages/Profile';
import { Enterprise } from '../pages/Enterprise';
import { PrivateRouteEnterprise ,PrivateRouteCliente} from '.';

export const AppRoutes = () =>{

    return (
    
    <BrowserRouter>
        <Routes>
        <Route index element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Help" element={<Help/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Profile" element={<PrivateRouteCliente> <Profile/> </PrivateRouteCliente>} />
        <Route path="/CollectionPoints" element={<PrivateRouteCliente> <CollectionPoints/> </PrivateRouteCliente>} />
        <Route path="/Enterprise" element={<PrivateRouteEnterprise> <Enterprise/> </PrivateRouteEnterprise>} />
        <Route path="*" element={<NoPage/>}/>
        </Routes>
    </BrowserRouter>
    
    )
};