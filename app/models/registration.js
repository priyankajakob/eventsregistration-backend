const mongoose = require('mongoose')

const Schema = mongoose.Schema

const registrationSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    event : {
        type:Schema.Types.ObjectId,
        ref:'Event',
        required:true
    },
    registrationDate:{
        type:String,
        required:true
    },
    registrationType:{
        type:String,
        enum : ['Self','Group','Corporate','Others']
    },
    noOfTickets:{
        type:Number,
        required:true
    },
    estimateCost:{ //we need to calculate costOfEvent * noOfTickets
        type:Number
    },
    registrationName:{
        type:String
    }
})

const Registration = mongoose.model('Registration',registrationSchema)

module.exports = {
    Registration
}