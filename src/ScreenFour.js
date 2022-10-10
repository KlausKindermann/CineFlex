
import styled from "styled-components"
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function App() {
    const { finalID } = useParams()
    const [data, setData] = useState([])
    const [movie, setMovie] = useState([])
    const [dados, setDados] = useState([])

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${finalID}/seats`);
        promise.then((res) => {
            setDados(res.data)
            setData(res.data.day)
            setMovie(res.data.movie)
            console.log(dados)
        })
        promise.catch((err) => {
            console.log(err.response.data)
        })

    }, [])


    return (
        <ScreenComplete>
            <Header>CineFlex</Header>
            <BoxAction>Pedido feito com sucesso!</BoxAction>
            <Info>
                <h1>Filme e sessão</h1>
                <p>{movie.title}</p>
                <p>{data.weekday} - {data.date}</p>
            </Info>
            <Info>
                <h1>Ingressos</h1>
                <p>Assento 13</p>
                <p>Assento 14</p>
            </Info>
            <Info>
                <h1>Comprador</h1>
                <p>Klaus</p>
                <p>14097592963</p>
            </Info> 
            <Link to="/"><Home> Voltar pra home </Home></Link>
        </ScreenComplete>
    )
}
const Home = styled.div`
width: 150px;
height: 50px;
background-color: rgb(255, 123, 0);
border-radius: 3px;
color: white;
margin-top: 45px;
margin-left: 112px;
display: flex;
align-items: center;
justify-content: center;
font-weight: 400;
`
const Info = styled.div`
width: 374px;
height: 100px;
margin-bottom: 20px;
display: flex;
flex-direction: column;
h1{
font-family: 'Roboto';
font-style: normal;
color: white;
font-weight: 500;
font-size: 24px;
line-height: 30px;
margin-left: 30px;

}
p{
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 30px;
color: white;
margin-left: 30px;
}
`

const ScreenComplete = styled.div`
width: 375px;
`
const BoxAction = styled.div`
width: 374px;
height: 110px;
color: rgb(105, 255, 75);
font-family: 'Roboto';
font-style: normal;
font-weight: 600;
font-size: 25px;
line-height: 28px;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 20px;
margin-top: 20px;
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
`