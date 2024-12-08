const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})
const app = require('./app')

const port = process.env.PORT

mongoose.connect(process.env.CONN_STR)
.then((conn)=>{
    // console.log(conn)
    console.log("Connection Successfull")
}).catch((err)=>{
    console.log(err)
})



app.listen(port , ()=>{
    console.log('Server Is Started')
})

