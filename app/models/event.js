const mongoose = require('mongoose')

const Schema = mongoose.Schema

const eventSchema = new Schema({
   
    eventName : {
        type:String,
        required:true
    },
    eventDate:{
        type:String,
        required:true
    },
    eventTime:{
        type:String,
        required:true
    },
    eventType:{
        type:String,
        required:true
    },
    eventPlace:{
        type:String,
        required:true
    },
    ticketCost:{ 
        type:Number,
        required:true
    },
    maxParticipants:{
        type:Number,
        required:true
    }
})

const Event = mongoose.model('Event',eventSchema)

module.exports = {
    Event
}