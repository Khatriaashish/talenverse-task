import React from 'react'
import logo from "../../public/logo.png"

const Footer = () => {
    return (<>
        <div className="container">
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 pt-5 border-top">
                <div className="col mb-3">
                    <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                        <img src={logo} className="d-block mx-lg-auto" alt="" loading="lazy" width={"100%"}/>
                    </a>
                    <p className="text-body-secondary">Generate outside the box thinking the possibility to target the low.</p>
                    <div className="float-start">
                        <a href="https://www.facebook.com" className='text-decoration-none text-dark fs-4 pe-4'><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://www.google.com" className='text-decoration-none text-dark fs-4 pe-4'><i className="fa-brands fa-google"></i></a>
                        <a href="https://www.apple.com" className='text-decoration-none text-dark fs-4 pe-4'><i className="fa-brands fa-apple"></i></a>
                        <a href="https://www.instagram.com.com" className='text-decoration-none text-dark fs-4'><i className="fa-brands fa-instagram"></i></a>
                    </div>
                </div>

                <div className="col mb-3">
                    <h5>Products</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Solutions</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Integrations</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Enterprise</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Solutions</a></li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5>Resources</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Partners</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Community</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Developers</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">App</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Blog</a></li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5>Why Choose Us?</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Channels</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Scale</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Watch the Demo</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Our Competition</a></li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5>Company</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About Us</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">News</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Leadership</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Media Kit</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    </>)
}

export default Footer
