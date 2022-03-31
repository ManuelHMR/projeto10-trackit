import styled from "styled-components";

export default function Header({image}){
    return(
        <HeaderMain>
            <h1>TrackIt</h1>
            <img src={image} alt='user`s photo'/>
        </HeaderMain>
    )
}

const HeaderMain = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0px;
    left: 0px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
        font-family: 'Playball', cursive;
        color: #ffffff;
        font-size: 39px;
        font-weight: 400;
        line-height: 49px;
        margin-left: 16px;
    }
    img{
        border-radius: 98.5px;
        width: 51px;
        height: 51px;
        margin-right: 18px;
    }
`
