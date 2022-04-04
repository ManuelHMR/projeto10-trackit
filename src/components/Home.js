import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useState, useContext } from "react";
import { Bars } from "react-loader-spinner";
import UserDataContext from './../providers/UserDataContext';

import LogoName from "./LogoName";

const URLPOST = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`;

export default function Home(){

const [userData, setUserData] = useState({
    email: '',
    password: ''
})
const [loading, setloading] = useState(false);

const { setUserContext } = useContext(UserDataContext);
const navigate = useNavigate();

function login(){
    let promise = axios.post(URLPOST, userData);
    setloading(true)
    promise.then(response => {
        localStorage.setItem('login', JSON.stringify(response.data))
        setUserContext({ name: response.data.name, image: response.data.image })
        navigate('/habitos')
    });
    promise.catch(err => {
        setloading(false)
        alert(`${err}
        
        Confira os dados de acesso`)
    });
}
    
    return(
        <Container>
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
            <Button
                login={login}
                loading={loading}
            />
            <Link to={"/cadastro"}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Container>
    )
}

function Button({login, loading}){
    if(!loading){
        return(
            <button 
                type="submit"
                onClick={() => login()}
            >Entrar</button>
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


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;

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
