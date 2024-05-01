const ValidateRequest = require('../../middlewares/validate-request');
const CheckLogin = require('../../middlewares/auth.middleware');
const CheckPermission = require('../../middlewares/rbac.middleware');
const { createFaqSchema } = require('./faq.validator');
const FAQModel = require('./faq.model');
const router = require('express').Router();

router.route('/')
    .post(CheckLogin, 
        CheckPermission('admin'), 
        ValidateRequest(createFaqSchema),
        async (req, res, next)=>{
            try {
                const data = req.body;
                const faq = new FAQModel(data);
                const response = await faq.save();
                res.json({
                    result: response,
                    message: "Faq created",
                    meta: null
                })
            } catch (error) {
                next(error)
            }
        }
    )
    .get(async(req, res, next)=>{
        try {
            const response = await FAQModel.find();
            res.json({
                result: response,
                message: "All Faq fetched",
                meta: null
            })
        } catch (error) {
            next(error)
        }  
    })

router.route("/:id")
    .get(async(req, res, next)=>{
        try {
            const response = await FAQModel.findOne({_id: req.params.id});
            res.json({
                result: response,
                message: "Faq fetched",
                meta: null
            })
        } catch (error) {
            next(error)
        }  
    })
    .delete(CheckLogin,
        CheckPermission('admin'),
        async(req, res, next)=>{
        try {
            const response = await FAQModel.deleteOne({_id: req.params.id});
            res.json({
                result: response,
                message: "Faq Deleted",
                meta: null
            })
        } catch (error) {
            next(error)
        }  
    })
    .put(CheckLogin,
        CheckPermission('admin'),
        ValidateRequest(createFaqSchema),
        async(req, res, next)=>{
        try {
            const body = req.body;
            const response = await FAQModel.updateOne({_id: req.params.id}, body);
            res.json({
                result: response,
                message: "Faq Deleted",
                meta: null
            })
        } catch (error) {
            next(error)
        }  
    })

module.exports = router