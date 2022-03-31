import Header from "./Header"

export default function Habits({loginData}){
    
    if(loginData === undefined){
        return (
            <h2>CARREGANDO...</h2>
        )
    }
    return(
        <>
        <Header
            image={loginData.image}/>
        
        </>
    )
}