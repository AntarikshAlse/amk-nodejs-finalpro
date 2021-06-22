const Student = require('../models/smodel');
const mongoose = require('mongoose');
const Course = require('../models/cmodel');
const Institute = require('../models/imodel');



exports.get_student = async(req,res,next)=>{
    try{
        const data =await Student.find();
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
                message:null,
                error:null
            })
        }
    }catch(err){
        res.status(500).json({
            code:0,
            data:null,
            message:null,
            error:err
        })
    }
   
};

exports.create_student = async(req,res,next)=>{

    try{
   //         const course = await Course.findById(req.body.courseId);
   //         if(!course){ 
   //             res.status(404).json({
   //                 code:0,
   //                 message:"course not found",
   //                 error:null,
   //             })
   //          }
           // const institute =Institute.findById(req.body.instituteId);
           // if(!institute){
           //     res.status(404).json({
           //         code:0,
           //         message:"institute not found",
           //         error:null
           //     })
           // }

       const student = new Student({
               _id:mongoose.Types.ObjectId(),
      name:req.body.name,
      email:req.body.email,
      mobileNo:req.body.mobileNo,
      city:req.body.city,
      college:req.body.college,
      specialization:req.body.specialization,
      appearing:req.body.appearing,
      yearofPassing:req.body.yearofPassing,
      qualification:req.body.qualification,
      experience:req.body.experience,
      Course:req.body.Course,
      Institute:req.body.Institute,
      Advert:req.body.Advert,
      Batch:req.body.Batch
       })
       const data = await student.save();
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
           message:"Something went wrong",
           error:err
       })
   }
};

exports.get_student_byId = async(req,res,next)=>{
    try{
        const data =await Student.findById(req.params.studentId);
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

exports.delete = async(req,res,next)=>{
    try{
        const data = await Student.findByIdAndDelete(req.params.studentId);
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