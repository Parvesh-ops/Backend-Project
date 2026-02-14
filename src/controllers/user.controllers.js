import asyncHandler from 'express-async-handler'
import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import generateToken from '../utils/generate.token.js';

/*Register user
*  POST /api/user/register
*/
export const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body  //-> middelware + usermodel

    if (!username || !email || !password) {
        res.status(401);
        throw new Error("All fields are required");
    };

    // 🔹 Check if user exists
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(401)
        throw new Error("Email already exist");

    };

    //hashed password
    const hashedPassword = await bcrypt.hash(password, 10);   //-> password come form destructure req.body, 10-> salt
    console.log("Hassedpassword:", hashedPassword);

    //create newUser
    const createdUser = await User.create({
        username,
        email,
        password: hashedPassword
    });

    res.status(201).json({
        _id: createdUser.id,
        username: createdUser.username,
        email: createdUser.email,
        // password: createdUser.password,
        message: "User registered successfully",
    })
})


/*login user
*  POST /api/user/login
*/
export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    //validate input
    if (!email || !password) {
        res.status(401);
        throw new Error("All fileds are required");
    };

    //find user
    const existedUser = await User.findOne({ email });
    if (!existedUser) {
        res.status(401)
        throw new Error("Invalid email or password");
    };

    //compare password of register user and login user password
    const comparePassword = await bcrypt.compare(password, existedUser.password)
    if (!comparePassword) {
        res.status(401);
        throw new Error("Invalid email or password");
    }

    //generate token  -> used from utils generate.token
    const token = generateToken(existedUser._id)

    res.status(201).json({
        _id: existedUser.id,
        username: existedUser.username,
        email: existedUser.email,
        token
     })
});

/*current user
*  GET /api/user/current
*/
export const currentUser = asyncHandler(async(req, res) => {
    res.status(201).json(req.user)
})