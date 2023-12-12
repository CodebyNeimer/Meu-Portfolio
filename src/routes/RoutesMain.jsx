import { Route, Routes } from "react-router-dom"
import { LandingPage } from "../pages/LandingPage"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
        </Routes>
    )
}