import { Link } from "react-router-dom";
import styled from "styled-components"

export default function Dates({ info }) {
    const time = info.showtimes;
    return (
        <Sessions>
            <Day> {info.weekday} - {info.date} </Day>
            <TimeList>
                {time.map((movieTime) =>
                    <Time data-text="showtime" key={movieTime.id}>
                        <Link to={`/seats/${movieTime.id}`}>
                            {movieTime.name}
                        </Link>
                    </Time>)}
            </TimeList>
        </Sessions>
    )
}

const Sessions = styled.div`
width: 375px;
height: 90px;
margin-bottom: 35px;
margin-top: 5px;
overflow: hidden;
`
const Day = styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 30px;
color: white;
margin-left: 20px;
`
const TimeList = styled.div`
width: 600px;
display: flex;
overflow-x: scroll;
`
const Time = styled.div`
width: 93px;
height: 50px;
left: 24px;
top: 351px;
background-color: rgb(255, 123, 0);
border-radius: 3px;
color: white;
margin-top: 10px;
margin-left: 20px;
display: flex;
align-items: center;
justify-content: center;
`