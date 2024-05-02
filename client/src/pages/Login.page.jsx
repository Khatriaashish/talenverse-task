import React, {useState, useEffect} from 'react';
import "../../public/index.css"
import {Row, Col} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as Yup from "yup"
import apiCall from '../repository/api-call';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const loginSchema = Yup.object({
        email: Yup.string().required(),
        password: Yup.string().required(),
    });

    const { register, handleSubmit, setValue, setError, formState: {errors}} = useForm({
        resolver: yupResolver(loginSchema)
    })

    const submitHandler = async(data)=>{
        try {
            setLoading(true);
            const response = await apiCall.login(data);
            const userDetail = response.result.userDetail;
            localStorage.setItem("_user", JSON.stringify({
                ...userDetail
            }))
            toast.success(response.message);
            navigate('/admin');
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

    useEffect(()=>{
        let token = localStorage.getItem('_au');
        let user = JSON.parse(localStorage.getItem("_user"));
        if(token && user){
            navigate('/admin')
        }
    })
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
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="email" {...register("email", {required: true, disabled: loading})} style={{ backgroundColor: '#252D3C', borderColor: '#252D3C', color: '#716e6e' }}/>
                            <span className="text-danger"><em>{errors?.email?.message}</em></span>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="password" {...register("password", {required: true, disabled: loading})} style={{ backgroundColor: '#252D3C', borderColor: '#252D3C', color: '#716e6e' }}/>
                            <span className="text-danger"><em>{errors?.password?.message}</em></span>
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

export default Login;
