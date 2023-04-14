const mongoose = require("mongoose");
const employeeSchema =new mongoose.Schema(
    {
        firstName:{
            type:String,
            
        },
        lastName:{
            type:String,
            
        },  
        // gender:{
        //     type:String,
        //     required:true
        // },  
        email:{
            type:String,
            
        },  
        phone:{
            type:Number,
            
        }, age:{
            type:Number,
            
        }, password:{
            type:String,
           
        },
        confirmPassword:{
            type:String,
            
        }

    }
)

const Register = new mongoose.model("products",employeeSchema );
module.exports= Register;