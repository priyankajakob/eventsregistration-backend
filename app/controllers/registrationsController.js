const {Registration} = require('../models/registration')
const {Event}=require('../models/event')

module.exports.list=(req,res)=>{
    Registration.find().populate('user').populate('event')
    .then(registrations=>{
        res.json(registrations)
    })
    .catch(err=>{
        res.json({error:err})
    })
}

module.exports.create=(req,res)=>{
    const {body}=req
    //console.log(body.event)
    Event.findOne({_id:body.event})
    .then(event=>{
        // console.log(event.ticketCost)
        const estimateCost = event.ticketCost * body.noOfTickets
        body.estimateCost=estimateCost
        // console.log("here",body)
            const registration = new Registration(body)
             registration.save()
                    .then(registration=>{
                        res.json(registration)
                    })
                    .catch(err=>{
                        res.json({error:err})
                    })
    })
    .catch(err=>{
        res.json({error:err})
    })
}

module.exports.show=(req,res)=>{
    const {id}=req.params
    Registration.findOne({_id:id}).populate('user').populate('event')
    .then(registration=>{
        if(registration)
        res.json(registration)
        else
        res.json({})
    })
    .catch(err=>{
        res.json({error:err})
    })
}

module.exports.update=(req,res)=>{
    const {id}=req.params
    const {body}=req
    Registration.findByIdAndUpdate(id,body,{new:true,runValidators:true})
    .then(registration=>{
        if(registration){
            res.json(registration)
        }
        else {
            res.json({})
        }
    })
    .catch(error=>{
        res.json({error:err})
    })
}

module.exports.destroy=(req,res)=>{
    const {id}=req.params
    Registration.findByIdAndDelete(id)
    .then(registration=>{
        if(registration)
            res.json(registration)
        else
            res.json({})
    })
    .catch(err=>{
        res.json({error:err})
    })
}