import React from 'react'
import { Row, Col } from "react-bootstrap"
import { NavLink } from 'react-router-dom'

const CallToActionComponent = () => {
    return (<>
        <div className="bg-primary px-4 py-2 text-center mb-1">
            <div className="py-5 text-white">
                <div className="col-lg-6 mx-auto">
                    <span className="fs-5 mb-2 text-white">1% OF THE INDUSTRY</span>
                </div>
                <Row>
                    <Col sm={12} md={{ offset: 2, span: 8 }}>
                        <h1 className="display-5">Welcome to your new digital reality that which will rock your world truly at all.</h1>
                    </Col>
                </Row>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center py-5">
                    <NavLink to={'/signup'}>
                        <button type="button" className="btn btn-light text-primary btn-lg px-4 me-sm-3">Sign up</button>
                    </NavLink>
                    <NavLink to={'/login'}>
                        <button type="button" className="btn btn-info text-white btn-lg px-4">Log in</button>
                    </NavLink>
                </div>
            </div>
        </div>
    </>)
}

export default CallToActionComponent
