import styled from "styled-components";

import Logo from "./../assets/logo-trackit.png";

export default function LogoName(){
    return(
        <>
           <Img src={Logo} alt="Trackit`s logo"/> 
           <H1>TrackIt</H1>
        </>
    )
}


const H1 = styled.h1`
    font-family: 'Playball', cursive;
    color: #126BA5;
    font-size: 69px;
    font-weight: 400;
    line-height: 86px;
    margin-top: 0px;
`
const Img = styled.img`
    width: 180px;
    margin-top: 67px;
`