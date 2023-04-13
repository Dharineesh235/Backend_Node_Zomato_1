const mongoose=require('mongoose');

const userDataScheme=new mongoose.Schema({
    user_name:{
        type:String,
        required:true
    },
    user_email:{
        type:String,
        required:true
    },
    user_password:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("UserData",userDataScheme,'userData');