import styled from "styled-components"

export default function Seat({info}){
    console.log(info.isAvailable)
    return(
        <Seats>
         <div className="true" > {info.name} </div> 
         </Seats>
    )
}
const Seats = styled.div`
.true{
font-family: 'Roboto';
font-size: 16px;
width: 26px;
height: 26px;
background-color: #C3CFD9;
border: 1px solid #808F9D;
border-radius: 12px;
display: flex;
align-items: center;
justify-content: center;
margin-left: 8px;
}
.false {
font-family: 'Roboto';
font-size: 16px;
width: 26px;
height: 26px;
background-color: #C3CFD9;
border: 1px solid #808F9D;
border-radius: 12px;
display: flex;
align-items: center;
justify-content: center;
margin-left: 8px;
}
`
