const express = require('express')
const User = require("../model/user")
const bcrypt = require('bcryptjs')




class authcontroll{
    createaccout(req,res,next){
        const emailexist = req.body.email
        User.findOne({
            email : emailexist
        })

        .then(data=>{
            if(data)
                {res.send('email da ton tai')}
            else{const user =new User(
                {
                   name : req.body.name,
                   email: req.body.email,
                   password :req.body.password
                    
                }
            );
            
            user.save()
            .then(()=>res.send(user))}
            
        })
        
    }
    login(req,res,next){
        const email1 = req.body.email
        const password1 = req.body.password

        User.findOne({
            email : email1,
            password : password1
        })
        .then(data=>{
            if (data){
                res.send('wellcomw')
            }
            else{
                res.send('login again')
            }
        })

        
    }
}
module.exports= new authcontroll