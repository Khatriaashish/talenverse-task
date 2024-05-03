import React, {useState, useEffect} from 'react'
import { Row, Col } from "react-bootstrap"
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as Yup from "yup"
import apiCall from '../repository/api-call';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [loading, setLoading] = useState(false);
    const [agreed, setAgreed] = useState(false);
    const navigate = useNavigate();

    const signUpSchema = Yup.object({
        name: Yup.string().min(2).max(50).required(),
        email: Yup.string().email().required(),
        password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/, "Password must have atleast 8 characters and max 32 characters, one uppercase, one lowercase, one digit and one unique character").required(),
        confirmPassword: Yup.string().required().oneOf(
            [Yup.ref('password'), null], "Password doesn't match"
        )
    });

    const { register, handleSubmit, setValue, setError, formState: {errors}} = useForm({
        resolver: yupResolver(signUpSchema)
    })

    const submitHandler = async(data)=>{
        try {
            setLoading(true);
            const response = await apiCall.signup(data);
            toast.success(response.message);
            navigate('/');
        } catch (error) {
            console.log(error);
            toast.error(error.message);
            error.response.data.result.map((obj)=>{
                const keys = Object.keys(obj);
                setError(keys[0], {message: obj[keys[0]]});
            })
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        let token = localStorage.getItem('_au');
        let user = JSON.parse(localStorage.getItem("_user"));
        if(token && user){
            navigate('/admin')
        }
    }, [])

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
                            <label htmlFor="firstName" className="form-label">Name</label>
                            <input type="text" className="form-control" id="firstName" placeholder="Input" {...register("name", {required: true, disabled: loading})} style={{ backgroundColor: '#252D3C', borderColor: '#252D3C', color: '#716e6e' }} />
                            <span className="text-danger"><em>{errors?.name?.message}</em></span>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="email" placeholder="Input" {...register("email", {required: true, disabled: loading})} style={{ backgroundColor: '#252D3C', borderColor: '#252D3C', color: '#716e6e' }} />
                            <span className="text-danger"><em>{errors?.email?.message}</em></span>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="password" {...register("password", {required: true, disabled: loading})} style={{ backgroundColor: '#252D3C', borderColor: '#252D3C', color: '#716e6e' }} />
                            <span className="text-danger"><em>{errors?.password?.message}</em></span>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="password" className="form-label">Confirm-password</label>
                            <input type="password" className="form-control" id="confirm-password" placeholder="password" {...register("confirmPassword", {required: true, disabled: loading})} style={{ backgroundColor: '#252D3C', borderColor: '#252D3C', color: '#716e6e' }} />
                            <span className="text-danger"><em>{errors?.confirmPassword?.message}</em></span>
                        </div>
                    </div>
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" id="agree" onChange={()=>setAgreed(!agreed)}/>
                        <label className="form-check-label" htmlFor="agree">
                            I agree with Lookscout Privacy Policy
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={!agreed}>Submit</button>
                    <br/><small className='text-warning'>Privacy Policy must be accepted to signup.</small>
                </form>
            </div>
            <div className='m-5 p-5'>

        </div>
        </div>
    </>)
}

export default Signup
