const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();
const User = require('../models/umodel');
const bcrypt = require('bcrypt')

router.get('/',async(req,res,next)=>{
    try{
        const data =await User.find();
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
   
});


router.post('/signup', async (req, res, next) => {
    
    try {
        const userEmail = await User.find({email:req.body.email})
        if(userEmail.length>=1){
            res.status(422).json({
                message:"email already exist"
            })
        }else{
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
                res.status(404).json({
                    message: "somthing went wrong",
                    error: err
                })
            } else {
                const data = new User({
                    _id: mongoose.Types.ObjectId(),
                    email: req.body.email,
                    password: hash
                })
                const userData = data.save();
                res.status(200).json({
                    code: 1,
                    data: data,
                    message: "User Created successfully",
                    error: null
                })
            }

        })
    }
}
     catch (err) {
        res.status(500).json({
            code: 0,
            data: null,
            message: null,
            error: err
        })

    }
});

router.delete('/:userId',async(req,res,next)=>{
    try{
            const data = await User.findByIdAndDelete(req.params.userId);
                res.status(200).json({
                    code:1,
                    message:"data deleted Successfully",
                    data:null,
                    error:null
                })
            
    }catch(err){
        res.status(500).json({
            code:0,
            message:"Something went wreong",
            data:null,
            error:null
        })

    }
})



module.exports = router;