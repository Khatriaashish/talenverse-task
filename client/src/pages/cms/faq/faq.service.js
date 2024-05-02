import HttpService from "../../../repository/http.service"

class FaqService extends HttpService{
    faqLists = async()=>{
        try{
            const data = await this.getRequest(
                'v1/faq',
                {auth: true}
            )
            return data;
        }
        catch(except){
            throw except;
        }
    }

    storeFaq = async(data)=>{
        try{
            let response = await this.postRequest(
                'v1/faq',
                data,
                {auth: true}
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
                'v1/faq/' + id,
                {auth: true}
            )
            return response
        }
        catch(except){
            
        }
    }

    updateFaq = async(id, data)=>{
        try{
            let response = await this.putRequest(
                'v1/faq/' + id,
                data,
                {auth: true}
            )
            return response
        }
        catch(except){
            
        }
    }

    getFaqById = async(id)=>{
        try{
            let response = await this.getRequest(
                'v1/faq/' + id,
                {auth: true}
            )
            return response
        }
        catch(except){
            
        }
    }
}

const faqSvc = new FaqService();
export default faqSvc