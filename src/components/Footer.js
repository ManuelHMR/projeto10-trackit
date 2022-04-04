import styled from "styled-components"

import { CircularProgressbar } from "react-circular-progressbar"

export default function Footer(){

    const percentage = 66;

    return (
        <FooterMain>
            <h4>Hábitos</h4>
            <div style={{ 
                width: 91, 
                height: 91,
                background: `#52B6FF`,
                borderRadius: 91,
                textColor: `#ffffff`,
                marginTop: -35 }}>
                <CircularProgressbar value={percentage} />  
            </div>
            <h4>Histórico</h4>
        </FooterMain>
    )
}

const FooterMain = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0px;
    left: 0px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-around;
    h4{
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
    }
`