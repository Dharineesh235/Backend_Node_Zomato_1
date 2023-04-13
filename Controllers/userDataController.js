const UserData=require('../Models/userDataModel');

exports.postUserData=(req,res)=>{
    console.log(req.body);
    UserData.insertMany({user_name:req.body.name, user_email:req.body.email, user_password:req.body.password}).then((result)=>{
        res.send(result);
    })
}