import HttpService from "../../../repository/http.service"

class TeamService extends HttpService{
    teamLists = async()=>{
        try{
            const data = await this.getRequest(
                'v1/team',
                {auth: true}
            )
            return data;
        }
        catch(except){
            throw except;
        }
    }

    storeTeam = async(data)=>{
        try{
            let response = await this.postRequest(
                'v1/team',
                data,
                {auth: true, file: true}
            )
            return response
        }
        catch(except){
            throw except
        }
    }

    deleteById =async(id)=>{
        try{
            let response = await this.deleteRequest(
                'v1/team/' + id,
                {auth: true}
            )
            return response
        }
        catch(except){
            
        }
    }

    updateTeam = async(id, data)=>{
        try{
            let response = await this.putRequest(
                'v1/team/' + id,
                data,
                {auth: true, file: true}
            )
            return response
        }
        catch(except){
            
        }
    }

    getTeamById = async(id)=>{
        try{
            let response = await this.getRequest(
                'v1/team/' + id,
                {auth: true}
            )
            return response
        }
        catch(except){
            
        }
    }
}

const teamSvc = new TeamService();
export default teamSvc