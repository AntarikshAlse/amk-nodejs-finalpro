
const Course = require('../models/cmodel');
const mongoose = require('mongoose');


exports.get_course = async(req,res,next)=>{
    try{
    const data =await Course.find();
    if(data){
        res.status(200).json({
            code:1,
            data:data,
            message:null,
            error:null
        })
    }else{
        res.status(404).json({
            code:0,
            data:null,
            message:"page not found",
            error:null
        })
    }
    }catch(err){
    
    res.status(500).json({
            code:0,
            data:null,
            message:"somthing went wrong",
            error:null
        })
    
    }
};

exports.create_course =async (req, res, next) => {
    try {
        const course = new Course({
            _id: mongoose.Types.ObjectId(),
      courseName: req.body.courseName,
      courseFees: req.body.courseFees
        })
        const data = await course.save()
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

exports.get_course_byId = async(req,res,next)=>{
    try{
        const data =await Course.findById(req.params.courseId);
        if(data){
            res.status(200).json({
                code:1,
                data:data,
                message:null,
                error:null
            })
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

exports.delete_byId = async(req,res,next)=>{
    try{
        const data = await Course.findByIdAndDelete(req.params.courseId);
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

