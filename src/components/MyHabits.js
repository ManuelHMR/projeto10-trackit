import styled from "styled-components"

import { useState } from "react"
import axios from "axios"
import Loading from "./Loading"

const URLGET = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`

export default function MyHabits({token}){

    const [habitsData, setHabitsData] = useState();

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    
    let promise  = axios.get(URLGET, config)
    promise.then(response => {
        console.log(response.data)
        setHabitsData(response.data);
    })
    
    promise.catch(err => console.log(err))

    if(habitsData === null){
        return (
            <Loading/>
        )
    }
    if(habitsData === undefined){
        return (
            <Container>
                <h3>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h3>
            </Container>    
        )
    }
    else{
        return(
            <Container>
                <h2>MyHabits</h2>
            </Container>
        )}
}

const Container = styled.div`
    margin: 20px 0;

    h3{
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
`