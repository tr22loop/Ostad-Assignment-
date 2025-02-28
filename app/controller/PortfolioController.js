import PortfolioModel from "../model/PortfolioModel.js";
import mongoose from "mongoose";



export const CreatePortfolio=async(req,res)=>{
    try {
        let user_id=req.headers['user_id'];
        let reqBody=req.body;
        reqBody.user_id=user_id;
       let data = await PortfolioModel.create(reqBody);
        console.log(data)
        return res.json({status:"success","Message":"Portfolio Created successfully", data})
    }
    catch(err){
        return res.json({status:"fail","Message":err.toString()})
    }


}

export const UpdatePortfolio=async(req,res)=>{
    try {
        let reqBody=req.body;
        let user_id=req.params.id
        let data = await PortfolioModel.updateOne({"_id":user_id},reqBody)
        console.log(data)
        return res.json({status:"success","Message":"Portfolio Update successfully", data})
    } catch(err){
        return res.json({status:"fail","Message":err.toString()})
    }

}

export const ReadPortfolio = async (req, res) => {
    try {
        let user_id = req.headers['user_id']; // Get user_id from headers
        let data = await PortfolioModel.find({ user_id: user_id }); // Fetch all portfolios for the user
        return res.json({ status: "success", message: "Portfolio data fetched successfully", data });
    } catch (err) {
        return res.json({ status: "fail", message: err.toString() });
    }
}

export const DeletePortfolio=async(req,res)=>{

        try {
            let id=req.params.id;
            let user_id=req.headers['user_id']
            await PortfolioModel.deleteOne({"_id":id,"user_id":user_id})
            return res.json({status:"success","Message":"User DeleteTask successfully"})
        }
        catch(err){
            return res.json({status:"fail","Message":err.toString()})
        }

}

