const express = require('express')

const router = express.Router()
const authcontroll = require('../controller/authcontroll')



router.post('/',authcontroll.createaccout)

router.post('/login',authcontroll.login)
   


module.exports=router
