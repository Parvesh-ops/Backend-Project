import asyncHandler from 'express-async-handler'
import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';

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
    const hashedPassword = await bcrypt.hash(password, 10);
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
    res.status(201).json({ message: 'login user' })
});


/*current user
*  GET /api/user/current
*/
export const currentUser = (req, res) => {
    res.status(201).json({ message: 'Current user info' })
}