import Header from "./Header"
import MyHabits from "./MyHabits"
import Footer from "./Footer"
import { Bars } from "react-loader-spinner"

import styled from "styled-components"
import { useState } from "react"
import UserDataContext from './../providers/UserDataContext';
import axios from "axios";

export default function Habits(){
    let loginData = JSON.parse(localStorage.getItem('login'));
    const URLPOST = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`;
    const config = {
        headers: {
            "Authorization": `Bearer ${loginData.token}`
        }
    }
    

    const weekdaysDefault = [{
        day: `D`,
        isSelected: false
    },{
        day: `S`,
        isSelected: false
    },{
        day: `T`,
        isSelected: false
    },{
        day: `Q`,
        isSelected: false
    },{
        day: `Q`,
        isSelected: false
    },{
        day: `S`,
        isSelected: false
    },{
        day: `S`,
        isSelected: false
    }]
    const [habitName, sethabitName] = useState('')
    const [habitButton, setHabitButton] = useState(false);
    const [weekDays, setWeekDays] = useState(weekdaysDefault);
    const [loading, setLoading] = useState(false);

    return(
        <>
            <Header/>
                <AddHabit>
                    <div className="addHabitUp">
                        <h2>Meus hábitos</h2>
                        <p className={`blue-button`} onClick={() => setHabitButton(!habitButton)}>+</p>
                    </div>
                    <NewHabit></NewHabit>
                </AddHabit>
            <MyHabits/>
            <Footer />
        </> 
    )

    function NewHabit(){
        if(habitButton === false){
            return(
                <></>
            )
        }
        if(habitButton){
            return(
            <div className="centralize">    
                <div className="box">
                    <input type="text" placeholder="nome do hábito" value={habitName} onChange={e=> sethabitName(e.target.value)}></input>
                    <div className="week-days">
                        <DayMap
                            weekDays={weekDays}
                            setWeekDays={setWeekDays}
                        />
                    </div>
                    <Loading/>
                </div>
            </div>    
        )}
    }

    function selectDay(idx){
        setWeekDays(weekDays => {
            weekDays[idx].isSelected = !weekDays[idx].isSelected
            return [...weekDays]
        })
    }

    function DayMap({weekDays}){

        return(
            <>
            {weekDays.map((element, index)=> 
            <p
                key={index}
                className={weekDays[index].isSelected? `selected`: `unselected`}
                onClick={() => selectDay(index)}
            >{element.day}</p>)}
            </>
        )
    }    

    function Loading(){
        if(!loading){
            return (
                <div className="add-habit-below">
                    <button 
                        className="cancel"
                        onClick={()=>setHabitButton(false)}
                    >Cancelar
                    </button>
                    <button
                        className="save"
                        onClick={()=>saveHabit()}
                    >Salvar
                    </button>
                </div>
            )
        }
        if(loading){
            return(
                <div className="add-habit-below">
                    <button 
                        className="cancel"
                    >Cancelar
                    </button>
                    <button
                        className="save"
                    >
                    <Bars  color="#ffffff" height={20} width={20}/>    
                    </button>
                </div>
            )
        }
    }

    function saveHabit(){
        setLoading(true)
        let saveHabitDays = [];
        weekDays.map((day, idx)=> {
            if(day.isSelected){
                saveHabitDays.push(idx)
                return [...saveHabitDays]
            }
        })
        let habitPost = {
            name: habitName,
            days: saveHabitDays
        }
        console.log(habitPost)
        let promise = axios.post(URLPOST, habitPost,config)
        promise.then(response=> {
            setHabitButton(false)
            setLoading(false)
        })
        promise.catch((err)=>{
            setLoading(false)
            alert(`${err}`)})
    }

}


const AddHabit = styled.div`
    margin-top: 70px;

    h2{
        font-weight: 400;
        font-size: 22.976px;
        color: #126BA5;
    }
    .blue-button{
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        font-weight: 400;
        font-size: 26.976px;
    }
    .selected {
        color: white;
        background: #CFCFCF;
    }
    .unselected{
        color: #DBDBDB;
        background-color: #ffffff;
    }
    .addHabitUp{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .add-habit-below{
        position: absolute;
        bottom: 15px;
        right: 0px;
    }
    .cancel{
        font-weight: 400;
        font-size: 15.976px;
        text-align: center;
        color: #52B6FF;
        margin-right: 15px;
        border: none;
        background-color: #ffffff;
    }
    .save{
        color: #ffffff;
        width: 84px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
        margin-right: 15px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .centralize{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .box{
        width: 340px;
        height: 180px;
        background: #FFFFFF;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 19px;
        position: relative;
    }
    input{
        top: 18px;
        position: absolute;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        width: 303px;
        height: 45px;
    }
    input::placeholder{
        font-weight: 400;
        font-size: 19.976px;
        color: #DBDBDB;
        padding-left: 11px;
    }
    .week-days{
        display: flex;
        justify-content: baseline;
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
`