const mongoose = require('mongoose')

mongoose.Promise=global.Promise

const url = 'mongodb://localhost:27017/events-app'

mongoose.connect(url,{ useNewUrlParser: true })
.then(()=>{
    console.log("connected to db")
})
.catch((error)=>{
    console.log("error connecting",error)
})

module.exports=mongoose
