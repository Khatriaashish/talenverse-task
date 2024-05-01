import React from 'react';
import "../../public/index.css"
import {Row, Col} from "react-bootstrap";

const Contact = () => {
    return (<>
        <div className="container-fluid bg-main text-light py-5">
            <h1 className="pb-2 text-center text-white">Log In</h1>
            <Row>
                <Col sm={12} md={{ offset: 3, span: 6 }}>
                    <p className='text-center text-secondary fs-5'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At provident dignissimos soluta fugit accusantium iure magni eum suscipit
                    </p>
                </Col>
            </Row>
            <div className="container col-md-6 bg-color text-light py-5 mt-5 p-5 rounded">
                <form>
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="email" style={{ backgroundColor: '#252D3C', borderColor: '#252D3C', color: '#716e6e' }}/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="password" style={{ backgroundColor: '#252D3C', borderColor: '#252D3C', color: '#716e6e' }}/>
                        </div>
                    </div>
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" id="agree" />
                        <label className="form-check-label" htmlFor="agree">
                            Remember Me
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Log In</button>
                </form>
            </div>
            <div className='m-3 p-5'>

            </div>
        </div>
    </>);
}

export default Contact;
