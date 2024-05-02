import React from 'react'
import { TopHeaderComponent, FooterComponent, SidebarComponent } from "../../components/cms"
import { Outlet } from "react-router-dom"
import "./cms.template.css"


const CMSTemplate = () => {
  return (<>
    <TopHeaderComponent/>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <SidebarComponent/>
            </div>
            <div id="layoutSidenav_content">
                <main>
                    <Outlet/>
                </main>
                <FooterComponent/>
            </div>
        </div>
  </>)
}

export default CMSTemplate
