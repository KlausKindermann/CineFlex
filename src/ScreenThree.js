import styled from "styled-components"
import axios from "axios";
import Seat from "./Seat"
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ScreenThree() {
    const [chairs, setChairs] = useState([])
    const [assentos, setSeats] = useState([])
    const [data, setData] = useState([])
    const [movie, setMovie] = useState([])
    const { seatsID } = useParams()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${seatsID}/seats`);
        promise.then((res) => {
            setSeats(res.data)
            setChairs(res.data.seats)
            setData(res.data.day)
            setMovie(res.data.movie)
        })
        promise.catch((err) => {
            console.log(err.response.data)
        })

    }, [])
    console.log(assentos)

    return (
        <ScreenSeatsSelect>
            <Header>CineFlex</Header>
            <BoxAction>Selecione o(s) assento(s)</BoxAction>
            <Seats>
                {chairs.map((info) => <Seat key={chairs.id} info={info} />)}
            </Seats>
            <SeatsInfo>
                <Info>
                    <BolinhaSelecionado />
                    <p>Selecionado</p>
                </Info>
                <Info>
                    <BolinhaDisponivel />
                    <p>Diponível</p>
                </Info>
                <Info>
                    <BolinhaIndisponivel />
                    <p>Indiponível</p>
                </Info>
            </SeatsInfo>
            <User>
                <p>Nome do comprador :</p>
                <input placeholder="   Digite seu nome..."></input>
            </User>
            <User>
                <p>CPF do comprador :</p>
                <input placeholder="   Digite seu CPF..."></input>
            </User>
            <Link to={`/complete/${assentos.id}`}><Confirm>Reservar assento(s)</Confirm></Link>
            <Footer>
                < img src={movie.posterURL} alt="Filme Escolhido" />
                <Texto>
                    <p>{movie.title}</p>
                    <p>{data.weekday}-{data.date}</p>
                </Texto>
            </Footer>
        </ScreenSeatsSelect>
    )
}
const Confirm = styled.div`
width: 200px;
height: 50px;
background-color: rgb(255, 123, 0);
border-radius: 3px;
color: white;
margin-top: 30px;
margin-left: 87px;
display: flex;
align-items: center;
justify-content: center;
font-weight: 400;
text-decoration: none;
`
const User = styled.div`
width: 375px;
height: 90px;
margin-top: 18px;
p{
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 30px;
color: white;
margin-left: 30px;
}
input{
width: 310px;
height: 45px;
background: #FFFFFF;
border: 1px solid rgb(17, 17, 17);
border-radius: 3px;
margin-left: 30px;
font-family: 'Roboto';
font-weight: 400;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
color: #AFAFAF;
}
`
/* < img src = { assentos.movie.posterURL } alt = "Filme Escolhido" />
     <Texto>
         <p>{assentos.movie.title}</p>
         <p>{assentos.day.weekday} - {assentos.day.date}</p>
     </Texto>*/
const Texto = styled.div`
p{
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 30px;
color: white;
margin-left: 12px;
margin-top: 15px;
}
`
const Info = styled.div`
width: 80px;
height: 50px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
p{
font-family: 'Roboto';
font-style: normal;
font-size: 16px;
line-height: 15px;
margin-top: 4px;
color: white;
}

`
const SeatsInfo = styled.div`
width: 375px;
height: 50px;
display: flex;
justify-content: space-evenly;
`
const Seats = styled.div`
width: 375px;
height: 240px;
display: flex;
flex-wrap: wrap
`
const Footer = styled.div`
width: 375px;
height: 117px;
background-color: rgb(17, 17, 17);
position: fixed;
bottom: 0;
display: flex;
img{
width: 64px;
height: 89px;
margin-left: 20px;
margin-top: 14px;
border: 3px rgb(88, 88, 88) solid;
}

`

const Header = styled.div`
width: 375px;
height: 67px;
background: rgb(17, 17, 17);
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 34px;
line-height: 40px;
display: flex;
align-items: center;
justify-content: center;
color: rgb(255, 123, 0);
position: fixed;
top: 0;
`
const ScreenSeatsSelect = styled.div`
width: 375px;
background-color: rgb(88, 88, 88);
`

const BoxAction = styled.div`
width: 374px;
height: 110px;
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 30px;
line-height: 40px;
display: flex;
align-items: center;
justify-content: center;
color: white;
margin-top: 67px;
`
const BolinhaDisponivel = styled.div`
width: 26px;
height: 26px;
background: #C3CFD9;
border: 1px solid #808F9D;
border-radius: 12px;
`
const BolinhaSelecionado = styled.div`
width: 26px;
height: 26px;
background: #1AAE9E;
border: 1px solid #0E7D71;
border-radius: 12px;
`
const BolinhaIndisponivel = styled.div`
width: 26px;
height: 26px;
background: #FBE192;
border: 1px solid #F7C52B;
border-radius: 12px;

`