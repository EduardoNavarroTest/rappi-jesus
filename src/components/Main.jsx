import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Repartidores from "./pages/Repartidores";
import Servicios from "./pages/Servicios";
import LogIn from "./pages/LogIn";

const Main = () => {


    return (

        <Routes >
            <Route path="/" element={<Home />} />

            <Route path="/repartidores" element={<Repartidores />} />

            <Route path="/servicios" element={<Servicios />} />

            <Route path="/login" element={<LogIn />} />
        </Routes>


    )
}

export default Main;