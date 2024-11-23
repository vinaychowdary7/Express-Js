const express = require('express')
const router = express.Router()

// middlewares
const auth=function(req,res,next){
    console.log("I am inside auth middleware")
    req.user={userId:1,role:"admin"};

    if(req.user){
        next();
    }
    else{
        res.json({
            success:false,
            message:"Not valid user"
        })
    }
}

const isStudent=function(req,res,next){
    console.log("I am inside student middleware");
    if(req.user.role==="Student"){
        next();
    }
    else{
        res.json({
            success:false,
            message:"Access Denid,this route is only for students"
        })
    }
}

const isAdmin=function(req,res,next){
    console.log("I am inside admin middleware");
    if(req.user.role==="admin"){
        next();
    }
    else{
        res.json({
            success:false,
            message:"Access Denid,this route is only for admins"
        })
    }
}

router.get('/student',auth,isStudent,(req,res)=>{
    console.log("I am inside student route")
    res.send("Students specific page")
})

router.get('/admin',auth,isAdmin,(req,res)=>{
    console.log("I am inside admin route")
    res.send("Admins specific page")
})

module.exports = router