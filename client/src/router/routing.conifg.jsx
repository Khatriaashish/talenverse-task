import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/Landing.page";
import Contact from "../pages/Contact.page";
import Hometemplate from "../pages/templates/home.template";
import Login from "../pages/Login.page"
import Signup from "../pages/Signup.page";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css"
import PermissionCheck from "../pages/common/check-permission";
import CMSTemplate from "../pages/templates/cms.template";
import { Error404 } from "../pages/common/error.page";
import Logout from "../pages/Logout";
import * as faq from "../pages/cms/faq"
import * as team from "../pages/cms/team"
import ContactList from "../pages/cms/contact/contact-list.page";
import Dashboard from "../pages/cms/dashboard/dashboard.component";


const Routing = ()=>{
    return (<>
        <ToastContainer position="bottom-right"/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Hometemplate/>}>
                    <Route index element={<LandingPage/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="signup" element={<Signup/>}/>
                </Route>

                <Route path="/admin" element={<PermissionCheck accessBy={'admin'} Component={<CMSTemplate/>}/>}>
                    <Route index element={<Dashboard/>}></Route>
                    <Route path="faq" element={<faq.FaqLayout/>}>
                        <Route index element={<faq.FaqList/>}/>
                        <Route path="create" element={<faq.FaqCreate/>}/>
                        <Route path=":id" element={<faq.FaqEdit/>}/>
                    </Route>
                    <Route path="team" element={<team.TeamLayout/>}>
                        <Route index element={<team.TeamList/>}/>
                        <Route path="create" element={<team.TeamCreate/>}/>
                        <Route path=":id" element={<team.TeamEdit/>}/>
                    </Route>
                    <Route path="contact" element={<ContactList/>}></Route>
                </Route>
                <Route path="/logout" element={<Logout/>}/>
                <Route path="*" element={<Error404/>}/>
            </Routes>
        </BrowserRouter>
    </>)
}

export default Routing