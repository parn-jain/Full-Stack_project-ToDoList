const mongoose = require("mongoose");
const ToDoModel = require("./ToDoModel");

const userSchema = mongoose.Schema({
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
    todos:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ToDoModel"
    }],

    pass:{
        type:String,
        require:true,
    },
    Cpass:{
        type:String,
        require:true,
        validate:function(){
            return this.pass == this.Cpass;
        }
    }
})

userSchema.pre('save',function(){
    console.log("before saving")
    this.Cpass=undefined;
})


const userModel = mongoose.model('userModel',userSchema);

module.exports = userModel;
