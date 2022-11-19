const mongoose = require("mongoose");

const Schema = mongoose.Schema;


  const User = new Schema({
    name:{
      type : String,
      require : true,
      min :6,
      max :255
    },
    email:{
      type : String,
      require : true,
      min :6,
      max :255
    },
    password:{
      type : String,
      require : true,
      min :6,
      max :255
    },
   
  });

module.exports  = mongoose.model('User', User);