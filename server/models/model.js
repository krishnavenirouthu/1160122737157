const mongoose = require('mongoose')


const modelSchema = new mongoose.Schema
({
    id:{
    type:Number,
    required:true
   },
    name: 
    {
        type: String,
        required: true
    },
    dept:
    {
        type:String,
        required:true
    },
    tech: 
    {
        type: String,
        required: true
    },
    sub: 
   {
        type: Boolean,
        required: true,
        default: false
    },
    email:
    {
        type:String,
        required:true
    }

})

module.exports = mongoose.model('Model',modelSchema)
