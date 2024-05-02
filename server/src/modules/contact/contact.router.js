const ValidateRequest = require('../../middlewares/validate-request');
const mailSvc = require('../../services/mail.service');
const ContactModel = require('./contact.model');
const { contactSchema } = require('./contact.validator');
const CheckPermission = require("../../middlewares/rbac.middleware");
const CheckLogin = require("../../middlewares/auth.middleware");

const router = require('express').Router();

router.post('/', ValidateRequest(contactSchema), 
    async (req, res, next) => {
        try {
            const data = req.body;

            const contact = new ContactModel(data);
            const response = await contact.save();
            await mailSvc.emailSend(data.email, "Lookscout received your query!", `
                    <div style="font-family: Arial, sans-serif; line-height: 1.6; background-color: #f4f4f4; margin: 0; padding: 0; max-width: 600px; margin: 20px auto; background: #fff; padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                        <h1 style="color: #333;">Dear ${data.name},</h1>
                        <p style="color: #555;">We have received your queries. Our team will review and be back to you soon! Thank you for your patience.</p>
                        <div style="margin-top: 20px;">
                            <p>Regards,</p>
                            <p>Lookscout Team</p>
                        </div>
                    </div>`
            )
            console.log('here')

            res.json({
                result: response,
                message: "Query received",
                meta: null
            })
        }
        catch (except) {
            next(except)
        }
    })

router.get('/', CheckLogin,
    CheckPermission('admin'),
    async(req, res, next)=>{
        try{
            const response = await ContactModel.find().sort({_id: "desc"});
            res.json({
                result: response,
                message: "All contact data fetched",
                meta: null
            })
        }
        catch(except){
            next(except)
        }
    })

router.delete('/:id', CheckLogin,
    CheckPermission('admin'),
    async(req, res, next)=>{
        try{
            const response = await ContactModel.findByIdAndDelete(req.params.id);
            res.json({
                result: response,
                message: "All contact data fetched",
                meta: null
            })
        }
        catch(except){
            next(except)
        }
    }
    )

module.exports = router;