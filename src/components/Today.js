import Header from "./Header";
import Footer from "./Footer";

import axios from "axios";
import { useEffect, useState } from "react";
import styled from 'styled-components'
import dayjs from "dayjs";
dayjs.locale('pt')

export default function Today(){

    const [todayHabits, settodayHabits] = useState();
    let now = dayjs();
    
    let loginData = JSON.parse(localStorage.getItem('login'));
    const URLGET = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`
    const config = {
        headers: {
            "Authorization": `Bearer ${loginData.token}`
        }
    }

    useEffect(()=> {
        let promise  = axios.get(URLGET, config)
        promise.then(response => {
            settodayHabits(response.data)
        })
        promise.catch(err => console.log(err))
    }, [])

    if (todayHabits === undefined || todayHabits.length === 0){return(
        <>
            <Header/>
            <Footer/>
        </>  
    )}
    if(todayHabits.length !== 0 ){
        return(
            <>
                <Header/>
                <Container>
                    <div className='date'>
                        <h1>
                            {now.format('dddd, DD/MM')}
                        </h1>
                        <h2>
                            67% dos hábitos concluídos
                        </h2>
                    </div>
                    <TodayHabitMap/>
                </Container>
                <Footer/>
            </>  
        )
    }    

    function markAsDone(id) {
        let URLPOST = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id
}/check`;
        axios.post(URLPOST, {}, config)
      }

    function TodayHabitMap(){

        return(
            <>
                {todayHabits.map( habit => 
                    <div key={habit.id} className='habit-box'>
                        <div className='checkbox-info'>
                            <h1>{habit.name}</h1>
                            <h2>Sequência atual: {habit.currentSequence}</h2>
                            <h2>Seu recorde: {habit.highestSequence}</h2>
                        </div>
                        <div className={`checkbox ${habit.done ? 'selected' : ''}`}
                            onClick={() => markAsDone(habit.id)}
                        >
                            <ion-icon name="checkmark-outline" />
                         </div>
                    </div>
                )}
            </>
        )
    
    }
}

const Container = styled.div`
    margin-top: 70px;
    width: 100vw;
    height: 100%;
    margin-top: 70px;
    background-color: #E7E7E7;
    .date{
        padding-top: 28px;
        padding-bottom: 28px;
        margin-left: 50%;
        transform: translate(-50%,0);
        width: 340px;
    }
    .date h1{
        font-size: 23px;
        font-weight: 400;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;
        color: #126BA5;
    }
    .date h2{
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
        color: #8FC549;
  } .habit-box{
        background-color: #fff;
        width: 340px;
        height: 94px;
        border-radius: 5px;
        margin-left: 50%;
        transform: translate(-50%,0);
        position: relative;
        margin-bottom: 10px;
    }
    .checkbox{
        width: 69px;
        height: 69px;
        background-color: #EBEBEB;
        border: 1px solid #E7E7E7;
        border-radius: 5px;
        top: 14px;
        right: 14px;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .checkbox ion-icon{
        font-size: 65px;
        color: #fff;
    }
    .checkbox-info{
        position: absolute;
        left: 15px;
        top: 13px;
        display: flex;
        justify-content: center;
        align-items: left;
        flex-direction: column;
    }
    .checkbox-info h1{
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: left;
        color: #666666;
    }
    .checkbox-info h2{
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
    }
    .selected{
        background-color: #8FC549;
    }
`