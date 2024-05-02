import { yupResolver } from "@hookform/resolvers/yup";
import { Form, Col, Image } from "react-bootstrap"
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { ErrorMessage } from "../../../components/cms/validation-message/validation-message.component";
import { ButtonComponent } from "../../../components/cms/button/button.component";
import { useEffect, useState } from "react";
import { ImageUploader } from "../../../components/cms/form/input.component";
import placeholder from "../../../../public/image-placeholder.jpg"


const TeamForm = ({submitEvent, loading=false, detail=null})=>{
    const [thumb, setThumb] = useState();
    const teamSchema = Yup.object({
        name: Yup.string().min(2).required(),
        designation: Yup.string().min(2).required(),
        twitter: Yup.string().url("must be in format 'https://www.twitter.com/ash_ishI'").required(),
        facebook: Yup.string().url("must be in format 'https://www.facebook.com/ash_ishI'").required(),
        linkedIn: Yup.string().url("must be in format 'https://www.linkedin.com/ash_ishI'").required(),
        telegram: Yup.string().url("must be in format 'https://www.telegram.com/ash_ishI'").required()
    })
    const {register, handleSubmit, setValue, setError, formState: {errors}} = useForm({
        resolver: yupResolver(teamSchema)
    })

    const submitForm = (data)=>{
        console.log(data)
        submitEvent(data);
    }

    useEffect(()=>{
        console.log(detail)
        if(detail){
            (Object.keys(detail)).map((field)=>{
                if(field!=='image')
                    setValue(field, detail[field])
            })
            fetch(detail.image)
            .then((response) => response.blob())
            .then((blob) => {
                const file = new File([blob], "image.jpg", { type: "image/jpeg" });
                setValue("image", file);
                setThumb(detail.image);
            })
            .catch((error) => {
                console.error("Error fetching image:", error);
            });
        }
    }, [detail, setValue])

    return (<>
        <Form onSubmit={handleSubmit(submitForm)}>
            <Form.Group className="row mb-3 text-center">
                <Form.Label className="col-sm-3">name: </Form.Label>
                <Col sm={9}>
                    <Form.Control type="text" placeholder="Enter name" size="sm" {...register("name", {required: true})}/>
                    <ErrorMessage message={errors?.name?.message}/>
                </Col>
            </Form.Group>
            <Form.Group className="row mb-3 text-center">
                <Form.Label className="col-sm-3">Designation: </Form.Label>
                <Col sm={9}>
                    <Form.Control type="text" placeholder="Enter designation" size="sm" {...register("designation", {required: true})}/>
                    <ErrorMessage message={errors?.designation?.message}/>
                </Col>
            </Form.Group>
            <Form.Group className="row mb-3 text-center">
                <Form.Label className="col-sm-3">Twitter URL: </Form.Label>
                <Col sm={9}>
                    <Form.Control type="url" placeholder="Enter twitter url" size="sm" {...register("twitter", {required: true})}/>
                    <ErrorMessage message={errors?.twitter?.message}/>
                </Col>
            </Form.Group>
            <Form.Group className="row mb-3 text-center">
                <Form.Label className="col-sm-3">Facebook URL: </Form.Label>
                <Col sm={9}>
                    <Form.Control type="url" placeholder="Enter facebook url" size="sm" {...register("facebook", {required: true})}/>
                    <ErrorMessage message={errors?.facebook?.message}/>
                </Col>
            </Form.Group>
            <Form.Group className="row mb-3 text-center">
                <Form.Label className="col-sm-3">LinkedIn URL: </Form.Label>
                <Col sm={9}>
                    <Form.Control type="url" placeholder="Enter LinkedIn url" size="sm" {...register("linkedIn", {required: true})}/>
                    <ErrorMessage message={errors?.linkedIn?.message}/>
                </Col>
            </Form.Group>
            <Form.Group className="row mb-3 text-center">
                <Form.Label className="col-sm-3">Telegram URL: </Form.Label>
                <Col sm={9}>
                    <Form.Control type="url" placeholder="Enter Telegram url" size="sm" {...register("telegram", {required: true})}/>
                    <ErrorMessage message={errors?.telegram?.message}/>
                </Col>
            </Form.Group>
            <Form.Group className="row mb-3 text-center">
                <Form.Label className="col-sm-3">Image: </Form.Label>
                <Col sm={7}>
                    <ImageUploader setThumb={setThumb} setValue={setValue} setError={setError}/>
                    <ErrorMessage message={errors?.image?.message}/>
                </Col>
                <Col sm={2}>
                    <Image src={
                        thumb?
                            (typeof thumb === 'string')? thumb : URL.createObjectURL(thumb)
                            :
                            placeholder} 
                    
                    fluid alt=""/>
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

export default TeamForm