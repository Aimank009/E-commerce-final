const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://aiman:22124004@cluster0.nramjcn.mongodb.net/?retryWrites=true&w=majority'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}