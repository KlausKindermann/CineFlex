
import styled from "styled-components"
import { Link } from "react-router-dom"

export default function ScreenFour({ successInfo }) {
    const { movie, date, hour, buyer, cpf, seats } = successInfo

    return (
        <ScreenComplete>
            <Header>CineFlex</Header>
            <BoxAction>Pedido feito com sucesso!</BoxAction>
            <Info data-text="movie-info" >
                <h1>Filme e sessão</h1>
                <p>{movie}</p>
                <p>{date} - {hour}</p>
            </Info>
            <Info data-text="seats-info" >
                <h1>Ingressos</h1>
                {seats.map(s => <p key={s}>Assento {s}</p>)}
            </Info>
            <Info data-text="client-info" >
                <h1>Comprador</h1>
                <p>Nome: {buyer}</p>
                <p>CPF: {cpf}</p>
            </Info>
            <Link to="/"><Home data-text="go-home-btn"> Voltar pra home </Home></Link>
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