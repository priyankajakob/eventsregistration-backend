const {Event} = require('../models/event')

module.exports.list=(req,res)=>{
    Event.find()
    .then(events=>{
        res.json(events)
    })
    .catch(err=>{
        res.json({error:err})
    })
}

module.exports.create=(req,res)=>{
    const {body}=req
    const event = new Event(body)
    event.save()
    .then(event=>{
        res.json(event)
    })
    .catch(err=>{
        res.json({error:err})
    })
}

module.exports.show=(req,res)=>{
    const {id}=req.params
    Event.findOne({_id:id})
    .then(event=>{
        if(event)
        res.json(event)
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
    Event.findByIdAndUpdate(id,body,{new:true,runValidators:true})
    .then(event=>{
        if(event){
            res.json(event)
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
    Event.findByIdAndDelete(id)
    .then(event=>{
        if(event)
            res.json(event)
        else
            res.json({})
    })
    .catch(err=>{
        res.json({error:err})
    })
}