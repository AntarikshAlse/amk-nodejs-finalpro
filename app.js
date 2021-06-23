const express = require('express');
const instituteRout = require('./api/routes/institute');
const courseRout = require('./api/routes/course');
const userRout = require('./api/routes/user');
const studentRoute = require('./api/routes/student');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();
mongoose.connect("mongodb+srv://nodejs-institute:"+process.env.MONGO_ATLAS_PW+"@cluster0.tpscu.mongodb.net/test",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
})

app.use(morgan("dev"));  
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//handling CORS error
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers",'Origin,X-Requested-With,Content-Type,application/json,Authorization,Accept');
    if(req.method === "OPTION"){
        res.header("Access-Control-Allow-Methods","PUT,POST,PATCH,OPTIONS,DELETE,GET");
        return res.status(200).json();
    }
    next();
});

app.use("/institutes",instituteRout);
app.use("/courses",courseRout);
app.use("/users",userRout);
app.use("/students",studentRoute);


app.use((req,res,next)=>{
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});
app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message || "server side error"
        }
    })
})
module.exports = app;