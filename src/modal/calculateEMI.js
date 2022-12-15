const mongoose = require("mongoose");

const EMI = new mongoose.Schema({
    loan: { type: Number, required: true },
    rate:{type:Number,required:true},
    months:{type:Number,required:true},
})

const calculateEmi = mongoose.model("calculateEmi", EMI)
module.exports=calculateEmi