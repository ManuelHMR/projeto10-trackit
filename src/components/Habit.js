import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

import trash from "./../assets/trash.svg"

export default function Habit({id, name, days}){
    const daysSymbol = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [data, setData] = useState() 
    let loginData = JSON.parse(localStorage.getItem('login'));
    const config = {
        headers: {
            "Authorization": `Bearer ${loginData.token}`
        }
    }

    function removeHabit(){
        let userAnswer = window.confirm(`Tem certeza de que quer deletar?`)
        if(userAnswer){
            let URLDELETE = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
            let promise = axios.delete(URLDELETE, config)
            promise.then(response=>setData(response.data))
            .catch(err=> alert(err))
        }
            
    }

    return (
        <Container>
            <div className="box">
                <h3>{name}</h3>
                <div className="week-days">
                    <DaysMap
                        days={days}
                        daysSymbol={daysSymbol}
                    />    
                </div>
                <img 
                    src={trash} 
                    alt={`lata de lixo`}
                    onClick={()=> removeHabit()}
                />    
            </div>
        </Container>
    )
}

function DaysMap({days, daysSymbol}){
    return(
        <>
            {daysSymbol.map((day, index) => 
                {return(
                    <p key={index}className={days.includes(index)? `selected` : `unselected`}>
                        {day}
                    </p>
                )}
            )}
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .box{
        width: 340px;
        height: 91px;
        background: #FFFFFF;
        border-radius: 5px;
        margin-top: 10px;
        position: relative;
    }
    h3{
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        position: absolute;
        top: 0px;
        left: 15px;
    }
    .selected {
        color: white;
        background: #CFCFCF;
    }
    .unselected{
        color: #DBDBDB;
        background-color: #ffffff;
    }
    .week-days{
        display: flex;
        position: absolute;
        top: 30px;
        left: 14px;

    }
    .week-days p{
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        width: 30px;
        height: 30px;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        margin-right: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img{
        position: absolute;
        top: 11px;
        right: 10px;
    }
`