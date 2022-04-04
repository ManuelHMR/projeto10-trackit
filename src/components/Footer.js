import React from 'react'
import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';

export default function Footer() {
  const navigate = useNavigate()

  return (

    < ProgressBar >
      <h1 onClick={() => navigate('/habitos')}>Habitos</h1>
      <div className='circle' onClick={() => navigate('/hoje')}>

        <CircularProgressbar
          value={90}
          text={`Hoje`}
          styles={
            buildStyles({
              rotation: 0,
              strokeLinecap: 'round',
              textSize: '16px',
              pathTransitionDuration: 0.5,
              pathColor: `rgba(255, 255, 255, 100)`,
              textColor: '#fff',
              trailColor: '#52B6FF',
              backgroundColor: '#3e98c7',
            })}
        />

      </div>
      <h1 onClick={() => navigate('/historico')}>Historico</h1>
    </ProgressBar>
  )
}
const ProgressBar = styled.div`
  background-color: #fff;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h1{
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    color:  #52B6FF;
    padding: 26px 10px;
    cursor: pointer;
  }
  .circle{
    position: fixed;
    background-color: #52B6FF;
    height: 91px;
    width: 91px;
    border-radius: 50%;
    bottom: 40px;
    left: 38%;
    padding: 6px;
    cursor: pointer;
  }
`