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
    filter_email={
        user_email : req.body.userEmail,
    };
    filter_pass={
        user_email : req.body.userEmail,
        user_password : req.body.userPassWord,
    };
    UserData.find(filter_email).then((result_mail)=>{
        console.log(result_mail);
        if(result_mail.length > 0){

            if(result_mail[0].user_password == req.body.userPassWord){
                res.send({
                data : result_mail,
                message : "Log in Successful",
                })
            }
            else{
                res.send({
                    data : [],
                    message : "Incorrect Password !"
                })
            }
        }
       else
        {
        res.send({
            data : [],
            message : "Invalid Email !",
        })
       }
    })
}