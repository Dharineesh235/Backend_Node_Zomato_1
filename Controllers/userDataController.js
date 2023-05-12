const UserData=require('../Models/userDataModel');

exports.postUserData=(req,res)=>{
    console.log(req.body);
    email=req.body.userEmail
    filter={user_email:email}
    UserData.find(filter).then(result=>{
        if(result.length<=0){
            UserData.insertMany({user_name:req.body.userName, user_email:req.body.userEmail, user_password:req.body.userPassword}).then((result)=>{
                res.send({
                    message: "Account Created",
                    data : result
                });
            })
        }
        else res.send({message : "user exists"})
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