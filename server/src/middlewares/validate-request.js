const ValidateRequest = (schema)=>{
    return (req, res, next)=>{
        try{
            let payload = req.body;
            schema.parse(payload);
            
            next();
        }
        catch(excpt){
            next(excpt);
        }
    }
}

module.exports = ValidateRequest;