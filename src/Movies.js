import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Movies({img}){
    return(
        <FilmList>
            <Link to= {`/sessions/${img.id}`}>
            <img src={img.posterURL} alt="poster do filme" />
            </Link>
            </FilmList>
    )
}

const FilmList = styled.div`
width: 145px;
height: 209px;
background: gray;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 3px;
display: flex;
align-items: center;
justify-content: center;
margin-left: 20px;
margin-bottom: 20px;
img{
    width: 129px;
    height: 193px;
}
`