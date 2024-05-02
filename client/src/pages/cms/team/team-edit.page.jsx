import { Container, Card, Spinner } from "react-bootstrap";
import { HeadingComponent } from "../../../components/cms/heading/heading.component";
import BreadcrumbComponent from "../../../components/cms/breadcrumb/breadcrumb.component";
import TeamForm from "./team-form.component";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import teamSvc from "../team/team.service"
import { useNavigate, useParams } from "react-router-dom";
const TeamEdit = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [detail, setDetail] = useState();

    const params = useParams();

    const editTeam = async(data)=>{
        try{
            console.log(data);
            setLoading(true);
            let response = await teamSvc.updateTeam(params.id, data);
            toast.success("Team updated successfully");
            navigate("/admin/team")
        }
        catch(except){
            toast.error("Team cannot be edited at this moment");
            console.log(except);
        }
        finally{
            setLoading(false);
        }
    }

    const getById = async(id)=>{
        try{
            setLoading(true);
            const response = await teamSvc.getTeamById(params.id);
            setDetail({
                name: response.result.name,
                designation: response.result.designation,
                twitter: response.result.twitter,
                facebook: response.result.facebook,
                linkedIn: response.result.linkedIn,
                telegram: response.result.telegram,
                image: response.result.image
            })
        }
        catch(except){
            toast.error("Team cannot be fetched at this moment");
            navigate("/admin/team")
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
            <HeadingComponent type={'h1'} className="mt-4" value={"Update Team"} />
            <BreadcrumbComponent data={[
                { title: "Dashboard", link: "/admin" },
                {title: "Team List", link: "/admin/team"},
                { title: "Team Update", link: null }
            ]} />
        </Container>
        <Card className="mb-4">
            <Card.Header>
                <HeadingComponent type={'h4'} value={"Edit Team"} className={'float-start'}></HeadingComponent>
            </Card.Header>
            <Card.Body>
                {
                    loading?<>
                        <Spinner variant="dark"/>
                    </>:<TeamForm submitEvent={editTeam} loading={loading} detail={detail}/>
                }
            </Card.Body>

        </Card>
    </>)
}

export default TeamEdit