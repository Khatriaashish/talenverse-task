import { Container, Card } from "react-bootstrap";
import { HeadingComponent } from "../../../components/cms/heading/heading.component";
import BreadcrumbComponent from "../../../components/cms/breadcrumb/breadcrumb.component";
import TeamForm from "./team-form.component";
import { useState } from "react";
import { toast } from "react-toastify";
import teamSvc from "../team/team.service"
import { useNavigate } from "react-router-dom";
const TeamCreate = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const submitHandler = async(data)=>{
        try{
            setLoading(true);
            let response = await teamSvc.storeTeam(data);
            toast.success("Team Created Successfully");
            navigate("/admin/team")
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
            <HeadingComponent type={'h1'} className="mt-4" value={"Create Team"} />
            <BreadcrumbComponent data={[
                { title: "Dashboard", link: "/admin" },
                {title: "Team List", link: "/admin/team"},
                { title: "Team Create", link: null }
            ]} />
        </Container>
        <Card className="mb-4">
            <Card.Header>
                <HeadingComponent type={'h4'} value={"Create New Team"} className={'float-start'}></HeadingComponent>
            </Card.Header>
            <Card.Body>
                <TeamForm submitEvent={submitHandler} loading={loading}/>
            </Card.Body>

        </Card>
    </>)
}

export default TeamCreate