import React from 'react'
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

export default function History() {
  return (
    <>
      <Header />
      <HabitsHistoric>
        <div className='container'>
          <h1>Histórico</h1>
          <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
        </div>
      </HabitsHistoric>
      <Footer />
    </>
  )
}

const HabitsHistoric = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: 70px;
  background-color: #EBEBEB;
  .container{
    padding-top: 28px;
    margin-left: 18px;
  }
  .container h1{
    font-family: Lexend Deca;
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    color: #126BA5;
    margin-bottom: 17px;
  }
  .container h2{
    font-family: Lexend Deca;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #666666;
  }
`