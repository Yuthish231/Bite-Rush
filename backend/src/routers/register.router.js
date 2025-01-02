import { Router } from "express";
import { UserModel } from "../Models/user.model.js";
import { BAD_REQUEST } from "../constants/httpStatus.js";
import bcrypt from "bcryptjs";

const registerRouter = Router();
// Save the new users in the DB
registerRouter.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        console.log(req.body)
        console.log(username,email,password)
        // Check if all fields are provided
        if (!username || !email || !password) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }
        // Check if a user with the same email already exists
        const userExists = await UserModel.findOne({ email });
        if (userExists) {
            return res.status(400).json({ success: false, message: 'Email already registered' });
        }

        //Hashing th password

        const salt = await bcrypt.genSalt(10); // Generate salt
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user and save it to the database
    
        const user = new UserModel({ username, email, password:hashedPassword });
        await user.save();
        res.status(201).json({ success: true, message: "User created successfully" });

    } catch (error) {
        res.status(BAD_REQUEST).json({ success: false, message: error.message });
    }
});
export default registerRouter;
