import { Container, Card, Spinner } from "react-bootstrap";
import { HeadingComponent } from "../../../components/cms/heading/heading.component";
import BreadcrumbComponent from "../../../components/cms/breadcrumb/breadcrumb.component";
import FaqForm from "./faq-form.component";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import faqSvc from "../faq/faq.service"
import { useNavigate, useParams } from "react-router-dom";
const FaqEdit = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [detail, setDetail] = useState();

    const params = useParams();

    const editFaq = async(data)=>{
        try{
            console.log(data);
            setLoading(true);
            let response = await faqSvc.updateFaq(params.id, data);
            toast.success("Faq updated successfully");
            navigate("/admin/faq")
        }
        catch(except){
            toast.error("Faq cannot be edited at this moment");
            console.log(except);
        }
        finally{
            setLoading(false);
        }
    }

    const getById = async(id)=>{
        try{
            setLoading(true);
            const response = await faqSvc.getFaqById(params.id);
            setDetail({
                question: response.result.question,
                answer: response.result.answer
            })
        }
        catch(except){
            toast.error("Faq cannot be fetched at this moment");
            navigate("/admin/faq")
        }
        finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        getById()
    }, [params])
    return (<>
        <Container fluid className="px-4">
            <HeadingComponent type={'h1'} className="mt-4" value={"Update Faq"} />
            <BreadcrumbComponent data={[
                { title: "Dashboard", link: "/admin" },
                {title: "Faq List", link: "/admin/faq"},
                { title: "Faq Update", link: null }
            ]} />
        </Container>
        <Card className="mb-4">
            <Card.Header>
                <HeadingComponent type={'h4'} value={"Edit Faq"} className={'float-start'}></HeadingComponent>
            </Card.Header>
            <Card.Body>
                {
                    loading?<>
                        <Spinner variant="dark"/>
                    </>:<FaqForm submitEvent={editFaq} loading={loading} detail={detail}/>
                }
            </Card.Body>

        </Card>
    </>)
}

export default FaqEdit