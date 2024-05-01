const ValidateRequest = require('../../middlewares/validate-request');
const CheckLogin = require('../../middlewares/auth.middleware');
const CheckPermission = require('../../middlewares/rbac.middleware');
const { createTeamSchema } = require('./team.validator');
const TeamModel = require('./team.model');
const uploader = require('../../middlewares/uploader.middleware');
const router = require('express').Router();

const dirSetup = (req, res, next)=>{
    req.uploadDir = "public/uploads/team";
    next()
}

router.route('/')
    .post(CheckLogin, 
        CheckPermission('admin'),
        dirSetup,
        uploader.single('image'),
        ValidateRequest(createTeamSchema),
        async (req, res, next)=>{
            try {
                const data = req.body;
                data.image = process.env.BACKEND_URL + "/asset/team/" + req.file.filename;
                const Team = new TeamModel(data);
                const response = await Team.save();
                res.json({
                    result: response,
                    message: "Team created",
                    meta: null
                })
            } catch (error) {
                next(error)
            }
        }
    )
    .get(async(req, res, next)=>{
        try {
            const response = await TeamModel.find();
            res.json({
                result: response,
                message: "All Team fetched",
                meta: null
            })
        } catch (error) {
            next(error)
        }  
    })

router.route("/:id")
    .get(async(req, res, next)=>{
        try {
            const response = await TeamModel.findOne({_id: req.params.id});
            res.json({
                result: response,
                message: "Team fetched",
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
            const response = await TeamModel.deleteOne({_id: req.params.id});
            res.json({
                result: response,
                message: "Team Deleted",
                meta: null
            })
        } catch (error) {
            next(error)
        }  
    })
    .put(CheckLogin,
        CheckPermission('admin'),
        dirSetup,
        uploader.single('image'),
        ValidateRequest(createTeamSchema),
        async(req, res, next)=>{
        try {
            const body = req.body;
            body.image = process.env.BACKEND_URL + "/asset/team/" + req.file.filename??req.authUser.image;
            const response = await TeamModel.updateOne({_id: req.params.id}, body);
            res.json({
                result: response,
                message: "Team Deleted",
                meta: null
            })
        } catch (error) {
            next(error)
        }  
    })

module.exports = router