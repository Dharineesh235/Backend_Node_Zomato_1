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
            UserData.find(filter_pass).then(result_pass=>{
                console.log(result_pass);
                if(result_pass.length > 0){
                    res.send({
                    data : [{
                                user_email:result_pass[0].user_email,
                                user_name : result_pass[0].user_name
                            }],
                    message : "Log in Successful",
                    })
                }else{
                    res.send({
                        data : [],
                        message : "Incorrect Password !"
                    })
                }
            })
        }else{
        res.send({
            data : [],
            message : "Invalid Email !",
        })
       }
    })
}