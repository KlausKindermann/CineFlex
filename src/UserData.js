import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function UserData({ assentos, selectedSeats, setSuccessInfo, setSelectedSeats }) {

    const [form, setForm] = useState({ name: "", cpf: "" })
    const navigate = useNavigate()

    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    function buyTickets(e) {
        e.preventDefault()
        const body = {
            ids: selectedSeats.map(s => s.id),
            ...form
        }
        const info = {
            movie: assentos.movie.title,
            date: assentos.day.date,
            hour: assentos.name,
            buyer: form.name,
            cpf: form.cpf,
            seats: selectedSeats.map(s => s.name)
        }
        axios.post(`https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many`, body)
            .then(res => {
                setSuccessInfo(info)
                setSelectedSeats([])
                navigate("/sucesso")
            })
            .catch(err => alert(err.response))
    }

    return (
            <Form onSubmit={buyTickets}>
            <User data-text="client-name" >
                <p>Nome do comprador :</p>
                <input
                    name="name"
                    value={form.name}
                    onChange={handleForm}
                    placeholder="Digite seu nome..."
                />
            </User>
            <User data-text="client-cpf">
                <p>CPF do comprador :</p>
                <input
                    name="cpf"
                    value={form.cpf}
                    onChange={handleForm}
                    placeholder="Digite seu CPF..."
                />
            </User>
            <button data-text="book-seat-btn" type="submit">Reservar Assento(s)</button>
            </Form>
    )
}
const Form = styled.div`
button{
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
    }
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