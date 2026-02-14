import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import User from '../models/user.model.js';

export const validateToken = asyncHandler(async (req, res, next) => {
    let token;

    let authHeader = req.headers.Authorization || req.headers.authorization;

    //check Authorization
    if (authHeader && authHeader.startsWith("Bearer ")) {
        token = authHeader.split(" ")[1];

        try {
            const decoded = jwt.verify(token, process.env.JWT_ACCESS_TOKEN)

            // decoded contains { id: userId, iat, exp }
            // req.user = decoded.id;
            req.user = await User.findById(decoded.id);

            if (!req.user) {
                res.status(401);
                throw new Error("User not found");
            }
            next();
        } catch (error) {
            res.status(401);
            throw new Error("User is not authorized");
        }
    }



})