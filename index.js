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


























// const firstDoc = new Movie ({
//     name:"KGF",
//     description:"this is the best movie",
//     duration:180,
//     ratings:4

// })
// const SecondDoc = new Movie ({
//     name:"interstellar",
//     description:"this is the best movie",
//     duration:180,
//     ratings:4

// })
// firstDoc.save()
// .then(doc => {console.log(doc)})
// .catch(err => {console.log(err)})

// SecondDoc.save()
// .then(doc => {console.log(doc)})
// .catch(err => {console.log(err)})
