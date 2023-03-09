const mongoose= require('mongoose')

const adminSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    pass:{
        type:String,
        require:true,
    },
    
})

const adminModel = mongoose.model('adminModel',adminSchema);
module.exports = adminModel;
