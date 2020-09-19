const User = require('../models/user')

const onlyAdminAccess =   (req,res,next)=>{
    const token = req.header('x-auth')
    User.findByToken(token)
        .then(user=>{
            if(user){
                req.user = user
                req.token = token
                if(role=="Admin")
                next()
                else
                res.status('401').send({notice:'you are not allowed to access this link'})
            }
            else {
                res.status('401').send({notice:'you are not allowed to access this link'})
            }
        })
        .catch(err=>{
            res.status('401').send(err)
        })

}

module.exports= { onlyAdminAccess }