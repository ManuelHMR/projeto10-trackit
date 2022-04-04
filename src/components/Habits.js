import Loading from "./Loading"
import Header from "./Header"
import MyHabits from "./MyHabits"
import Footer from "./Footer"

import styled from "styled-components"
import { useState } from "react"

export default function Habits(){

    let loginData = JSON.parse(localStorage.getItem('login'))

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

    const [habitButton, setHabitButton] = useState(false)
    const [weekDays, setWeekDays] = useState(weekdaysDefault)

    console.log(loginData)
    if(loginData === null){
        return (
            <Loading/>
        )
    }
    return(
        <>
            <Header image={loginData.image}/>
                <AddHabit>
                    <div className="addHabitUp">
                        <h2>Meus hábitos</h2>
                        <p onClick={() => setHabitButton(!habitButton)}>+</p>
                    </div>
                    <NewHabit></NewHabit>
                </AddHabit>
            <MyHabits token={loginData.token}/>
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
                    <input type="text" placeholder="nome do hábito"></input>
                    <div className="week-days">
                        <DayMap
                            weekDays={weekDays}
                            setWeekDays={setWeekDays}
                        />
                    </div>
                </div>
            </div>    
        )}

    }

}

function DayMap({weekDays, setWeekDays}){

    return(
        <>
        {weekDays.map((element, index)=> 
        <p
            key={index}
            className={weekDays[index].isSelected? `selected`: `teste`}
            onClick={() => setWeekDays((weekDays, idx) => {
                weekDays[idx].isSelected = !weekDays[idx].isSelected
            })}
        >{element.day}</p>)}
        </>
    )
}

const AddHabit = styled.div`
    margin-top: 70px;

    h2{
        font-weight: 400;
        font-size: 22.976px;
        color: #126BA5;
    }
    p{
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
    .selected{
        background-color: black;
    }
    .addHabitUp{
        display: flex;
        justify-content: space-between;
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
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        width: 30px;
        height: 30px;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
        margin-right: 4px;
    }
`