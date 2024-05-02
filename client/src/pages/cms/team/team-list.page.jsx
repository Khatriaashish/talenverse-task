import { Badge, Button, Card, Container, Pagination, Spinner, Table, Image } from "react-bootstrap"
import { HeadingComponent } from "../../../components/cms/heading/heading.component"
import BreadcrumbComponent from "../../../components/cms/breadcrumb/breadcrumb.component"
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import teamSvc from "./team.service"
import swal from "sweetalert2"
import {toast} from "react-toastify"
import { FaFacebook, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa"

const TeamList = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    const listTeam = async()=>{
        try{
            setLoading(true);
            const response = await teamSvc.teamLists();
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
        listTeam({page: 1});
    }, [])

    const handleDelete = async(id)=>{
        try{
            setLoading(true);
            let response = await teamSvc.deleteById(id);
            toast.success("Team deleted successfully");
            listTeam({page: 1});
        }
        catch(except){
            toast.error("Team cannot be deleted or already deleted");
        }
        finally{
            setLoading(false);
        }
    }

    return (<>
        <Container fluid className="px-4">
            <HeadingComponent type={'h1'} className="mt-4" value={"Team List"} />
            <BreadcrumbComponent data={[
                { title: "Dashboard", link: "/admin" },
                { title: "Team List", link: null }
            ]} />
        </Container>
        <Card className="mb-4">
            <Card.Header>
                <HeadingComponent type={'h4'} value={"Team List"} className={'float-start'}></HeadingComponent>
                <NavLink to="/admin/team/create" className="btn btn-sm btn-success float-end"><i className="fa fa-plus"></i>&nbsp;Create</NavLink>
            </Card.Header>
            <Card.Body>
                <Table size="sm" bordered hover className="text-center">
                    <thead className="table-dark">
                        <tr>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Image</th>
                            <th>Social Link</th>
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
                                            <td>{row.name}</td>
                                            <td>{row.designation}</td>
                                            <td>
                                                <Image  onError={(e)=>{
                                                    e.target.src = thumbnail
                                                }} style={{maxWidth: "50px"}} fluid src={row.image} alt=""/>
                                            </td>
                                            <td >
                                                <a href={row.twitter}><FaTwitter/></a>&nbsp;
                                                <a href={row.facebook}><FaFacebook/></a>&nbsp;
                                                <a href={row.linkedIn}><FaLinkedin/></a>&nbsp;
                                                <a href={row.telegram}><FaTelegram/></a>
                                            </td>
                                            <td>
                                                <NavLink to = {'/admin/team/'+row._id} className={"btn btn-sm btn-warning rounded-circle me-1"}>
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

export default TeamList