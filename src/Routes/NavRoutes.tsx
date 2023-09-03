import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../Components/Login/Login";
import { Home } from "../Components/Home/Home";
const NavRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="" element={<Navigate to="/login" />}></Route>
        </Routes>
    )
}
export { NavRoutes }