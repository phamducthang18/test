const express =require('express')
const authRoutes = require('./routes/auth')
const mongoose =require('mongoose')
const dotenv = require('dotenv')
const app =express()

dotenv.config()

mongoose.connect(
    process.env.db_connet
    ,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("kết nối thành công")

app.use(express.json())
app.use('/',authRoutes)




app.listen(3000,()=>console.log('app running in post 3000'))