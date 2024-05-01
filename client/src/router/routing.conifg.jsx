import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/Landing.page";
import Contact from "../pages/Contact.page";
import Hometemplate from "../pages/templates/home.template";
import Login from "../pages/Login.page"
import Signup from "../pages/Signup.page";

const Routing = ()=>{
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Hometemplate/>}>
                    <Route index element={<LandingPage/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="signup" element={<Signup/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>)
}

export default Routing