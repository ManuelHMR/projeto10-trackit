import reactDom from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./components/Home";
import Register from "./components/Register";
import Habits from "./components/Habits";
import Today from "./components/Today";
import History from "./components/History";

import "./css/reset.css";
import "./css/style.css";

function App(){

    const [loginData, setloginData] = useState(undefined);

    return(
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home
                    loginData={loginData}
                    setloginData={setloginData}
                />}></Route>
                <Route path={"/cadastro"} element={<Register/>}></Route>
                <Route path={"/habitos"} element={<Habits
                    loginData={loginData}
                    />}></Route>
                <Route path={"/hoje"} element={<Today/>}></Route>
                <Route path={"/historico"} element={<History/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

reactDom.render(<App/>, document.querySelector(".root"));