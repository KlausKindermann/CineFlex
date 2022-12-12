import styled from "styled-components"
import GlobalStyle from "./GlobalStyle"
import ScreenOne from "./ScreenOne"
import ScreenTwo from "./ScreenTwo"
import ScreenThree from "./ScreenThree"
import ScreenFour from "./ScreenFour"
import { BrowserRouter, Routes, Route } from "react-router-dom"


export default function App() {

    return (
        <Screen>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ScreenOne />} />
                    <Route path="/sessoes/:sessionsID" element={<ScreenTwo />} />
                    <Route path="/assentos/:seatsID" element={<ScreenThree />} />
                    <Route path="/sucesso" element={<ScreenFour />} />
                </Routes>
            </BrowserRouter>
        </Screen>
    )
}
const Screen = styled.div`
height: 877px;
width: 375px;
`
