const Institute = require('../models/imodel');
const mongoose = require('mongoose');

exports.get_institute = async (req, res, next) => {
    try {
        const data = await Institute.find();
        if (data) {
            res.status(200).json(data)
        }else{
            res.status(404).json({
                code: 0,
                error: null,
                data: null,
                message: "Page not found"
            })
        }
    }
    catch (err) {
        res.status(500).json({
            code: 0,
            error: null,
            data: null,
            message: null
        })

    }
};

exports.create_institute = async (req, res, next) => {
    try {
        const institute = new Institute({
            _id: mongoose.Types.ObjectId(),
            instituteName: req.body.instituteName
        })
        const data = await institute.save()
        res.status(200).json({
            code: 1,
            data: data,
            message: null,
            error: null
        })
    }
    catch (err) {
        res.status(500).json({
            code: 0,
            data: null,
            message: null,
            error: err,
        })
    }
};

exports.get_institute_byId = async(req,res,next)=>{
    try{
        const data =await Institute.findById(req.params.instituteId);
        if(data){
            res.status(200).json(data)
        }else{
            res.status(404).json({
                code:0,
                data:null,
                message:"No data found",
                error:null
            })
        }
    } catch (err) {
        res.status(500).json({
            code:0,
            data:null,
            message:"something went wrong",
            error:err
        })
    }
};

exports.delete = async(req,res,next)=>{
    try{
        const data = await Institute.findByIdAndDelete(req.params.instituteId);
        res.status(200).json({
            code:1,
            data:data,
            message:null,
            error:null
        })
        }catch(err){
            res.status(500).json({
                code:0,
                data:null,
                message:"Something went wreong",
                error:err
            })
    
        }
};

