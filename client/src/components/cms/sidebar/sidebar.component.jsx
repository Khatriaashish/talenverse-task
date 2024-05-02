import { Nav } from "react-bootstrap"
import { FaBookmark, FaEnvelope, FaHome, FaImages, FaMoneyBillWave, FaShoppingCart, FaSitemap, FaStore, FaTachometerAlt, FaUsers } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const SideNavMenu = ({ children }) => {
    return (<>
        <div className="sb-sidenav-menu">{children}</div>
    </>)
}

const NavHeading = ({ children }) => {
    return (<>
        <div className="sb-sidenav-menu-heading">{children}</div>
    </>)
}

const NavLinkIcon = ({ children }) => {
    return (<>
        <div className="sb-nav-link-icon">
            {children}
        </div>
    </>)
}

const SideNavFooter = ({ children }) => {
    return (<>
        <div className="sb-sidenav-footer">
            {children}
        </div>
    </>)
}

const LoggedInUserName = ({children})=>{
    return (<>
        <div className="small">Logged in as: {children}</div>
    </>) 
}

const SidebarComponent = () => {
    return (<>
        <Nav as={"nav"} className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <SideNavMenu>
                <Nav>
                    <NavHeading>Core</NavHeading>
                    <NavLink className={"nav-link"} to="/admin">
                        <NavLinkIcon>
                            <FaTachometerAlt />
                        </NavLinkIcon>
                        Dashboard
                    </NavLink>
                    <NavLink className={"nav-link"} to="/">
                        <NavLinkIcon>
                            <FaHome />
                        </NavLinkIcon>
                        Home
                    </NavLink>
                    <NavHeading>Features</NavHeading>
                    <NavLink className={"nav-link"} to="/admin/team">
                        <NavLinkIcon>
                        <i className="fa-solid fa-people-group"></i>
                        </NavLinkIcon>
                        Team
                    </NavLink>
                    <NavLink className={"nav-link"} to="/admin/faq">
                        <NavLinkIcon>
                            <i className="fa-solid fa-clipboard-question"></i>
                        </NavLinkIcon>
                        FAQ
                    </NavLink>
                    <NavLink className={"nav-link"} to="/admin/contact">
                        <NavLinkIcon>
                            <FaEnvelope />
                        </NavLinkIcon>
                        Contact Message
                    </NavLink>
                    <NavLink className={"nav-link"} to="/admin/users">
                        <NavLinkIcon>
                            <FaUsers />
                        </NavLinkIcon>
                        Users
                    </NavLink>
                
                    <SideNavFooter>
                        <LoggedInUserName>
                            Ashish Khatri
                        </LoggedInUserName>
                    </SideNavFooter>
                </Nav>
            </SideNavMenu>
        </Nav>
    </>)
}

export default SidebarComponent