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
                    <Route path="faq" element={<faq.FaqLayout/>}>
                        <Route index element={<faq.FaqList/>}/>
                        <Route path="create" element={<faq.FaqCreate/>}/>
                        <Route path=":id" element={<faq.FaqEdit/>}/>
                    </Route>
                    {/* <Route path="faq" element={<banner.BannerLayout/>}>
                        <Route index element={<banner.BannerList/>}/>
                        <Route path="create" element={<banner.BannerCreate/>}/>
                        <Route path=":id" element={<banner.BannerEdit/>}/>
                    </Route> */}
                </Route>
                <Route path="/logout" element={<Logout/>}/>
                <Route path="*" element={<Error404/>}/>
            </Routes>
        </BrowserRouter>
    </>)
}

export default Routing