const {User} = require('../models/user')

module.exports.list=(req,res)=>{
    User.find()
    .then(users=>{
        res.json(users)
    })
    .catch(err=>{
        res.json({error:err})
    })
}

module.exports.create=(req,res)=>{
    const {body}=req
    const user = new User(body)
    user.save()
    .then(user=>{
        res.json(user)
    })
    .catch(err=>{
        res.json({error:err})
    })
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