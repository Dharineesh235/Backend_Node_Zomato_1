const UserData=require('../Models/userDataModel');

exports.postUserData=(req,res)=>{
    console.log(req.body);
    UserData.insertMany({user_name:req.body.name, user_email:req.body.email, user_password:req.body.password}).then((result)=>{
        res.send(result);
    })
}
exports.getAllUsers=(req,res)=>{
    console.log(req.body);
    filter={
        user_email : req.body.userEmail,
        user_password : req.body.passWord
    }
    UserData.find(filter).then((result)=>{
        console.log(result);
       if(result.length > 0){
        res.send({
            data : result,
            message : "Log in Successful",
        })
       }else{
        res.send({
            data : [],
            message : "Failed to Log in",
        })
       }
    })
}