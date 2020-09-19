const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require('validator')

const userSchema = new Schema({
    fullName:{
        type:String,
        required:[true,'Received null value for name']
    },
    mobile:{
        type:String,
        minlength:10,
        maxlength:10,
        required:[true,'Received null value for mobile'],
        validate:{
            validator: (value)=>{
                return validator.isNumeric(value)
            },
            message:()=>{
                return 'invalid mobile number'
            }
        }
    },
    email:{
        type:String,
        required:[true,'Received null value for email'],
        unique:true,
        validate:{
            validator: (value)=>{
                return validator.isEmail(value)
            },
            message: ()=>{
                return 'invalid email format'
            }
        }
    },
    password:{
        type:String,
        required:[true,'Received null value for password'],
        minlength:6,
        maxlength:128
    },
    cardNo:{
        type:String
    },
    role :{
        type:String,
        enum : ['Admin','Customer','Agent'],
        required:[true,'Received null value for role']
    },
    createdAt :{
        type:Date,
        default:Date.now()
    }
})

const User = mongoose.model('User',userSchema)

module.exports= {
    User
}