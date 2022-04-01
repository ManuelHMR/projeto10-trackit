import Loading from "./Loading"
import Header from "./Header"
import MyHabits from "./MyHabits"
import Footer from "./Footer"

import styled from "styled-components"

export default function Habits({loginData}){

    
    console.log(loginData)
    if(loginData === undefined){
        return (
            <Loading/>
        )

    }
    return(
        <>
            <Header image={loginData.image}/>
            <AddHabit>
                <h2>Meus hábitos</h2>
                <p>+</p>
            </AddHabit>
            <MyHabits token={loginData.token}/>
            <Footer />
        </> 
    )
}

const AddHabit = styled.div`
    margin-top: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;

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
`