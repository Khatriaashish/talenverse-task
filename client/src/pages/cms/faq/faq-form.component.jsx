import { yupResolver } from "@hookform/resolvers/yup";
import { Form, Col, Image } from "react-bootstrap"
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { ErrorMessage } from "../../../components/cms/validation-message/validation-message.component";
import { ButtonComponent } from "../../../components/cms/button/button.component";
import { useEffect, useState } from "react";

const FaqForm = ({submitEvent, loading=false, detail=null})=>{
    const [thumb, setThumb] = useState();
    const faqSchema = Yup.object({
        question: Yup.string().min(2).required(),
        answer: Yup.string().min(2).required()
    })
    const {register, handleSubmit, setValue, setError, formState: {errors}} = useForm({
        resolver: yupResolver(faqSchema)
    })

    const submitForm = (data)=>{
        console.log(data)
        submitEvent(data);
    }

    useEffect(()=>{
        if(detail){
            (Object.keys(detail)).map((field, ind)=>{
                if(field!=='image')
                    setValue(field, detail[field])
            })
            setThumb(detail.image)
        }
    }, [detail])

    console.log(errors)
    return (<>
        <Form onSubmit={handleSubmit(submitForm)}>
            <Form.Group className="row mb-3 text-center">
                <Form.Label className="col-sm-3">Question: </Form.Label>
                <Col sm={9}>
                    <Form.Control as="textarea" placeholder="Enter Question" size="sm" {...register("question", {required: true})}/>
                    <ErrorMessage message={errors?.question?.message}/>
                </Col>
            </Form.Group>
            <Form.Group className="row mb-3 text-center">
                <Form.Label className="col-sm-3">Answer: </Form.Label>
                <Col sm={9}>
                    <Form.Control as="textarea" placeholder="Enter answer" size="sm" {...register("answer", {required: false})}/>
                    <ErrorMessage message={errors?.answer?.message}/>
                </Col>
            </Form.Group>
            <Form.Group className="row mb-3 text-center">
                <Col sm={{offset: 3, span: 9}}>
                    <ButtonComponent label="Cancel" type="reset" className="btn-danger me-3" loading={loading}/>
                    <ButtonComponent label="Update" type="submit" className="btn-success" loading={loading}/>
                </Col>
            </Form.Group>
            
        </Form>
    </>)
}

export default FaqForm