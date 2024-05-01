import React from 'react'
import Homeheading from '../../components/homeheading.component'
import Footer from "../../components/footer.component"
import HorizontalComponent from "../../components/horizontal.component"
import { Outlet } from 'react-router-dom'

const Hometemplate = () => {
  return (<>
    <Homeheading/>
    <Outlet/>
    <Footer/>
    <HorizontalComponent/>
  </>)
}

export default Hometemplate
