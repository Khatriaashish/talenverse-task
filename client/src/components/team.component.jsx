import React from 'react'
import photo from "../../public/Photo.png"
import { Col, Row } from 'react-bootstrap'

const TeamComponent = () => {
    return (<>
        <div class="container marketing py-5">
            <h2 className="pb-2 text-center text-body-emphasis">
                The Core of Our Team
            </h2>
            <Row>
                <Col sm={12} md={{offset:2, span: 8}}>
                    <p className='text-center text-secondary'>
                        Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment of people and great talent that truly rocks.
                    </p>
                </Col>
            </Row>
            <div class="row">
                <div class="col-lg-4 px-2 text-secondary">
                <img src={photo} className="d-block mx-lg-auto" alt="" loading="lazy" width={"100%"}/>
                    <h3 class="fw-normal text-dark">Morgan Drew</h3>
                    <p>Manager</p>
                    <div className="float-start">
                        <a href="https://www.x.com" target='_blank' className='text-decoration-none text-dark fs-4 pe-4'><i class="fa-brands fa-x-twitter"></i></a>
                        <a href="https://www.facebook.com" target='_blank' className='text-decoration-none text-dark fs-4 pe-4'><i class="fa-brands fa-facebook"></i></a>
                        <a href="https://www.linkedin.com" target='_blank' className='text-decoration-none text-dark fs-4 pe-4'><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://www.instagram.com" target='_blank' className='text-decoration-none text-dark fs-4'><i class="fa-brands fa-telegram"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 px-2 text-secondary">
                <img src={photo} className="d-block mx-lg-auto" alt="" loading="lazy" width={"100%"}/>
                    <h3 class="fw-normal text-dark">Morgan Drew</h3>
                    <p>Manager</p>
                    <div className="float-start">
                        <a href="https://www.x.com" target='_blank' className='text-decoration-none text-dark fs-4 pe-4'><i class="fa-brands fa-x-twitter"></i></a>
                        <a href="https://www.facebook.com" target='_blank' className='text-decoration-none text-dark fs-4 pe-4'><i class="fa-brands fa-facebook"></i></a>
                        <a href="https://www.linkedin.com" target='_blank' className='text-decoration-none text-dark fs-4 pe-4'><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://www.instagram.com" target='_blank' className='text-decoration-none text-dark fs-4'><i class="fa-brands fa-telegram"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 px-2 text-secondary">
                <img src={photo} className="d-block mx-lg-auto" alt="" loading="lazy" width={"100%"}/>
                    <h3 class="fw-normal text-dark">Morgan Drew</h3>
                    <p>Manager</p>
                    <div className="float-start">
                        <a href="https://www.x.com" target='_blank' className='text-decoration-none text-dark fs-4 pe-4'><i class="fa-brands fa-x-twitter"></i></a>
                        <a href="https://www.facebook.com" target='_blank' className='text-decoration-none text-dark fs-4 pe-4'><i class="fa-brands fa-facebook"></i></a>
                        <a href="https://www.linkedin.com" target='_blank' className='text-decoration-none text-dark fs-4 pe-4'><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://www.instagram.com" target='_blank' className='text-decoration-none text-dark fs-4'><i class="fa-brands fa-telegram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default TeamComponent
