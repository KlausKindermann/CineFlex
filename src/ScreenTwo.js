import styled from "styled-components";
import axios from "axios";
import Dates from "./Dates";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ScreenTwo() {
    const [movie, setMovie] = useState([])
    const [horarios, setHorarios] = useState([])
    const {sessionsID} = useParams()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${sessionsID}/showtimes`);
        promise.then((res) => {
            setHorarios(res.data.days)
            setMovie(res.data)
        })
        promise.catch((err) => {
            console.log(err.response.data)
        })

    }, [])

    return (
        <ScreenTimeSelect>
            <Header>CineFlex</Header>
            <BoxAction>Selecione o horário</BoxAction>
            <SessionsList>
               {horarios.map((info) => <Dates key={horarios.id} info={info} /> )} 
            </SessionsList>
            <Footer>
                <img src={movie.posterURL} />
                <p>{movie.title}</p>
            </Footer>
        </ScreenTimeSelect>
    )
}

/*<Sessions>
    <Day> Quinta-feira - 24/10/2022 </Day>
    <TimeList>
        <Time>17:50</Time>
        <Time>18:50</Time>
        <Time>19:50</Time>
    </TimeList>
</Sessions>*/

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
p{
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 30px;
line-height: 40px;
color: white;
margin-left: 12px;
margin-top: 20px;
}
`
const SessionsList = styled.div`
width: 375px;
`
const ScreenTimeSelect = styled.div`
width: 375px;
height: 1600px;
background-color: rgb(88, 88, 88);
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