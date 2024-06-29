import {User} from "../Models/user.js";
export const userRegister=async(req,res)=>{
    // console.log(req.body);
    const {name,email}=req.body
    try {
        let user=await User.create({name,email})
        console.log("user register succesfully",user);
        res.send('<h1>Your form has been submitted...</h1>')
    } catch (error) {
        res.send("<h1>error</h1>")
    }


};