const {User} = require('../models/user')
const _ = require('lodash')

module.exports.list=(req,res)=>{
    User.find()
    .then(users=>{
        res.json(users)
    })
    .catch(err=>{
        res.json({error:err})
    })
}

module.exports.listEventAgents=(req,res)=>{
    const role = "Agent"
    User.find({role})
    .then(user=>{
        if(user)
        res.json(user)
        else
        res.json({})
    })
    .catch(err=>{
        res.json({error:err})
    })
}

module.exports.listCustomers=(req,res)=>{
    const role = "Customer"
    User.findOne({role})
    .then(user=>{
        if(user)
        res.json(user)
        else
        res.json({})
    })
    .catch(err=>{
        res.json({error:err})
    })
}

module.exports.create=(req,res)=>{
    const {body}=req
    if(((body.role=='Agent' || body.role=='Customer') && body.cardNo) || (body.role=='Admin'))
    {
        const user = new User(body)
        user.save()
        .then(user=>{
            res.json(_.pick(user,['_id','fullName','email','createdAt']))
        })
        .catch(err=>{
            res.json({error:err})
        })
    }
    else if(body.cardNo){
        res.json({error:"Role is mandatory to be given"})
    }
    else {
        res.json({error:"ID Card No is mandatory to be given"})
    }
}

module.exports.show=(req,res)=>{
    const {id}=req.params
    User.findOne({_id:id})
    .then(user=>{
        if(user)
        res.json(user)
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
    User.findByIdAndUpdate(id,body,{new:true,runValidators:true})
    .then(user=>{
        console.log(user)
        if(user){
            res.json(user)
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
    User.findByIdAndDelete(id)
    .then(user=>{
        if(user)
            res.json(user)
        else
            res.json({})
    })
    .catch(err=>{
        res.json({error:err})
    })
}

// module.exports.registeredEventsByUser=(req,res)=>{
//     const userId=req.params.user
//     User.findOne({user:userId})
//     .then(registrations=>{
//         if(registrations){
//             res.json(registrations)
//         }
//         else
//            res.json({})
//     })
//     .catch(err=>{
//         res.json({error:err})
//     })
// }