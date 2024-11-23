const express=require('express')
const app=express()

const port=3000

const route=require('./routes/route')

app.use('/api',route)

app.listen(port,()=>{
    console.log(`App is running at http://localhost:${port}`)
})