import UsersModel from "../model/UsersModel.js";
import {TokenEncode} from "../utility/tokenUtility.js";

export const Registration=async(req,res)=>{
    try {
        let reqBody=req.body;
        let data = await UsersModel.create(reqBody)
        console.log(data)
        return res.json({status:"success","Message":"User registered successfully", data})
    }catch(err){
        return res.json({status:"fail","Message":err.toString()})
    }
}


export const Login=async(req,res)=>{

    try {
        let reqBody=req.body;
        let data=await UsersModel.findOne(reqBody)
        //console.log(data)
        if(data===null){
            return res.json({status:"fail","Message":"User not found"})
        }
        else {
            // Login Success Token Encode
            let token=TokenEncode(data['email'],data['_id'])
            return res.json({status:"success",Token:token,"Message":"User Login successfully"})
        }

    }
    catch(err){
        return res.json({status:"fail","Message":err.toString()})
    }

}



export const ProfileDetails=async(req,res)=>{
    try {
        let user_id=req.headers['user_id'];
        let data=await UsersModel.findOne({"_id":user_id})
        return res.json({status:"success","Message":"User ProfileDetails successfully",data:data})
    }
    catch(err){
        return res.json({status:"fail","Message":err.toString()})
    }
}

