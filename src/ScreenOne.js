import styled from "styled-components"
import axios from "axios"
import Movies from "./Movies";
import { useEffect, useState } from "react";

export default function ScreenOne() {
    const [posters, setPosters] = useState([])

    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies";
        const promise = axios.get(URL);
        promise.then((res) => {
            setPosters(res.data)
        })
        promise.catch((err) => {
            console.log(err.response.data)
        })

    }, [])


    return (
        <ScreenMovieSelect>
            <Header>CineFlex</Header>
            <BoxAction>Selecione o filme</BoxAction>
            <ContainerFilms>
                {posters.map((img) => <Movies data-text="movie" key={img.id} img={img} />)}
            </ContainerFilms>
        </ScreenMovieSelect>
    )
}


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
const ScreenMovieSelect = styled.div`
width: 800px;
background-color: rgb(88, 88, 88);
`
const ContainerFilms = styled.div`
width: 375px;
display: flex;
flex-wrap: wrap;
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