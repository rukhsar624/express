import UserModel from "../models/User.js";
import bcrypt from "bcrypt";
// import { Jwt } from "jsonwebtoken";

class userController {
    static userRegistration = async (req, res) => {
        const { name, email, password, password_confirmation, tc } = req.body
        const user = await UserModel.findOne({ email: email })
        if (user) {
            res.send({ "status": "failed", "message": "Email already exists" })
        } else {
            if (name && email && password && password_confirmation && tc) {
                if (password === password_confirmation) {
                    try {
                        const salt = await bcrypt.genSalt(10)
                        const hashPassword = await bcrypt.hash(password,salt) 
                        const doc = new UserModel({
                            name: name,
                            email: email,
                            password: hashPassword,
                            tc: tc
                        })
                        await doc.save()
                        res.send({"status":"Success" ,"message":"Registration Success"})
                    } catch (error) {
                        console.log(error);
                        res.send({ "status": "failed", "message": "Unable to Register" })
                    }

                } else {
                    res.send({ "status": "failed", "message": "Password and Confirm password does not match" })
                }
            } else {
                res.send({ "status": "failed", "message": "Email already exists" })
            }
        }
    }
}
export default userController