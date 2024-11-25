const express = require('express')
const connectDB=require('./config/db')
const productRoute=require('./routes/productsRoutes')
const app = express()
const port = 3000

connectDB();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api',productRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})