const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    
    owner : {type : mongoose.Schema.Types.ObjectID , ref:'users'},
    name : {type : String , required : true} ,
    image : {type : String , required : true} , 
    capacity : {type : Number , required : true},
    fuelType : {type : String , required : true} , 
    bookedTimeSlots : [
        {
            from : {type : String , required : true},
            to : {type : String , required : true}
        }
    ] , 

    rentPerHour : {type : Number , required : true},
    district: {
        type : String ,
         
    }
    

}, {timestamps : true}

)
const carModel = mongoose.model('cars' , carSchema)
module.exports = carModel