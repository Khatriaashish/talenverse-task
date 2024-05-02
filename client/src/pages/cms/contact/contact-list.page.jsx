import { Badge, Button, Card, Container, Pagination, Spinner, Table, Image } from "react-bootstrap"
import { HeadingComponent } from "../../../components/cms/heading/heading.component"
import BreadcrumbComponent from "../../../components/cms/breadcrumb/breadcrumb.component"
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import swal from "sweetalert2"
import {toast} from "react-toastify"
import apiCall from "../../../repository/api-call"
import "../../../../public/index.css"

const ContactList = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    const listContact = async()=>{
        try{
            setLoading(true);
            const response = await apiCall.getAllContactMessage();
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
        listContact({page: 1});
    }, [])

    const handleDelete = async(id)=>{
        try{
            setLoading(true);
            let response = await apiCall.deleteContactMessage(id);
            toast.success("Contact deleted successfully");
            listContact();
        }
        catch(except){
            toast.error("Contact cannot be deleted or already deleted");
        }
        finally{
            setLoading(false);
        }
    }

    return (<>
        <Container fluid className="px-4">
            <HeadingComponent type={'h1'} className="mt-4" value={"Contact Messages"} />
            <BreadcrumbComponent data={[
                { title: "Dashboard", link: "/admin" },
                { title: "Contact messages", link: null }
            ]} />
        </Container>
        <Card className="mb-4">
            <Card.Header>
                <HeadingComponent type={'h4'} value={"Contact Messages"} className={'float-start'}></HeadingComponent>
            </Card.Header>
            <Card.Body>
                <Table size="sm" striped bordered hover className="text-center" variant="dark">
                    <thead className="table-dark">
                        <tr>
                            <th>Queries</th>
                            <th>Delete</th>
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
                                            <td className="left-align">
                                                <strong className="text-success">Name: </strong>{row.name}<br/>
                                                <strong className="text-success">Email: </strong> {row.email}<br/>
                                                <strong className="text-success">Phone: </strong> {row.phone}<br/>
                                                <strong className="text-success">Subject: </strong><span className="text-warning">{row.subject}</span><br/>
                                                <div className="border rounded p-1"><strong className="text-success">Query: </strong><br />{row.message}</div>
                                            </td>
                                            <td>
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

export default ContactList