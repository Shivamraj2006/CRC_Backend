import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../Database/user.js';

const JWT_SECRET='your _jwt_secret';
export const registerUser=async(req,res)=>{
    console.log("Registering user:", req.body);
    const {username,password}=req.body;

    try{
        const hashedPassword= await bcrypt.hash(password,10);
        const newUser= new User({username,password:hashedPassword});
        await newUser.save();

        res.status(201).json({message:"User registered successfully"});

    }
    catch(error){
        console.error("error registered user:",error);
        res.status(400).json({message:'Error registered user',error});
    }
};

export const loginuser=async(req,res)=>{
    const {username,password}=res.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ message: 'Server error' });
    }
};