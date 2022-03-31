import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

import LogoName from "./LogoName";

const URLPOST = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`;

export default function Home({loginData, setloginData}){

const [userData, setUserData] = useState({
    email: '',
    password: ''
})

function login(){
    let promise = axios.post(URLPOST, userData);
    promise.then(response => {
        console.log(response.data);
        setloginData(response.data)
    });
    promise.catch(err => console.log(err));
}

    return(
        <HomeMain>
            <LogoName></LogoName>
            <input 
                type="email" 
                id="email" 
                placeholder="email"
                value={userData.email}
                onChange={e => setUserData({...userData, email: e.target.value})}
            ></input>
            <input
                type="password" 
                id="password" 
                placeholder="senha"
                value={userData.password}
                onChange={e => setUserData({...userData, password: e.target.value})}
            ></input>
            <Link to={"/habitos"}>
                <button 
                    type="submit"
                    onClick={() => login()}
                >Entrar</button>
            </Link>    
            <Link to={"/cadastro"}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </HomeMain>
    )
}
const HomeMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
        width: 303px;
        height: 45px;
        border-radius: 5px;
        border: 1px solid #D5D5D5;
        margin-bottom: 6px;
    }
    input::placeholder{
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
        padding-left: 6px;
    }
    button{
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border-radius: 5px;
        border: none;
        color: #ffffff;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;
    }
    p{
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
        margin-top: 25px;
    }
`
