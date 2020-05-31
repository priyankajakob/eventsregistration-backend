const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    fullName:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        minlength:10
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minlength:6,
        maxlength:128
    },
    cardNo:{
        type:String
    }
})

const User = mongoose.model('User',userSchema)

module.exports= {
    User
}