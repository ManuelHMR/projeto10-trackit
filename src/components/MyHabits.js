import styled from "styled-components"

import { useState, useEffect } from "react"
import axios from "axios"
import Habit from "./Habit";

const URLGET = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`

export default function MyHabits(){

    const [habitsData, setHabitsData] = useState();

    useEffect(()=> {
        let loginData = JSON.parse(localStorage.getItem('login'));
        const config = {
            headers: {
                "Authorization": `Bearer ${loginData.token}`
            }
        }
        let promise  = axios.get(URLGET, config)
        promise.then(response => {
            setHabitsData(response.data);
        })
        promise.catch(err => console.log(err))
    }, [])
       
    if(habitsData === undefined || habitsData.length === 0){
        return (
            <Container>
                <h3>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h3>
            </Container>    
        )
    }
    else{
        return(
            <Container>
                {habitsData.map((habit, index)=> 
                    <Habit 
                        key={habit.id} 
                        id={habit.id}
                        name={habit.name}
                        days={habit.days}
                        />)}
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