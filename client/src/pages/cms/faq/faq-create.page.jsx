import { Container, Card } from "react-bootstrap";
import { HeadingComponent } from "../../../components/cms/heading/heading.component";
import BreadcrumbComponent from "../../../components/cms/breadcrumb/breadcrumb.component";
import FaqForm from "./faq-form.component";
import { useState } from "react";
import { toast } from "react-toastify";
import faqSvc from "../faq/faq.service"
import { useNavigate } from "react-router-dom";
const FaqCreate = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const submitHandler = async(data)=>{
        try{
            setLoading(true);
            let response = await faqSvc.storeFaq(data);
            toast.success("Faq Created Successfully");
            navigate("/admin/faq")
        }
        catch(except){
            console.log(except);
            toast.error(except.message);
        }
        finally{
            setLoading(false);
        }
    }
    return (<>
        <Container fluid className="px-4">
            <HeadingComponent type={'h1'} className="mt-4" value={"Create Faq"} />
            <BreadcrumbComponent data={[
                { title: "Dashboard", link: "/admin" },
                {title: "Faq List", link: "/admin/faq"},
                { title: "Faq Create", link: null }
            ]} />
        </Container>
        <Card className="mb-4">
            <Card.Header>
                <HeadingComponent type={'h4'} value={"Create New Faq"} className={'float-start'}></HeadingComponent>
            </Card.Header>
            <Card.Body>
                <FaqForm submitEvent={submitHandler} loading={loading}/>
            </Card.Body>

        </Card>
    </>)
}

export default FaqCreate