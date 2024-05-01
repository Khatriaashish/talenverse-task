import React from 'react';
import "../../public/index.css"
import {Row, Col} from "react-bootstrap";
import Homeheading from '../components/homeheading.component';

const Contact = () => {
    return (<>
        <div className="container-fluid bg-main text-light py-5">
            <h1 className="pb-2 text-center text-white">Get In Touch With Us</h1>
            <Row>
                <Col sm={12} md={{ offset: 3, span: 6 }}>
                    <p className='text-center text-secondary fs-5'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At provident dignissimos soluta fugit accusantium iure magni eum suscipit
                    </p>
                </Col>
            </Row>
            <div className="container bg-color text-light py-5 mt-5 p-5 rounded">
                <form>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="firstName" placeholder="Input" style={{ backgroundColor: '#252D3C', borderColor: '#252D3C', color: '#716e6e' }}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="email" placeholder="Input" style={{ backgroundColor: '#252D3C', borderColor: '#252D3C', color: '#716e6e' }}/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                            <input type="tel" className="form-control" id="phoneNumber" placeholder="+000" style={{ backgroundColor: '#252D3C', borderColor: '#252D3C', color: '#716e6e' }}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="contactReason" className="form-label">Get in Touch With Us</label>
                            <select className="form-select" id="contactReason" style={{ backgroundColor: '#252D3C', borderColor: '#252D3C', color: '#716e6e' }}>
                                <option defaultValue>Dropdown</option>
                                <option>Customer Support</option>
                                <option>Sales Inquiry</option>
                                <option>Feedback</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="5" placeholder="Hi! We are Lookscount..." style={{ backgroundColor: '#252D3C', borderColor: '#252D3C', color: '#716e6e' }}></textarea>
                        </div>
                    </div>
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" id="agree" />
                        <label className="form-check-label" htmlFor="agree">
                            I agree with Lookscout Privacy Policy
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            {/* <div className='m-5 p-5'>

            </div> */}
        </div>
    </>);
}

export default Contact;
