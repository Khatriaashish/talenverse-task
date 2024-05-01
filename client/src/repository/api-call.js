import HttpService from "./http.service";

class ApiCall extends HttpService{
    //auth
    signup = async(data)=>{
        try {
            const response = await this.postRequest("v1/auth/signup", data);
            return response;
        } catch (error) {
            throw error;
        }
    }

    login = async(data)=>{
        try {
            const response = await this.postRequest("v1/auth/login", data);
            localStorage.setItem('_au', response.result.token);
            localStorage.setItem('_rf', response.result.refreshToken);
            return response;
        } catch (error) {
            throw error;
        }
    }

    //contact
    sendContactMessage = async(data)=>{
        try {
            const response = await this.postRequest("v1/contact", data);
            return response;
        } catch (error) {
            throw error;
        }
    }

    //faq
    fetchFaq = async()=>{
        try {
            const response = await this.getRequest("v1/faq");
            return response;
        } catch (error) {
            throw error;
        }
    }

    //team
    fetchTeam = async()=>{
        try {
            const response = await this.getRequest("v1/team");
            return response;
        } catch (error) {
            throw error;
        }
    }
}

const apiCall = new ApiCall();
export default apiCall;