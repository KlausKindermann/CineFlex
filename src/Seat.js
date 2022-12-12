import styled from "styled-components"
import { seatColors } from "./Colors"
import { useEffect, useState } from "react"

export default function Seat({ seat, handleSeats, isSelected }) {
    const [status, setStatus] = useState("selected")
    
    useEffect(() => {
        if (isSelected) {
            setStatus("selected")
        } else if (seat.isAvailable) {
            setStatus("available")
        } else {
            setStatus("unavailable")
        }
    }, [isSelected, seat])

    return (
        <Seats data-text="seat" status={status} onClick={() => handleSeats(seat)}>
            {seat.name}
        </Seats>
    )
}
const Seats = styled.div`
border: 1px solid ${props => seatColors[props.status].border};
background-color: ${props => seatColors[props.status].background};
height: 25px;
width: 25px;
border-radius: 25px;
font-family: 'Roboto';
font-size: 11px;
display: flex;
align-items: center;
justify-content: center;
margin: 5px 3px;
`
