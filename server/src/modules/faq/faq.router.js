const ValidateRequest = require('../../middlewares/validate-request');
const CheckLogin = require('../../middlewares/auth.middleware');
const CheckPermission = require('../../middlewares/rbac.middleware');
const { createFaqSchema } = require('./faq.validator');
const FAQModel = require('./faq.model');
const { default: mongoose } = require('mongoose');
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

            const updatedResponse = response.map(faq => {
                const createdTime = new Date(faq.createdAt);
                const currentTime = new Date();
                const timeDifference = currentTime - createdTime;
                let updatedAt;
    
                if (timeDifference < 3600000) { // Less than an hour
                    updatedAt = Math.floor(timeDifference / 60000) + " minutes ago";
                } else if (timeDifference < 86400000) { // Less than a day
                    updatedAt = Math.floor(timeDifference / 3600000) + " hours ago";
                } else if (timeDifference < 2592000000) { // Less than a month
                    updatedAt = Math.floor(timeDifference / 86400000) + " days ago";
                } else if (timeDifference < 31536000000) { // Less than a year
                    updatedAt = Math.floor(timeDifference / 2592000000) + " months ago";
                } else { // More than a year
                    updatedAt = Math.floor(timeDifference / 31536000000) + " years ago";
                }
                return {
                    _id: faq._id,
                    question: faq.question,
                    answer: faq.answer,
                    createdTime: faq.createdAt,
                    updatedAt: updatedAt
                };
            });
            res.json({
                result: updatedResponse,
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
            const faq = await FAQModel.findById(req.params.id);
            const updatedResponse = () => {
                const createdTime = new Date(faq.createdAt);
                const currentTime = new Date();
                const timeDifference = currentTime - createdTime;
                let updatedAt;
    
                if (timeDifference < 3600000) { // Less than an hour
                    updatedAt = Math.floor(timeDifference / 60000) + " minutes ago";
                } else if (timeDifference < 86400000) { // Less than a day
                    updatedAt = Math.floor(timeDifference / 3600000) + " hours ago";
                } else if (timeDifference < 2592000000) { // Less than a month
                    updatedAt = Math.floor(timeDifference / 86400000) + " days ago";
                } else if (timeDifference < 31536000000) { // Less than a year
                    updatedAt = Math.floor(timeDifference / 2592000000) + " months ago";
                } else { // More than a year
                    updatedAt = Math.floor(timeDifference / 31536000000) + " years ago";
                }
                return {
                    _id: faq._id,
                    question: faq.question,
                    answer: faq.answer,
                    createdTime: faq.createdAt,
                    updatedAt: updatedAt
                };
            };
            res.json({
                result: updatedResponse(),
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