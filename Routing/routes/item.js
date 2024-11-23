//store item specific routes
const express=require('express')
const router=express.Router()


//Get Request
router.get('/',(req,res)=>{
    //res.send("Got a GET Requests")
    res.sendFile('./Dummy.html',{root:__dirname})
    
});

//Post Request
router.post('/items',(req,res)=>{
    //res.send("Got a PUSH Requests")
    res.json({x:1,y:2,z:3})
})

//PUT Request
router.put('/items/:id',(req,res)=>{
    res.send("Got a PUT Requests")
})

//DELETE Request
router.delete('/items/:id',(req,res)=>{
    res.send("Got a DELETE Requests")
})


module.exports=router