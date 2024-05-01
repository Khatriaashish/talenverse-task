import React, {useState} from 'react';
import "../../public/index.css"
import {Row, Col} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as Yup from "yup"
import apiCall from '../repository/api-call';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [agreed, setAgreed] = useState(false);
    const navigate = useNavigate();

    const contactSchema = Yup.object({
        name: Yup.string().min(2).max(50).required(),
        email: Yup.string().email().required(),
        phone: Yup.string().matches(/^\+?\d{1,3}[- ]?\d{3,}$/, "number must be in +977-98123456789 format"),
        subject: Yup.string().required(),
        message: Yup.string().required()
    });
    const { register, handleSubmit, setValue, setError, formState: {errors}} = useForm({
        resolver: yupResolver(contactSchema)
    })

    const submitHandler = async(data)=>{
        try {
            setLoading(true);
            const response = await apiCall.sendContactMessage(data);
            toast.success(response.message);
            navigate('/');
        } catch (error) {
            console.log(error);
            toast.error(error.message);
            except.response.data.result.map((obj)=>{
                const keys = Object.keys(obj);
                setError(keys[0], {message: obj[keys[0]]});
            })
        }
        finally{
            setLoading(false)
        }
    }
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
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="firstName" {...register("name", {required: true, disabled: loading})} placeholder="Input" style={{ backgroundColor: '#252D3C', borderColor: '#252D3C', color: '#716e6e' }}/>
                            <span className="text-danger"><em>{errors?.name?.message}</em></span>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="email" {...register("email", {required: true, disabled: loading})} placeholder="Input" style={{ backgroundColor: '#252D3C', borderColor: '#252D3C', color: '#716e6e' }}/>
                            <span className="text-danger"><em>{errors?.email?.message}</em></span>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                            <input type="tel" className="form-control" id="phoneNumber" {...register("phone", {required: true, disabled: loading})} placeholder="+000" style={{ backgroundColor: '#252D3C', borderColor: '#252D3C', color: '#716e6e' }}/>
                            <span className="text-danger"><em>{errors?.phone?.message}</em></span>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="contactReason" className="form-label">Get in Touch With Us</label>
                            <select className="form-select" id="contactReason" onChange={(e)=>{
                                setValue("subject", e.target.value)
                            }} style={{ backgroundColor: '#252D3C', borderColor: '#252D3C', color: '#716e6e' }}>
                                <option defaultValue>Dropdown</option>
                                <option>Customer Support</option>
                                <option>Sales Inquiry</option>
                                <option>Feedback</option>
                                <option>Other</option>
                            </select>
                            <span className="text-danger"><em>{errors?.subject?.message}</em></span>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" {...register("message", {required: true, disabled: loading})} rows="5" placeholder="Hi! We are Lookscount..." style={{ backgroundColor: '#252D3C', borderColor: '#252D3C', color: '#716e6e' }}></textarea>
                            <span className="text-danger"><em>{errors?.message?.message}</em></span>
                        </div>
                    </div>
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" id="agree" onChange={()=>setAgreed(!agreed)} />
                        <label className="form-check-label" htmlFor="agree">
                            I agree with Lookscout Privacy Policy
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={!agreed}>Submit</button>
                    <br/><small className='text-warning'>Privacy Policy must be accepted to submit</small>
                </form>
            </div>
            {/* <div className='m-5 p-5'>

            </div> */}
        </div>
    </>);
}

export default Contact;
