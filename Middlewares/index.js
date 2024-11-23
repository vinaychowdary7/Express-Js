const express=require("express")
const app=express();
const port=3000;

//loading middleware into  the app
//inbuilt middleware
app.use(express.json())


//middleware -logging,auth,validation
//creation of middleware
const loggingmiddleware=function(req,res,next){
    console.log('Logging into it');
    next();
}
//loading middleware into appliction


const authmiddleware=function(req,res,next){
    console.log("Authentication is done");
    next();
    //res.send("Back to home again");
}


const validationmiddleware=function(req,res,next){
    console.log("Validation is done");
    next();
}
app.use(loggingmiddleware);
app.use(authmiddleware);
app.use(validationmiddleware);

app.get("/",(req,res)=>{
    console.log("In routing handler")
    console.log(req.body) 
    res.send("In get Request")
})

app.listen(port,()=>{
    console.log(`App is running at : http://localhost:${port}`)
})