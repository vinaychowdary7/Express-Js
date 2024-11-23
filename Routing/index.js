const express = require('express')
const app = express()
const port = 3000

const items=require('./routes/item')
const birds=require('./routes/birds')
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

//Requests 
// //Get Request
// app.get('/',(req,res)=>{
//     //res.send("Got a GET Requests")
//     res.sendFile('./Dummy.html',{root:__dirname})
    
// });

// //Post Request
// app.post('/items',(req,res)=>{
//     //res.send("Got a PUSH Requests")
//     res.json({x:1,y:2,z:3})
// })

// //PUT Request
// app.put('/items/:id',(req,res)=>{
//     res.send("Got a PUT Requests")
// })

// //DELETE Request
// app.delete('/items/:id',(req,res)=>{
//     res.send("Got a DELETE Requests")
// })

app.use('/api',items);
app.use('/fly',birds)

app.listen(port, () => {
  console.log(`Vinay app listening on port ${port}`)
})