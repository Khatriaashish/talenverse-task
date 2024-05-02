import { Badge, Button, Card, Container, Pagination, Spinner, Table, Image } from "react-bootstrap"
import { HeadingComponent } from "../../../components/cms/heading/heading.component"
import BreadcrumbComponent from "../../../components/cms/breadcrumb/breadcrumb.component"
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import faqSvc from "./faq.service"
import swal from "sweetalert2"
import {toast} from "react-toastify"

const FaqList = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    const listFaq = async()=>{
        try{
            setLoading(true);
            const response = await faqSvc.faqLists();
            setData(response.result);
        }
        catch(except){
            console.log(except);
            toast.error(except.message);
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        listFaq({page: 1});
    }, [])

    const handleDelete = async(id)=>{
        try{
            setLoading(true);
            let response = await faqSvc.deleteById(id);
            toast.success("Faq deleted successfully");
            listFaq({page: 1});
        }
        catch(except){
            toast.error("Faq cannot be deleted or already deleted");
        }
        finally{
            setLoading(false);
        }
    }

    return (<>
        <Container fluid className="px-4">
            <HeadingComponent type={'h1'} className="mt-4" value={"Faq List"} />
            <BreadcrumbComponent data={[
                { title: "Dashboard", link: "/admin" },
                { title: "Faq List", link: null }
            ]} />
        </Container>
        <Card className="mb-4">
            <Card.Header>
                <HeadingComponent type={'h4'} value={"Faq List"} className={'float-start'}></HeadingComponent>
                <NavLink to="/admin/faq/create" className="btn btn-sm btn-success float-end"><i className="fa fa-plus"></i>&nbsp;Create</NavLink>
            </Card.Header>
            <Card.Body>
                <Table size="sm" bordered hover className="text-center">
                    <thead className="table-dark">
                        <tr>
                            <th>Question</th>
                            <th>Answer</th>
                            <th>Created</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loading ? <tr>
                                <td colSpan={5}>
                                    <Spinner variant='dark'></Spinner>
                                </td>
                            </tr> : (data ? <>
                                {
                                    data.map((row, ind)=>(
                                        <tr key={ind}>
                                            <td>{row.question}</td>
                                            <td>{row.answer}</td>
                                            <td>{row.updatedAt}</td>
                                            <td>
                                                <NavLink to = {'/admin/faq/'+row._id} className={"btn btn-sm btn-warning rounded-circle me-1"}>
                                                    <i className="fa fa-pen text-white"></i>
                                                </NavLink>
                                                <NavLink onClick={(e)=>{
                                                    e.preventDefault();
                                                    swal.fire({
                                                        title: "Are you sure?",
                                                        text: "Once deleted, you will not be able to recover this file!",
                                                        icon: "warning",
                                                        showCancelButton: true,
                                                        confirmButtonColor: "#3085d6",
                                                        cancelButtonColor: "#3085d6",
                                                      })
                                                      .then((result) => {
                                                        if(result.isConfirmed){
                                                            handleDelete(row._id);
                                                        }
                                                      });
                                                }} className={"btn btn-sm btn-danger rounded-circle me-1"}>
                                                    <i className="fa fa-trash text-white"></i>
                                                </NavLink>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </> : <tr>
                                <td colSpan={5}>No data found</td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </Card.Body>
            
        </Card>
    </>)
}

export default FaqList