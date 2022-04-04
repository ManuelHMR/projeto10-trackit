import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { Bars } from "react-loader-spinner";

import LogoName from "./LogoName"

const URLPOST = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`;

export default function Register(){
    const navigate = useNavigate();
    const [loading, setloading] = useState(false);
    const [userData, setUserData] = useState({
        email: "",
        name: "",
        image: "",
        password: ""
    })
    function registerUser(){
        setloading(true)
        let promise = axios.post(URLPOST, userData);
        promise.then(() => {
            alert(`Seu perfil foi cadastrado com sucesso!`)
            navigate('/')
        })
        promise.catch(err => {
            setloading(false)
            alert(`${err}

            Confira os dados de registro
            `)})
    }

    return(
        <HomeMain>
            <LogoName></LogoName>
            <input 
                type="email" 
                id="email" 
                placeholder="email"
                value={userData.email}
                onChange={ e => setUserData({...userData, email: e.target.value})}
            ></input>
            <input
                type="password" 
                id="password" 
                placeholder="senha"
                value={userData.password}
                onChange={ e => setUserData({...userData, password: e.target.value})}
            ></input>
            <input
                type="text" 
                id="name" 
                placeholder="nome"
                value={userData.name}
                onChange={ e => setUserData({...userData, name: e.target.value})}
            ></input>
            <input
                type="url" 
                id="image" 
                placeholder="foto"
                value={userData.image}
                onChange={ e => setUserData({...userData, image: e.target.value})}
            ></input>
            <Button
                loading={loading}
                registerUser={registerUser}
            />
            <Link to={"/"}>
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </HomeMain>
    )
}

function Button({registerUser, loading}){
    if(!loading){
        return(
            <button 
                type="submit"
                onClick={() => registerUser()}
            >Cadastrar</button>
        )
    }
    if(loading){
        return(
            <button className="waiting">
                <Bars color="#ffffff" height={20} width={20} />
            </button>
        )
    }
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
    .waiting{
        background-color: #52B6FF;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

