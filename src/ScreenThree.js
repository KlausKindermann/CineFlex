import styled from "styled-components"
import axios from "axios";
import Seat from "./Seat"
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import UserData from "./UserData";

export default function ScreenThree({setSuccessInfo}) {
    const [chairs, setChairs] = useState([])
    const [assentos, setSeats] = useState([])
    const [data, setData] = useState([])
    const [movie, setMovie] = useState([])
    const { seatsID } = useParams()
    const [selectedSeats, setSelectedSeats] = useState([])

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${seatsID}/seats`);
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

    function handleSeats(seat) {
        if (seat.isAvailable === false) {
            alert("Esse assento não está disponível")
        } else {
            const isSelected = selectedSeats.some(s => seat.id === s.id)
            if (isSelected) {
                const newList = selectedSeats.filter(s => seat.id !== s.id)
                setSelectedSeats(newList)
            } else {
                setSelectedSeats([...selectedSeats, seat])
            }
        }
    }

    return (
        <ScreenSeatsSelect>
            <Header>CineFlex</Header>
            <BoxAction>Selecione o(s) assento(s)</BoxAction>
            <Seats>
                {chairs.map((seat) =>
                    <Seat
                        key={seat.id}
                        seat={seat}
                        handleSeats={handleSeats}
                        isSelected={selectedSeats.some(s => seat.id === s.id)}
                    />)}
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
            <UserData
                assentos={assentos}
                selectedSeats={selectedSeats}
                setSelectedSeats={setSelectedSeats}
                setSuccessInfo={setSuccessInfo}
            />
            <Footer data-text="footer" >
                < img src={movie.posterURL} alt="Filme Escolhido" />
                <Texto>
                    <p>{movie.title}</p>
                    <p>{data.weekday}-{data.date}</p>
                </Texto>
            </Footer>
        </ScreenSeatsSelect>
    )
}
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