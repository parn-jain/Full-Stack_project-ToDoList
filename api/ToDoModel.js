const mongoose = require('mongoose');

const ToDoSchema = mongoose.Schema(
    {
        userId:{
            type: mongoose.Schema.Types.ObjectId,
             ref:"userModel",
             required: true,             
        },
        desc:{
            type: String,
            // required: true
        },
        Done:{
            type:Boolean,
            default: false,
            required: true
        }

    }
) ;


const ToDoModel =  mongoose.model("ToDoModel",ToDoSchema)

module.exports = ToDoModel;