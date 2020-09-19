const mongoose = require('./config/database')
const express = require('express')
const cors = require('cors')
const {router} = require('./config/routes')

const app = express()
const port = 3010

app.use(cors())
app.use(express.json())

app.use('/',router)

app.listen(port,()=>{
    console.log('listening on port ',port)
})