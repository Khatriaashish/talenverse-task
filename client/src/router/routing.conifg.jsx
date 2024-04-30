import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/Landing.page";

const Routing = ()=>{
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
            </Routes>
        </BrowserRouter>
    </>)
}

export default Routing