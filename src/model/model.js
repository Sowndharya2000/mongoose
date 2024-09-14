const mongoose = require("mongoose");
const empSchema = new mongoose.Schema({
    regd_no:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,   

    },
    email:{
        type:String,
        required:true,    
    },
    branch:{
        type:String,
        required:true,    
    }
});
const empcollection = new mongoose.model("empcollection",empSchema);
module.exports = empcollection;